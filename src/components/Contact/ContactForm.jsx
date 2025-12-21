import React, { useRef, useState } from "react";
import FooterBg from "../../assets/footer-bg.png";
import OnClickShuffle from "../ui/Text/OnClickShuffle";
import Footer from "../Footer/Footer";
import HoverText from "../ui/Text/HoverText";

function ContactForm() {
  const sectionRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("5k-10k"); // Initially active
  const [animationTrigger, setAnimationTrigger] = useState(1);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleRadioClick = (value) => {
    setSelectedPrice(value);
    setAnimationTrigger((prev) => prev + 1);
  };

  const circleSize = 200;

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen overflow-hidden bg-[#c2cabb]"
    >
      <section>
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${FooterBg})`,
            backgroundAttachment: "fixed",
          }}
        />

        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="liquid-wave">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.015"
                numOctaves="2"
                result="turbulence"
                seed="2"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.015;0.025;0.015"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale="25"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feGaussianBlur stdDeviation="1" />
            </filter>
          </defs>
        </svg>

        <div
          className="pointer-events-none absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-200"
          style={{
            backgroundImage: `url(${FooterBg})`,
            backgroundAttachment: "fixed",
            filter: "url(#liquid-wave) brightness(1.1) contrast(1.1)",
            opacity: isHovering ? 1 : 0,
            maskImage: isHovering
              ? `radial-gradient(circle ${circleSize}px at ${position.x}px ${position.y}px, black 30%, transparent 80%)`
              : "none",
            WebkitMaskImage: isHovering
              ? `radial-gradient(circle ${circleSize}px at ${position.x}px ${position.y}px, black 30%, transparent 80%)`
              : "none",
          }}
        />

        <div className="relative z-10 pt-38 px-8 flex flex-col items-center justify-center">
          <header className="relative w-1/2 after:absolute after:-bottom-8 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[2.5px] after:bg-black">
            <p className="text-[11.2px] font-medium text-white text-center">
              [&nbsp;N.006&nbsp;]
            </p>
            <p className="mt-4 text-[11.2px] font-medium text-black uppercase text-center">
              ( contact form. )
            </p>

            <OnClickShuffle
              text="lets make your project special"
              className="text-3xl font-semibold uppercase tracking-wide text-center mt-6"
              tag="h2"
              shuffleDirection="right"
              duration={0.35}
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              animationMode="evenodd"
              trigger={animationTrigger}
              respectReducedMotion={true}
            />
          </header>

          <div className="w-90 mt-40">
            <form className="w-full space-y-6">
              <input
                type="text"
                placeholder="your name*"
                className="py-1.5 w-full text-[11.2px] font-medium uppercase border-b border-black outline-none bg-transparent transition-all placeholder:uppercase placeholder:text-[11.2px] placeholder:text-black placeholder:font-medium focus:placeholder:text-gray-600"
              />
              <input
                type="email"
                placeholder="your email*"
                className="py-1.5 w-full text-[11.2px] font-medium uppercase border-b border-black outline-none bg-transparent transition-all placeholder:uppercase placeholder:text-[11.2px] placeholder:text-black placeholder:font-medium focus:placeholder:text-gray-600"
              />
              <textarea
                name="your message"
                id=""
                rows="6"
                cols="50"
                placeholder="your email*"
                className="py-1.5 w-full text-[11.2px] font-medium uppercase border-b border-black outline-none bg-transparent resize-none transition-all placeholder:uppercase placeholder:text-[11.2px] placeholder:text-black placeholder:font-medium focus:placeholder:text-gray-600"
              ></textarea>

              <p className="mt-4 mb-3 text-[11.2px] font-medium text-black uppercase text-left">
                YOUR BUDGET (USD)
              </p>
              <div className="flex items-center justify-between rounded-full w-full">
                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="peer hidden"
                    checked={selectedPrice === "5k-10k"}
                    onChange={() => handleRadioClick("5k-10k")}
                  />
                  <span
                    className={`px-4 py-1 text-sm font-semibold rounded-full transition ${
                      selectedPrice === "5k-10k"
                        ? "bg-[#ffffff4d] border border-white/60 text-black"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    5K - 10K
                  </span>
                </label>

                <label className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    className="peer hidden"
                    checked={selectedPrice === "10k-20k"}
                    onChange={() => handleRadioClick("10k-20k")}
                  />
                  <span
                    className={`px-4 py-1 text-sm font-semibold rounded-full transition ${
                      selectedPrice === "10k-20k"
                        ? "bg-[#ffffff4d] border border-white/60 text-black"
                        : "text-black/70 hover:text-black"
                    }`}
                  >
                    10K - 20K
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => handleRadioClick("more")}
                  className={`px-4 py-1 text-sm font-semibold rounded-full transition ${
                    selectedPrice === "more"
                      ? "bg-[#ffffff4d] border border-white/60 text-black"
                      : "text-black/70 hover:bg-white/50 hover:text-black"
                  }`}
                >
                  more
                </button>
              </div>
              <div className="flex items-center justify-center mt-14">
                <button type="submit" className="mx-auto my-0">
                  <HoverText
                    defaultText="confirm"
                    hoverText="submit"
                    fontSize="text-[13.2px] py-3 block  bg-transparent cursor-pointer hover:bg-[#ffffff26] transition text-center w-[168.25px] uppercase border border-black rounded-full"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="px-28 pt-32 pb-8">
        <Footer />
      </footer>
    </div>
  );
}

export default ContactForm;
