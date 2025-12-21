import HoverShuffleText from "./HoverShuffleText";

function HoverText({ defaultText, hoverText, fontSize = "text-base" }) {
  return (
    <HoverShuffleText
      defaultText={defaultText}
      hoverText={hoverText}
      className={`uppercase ${fontSize} tracking-wide`}
      shuffleDirection="right"
      duration={0.35}
      shuffleTimes={1}
      ease="power3.out"
      stagger={0.03}
      animationMode="evenodd"
      respectReducedMotion={true}
    />
  );
}

export default HoverText;
