import { useRef, useLayoutEffect, Children, cloneElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StaggeredSlideUpGroup({
  children,
  className = "",
  triggerRef = null,
  startTrigger = "top 80%",
  endTrigger = "top 30%",
  initialY = -192,
  duration = 2.5,
  stagger = 0.25,
  ease = "none",
  scrub = 1,
}) {
  const groupRef = useRef(null);
  const textsRef = useRef([]);

  useLayoutEffect(() => {
    if (!textsRef.current.length) return;

    const trigger = triggerRef?.current || groupRef.current;

    gsap.fromTo(
      textsRef.current,
      { y: initialY },
      {
        y: 0,
        duration: duration,
        ease: ease,
        stagger: stagger,
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
    triggerRef,
    startTrigger,
    endTrigger,
    initialY,
    duration,
    stagger,
    ease,
    scrub,
  ]);

  return (
    <div ref={groupRef} className={className}>
      {Children.map(children, (child, index) => {
        if (!child) return null;
        return cloneElement(child, {
          ref: (el) => {
            if (el) textsRef.current[index] = el;
          },
        });
      })}
    </div>
  );
}
