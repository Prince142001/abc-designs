import TestModel from "../ThreeD/TestModel";
import "../ThreeD/styles.css";
import Text from "../ui/Text/Text";

function HeroSection() {
  return (
    <div className="max-w-384 overflow-hidden">
      <TestModel />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-fit z-50">
        <h1 className="text-sm text-cyan-900 flex flex-col items-end">
          <Text name="Minimalism is not emptiness," fontSize="text-[14.4px]" />
          <Text name="its" fontSize="text-[14.4px]" />
          <Text name="essence." fontSize="text-[14.4px] -mr-[42px]" />
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
