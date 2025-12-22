import React from "react";
import Navbar from "./components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Contact/ContactForm";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ContactForm />
    </div>
  );
}

export default Layout;
