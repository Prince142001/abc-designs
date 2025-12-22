import React from "react";
import OnScrollText from "../ui/Text/OnScrollText";

function Expertise() {
  return (
    <div>
      <div className="w-full h-full flex flex-col justify-between">
        <ul className="flex items-center justify-between">
          <li className="w-[44.4px] block md:hidden"></li>
          <li>
            <p className="text-[12.2px] font-medium text-white uppercase">
              ( Expertise. )
            </p>
          </li>
          <li>
            <p className="text-[12.2px] font-medium text-white uppercase hidden md:block">
              [&nbsp;N.005&nbsp;]
            </p>
            <p className="text-[12.2px] font-medium text-[#3b4039] uppercase block md:hidden">
              [&nbsp;N.498&nbsp;]
            </p>
          </li>
        </ul>

        <div className="mt-20 md:mt-20 lg:mt-40">
          <ul className="flex items-center justify-center flex-col md:flex-row gap-x-10 gap-y-3.5">
            <li>
              <OnScrollText
                name="/ ux/ui design"
                fontSize="text-[14.2px] font-medium text-white uppercase"
              />
            </li>
            <li className="w-1 md:w-0.5 h-1 md:h-0.5 bg-white rounded-full overflow-hidden"></li>
            <li>
              <OnScrollText
                name="/ web design"
                fontSize="text-[14.2px] font-medium text-white uppercase"
              />
            </li>
            <li className="w-1 md:w-0.5 h-1 md:h-0.5 bg-white rounded-full overflow-hidden"></li>
            <li>
              <OnScrollText
                name="/ development"
                fontSize="text-[14.2px] font-medium text-white uppercase"
              />
            </li>
            <li className="w-1 md:w-0.5 h-1 md:h-0.5 bg-white rounded-full overflow-hidden"></li>
            <li>
              <OnScrollText
                name="/ 3D graphics"
                fontSize="text-[14.2px] font-medium text-white uppercase"
              />
            </li>
          </ul>
        </div>

        <div className="mt-32 space-y-3 md:space-y-5 flex items-center justify-center">
          <ul className="flex items-center justify-center flex-col flex-wrap md:flex-row space-y-3 space-x-0 md:space-x-5 w-full lg:w-1/2">
            <li className="max-w-max w-max block grow">
              <p className="py-px px-5 text-[15.2px] text-center text-[#c2cabb] w-fit uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer tracking-normal">
                / Landing Pages
              </p>
            </li>
            <li className="max-w-max w-max block grow">
              <p className="py-px px-5 text-[15.2px] text-center text-[#c2cabb] w-fit uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer tracking-normal">
                / Corporate Websites
              </p>
            </li>
            <li className="max-w-max w-max block grow">
              <p className="py-px px-5 text-[15.2px] text-center text-[#c2cabb] w-fit uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer tracking-normal">
                / Personal Brand Sites
              </p>
            </li>
            <li className="max-w-max w-max block grow">
              <p className="py-px px-5 text-[15.2px] text-center text-[#c2cabb] w-fit uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer tracking-normal">
                / E-commerce / Online Stores
              </p>
            </li>
            <li className="max-w-max w-max block grow">
              <p className="py-px px-5 text-[15.2px] text-center text-[#c2cabb] w-fit uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer tracking-normal">
                / Showcase / Award Websites
              </p>
            </li>
            <li className="max-w-max w-max block grow">
              <p className="py-px px-5 text-[15.2px] text-center text-[#c2cabb] w-fit uppercase border border-[#3b4039] rounded-full bg-transparent cursor-pointer tracking-normal">
                / News & Communities
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-32">
          <ul className="flex flex-row md:flex-col gap-x-3.5 gap-y-1 md:gap-y-0 flex-wrap">
            <li>
              <OnScrollText
                name="HTML5"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="CSS3 (SCSS, SASS)"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="JavaScript"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="GSAP"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="Three.js"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="React"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="React-Three-Fiber"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="Blender"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
            <li>
              <OnScrollText
                name="WordPress"
                fontSize="text-[12px] leading-3.5 text-center font-medium text-[#c2cabb] uppercase"
              />
            </li>
          </ul>
        </div>

        <ul className="mt-5 flex items-center justify-between text-[12.2px] font-medium">
          <li>
            <p className="text-[12.2px] font-medium text-white uppercase">+</p>
          </li>
          <li>
            <p className="text-[12.2px] font-medium text-white uppercase">+</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Expertise;
