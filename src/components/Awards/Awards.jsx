import React from "react";
import CounterOnScroll from "../ui/CounterOnScroll";
import OnScrollText from "../ui/Text/OnScrollText";
import Table from "./Table";
import AwardsBg from "../../assets/awards-bg.png";

function Awards() {
  return (
    <section className="min-h-screen relative bg-[#c2cabb] px-6 md:px-28 pt-14 pb-32 md:pt-18 md:pb-80">
      <div className="w-full hidden md:block">
        <p className="text-[14.2px] font-medium text-black text-right">
          [&nbsp;N.003&nbsp;]
        </p>
      </div>

      <div className="mt-26 hidden md:block">
        <p className="text-[14.2px] font-medium text-black uppercase text-left">
          ( awards. )
        </p>
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col w-full items-start relative z-30 awards-text max-w-max">
          <OnScrollText
            name="My projects"
            fontSize="text-[36px] md:text-5xl font-semibold text-left md:text-center uppercase -tracking-wider"
          />
          <OnScrollText
            name="have received"
            fontSize="text-[36px] md:text-5xl font-semibold text-left md:text-center uppercase ml-20 md:ml-[288px]"
            //   style={{ marginLeft: "100px" }}
          />
          <OnScrollText
            name="international recognition"
            fontSize="text-[36px] md:text-5xl font-semibold  text-left md:text-center uppercase ml-0 md:ml-[288px]"
          />
        </div>
        <div className="mt-16 md:mt-0 w-3/4 md:w-1/5 relative z-30 mx-auto">
          <p className="text-[14.2px] font-semibold text-black text-center md:text-right uppercase tracking-wide">
            Awards are part of the success I share with my clients — through
            websites built to win
          </p>
        </div>
      </div>
      <Table />
      <div className="absolute z-10 right-8 top-10 md:top-20">
        <CounterOnScroll
          targetValue={18}
          places={[10, 1]}
          fontSize={680}
          padding={5}
          gap={10}
          textColor="#c8cfc2"
          fontWeight="900"
          threshold={0.1}
          triggerOnce={true}
          className="opacity-80 hover:opacity-100 transition-opacity font-bebas-neue" // ✅ Use className
        />
      </div>
      {/* </div> */}
      <div
        className="absolute inset-0 -bottom-302 md:-bottom-224 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${AwardsBg})`,
          backgroundAttachment: "bottom center",
        }}
      />
      <div
        className="absolute inset-0 -bottom-302 md:-bottom-224 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage: `url(${AwardsBg})`,
          backgroundAttachment: "bottom center",
        }}
      />
    </section>
  );
}

export default Awards;
