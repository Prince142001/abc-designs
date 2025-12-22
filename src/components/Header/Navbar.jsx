import React, { useState } from "react";
import Text from "../ui/Text/Text";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import AnimatedUnderline from "../ui/AnimatedUnderline";

function Navbar() {
  const [hamBurger, setHamburger] = useState(false);

  const handleNavbar = () => {
    setHamburger((prev) => !prev);
  };

  const navlinks = ["about", "awards", "works", "expertise", "contact"];

  const socialMedia = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zonetocode-92b48b25b/",
    },
    {
      name: "Telegram",
      url: "https://www.linkedin.com/in/zonetocode-92b48b25b/",
    },
    {
      name: "Whatsapp",
      url: "https://www.linkedin.com/in/zonetocode-92b48b25b/",
    },
  ];

  const getLinkTarget = (linkName) => {
    if (linkName === "about") return "/about";
    return `/#${linkName}`;
  };

  return (
    <header className="max-w-384 mx-auto overflow-hidden fixed top-0 left-1/2 -translate-x-1/2 w-full px-4.5 md:px-6.25 xl:px-28 py-5 md:py-8 flex items-center justify-between z-50 header">
      <div>
        <Link
          to="/"
          className="uppercase relative z-50 font-bebas-neue text-white"
        >
          <Text
            name="max milkin"
            fontSize="text-2xl leading-5 font-semibold font-bebas-neue"
          />
        </Link>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-18">
          {navlinks.map((value, index) => {
            return (
              <li key={index}>
                <HashLink smooth to={getLinkTarget(value)}>
                  <Text
                    name={value}
                    fontSize="text-xs md:text-[11.2px] text-white font-medium"
                  />
                </HashLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav
        className={`flex items-center justify-center md:hidden fixed inset-0 w-full h-screen bg-[#c2cabb72] backdrop-blur-sm transition-opacity duration-500 ${
          hamBurger
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 100 }}
      >
        <ul className="flex flex-col gap-8 items-center">
          {navlinks.map((value, index) => {
            return (
              <li
                key={index}
                className={`transition-all duration-500 ${
                  hamBurger
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: hamBurger ? `${index * 100}ms` : "0ms",
                }}
              >
                <HashLink
                  smooth
                  to={getLinkTarget(value)}
                  onClick={() => setHamburger(false)}
                >
                  <Text
                    name={value}
                    fontSize="text-xl md:text-[11.2px] text-white font-medium"
                  />
                </HashLink>
              </li>
            );
          })}
        </ul>

        <div className="absolute w-[90%] bottom-6 left-1/2 -translate-x-1/2">
          <ul className="flex justify-center items-center gap-8">
            {socialMedia.map((item, index) => (
              <li
                key={index}
                className={`transition-all duration-500 ${
                  hamBurger
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: hamBurger
                    ? `${(navlinks.length + index) * 100}ms`
                    : "0ms",
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-sm font-medium hover:underline"
                >
                  <AnimatedUnderline
                    text={item.name}
                    underlineColor="bg-[#c2cabb]"
                    underlineHeight="h-px"
                    className="text-[13.2px] font-medium text-[#c2cabb]"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center mt-10">
            <a
              href="mailto:prince.pv.14.2000@gmail.com?subject=Saying%20hello%20from%20you"
              className="text-[15.2px] text-[#c2cabb] font-semibold uppercase cursor-pointer"
            >
              email: prince.pv.14.2000@gmail.com
            </a>
          </div>
        </div>
      </nav>

      <button
        className="block md:hidden absolute top-2.5 right-2.5 m-0 p-0"
        style={{ zIndex: 200 }}
        onClick={handleNavbar}
      >
        <svg
          className={`ham hamRotate ham1 ${hamBurger === true ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="80"
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>
    </header>
  );
}

export default Navbar;
