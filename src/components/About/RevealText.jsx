import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealText({
  text,
  className = "",
  wrapperClassName = "w-full overflow-hidden",
  initialY = -192,
  duration = 1,
  ease = "none",
  triggerRef = null,
  startTrigger = "top 80%",
  endTrigger = "top 30%",
  scrub = 1,
  staggerGroup = null,
}) {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!textRef.current) return;

    const trigger = triggerRef?.current || textRef.current;

    if (staggerGroup) {
      textRef.current.setAttribute("data-stagger-group", staggerGroup);
      return;
    }

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
          toggleActions: "play none none reverse",
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
