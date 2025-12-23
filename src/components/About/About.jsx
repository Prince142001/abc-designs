import React, { useRef, useLayoutEffect, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScatteredText from "./ScatteredText";
import ScalingImage from "./ScalingImage";
import StaggeredSlideUpGroup from "./StaggeredSlideUpGroup";
import MaxImg from "../../assets/max.jpg";
import Text from "../ui/Text/Text";

gsap.registerPlugin(ScrollTrigger);

const SlidingText = forwardRef(({ text, className }, ref) => (
  <div className="w-full overflow-hidden">
    <p
      ref={ref}
      className={className}
      style={{ transform: "translateY(-192px)" }}
    >
      {text}
    </p>
  </div>
));

SlidingText.displayName = "SlidingText";

function About() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const getPinDuration = () => {
      const width = window.innerWidth;
      if (width < 768) return "+=100vh";
      if (width < 1280) return "+=120vh";
      return "+=150vh";
    };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: getPinDuration(),
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const textClassName =
    "block w-full text-8xl leading-20 md:text-[130px] md:leading-32 lg:text-[180px] lg:leading-36 font-bold uppercase -tracking-wider";

  return (
    <section
      ref={sectionRef}
      className="about-section relative w-full min-h-screen bg-[#10120f] text-3xl px-4.5 md:px-6.25 lg:px-28 py-20 md:pt-20 md:pb-40 overflow-hidden"
    >
      <div className="absolute top-[30%] md:top-2/5 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10">
        <StaggeredSlideUpGroup
          triggerRef={sectionRef}
          startTrigger="top 80%"
          endTrigger="top 30%"
          initialY={-192}
          duration={2.5}
          stagger={0.25}
          ease="none"
          scrub={1}
        >
          <SlidingText text="fundam" className={`${textClassName} text-left`} />
          <SlidingText text="entals" className={`${textClassName} text-left`} />
          <SlidingText
            text="of Web"
            className={`${textClassName} text-right`}
          />
          <SlidingText
            text="Develop"
            className={`${textClassName} text-right`}
          />
          <SlidingText text="ment" className={`${textClassName} text-right`} />
        </StaggeredSlideUpGroup>
      </div>

      <div className="absolute left-1/2 top-1/2 md:top-3/5 lg:top-[45%] -translate-x-1/2 -translate-y-1/2 w-full lg:w-fit z-50">
        <div className="flex items-center justify-center">
          <ScalingImage
            src={MaxImg}
            alt="Max Avatar"
            className="w-48 md:w-60 h-full"
            imgClassName="w-full h-full object-contain"
            initialScale={0.5}
            finalScale={1}
            triggerRef={sectionRef}
            startTrigger="top bottom"
            endTrigger="top center"
            scrubSpeed={1}
            ease="power1.out"
          />
        </div>

        <div className="mt-16 md:mt-60 lg:mt-16">
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

        <div className="flex items-center justify-center mt-12 md:mt-24 lg:mt-24">
          <a href="#" className="">
            <Text
              name="about me"
              fontSize="py-3 text-[13.2px] text-center text-[#3b4039] w-[168.25px] uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div className="h-auto md:h-screen">
        <div className="w-full h-auto flex flex-col justify-between">
          <ul className="flex items-center justify-between mt-0 lg:-mt-20">
            <li className="relative text-[13.2px] font-medium uppercase">
              <div className="relative lg:absolute left-0 top-2.5 lg:top-10 w-15">
                <span className="text-white lg:text-black">( about. )</span>
              </div>
            </li>
            <li className="relative text-right">
              <span className="text-[13.2px] font-medium">
                [&nbsp;N.002&nbsp;]
              </span>
              <div className="hidden lg:block absolute right-0 -bottom-24 w-1 h-14 bg-[#3b4039]"></div>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center justify-between text-[12.2px] font-medium">
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
