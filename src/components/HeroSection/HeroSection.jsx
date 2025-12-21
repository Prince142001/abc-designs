import TestModel from "../ThreeD/TestModel";
// import "../ThreeD/styles.css"; // Ensure this doesn't conflict
import Text from "../ui/Text/Text";

function HeroSection() {
  return (
    // Added 'h-screen' so the 3D model takes up the full first view
    <div className="relative w-full h-screen overflow-hidden bg-[#191919]">
      {/* 3D Model Layer */}
      <div className="absolute inset-0 z-0">
        <TestModel />
      </div>

      {/* Text Overlay Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[14.2rem] md:w-fit z-50 pointer-events-none">
        <h1 className="text-sm text-white flex flex-col items-end">
          <Text
            name="Minimalism is not emptiness,"
            fontSize=" w-full sm:w-fit text-[14.4px]"
          />
          <Text
            name="its"
            fontSize="text-[14.4px] w-full sm:w-fit text-right"
          />
          <Text
            name="essence."
            fontSize="text-[14.4px] mr-0 md:-mr-[42px] text-right w-full sm:w-fit"
          />
        </h1>
      </div>
    </div>
  );
}

export default HeroSection;
