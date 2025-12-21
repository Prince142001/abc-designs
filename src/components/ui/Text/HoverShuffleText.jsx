import React, { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(GSAPSplitText, useGSAP);

const HoverShuffleText = ({
  defaultText,
  hoverText,
  className = "",
  style = {},
  shuffleDirection = "right",
  duration = 0.35,
  ease = "power3.out",
  shuffleTimes = 1,
  stagger = 0.03,
  animationMode = "evenodd",
  tag = "p",
  respectReducedMotion = true,
}) => {
  const ref = useRef(null);
  const [currentText, setCurrentText] = useState(defaultText);
  const [isHovered, setIsHovered] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const splitRef = useRef(null);
  const wrappersRef = useRef([]);
  const tlRef = useRef(null);
  const playingRef = useRef(false);

  const userHasFont = useMemo(
    () =>
      (style && style.fontFamily) || (className && /font[-[]/i.test(className)),
    [style, className]
  );

  useEffect(() => {
    if ("fonts" in document) {
      if (document.fonts.status === "loaded") setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  const teardown = () => {
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }
    if (wrappersRef.current.length) {
      wrappersRef.current.forEach((wrap) => {
        const inner = wrap.firstElementChild;
        const orig = inner?.querySelector('[data-orig="1"]');
        if (orig && wrap.parentNode) wrap.parentNode.replaceChild(orig, wrap);
      });
      wrappersRef.current = [];
    }
    try {
      splitRef.current?.revert();
    } catch {}
    splitRef.current = null;
    playingRef.current = false;
  };

  const build = (text) => {
    const el = ref.current;
    if (!el) return;

    teardown();

    // Update text content first
    el.textContent = text;

    const computedFont = userHasFont
      ? style.fontFamily || getComputedStyle(el).fontFamily || ""
      : `'Press Start 2P', sans-serif`;

    splitRef.current = new GSAPSplitText(el, {
      type: "chars",
      charsClass: "shuffle-char",
      smartWrap: true,
      reduceWhiteSpace: false,
    });

    const chars = splitRef.current.chars || [];
    wrappersRef.current = [];

    const rolls = Math.max(1, Math.floor(shuffleTimes));

    chars.forEach((ch) => {
      const parent = ch.parentElement;
      if (!parent) return;

      const w = ch.getBoundingClientRect().width;
      if (!w) return;

      const wrap = document.createElement("span");
      wrap.className = "inline-block overflow-hidden align-baseline text-left";
      Object.assign(wrap.style, { width: w + "px" });

      const inner = document.createElement("span");
      inner.className =
        "inline-block whitespace-nowrap will-change-transform origin-left transform-gpu";

      parent.insertBefore(wrap, ch);
      wrap.appendChild(inner);

      const firstOrig = ch.cloneNode(true);
      firstOrig.className = "inline-block text-left";
      Object.assign(firstOrig.style, {
        width: w + "px",
        fontFamily: computedFont,
      });

      ch.setAttribute("data-orig", "1");
      ch.className = "inline-block text-left";
      Object.assign(ch.style, {
        width: w + "px",
        fontFamily: computedFont,
      });

      inner.appendChild(firstOrig);

      for (let k = 0; k < rolls; k++) {
        const c = ch.cloneNode(true);
        c.className = "inline-block text-left";
        Object.assign(c.style, {
          width: w + "px",
          fontFamily: computedFont,
        });
        inner.appendChild(c);
      }

      inner.appendChild(ch);

      const steps = rolls + 1;
      let startX = 0;
      let finalX = -steps * w;

      if (shuffleDirection === "right") {
        const firstCopy = inner.firstElementChild;
        const real = inner.lastElementChild;
        if (real) inner.insertBefore(real, inner.firstChild);
        if (firstCopy) inner.appendChild(firstCopy);
        startX = -steps * w;
        finalX = 0;
      }

      gsap.set(inner, { x: startX, force3D: true });
      inner.setAttribute("data-final-x", String(finalX));
      inner.setAttribute("data-start-x", String(startX));

      wrappersRef.current.push(wrap);
    });
  };

  const play = () => {
    const strips = wrappersRef.current.map((w) => w.firstElementChild);
    if (!strips.length) return;

    playingRef.current = true;

    const tl = gsap.timeline({
      smoothChildTiming: true,
      onComplete: () => {
        playingRef.current = false;
      },
    });

    const addTween = (targets, at) => {
      tl.to(
        targets,
        {
          x: (i, t) => parseFloat(t.getAttribute("data-final-x") || "0"),
          duration,
          ease,
          force3D: true,
          stagger: animationMode === "evenodd" ? stagger : 0,
        },
        at
      );
    };

    if (animationMode === "evenodd") {
      const odd = strips.filter((_, i) => i % 2 === 1);
      const even = strips.filter((_, i) => i % 2 === 0);
      const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
      const evenStart = odd.length ? oddTotal * 0.7 : 0;
      if (odd.length) addTween(odd, 0);
      if (even.length) addTween(even, evenStart);
    } else {
      addTween(strips, 0);
    }

    tlRef.current = tl;
  };

  const handleMouseEnter = () => {
    if (playingRef.current || !fontsLoaded) return;
    setIsHovered(true);
    setCurrentText(hoverText);
  };

  const handleMouseLeave = () => {
    if (playingRef.current || !fontsLoaded) return;
    setIsHovered(false);
    setCurrentText(defaultText);
  };

  useEffect(() => {
    if (!fontsLoaded || !currentText) return;

    if (
      respectReducedMotion &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReady(true);
      return;
    }

    build(currentText);
    play();
    setReady(true);

    return () => {
      teardown();
    };
  }, [currentText, fontsLoaded]);

  const baseTw =
    "inline-block whitespace-normal break-words will-change-transform leading-none cursor-pointer";
  const classes = useMemo(
    () => `${baseTw} ${ready ? "visible" : "invisible"} ${className}`.trim(),
    [baseTw, ready, className]
  );

  const Tag = tag || "p";
  const commonStyle = useMemo(() => ({ ...style }), [style]);

  return React.createElement(
    Tag,
    {
      ref: ref,
      className: classes,
      style: commonStyle,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    currentText
  );
};

export default HoverShuffleText;
