import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SlideUpText({
  text,
  className = "",
  wrapperClassName = "w-full overflow-hidden",
  initialY = -192, // -translate-y-48 = -192px (48 * 4)
  duration = 1,
  ease = "power3.out",
  triggerRef = null,
  startTrigger = "top 80%",
  endTrigger = "top 50%",
  scrub = false,
  staggerGroup = null, // Group identifier for stagger
}) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const trigger = triggerRef?.current || textRef.current;

    // If part of stagger group, let parent handle animation
    if (staggerGroup) {
      textRef.current.setAttribute("data-stagger-group", staggerGroup);
      return;
    }

    // Individual animation
    gsap.fromTo(
      textRef.current,
      { y: initialY },
      {
        y: 0,
        duration: duration,
        ease: ease,
        scrollTrigger: {
          trigger: trigger,
          start: startTrigger,
          end: endTrigger,
          scrub: scrub,
          // markers: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [
    initialY,
    duration,
    ease,
    triggerRef,
    startTrigger,
    endTrigger,
    scrub,
    staggerGroup,
  ]);

  return (
    <div className={wrapperClassName}>
      <p
        ref={textRef}
        className={className}
        style={{ transform: `translateY(${initialY}px)` }}
      >
        {text}
      </p>
    </div>
  );
}
