import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StaggeredSlideUpGroup = ({ children, className }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // We target the <p> tags inside this specific container
      const targets = containerRef.current.querySelectorAll("p");

      gsap.fromTo(
        targets,
        {
          y: -150, // Starting position (hidden "up")
          opacity: 0, // Optional: fading in looks smoother with the slide
        },
        {
          y: 0,
          opacity: 1,

          // 🟢 1. ANIMATION SPEED (How long the text takes to settle)
          // Increase this number to make it SLOWER.
          // 0.5 is fast, 2.0 is very slow.
          duration: 1.5,

          // 🟢 2. DELAY BETWEEN ITEMS (The Stagger Effect)
          // How much time to wait before the next line starts.
          // 0.1 is tight, 0.5 is a long gap.
          stagger: 0.2,

          ease: "power3.out", // Smooth easing (starts fast, ends slow)

          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Animation starts when top of text hits 80% of viewport height
            end: "bottom 20%",

            // 🟢 3. SCROLL DIRECTION LOGIC
            // "play"    = When scrolling down and entering view -> Animate In
            // "none"    = When scrolling past -> Do nothing
            // "none"    = When scrolling back up into view -> Do nothing
            // "reverse" = When scrolling back up past the start -> Animate Out (Hide)
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default StaggeredSlideUpGroup;
