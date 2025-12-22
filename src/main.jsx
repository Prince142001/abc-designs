import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HeroSection from "./components/HeroSection/HeroSection";
import PinnedSection from "./components/SectionTwo/PinnedSection";
import Awards from "./components/Awards/Awards";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import AboutPage from "./AboutPage/AboutPage";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import SmoothScroll from "./components/ui/SmoothScroll";
import CircularLoader from "./components/ui/CircularLoader";

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

const MainApp = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && (
        <CircularLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {loadingComplete && (
        <SmoothScroll>
          <SmoothCursor />
          <RouterProvider router={router} />
        </SmoothScroll>
      )}
    </>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
