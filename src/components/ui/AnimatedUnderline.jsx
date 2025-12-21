import React, { useState } from "react";

export const AnimatedUnderline = ({
  text = "Hover me",
  className = "",

  // 🎨 TEXT STYLING
  textColor = "text-inherit",
  fontSize = "",
  fontWeight = "",
  letterSpacing = "",
  textTransform = "",

  // 📏 UNDERLINE STYLING
  underlineColor = "bg-black",
  underlineHoverColor = "", // Different color on hover (optional)
  underlineHeight = "h-[1.5px]",
  underlineWidth = "w-full", // Can be w-full, w-1/2, w-[80%], etc.
  underlinePosition = "bottom-0", // bottom-0, bottom-1, -bottom-1, etc.
  underlineOffset = "left-0", // left-0, left-2, etc.
  underlineRounded = "", // rounded, rounded-full, etc.
  underlineOpacity = "", // opacity-50, opacity-75, etc.

  // ⏱️ ANIMATION SETTINGS
  animationDuration = 300, // milliseconds
  animationEasing = "ease-in-out", // ease-in-out, ease-in, ease-out, linear, cubic-bezier()

  // 🎭 ADVANCED OPTIONS
  containerClassName = "",
  textClassName = "",
  underlineClassName = "",
  hoverUnderlineClassName = "",
  disabled = false,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!disabled) setIsHovered(false);
  };

  const handleClick = (e) => {
    if (!disabled && onClick) onClick(e);
  };

  // Determine underline colors
  const firstUnderlineColor = underlineColor;
  const secondUnderlineColor = underlineHoverColor || underlineColor;

  // Combined text classes
  const textClasses =
    `${textColor} ${fontSize} ${fontWeight} ${letterSpacing} ${textTransform} ${textClassName} relative z-10`.trim();

  // Base underline classes
  const baseUnderlineClasses =
    `absolute ${underlinePosition} ${underlineOffset} ${underlineHeight} ${underlineWidth} ${underlineRounded} ${underlineOpacity} transition-transform`.trim();

  return (
    <div
      className={`relative inline-block w-full ${
        disabled ? "cursor-default" : "cursor-pointer"
      } ${containerClassName} ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span className={textClasses}>{text}</span>

      {/* First underline - exits right */}
      <span
        className={`${baseUnderlineClasses} ${firstUnderlineColor} ${underlineClassName}`}
        style={{
          transformOrigin: isHovered ? "bottom right" : "bottom left",
          transform: isHovered ? "scaleX(0)" : "scaleX(1)",
          transitionDuration: `${animationDuration}ms`,
          transitionDelay: isHovered ? "0ms" : `${animationDuration / 2}ms`,
          transitionTimingFunction: animationEasing,
        }}
      />

      {/* Second underline - enters from left */}
      <span
        className={`${baseUnderlineClasses} ${secondUnderlineColor} ${hoverUnderlineClassName}`}
        style={{
          transformOrigin: isHovered ? "bottom left" : "bottom right",
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
          transitionDuration: `${animationDuration}ms`,
          transitionDelay: isHovered ? `${animationDuration / 2}ms` : "0ms",
          transitionTimingFunction: animationEasing,
        }}
      />
    </div>
  );
};

export default AnimatedUnderline;
