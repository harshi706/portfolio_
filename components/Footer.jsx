"use client"
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className="mt-10 bg-[#101010] p-6 md:p-12">
      <div className="flex flex-row justify-center items-center gap-2">
        <button
          onClick={() => handleClick("https://www.linkedin.com/in/harshi-agrawal-5a638b238/")}
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaLinkedinIn size={20} />
        </button>
        <button
          onClick={() => handleClick("https://github.com/harshi706?tab=repositories")}
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaGithub size={20} />
        </button>
        <button
          onClick={() => handleClick("https://leetcode.com/harshi_agrawal/")}
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <SiLeetcode size={20} />
        </button>
        <button
          onClick={() => handleClick("https://twitter.com/harshi_agr")}
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaTwitter size={20} />
        </button>
        <button
          onClick={() => handleClick("https://www.instagram.com/harshi_ag._/")}
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaInstagram size={20} />
        </button>
      </div>
      {/* <div className='flex justify-center items-center pt-5'>
        <h1>&copy;2023. All rights reserved.</h1>
      </div> */}
    </div>
  );
};

export default Footer;
