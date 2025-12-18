import React, { useState } from "react";
import Text from "../ui/Text/Text";
// import Hamburger from "../icons/Hamburger";
// import Shuffle from "../ui/Text/Shuffle";

function Navbar() {
  const [hamBurger, setHamburger] = useState(true);

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
  return (
    <header className="fixed top-0 left-0 w-full px-2.5 md:px-28 py-2.5 md:py-8 flex items-center justify-between z-50">
      <div>
        <a href="#" className="uppercase relative z-50 font-bebas-neue">
          {/* max milkin */}
          <Text
            name="max milkin"
            fontSize="text-2xl font-semibold font-bebas-neue"
          />
        </a>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-18">
          {navlinks.map((value, index) => {
            return (
              <li key={index}>
                <Text
                  name={value}
                  fontSize="text-xs md:text-[11.2px] font-medium"
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <nav
        className={`flex items-center justify-center md:hidden absolute top-0 ${
          hamBurger
            ? "left-0 transition-all"
            : "-left-full -translate-x-full transition-all"
        } w-full h-screen`}
      >
        <ul className="flex flex-col gap-18 items-center">
          {navlinks.map((value, index) => {
            return (
              <li key={index}>
                <Text
                  name={value}
                  fontSize="text-xs md:text-[11.2px] font-medium"
                />
              </li>
            );
          })}
        </ul>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </nav>
      <button
        className="block md:hidden absolute top-2.5 right-2.5 z-50 m-0 p-0"
        onClick={handleNavbar}
      >
        <svg
          className={`ham hamRotate ham1 ${hamBurger === true ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="80"

          // onclick="this.classList.toggle('active')"
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
        {/* <Hamburger className={hamBurger === true ? ".active" : ""} /> */}
      </button>
    </header>
  );
}

export default Navbar;
