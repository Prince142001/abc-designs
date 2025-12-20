import React from "react";
import CounterOnScroll from "../ui/CounterOnScroll";
import OnScrollText from "../ui/Text/OnScrollText";

function Awards() {
  return (
    <section className="min-h-screen relative bg-[#c2cabb] px-28 py-18">
      <div className="w-full">
        <p className="text-[14.2px] font-medium text-black text-right">
          [&nbsp;N.003&nbsp;]
        </p>
      </div>

      <div className="mt-26">
        <p className="text-[14.2px] font-medium text-black uppercase text-left">
          ( awards. )
        </p>
      </div>
      <div className="mt-6 flex flex-row gap-10">
        <div className="flex flex-col w-full items-start relative z-30 awards-text max-w-max">
          <OnScrollText
            name="My projects"
            fontSize="text-5xl font-semibold text-center uppercase"
          />
          <OnScrollText
            name="have received"
            fontSize="text-5xl font-semibold text-center uppercase ml-[288px]"
            //   style={{ marginLeft: "100px" }}
          />
          <OnScrollText
            name="international recognition"
            fontSize="text-5xl font-semibold text-center uppercase ml-[288px]"
          />
        </div>
        <div className="w-1/5 relative z-30">
          <p className="text-[14.2px] font-semibold text-black text-right uppercase">
            Awards are part of the success I share with my clients — through
            websites built to win
          </p>
        </div>
      </div>
      <div className="absolute z-10 right-8 top-20">
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
    </section>
  );
}

export default Awards;
