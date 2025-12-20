import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OnScrollText from "../ui/Text/OnScrollText";
import HeartbeatDot from "../ui/HeartbeatDot";
import CircularTimer from "./CircularTimer";
import Signature from "./Signature";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedSection() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        id: "pinned-section",
      },
    });

    // Animate background color from dark to light
    timelineRef.current.fromTo(
      sectionRef.current,
      {
        backgroundColor: "#434948", // Dark - initial color
      },
      {
        backgroundColor: "#000fff", // Light - final color
        // backgroundColor: "#c2cabb", // Light - final color
        duration: 1, // Takes full scroll duration to transition
        ease: "none", // Linear transition
      },
      0 // Start at beginning of timeline
    );

    return () => {
      timelineRef.current?.scrollTrigger?.kill();
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-2 section-2-layer relative h-screen w-full flex items-center justify-center text-black text-3xl px-28 py-18"
      style={{ backgroundColor: "#434948" }} // Initial color
    >
      <div className="w-full h-full flex flex-col justify-between">
        <ul className="flex items-center justify-between text-[12.2px] font-medium">
          <li>[&nbsp;N.001&nbsp;]</li>
          <li>+</li>
          <li className="text-[12.2px] font-medium border border-black px-3 py-0.5 rounded-full overflow-hidden flex items-center justify-center gap-1.5">
            dev <HeartbeatDot />
          </li>
        </ul>
        <ul className="flex items-center justify-between text-[12.2px] font-medium">
          <li>
            <CircularTimer />
          </li>
          <li>+</li>
          <li>
            <p className="uppercase">edition_2.0</p>
          </li>
        </ul>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[286.34px] z-50">
        <h1 className="text-sm text-black flex flex-col items-end">
          <OnScrollText
            name="in code and in life,"
            fontSize="text-[14.4px] w-full text-left"
            duration={0.8}
          />
          <OnScrollText
            name="i strive &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; to keep only"
            fontSize="text-[14.4px] w-full text-left"
            duration={0.8}
          />
          <OnScrollText
            name="what matters and remove the rest."
            fontSize="text-[14.4px] w-full text-left"
            duration={0.8}
          />
          <OnScrollText
            name="what says is stronger, clearer,"
            fontSize="text-[14.4px] w-full text-left"
            duration={0.8}
          />
          <OnScrollText
            name="and more"
            fontSize="text-[14.4px] w-full text-right"
            duration={0.8}
          />
          <OnScrollText
            name="meaningful."
            fontSize="text-[14.4px] w-full text-right"
            duration={0.8}
          />
        </h1>
      </div>

      <div className="absolute right-[35%] bottom-[37%] -rotate-12">
        <Signature
          triggerRef={sectionRef}
          startPosition="top top+=90%"
          endPosition="+=110%"
        />
      </div>
    </section>
  );
}
