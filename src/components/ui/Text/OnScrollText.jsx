import OnScrollShuffle from "./OnScrollShuffle";

function OnScrollText({
  name,
  fontSize,
  duration = 0.8, // Increased from 0.35
  scrollTriggerConfig = null,
}) {
  return (
    <OnScrollShuffle
      text={name}
      className={`uppercase ${fontSize}`}
      shuffleDirection="right"
      duration={duration}
      shuffleTimes={2}
      ease="power3.out"
      stagger={0.05}
      triggerOnce={true}
      triggerOnHover={false}
      respectReducedMotion={true}
      scrollTriggerConfig={scrollTriggerConfig}
    />
  );
}

export default OnScrollText;
