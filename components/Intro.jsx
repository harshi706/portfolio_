"use client";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "../app/globals.css";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../fonts/Satisfy-Regular.ttf",
});

const Intro = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center pb-20">
      <div className="absolute top-4 left-4 md:top-16 md:left-52">
        <Image
          src="/AbstractWaves.png"
          alt="Top Left Image"
          width={100}
          height={100}
          className=""
        />
      </div>

      <div
        className="text-lg md:text-4xl font-extrabold px-4 pb-5 text-left"
        style={myFont.style}
      >
        Hi, I am Harshi
        <br />A full stack developer
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold leading-snug px-4">
        <TypeAnimation
          sequence={[
            `integrating innovation with\ntechnology to bring\nideas to life.`,
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className=" gradient-text sm:break-words md:whitespace-pre-line"
        />
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mt-6 px-4">
        <div
          onClick={() => handleScroll("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          <button className="w-full sm:w-auto border border-white hover:bg-slate-100 hover:text-black py-2 px-3 rounded-full">
            Hire Me
          </button>
        </div>
        <a href="/Harshi Agrawal.pdf" download="Harshi Agrawal.pdf">
          <button className="w-full sm:w-auto border border-white hover:bg-slate-100 hover:text-black py-2 px-3 rounded-full">
            Download CV
          </button>
        </a>
      </div>

      <div className="absolute bottom-32 right-8 md:bottom-24 md:right-44">
        <Image
          src="/AbstractWaves.png"
          alt="Bottom Right Image"
          width={100}
          height={100}
          className=""
        />
      </div>
    </div>
  );
};

export default Intro;
