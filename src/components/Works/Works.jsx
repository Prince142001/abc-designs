import React from "react";
import WorkBg from "../../assets/works-bg.jpg";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import Expertise from "./Expertise";

function Works() {
  return (
    <section className="relative px-6 md:px-28 py-14 md:py-18">
      <div
        className="absolute inset-0 bottom-0 md:bottom-0 bg-no-repeat bg-center bg-cover -z-10  after:absolute after:w-full after:h-full after:bg-[#10101217] after:top-0 after:left-0"
        style={{
          backgroundImage: `url(${WorkBg})`,
          backgroundAttachment: "top center",
        }}
      ></div>
      <div>
        <ul className="flex items-center justify-between">
          <li></li>
          <li>
            <p className="text-[11.2px] font-medium text-white uppercase text-center">
              ( contact form. )
            </p>
          </li>
          <li>
            <p className="text-[11.2px] font-medium text-white text-center">
              [&nbsp;N.006&nbsp;]
            </p>
          </li>
        </ul>
        <div className="px-32 w-full mt-30">
          <div className="flex items-start justify-between">
            <ul className="w-1/2">
              <li className="w-3/5 block">
                <a href="#" className="w-full block">
                  <AnimatedUnderline
                    text="olha lazarieva"
                    textColor="text-white"
                    underlineColor="bg-[#3b4039]"
                    underlineHeight="h-0.5"
                    underlineWidth="w-full"
                    fontSize="text-[15.2px]"
                    fontWeight="font-medium"
                    containerClassName="pb-1 uppercase"
                  />
                </a>
              </li>
              <li className="w-3/5 block mt-38">
                <a href="#" className="w-full block">
                  <AnimatedUnderline
                    text="two capitals studio"
                    textColor="text-white"
                    underlineColor="bg-[#3b4039]"
                    underlineHeight="h-0.5"
                    underlineWidth="w-full"
                    fontSize="text-[15.2px]"
                    fontWeight="font-medium"
                    containerClassName="pb-1 uppercase"
                  />
                </a>
              </li>
            </ul>

            <ul className="w-1/2 flex flex-col items-end">
              <li className="w-3/5 block">
                <a href="#" className="w-full block">
                  <AnimatedUnderline
                    text="max milkin"
                    textColor="text-white"
                    underlineColor="bg-[#3b4039]"
                    underlineHeight="h-0.5"
                    underlineWidth="w-full"
                    fontSize="text-[15.2px]"
                    fontWeight="font-medium"
                    containerClassName="pb-1 text-right uppercase"
                  />
                </a>
              </li>
              <li className="w-3/5 block mt-38">
                <a href="#" className="w-full block">
                  <AnimatedUnderline
                    text="raine architects"
                    textColor="text-white"
                    underlineColor="bg-[#3b4039]"
                    underlineHeight="h-0.5"
                    underlineWidth="w-full"
                    fontSize="text-[15.2px]"
                    fontWeight="font-medium"
                    containerClassName="pb-1 text-right uppercase"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-[312.24px] mt-48">
              <a href="#" className="w-full block">
                <AnimatedUnderline
                  text="mosiac of cultures"
                  textColor="text-white"
                  underlineColor="bg-[#3b4039]"
                  underlineHeight="h-0.5"
                  underlineWidth="w-full"
                  fontSize="text-[15.2px]"
                  fontWeight="font-medium"
                  containerClassName="pb-1 uppercase"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-72">
        <Expertise />
      </div>
    </section>
  );
}

export default Works;
