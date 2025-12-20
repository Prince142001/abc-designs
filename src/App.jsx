import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import TestModel from "./components/ThreeD/TestModel";
import CircularTimer from "./components/SectionTwo/CircularTimer";
import PinnedSection from "./components/SectionTwo/PinnedSection";
import ContactForm from "./components/Contact/ContactForm";
import Awards from "./components/Awards/Awards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <PinnedSection />
      <Awards />
      <ContactForm />
    </>
  );
}

export default App;
