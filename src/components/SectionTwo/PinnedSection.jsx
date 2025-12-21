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

    timelineRef.current.fromTo(
      sectionRef.current,
      {
        backgroundColor: "#434948",
      },
      {
        backgroundColor: "#c2cabb",
        // backgroundColor: "#c2cabb",
        duration: 1,
        ease: "none",
      },
      0
    );

    return () => {
      timelineRef.current?.scrollTrigger?.kill();
      timelineRef.current?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center text-black text-3xl px-6 md:px-28 py-14 md:py-18"
      style={{ backgroundColor: "#434948" }}
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[286.34px] z-50">
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

      <div className="absolute -right-4 md:right-[35%] bottom-[37%] -rotate-12">
        <Signature
          triggerRef={sectionRef}
          startPosition="top top+=90%"
          endPosition="+=110%"
        />
      </div>
    </section>
  );
}
