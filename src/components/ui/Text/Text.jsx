import Shuffle from "./Shuffle";

function Text({ name, fontSize }) {
  return (
    <Shuffle
      text={name}
      className={`uppercase ${fontSize} tracking-wide text-white`}
      shuffleDirection="right"
      duration={0.35}
      shuffleTimes={1}
      ease="power3.out"
      stagger={0.03}
      triggerOnce={true}
      triggerOnHover={true}
      respectReducedMotion={true}
    />
  );
}

export default Text;
