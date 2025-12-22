import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import olhaLazarievaImg from "../../assets/cases/olhaLazarieva/6.jpg";
import tcsImg from "../../assets/cases/tcs/1.jpg";
import mmImg from "../../assets/cases/mm/6.jpg";
import raineImg from "../../assets/cases/raine/6.jpg";
import mosaicImg from "../../assets/cases/mosaic/1.jpg";
import arrowD from "../../assets/arrow-d.png";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const imageRefs = useRef({});

  const projectsData = [
    { img: olhaLazarievaImg, name: "olha lazarieva", id: "olha" },
    { img: tcsImg, name: "two capitals studio", id: "tcs" },
    { img: mmImg, name: "max milkin", id: "mm" },
    { img: raineImg, name: "raine architects", id: "raine" },
    { img: mosaicImg, name: "mosiac of cultures", id: "mosaic" },
  ];

  useEffect(() => {
    projectsData.forEach((project) => {
      const element = imageRefs.current[project.id];
      if (!element) return;

      if (hoveredProject === project.id) {
        gsap.to(element, {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(element, {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power3.in",
        });
      }
    });
  }, [hoveredProject]);

  useEffect(() => {
    projectsData.forEach((project) => {
      const element = imageRefs.current[project.id];
      if (element) {
        gsap.set(element, { opacity: 0, scale: 0.95 });
      }
    });
  }, []);

  return (
    <>
      <div className="relative px-4.5 md:px-6.25 lg: w-full mt-30 hidden lg:block">
        <div className="flex items-start justify-between">
          <ul className="w-1/2">
            <li className="w-3/5 block">
              <a
                href="#"
                className="w-full block"
                onMouseEnter={() => setHoveredProject("olha")}
                onMouseLeave={() => setHoveredProject(null)}
              >
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
              <a
                href="#"
                className="w-full block"
                onMouseEnter={() => setHoveredProject("tcs")}
                onMouseLeave={() => setHoveredProject(null)}
              >
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
              <a
                href="#"
                className="w-full block"
                onMouseEnter={() => setHoveredProject("mm")}
                onMouseLeave={() => setHoveredProject(null)}
              >
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
              <a
                href="#"
                className="w-full block"
                onMouseEnter={() => setHoveredProject("raine")}
                onMouseLeave={() => setHoveredProject(null)}
              >
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
            <a
              href="#"
              className="w-full block"
              onMouseEnter={() => setHoveredProject("mosaic")}
              onMouseLeave={() => setHoveredProject(null)}
            >
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

        <div className="pointer-events-none">
          {projectsData.map((project) => (
            <div
              key={project.id}
              ref={(el) => (imageRefs.current[project.id] = el)}
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-fit after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-dark/40"
            >
              <figure className="w-[320px] h-[153.6px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className="block lg:hidden">
        <ul className="space-y-16 mt-16">
          <li className>
            <a
              href="#"
              className="block w-full pb-1 pl-23 text-[15.2px] font-medium text-white uppercase relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0"
            >
              olha lazarieva
              <span className="w-3.5 h-3.5 pt-0.5 block float-right">
                <img src={arrowD} alt="Arrow D" />
              </span>
            </a>
          </li>
          <li className>
            <a
              href="#"
              className="block w-full pb-1 pl-23 text-[15.2px] font-medium text-white uppercase relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0"
            >
              max milkin
              <span className="w-3.5 h-3.5 pt-0.5 block float-right">
                <img src={arrowD} alt="Arrow D" />
              </span>
            </a>
          </li>
          <li className>
            <a
              href="#"
              className="block w-full pb-1 pl-23 text-[15.2px] font-medium text-white uppercase relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0"
            >
              two capitals studio
              <span className="w-3.5 h-3.5 pt-0.5 block float-right">
                <img src={arrowD} alt="Arrow D" />
              </span>
            </a>
          </li>
          <li className>
            <a
              href="#"
              className="block w-full pb-1 pl-23 text-[15.2px] font-medium text-white uppercase relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0"
            >
              raine architects
              <span className="w-3.5 h-3.5 pt-0.5 block float-right">
                <img src={arrowD} alt="Arrow D" />
              </span>
            </a>
          </li>
          <li className>
            <a
              href="#"
              className="block w-full pb-1 pl-23 text-[15.2px] font-medium text-white uppercase relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:left-0"
            >
              mosiac of cultures
              <span className="w-3.5 h-3.5 pt-0.5 block float-right">
                <img src={arrowD} alt="Arrow D" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Projects;
