import React, { useRef, useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(GSAPSplitText, useGSAP);

const OnClickShuffle = ({
  text,
  className = "",
  style = {},
  shuffleDirection = "right",
  duration = 0.35,
  ease = "power3.out",
  tag = "h2",
  shuffleTimes = 1,
  animationMode = "evenodd",
  stagger = 0.03,
  scrambleCharset = "",
  colorFrom,
  colorTo,
  respectReducedMotion = true,
  trigger = 0, // External trigger prop
  onShuffleComplete,
}) => {
  const ref = useRef(null);
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

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded || trigger === 0) return;

      if (
        respectReducedMotion &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        onShuffleComplete?.();
        return;
      }

      const el = ref.current;

      let computedFont = "";
      if (userHasFont) {
        computedFont =
          style.fontFamily || getComputedStyle(el).fontFamily || "";
      } else {
        computedFont = getComputedStyle(el).fontFamily || "sans-serif";
      }

      const teardown = () => {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        if (wrappersRef.current.length) {
          wrappersRef.current.forEach((wrap) => {
            const inner = wrap.firstElementChild;
            const orig = inner?.querySelector('[data-orig="1"]');
            if (orig && wrap.parentNode)
              wrap.parentNode.replaceChild(orig, wrap);
          });
          wrappersRef.current = [];
        }
        try {
          splitRef.current?.revert();
        } catch {
          /* noop */
        }
        splitRef.current = null;
        playingRef.current = false;
      };

      const build = () => {
        teardown();

        splitRef.current = new GSAPSplitText(el, {
          type: "chars",
          charsClass: "shuffle-char",
          wordsClass: "shuffle-word",
          linesClass: "shuffle-line",
          smartWrap: true,
          reduceWhiteSpace: false,
        });

        const chars = splitRef.current.chars || [];
        wrappersRef.current = [];

        const rolls = Math.max(1, Math.floor(shuffleTimes));
        const rand = (set) =>
          set.charAt(Math.floor(Math.random() * set.length)) || "";

        chars.forEach((ch) => {
          const parent = ch.parentElement;
          if (!parent) return;

          const w = ch.getBoundingClientRect().width;
          if (!w) return;

          const wrap = document.createElement("span");
          wrap.className =
            "inline-block overflow-hidden align-baseline text-left";
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
            if (scrambleCharset) c.textContent = rand(scrambleCharset);
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
          if (colorFrom) inner.style.color = colorFrom;
          inner.setAttribute("data-final-x", String(finalX));
          inner.setAttribute("data-start-x", String(startX));

          wrappersRef.current.push(wrap);
        });
      };

      const inners = () => wrappersRef.current.map((w) => w.firstElementChild);

      const randomizeScrambles = () => {
        if (!scrambleCharset) return;
        wrappersRef.current.forEach((w) => {
          const strip = w.firstElementChild;
          if (!strip) return;
          const kids = Array.from(strip.children);
          for (let i = 1; i < kids.length - 1; i++) {
            kids[i].textContent = scrambleCharset.charAt(
              Math.floor(Math.random() * scrambleCharset.length)
            );
          }
        });
      };

      const cleanupToStill = () => {
        wrappersRef.current.forEach((w) => {
          const strip = w.firstElementChild;
          if (!strip) return;
          const real = strip.querySelector('[data-orig="1"]');
          if (!real) return;
          strip.replaceChildren(real);
          strip.style.transform = "none";
          strip.style.willChange = "auto";
        });
      };

      const play = () => {
        const strips = inners();
        if (!strips.length) return;

        playingRef.current = true;

        const tl = gsap.timeline({
          smoothChildTiming: true,
          onComplete: () => {
            playingRef.current = false;
            cleanupToStill();
            if (colorTo) gsap.set(strips, { color: colorTo });
            onShuffleComplete?.();
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
          if (colorFrom && colorTo)
            tl.to(targets, { color: colorTo, duration, ease }, at);
        };

        if (animationMode === "evenodd") {
          const odd = strips.filter((_, i) => i % 2 === 1);
          const even = strips.filter((_, i) => i % 2 === 0);
          const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;

          if (odd.length) addTween(odd, 0);
          if (even.length) addTween(even, evenStart);
        } else {
          strips.forEach((strip, i) => {
            addTween([strip], i * stagger);
          });
        }

        tlRef.current = tl;
      };

      build();
      if (scrambleCharset) randomizeScrambles();
      play();
      setReady(true);

      return () => {
        teardown();
        setReady(false);
      };
    },
    {
      dependencies: [
        text,
        trigger, // Re-run animation when trigger changes
        duration,
        ease,
        fontsLoaded,
        shuffleDirection,
        shuffleTimes,
        animationMode,
        stagger,
        scrambleCharset,
        colorFrom,
        colorTo,
        respectReducedMotion,
        onShuffleComplete,
        userHasFont,
      ],
      scope: ref,
    }
  );

  const baseTw =
    "flex gap-2.5 flex-row justify-center items-center whitespace-normal break-words will-change-transform leading-none";
  const classes = useMemo(
    () => `${baseTw} ${ready ? "visible" : "invisible"} ${className}`.trim(),
    [baseTw, ready, className]
  );

  const Tag = tag || "h2";
  const commonStyle = useMemo(() => ({ ...style }), [style]);

  return React.createElement(
    Tag,
    { ref: ref, className: classes, style: commonStyle },
    text
  );
};

export default OnClickShuffle;
