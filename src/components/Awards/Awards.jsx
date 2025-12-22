import React from "react";
import CounterOnScroll from "../ui/CounterOnScroll";
import OnScrollText from "../ui/Text/OnScrollText";
import Table from "./Table";
import AwardsBg from "../../assets/awards-bg.png";

function Awards() {
  return (
    <section
      id="awards"
      className="min-h-screen relative bg-[#c2cabb]  px-4.5 md:px-6.25 lg:px-28 pt-14 pb-32 md:pt-18 md:pb-80 overflow-hidden"
    >
      <div className="hidden lg:block">
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
      </div>
      <div className="md:flex items-center justify-between lg:hidden">
        <div className="">
          <p className="text-[14.2px] font-medium text-black text-right">
            [&nbsp;N.003&nbsp;]
          </p>
        </div>

        <div className="">
          <p className="text-[14.2px] font-medium text-black uppercase text-left">
            ( awards. )
          </p>
        </div>
      </div>
      <div className="mt-6 md:mt-10 flex flex-col md:flex-row gap-10">
        <div className="flex flex-col w-full md:w-3/5 lg:w-full items-start relative z-30 awards-text xl:max-w-max">
          <OnScrollText
            name="My projects"
            fontSize="text-[32px] md:text-3xl lg:text-5xl font-semibold text-left md:text-center uppercase w-full md:w-fit lg:w-full -tracking-wider"
          />
          <OnScrollText
            name="have received"
            fontSize="text-[32px] md:text-3xl lg:text-5xl font-semibold text-left md:text-center uppercase w-full md:w-fit lg:w-full ml-20 md:ml-10 lg:ml-[288px]"
          />
          <OnScrollText
            name="international recognition"
            fontSize="text-[32px] md:text-3xl lg:text-5xl font-semibold text-left md:text-left lg:text-center uppercase w-full md:w-fit lg:w-full ml-0 md:ml-0 lg:ml-[288px]"
          />
        </div>
        <div className="mt-16 md:mt-0 w-3/4 md:w-1/2 lg:w-1/5 relative z-30 mx-auto">
          <p className="text-[14.2px] font-semibold text-black text-center md:text-right uppercase tracking-wide">
            Awards are part of the success I share with my clients — through
            websites built to win
          </p>
        </div>
      </div>

      {/* Table Component */}
      <div className="relative z-20">
        <Table />
      </div>

      <div className="absolute z-10 right-8 top-3 md:top-10 lg:top-20 awards-counter">
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
          className="opacity-80 hover:opacity-100 transition-opacity text-[300px] lg:font-[680px] font-bebas-neue"
        />
      </div>

      {/* --- FIXED BACKGROUND IMAGE --- */}
      <div
        className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${AwardsBg})`,
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    </section>
  );
}

export default Awards;
