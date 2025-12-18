import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import TestModel from "./components/ThreeD/TestModel";
import CircularTimer from "./components/SectionTwo/CircularTimer";
import PinnedSection from "./components/SectionTwo/PinnedSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <CircularTimer />
      <PinnedSection />
    </>
  );
}

export default App;
