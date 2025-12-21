import React from "react";
import Text from "../ui/Text/Text";
import OnScrollText from "../ui/Text/OnScrollText";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import HeartbeatDot from "../ui/HeartbeatDot";

function Footer() {
  const links = ["about", "awards", "works", "expertise"];

  const socialMedia = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zonetocode-92b48b25b/",
    },
    {
      name: "Telegram",
      url: "https://t.me/zonetocode",
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/919999999999",
    },
  ];

  return (
    <footer className="py-10">
      <ul className="flex flex-row gap-18 justify-center items-center -tracking-wide">
        {links.map((value) => (
          <li key={value}>
            <Text name={value} fontSize="text-[13.2px] font-semibold" />
          </li>
        ))}
      </ul>

      <h2 className="mt-8 mb-0 flex items-center justify-center footer-max-milkin">
        <OnScrollText
          name="max milkin"
          fontSize="text-9xl font-bebas-neue font-medium text-center uppercase"
        />
      </h2>

      <ul className="mt-0 flex items-center justify-center gap-14">
        {socialMedia.map((item) => (
          <li key={item.name}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white"
            >
              <AnimatedUnderline
                text={item.name}
                className="text-[13.2px] font-medium text-white"
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center mt-6">
        <a
          href="mailto:prince.pv.14.2000@gmail.com
         ?subject=Saying%20hello%20from%you"
          className="text-2xl font-bebas-neue font-semibold cursor-pointer hover:text-black/70"
        >
          email: prince.pv.14.2000@gmail.com
        </a>
      </div>

      <h2 className="flex items-center justify-center gap-3 mt-8">
        <OnScrollText
          name="creative frontend developer"
          fontSize="text-7xl font-semibold text-center uppercase text-black/70"
        />
      </h2>

      <ul className="mt-10 flex items-center justify-between">
        <li>
          <p className="text-xs font-medium text-left text-black/80">
            2025 .All right reserved. Max Milkin
          </p>
        </li>
        <li>
          <p className="text-xs font-medium text-left text-black/80 uppercase">
            website design -
            <a href="https://princevish.oakteak.in/">
              <AnimatedUnderline text="Prince Vishwakarma" />
            </a>
          </p>
        </li>
        <li className="text-[12.2px] font-medium border border-black px-3 py-0.5 rounded-full overflow-hidden flex items-center justify-center gap-1.5">
          dev <HeartbeatDot />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
