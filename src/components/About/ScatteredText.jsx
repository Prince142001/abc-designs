import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScatteredText({
  lines = [],
  className = "text-[9px] md:text-[15.2px] font-medium flex gap-1 items-center justify-center",
  scatterMode = "random", // 'random' or 'spiral' or 'explosion'
}) {
  const containerRef = useRef(null);
  const charsRef = useRef([]);

  useLayoutEffect(() => {
    const chars = charsRef.current.filter(Boolean);

    chars.forEach((char, index) => {
      let randomX, randomY, randomRotation;

      if (scatterMode === "spiral") {
        const angle = index * 0.5;
        const radius = index * 5;
        randomX = Math.cos(angle) * radius;
        randomY = Math.sin(angle) * radius;
        randomRotation = angle * 10;
      } else if (scatterMode === "explosion") {
        const angle = (index / chars.length) * Math.PI * 2;
        const radius = 300;
        randomX = Math.cos(angle) * radius;
        randomY = Math.sin(angle) * radius;
        randomRotation = gsap.utils.random(-45, 45);
      } else {
        randomX = gsap.utils.random(-400, 400);
        randomY = gsap.utils.random(-200, 200);
        randomRotation = gsap.utils.random(-60, 60);
      }

      gsap.set(char, {
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        scale: gsap.utils.random(0.3, 1.5),
        opacity: 0.1,
        filter: "blur(4px)",
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 70%",
        scrub: 1.5,
        // markers: true,
      },
    });

    tl.to(chars, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 2,
      stagger: {
        amount: 1.5,
        from: "random",
      },
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [lines, scatterMode]);

  return (
    <div ref={containerRef} className={`text-center text-white ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className={`uppercase leading-tight`}>
          {line.split("").map((char, charIndex) => (
            <span
              key={`${lineIndex}-${charIndex}`}
              ref={(el) => {
                if (el) charsRef.current.push(el);
              }}
              className="inline-block will-change-transform"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
