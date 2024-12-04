"use client";
import React from "react";
import "../app/globals.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState("home");
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };
  return (
    <nav className="top-0 sticky z-50 bg-black">
      <div className="flex flex-wrap items-center justify-center mx-auto px-8 pt-8 pb-5 text-white">
        <div>
          <ul className="flex flex-row gap-5 font-semibold ">
            <li
              onClick={() => handleScroll("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => handleScroll("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </li>
            <li
              onClick={() => handleScroll("projects")}
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
