import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScatteredText from "./ScatteredText";
import ScalingImage from "./ScalingImage";
import MaxImg from "../../assets/max.jpg"; // Ensure this path is correct
import Text from "../ui/Text/Text";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning Logic
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top", // Pin when top of section hits top of viewport
        end: "+=200%", // Duration of pin
        pin: true,
        anticipatePin: 1,
        // markers: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-section relative w-full h-screen bg-[#10120f] text-3xl px-6 md:px-28 py-20 md:pt-20 md:pb-28"
    >
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-fit">
        <div className="flex items-center justify-center">
          <ScalingImage
            src={MaxImg}
            alt="Max Avatar"
            className="w-60 h-full"
            imgClassName="w-full h-full object-contain"
            initialScale={0.5}
            finalScale={1}
            triggerRef={sectionRef}
            startTrigger="top bottom"
            endTrigger="top top"
            scrubSpeed={1}
            ease="power1.out"
          />
        </div>

        <div className="mt-16">
          <ScatteredText
            lines={[
              "HI",
              "I'M",
              "MAX",
              "-",
              "A",
              "CREATIVE",
              "FRONTEND",
              "DEVELOPER.",
            ]}
            scatterMode="spiral"
          />
          <ScatteredText
            lines={[
              "MY",
              "FOCUS",
              "IS",
              "ON",
              "BUILDING",
              "SLEEK,",
              "ANIMATED",
              "AND",
              "IMMERSIVE",
              "EXPERINCES",
            ]}
            scatterMode="spiral"
          />
          <ScatteredText
            lines={[
              "THAT",
              "TRANSFORM",
              "SIMPLE",
              "WEBSITES",
              "INTO",
              "SOMETHING",
              "EXTRAORDINARY",
            ]}
            scatterMode="spiral"
          />
        </div>

        <div className="flex items-center justify-center mt-24">
          <a href="#" className="">
            <Text
              name="about me"
              fontSize="py-3 text-[13.2px] text-center text-[#3b4039] w-[168.25px] uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div className="h-[93vh] pt-20 md:pt-20">
        <div className="w-full h-full flex flex-col justify-between">
          <ul className="flex items-center justify-between text-[12.2px] text-[#3b4039] font-medium -mt-20">
            <li className="relative text-[13.2px] font-medium uppercase">
              <div className="absolute left-0 top-10 w-15">
                <span className="">( about. )</span>
              </div>
            </li>
            <li className="relative text-right">
              <span className="text-[13.2px] font-medium">
                [&nbsp;N.002&nbsp;]
              </span>
              <div className="absolute right-0 -bottom-24 w-1 h-14 bg-[#3b4039]"></div>
            </li>
          </ul>
          <ul className="flex items-center justify-between text-[12.2px] font-medium">
            <li className="h-1 w-14 bg-[#3b4039]"></li>
            <li>
              <span className="text-[13.2px] text-[#3b4039] font-medium">
                [&nbsp;N.002&nbsp;]
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
