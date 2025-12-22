import React from "react";
import WorkBg from "../../assets/works-bg.jpg";
import Expertise from "./Expertise";
import OnScrollText from "../ui/Text/OnScrollText";
import Projects from "./Projects";

function Works() {
  return (
    <div className="relative px-4.5 md:px-6.25 lg:px-28 py-14 md:py-18">
      <div
        className="absolute inset-0 bottom-0 md:bottom-0 bg-no-repeat bg-center bg-cover -z-10  after:absolute after:w-full after:h-full after:bg-[#10101217] after:top-0 after:left-0"
        style={{
          backgroundImage: `url(${WorkBg})`,
          backgroundAttachment: "top center",
        }}
      ></div>
      <section id="works">
        <div>
          <ul className="flex items-center justify-between">
            <li className="hidden md:block"></li>
            <li>
              <p className="text-[11.2px] font-medium text-white uppercase text-center">
                ( works. )
              </p>
            </li>
            <li>
              <p className="text-[11.2px] font-medium text-white text-center hidden md:block">
                [&nbsp;N.006&nbsp;]
              </p>
              <p className="text-[12.2px] font-medium text-[#3b4039] uppercase block md:hidden">
                [&nbsp;N.357&nbsp;]
              </p>
            </li>
          </ul>
          <header className="block md:hidden mt-7">
            <h2>
              <OnScrollText
                name="some of the latest projects"
                fontSize="text-3xl text-white font-medium text-left uppercase -tracking-wide"
              />
            </h2>
          </header>
          <Projects />
        </div>
      </section>
      <section id="expertise" className="mt-36 md:mt-45 lg:mt-72">
        <Expertise />
      </section>
    </div>
  );
}

export default Works;
