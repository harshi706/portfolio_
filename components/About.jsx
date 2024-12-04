import React from "react";
import "../app/globals.css";

const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-12 pb-8 gap-6 animate-fadeIn">
      <div className="sm:col-span-1">
        <div className="">
          <p className="text-sm tracking-wide menu flex justify-center items-center">
            About Me
          </p>
          <h3 className="text-white font-semibold text-4xl mt-6 mb-3 transition-all hover:tracking-wider duration-300">
            Hey there!
          </h3>
          <div className="text-gray-300 text-md">
            <p className="leading-7">
              I am Harshi Agrawal, currently pursuing a Bachelor of Technology
              in Information Technology. My journey through college has been a
              blend of rigorous academic pursuits and hands-on experiences, all
              aimed at preparing me to tackle the challenges of the
              ever-evolving tech landscape.
            </p>
            <br />
            <p className="leading-7">
              Looking ahead, I am eager to seize new opportunities that allow me
              to apply my knowledge and creativity to real-world challenges.
              Whether it's developing cutting-edge solutions or collaborating
              with like-minded individuals to drive innovation, I am committed
              to making a positive impact wherever I go.
            </p>
          </div>
          <p className="text-white text-lg font-bold mt-4 transition-colors duration-300">
            Thank you for showing up!
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="sm:col-span-1 pt-20">
        <div className="relative">
          <div className="absolute top-0 left-1 w-[2px] bg-white h-full"></div>
          <div className="flex flex-col space-y-6 mt-6 pl-8">
            <div className="flex items-start group">
              <div className="w-4 h-4 custombg rounded-full absolute -left-1 group-hover:bg-gray-300 transition-colors duration-300"></div>
              <div className="ml-6">
                <p className=" font-semibold custom group-hover:text-gray-300 transition-colors duration-300">
                  Cessini Technology | React Developer
                </p>
                <p className="text-gray-300 text-md group-hover:text-white transition-colors duration-300">
                  -Optimized content update process by 20% through
                  implementation of efficient API calls for data retrieval.
                  <br />
                  -Used Next.js and Redux to achieve a 25% reduction in page
                  load times, enhancing user experience and website performance.
                  <br />
                  -Collaborated on micro frontend services, fostering modular
                  and scalable architecture.
                  <br />
                  -Utilized data structures and algorithms to optimize search
                  functionalities, reducing response time by 30%.
                </p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-4 h-4 custombg rounded-full absolute -left-1 group-hover:bg-gray-300 transition-colors duration-300"></div>
              <div className="ml-6">
                <p className="custom font-semibold group-hover:text-gray-300 transition-colors duration-300">
                  CoachDirect | Frontend Developer
                </p>
                <p className="text-gray-300 text-md group-hover:text-white transition-colors duration-300">
                  -Collaborated with a cross-functional team to design and
                  implement data management.
                  <br />
                  -Increased registration completion rate by 100% by
                  implementing the multistep registration form and seamless data
                  storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
