import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScalingImage({
  src,
  alt = "Image",
  className = "w-60 h-full",
  imgClassName = "w-full h-full object-contain",
  initialScale = 0.5,
  finalScale = 1,
  triggerRef = null,
  startTrigger = "top bottom",
  endTrigger = "top top",
  scrubSpeed = 1,
  ease = "none",
}) {
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let triggerElement = imageRef.current;

      if (triggerRef) {
        if (typeof triggerRef === "string") {
          triggerElement = triggerRef;
        } else if (triggerRef.current) {
          triggerElement = triggerRef.current;
        }
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: startTrigger,
          end: endTrigger,
          scrub: scrubSpeed,
          markers: false,
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: initialScale },
        { scale: finalScale, ease: ease }
      );
    });

    return () => ctx.revert();
  }, [
    initialScale,
    finalScale,
    triggerRef,
    startTrigger,
    endTrigger,
    scrubSpeed,
    ease,
  ]);

  return (
    <figure
      ref={imageRef}
      className={className}
      style={{ transform: `scale(${initialScale})` }}
    >
      <img src={src} alt={alt} className={imgClassName} />
    </figure>
  );
}
