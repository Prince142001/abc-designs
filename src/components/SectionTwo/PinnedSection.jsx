import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=100%", // how long it stays pinned
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen w-full bg-black/40 flex items-center justify-center text-white text-3xl"
    >
      This section takes control
    </section>
  );
}
