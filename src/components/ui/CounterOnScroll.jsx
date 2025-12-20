import { motion, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

function Number({ mv, number, height }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + placeValue - number) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  const style = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <motion.span style={{ ...style, y }}>{number}</motion.span>;
}

function Digit({ place, value, height, digitStyle }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle = {
    height,
    position: "relative",
    width: "1ch",
    fontVariantNumeric: "tabular-nums",
  };

  return (
    <div style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

export default function CounterOnScroll({
  targetValue, // The final value to count to
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  className = "", // ✅ Added className prop
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  // gradientFrom = "black",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
  threshold = 0.3,
  triggerOnce = true,
}) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);
  const height = fontSize + padding;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasAnimated || !triggerOnce) {
            setValue(targetValue);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }
        } else {
          if (!triggerOnce) {
            setValue(0);
          }
        }
      },
      { threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [targetValue, threshold, triggerOnce, hasAnimated]);

  const defaultContainerStyle = {
    position: "relative",
    display: "inline-block",
  };

  const defaultCounterStyle = {
    fontSize,
    display: "flex",
    gap: gap,
    overflow: "hidden",
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    lineHeight: 1,
    color: textColor,
    fontWeight: fontWeight,
  };

  // const gradientContainerStyle = {
  //   pointerEvents: "none",
  //   position: "absolute",
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  // };

  // const defaultTopGradientStyle = {
  //   height: gradientHeight,
  //   background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
  // };

  // const defaultBottomGradientStyle = {
  //   position: "absolute",
  //   bottom: 0,
  //   width: "100%",
  //   height: gradientHeight,
  //   background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
  // };

  return (
    <div
      ref={containerRef}
      className={className} // ✅ Added className here
      style={{ ...defaultContainerStyle, ...containerStyle }}
    >
      <div style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
      {/* <div style={gradientContainerStyle}>
        <div
          style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}
        />
        <div
          style={
            bottomGradientStyle
              ? bottomGradientStyle
              : defaultBottomGradientStyle
          }
        />
      </div> */}
    </div>
  );
}
