import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import TestModel from "./components/ThreeD/TestModel";
import CircularTimer from "./components/SectionTwo/CircularTimer";
import PinnedSection from "./components/SectionTwo/PinnedSection";
import ContactForm from "./components/Contact/ContactForm";
import Awards from "./components/Awards/Awards";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import AboutPage from "./AboutPage/AboutPage";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import SmoothScroll from "./components/ui/SmoothScroll";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PinnedSection />
      <About />
      <Awards />
      <Works />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScroll>
      <SmoothCursor />
      <RouterProvider router={router} />
    </SmoothScroll>
  </StrictMode>
);
