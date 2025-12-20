import React, { useState } from "react";

export const AnimatedUnderline = ({
  text = "Hover me",
  className = "",
  underlineColor = "bg-black",
  textColor = "text-black",
  underlineHeight = "h-[1.5px]",
  animationDuration = 300, // in ms
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`${textColor} relative z-10`}>{text}</span>

      {/* First underline - slides out right on hover, comes from left on hover out */}
      <span
        className={`absolute ${underlineColor} bottom-0 left-0 ${underlineHeight} w-full transition-transform ease-in-out`}
        style={{
          transformOrigin: isHovered ? "bottom right" : "bottom left",
          transform: isHovered ? "scaleX(0)" : "scaleX(1)",
          transitionDuration: `${animationDuration}ms`,
          transitionDelay: isHovered ? "0ms" : `${animationDuration / 2}ms`, // ✅ Added delay when coming back
        }}
      />

      {/* Second underline - comes from left on hover, exits right on hover out */}
      <span
        className={`absolute ${underlineColor} bottom-0 left-0 ${underlineHeight} w-full transition-transform ease-in-out`}
        style={{
          transformOrigin: isHovered ? "bottom left" : "bottom right", // ✅ Changed to exit right on hover out
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          transitionDuration: `${animationDuration}ms`,
          transitionDelay: isHovered ? `${animationDuration / 2}ms` : "0ms",
        }}
      />
    </div>
  );
};

export default AnimatedUnderline;
