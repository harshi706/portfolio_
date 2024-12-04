import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#101010] p-6 md:p-12">
      <div className="flex flex-row justify-center items-center gap-2">
        <a
          href="https://www.linkedin.com/in/harshi-agrawal-5a638b238/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a
          href="https://github.com/harshi706?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://leetcode.com/harshi_agrawal/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <SiLeetcode size={20} />
        </a>
        <a
          href="https://twitter.com/harshi_agr"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://www.instagram.com/harshi_ag._/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 rounded-full p-2 opacity-50 hover:opacity-100"
        >
          <FaInstagram size={20} />
        </a>
      </div>
      {/* <div className='flex justify-center items-center pt-5'>
        <h1>&copy;2023. All rights reserved.</h1>
      </div> */}
    </div>
  );
};

export default Footer;
