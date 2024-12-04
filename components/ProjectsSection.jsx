"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import "../app/globals.css";

const projectsData = [
  {
    id: 1,
    title: "Infostream",
    description: "",
    image: "/infostream.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/infostream",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Fitness Freak",
    description: "",
    image: "/fit.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/fitness-freak",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Markmind",
    description: "",
    image: "/img2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/markmind",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Moviemax",
    description: "",
    image: "/img4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/moviemax",
    previewUrl: "https://movieimdbreact.netlify.app/",
  },
  {
    id: 5,
    title: "Memes Generator",
    description: "",
    image: "img1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/memesGenerator",
    previewUrl: "https://memescreation.netlify.app/",
  },
  {
    id: 6,
    title: "AI Object Detection",
    description: "",
    image: "alarm.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/AI-based-detection",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "E-Commerce",
    description: "",
    image: "img3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/harshi706/Commercial",
    previewUrl: "https://fabulous-kheer-e549e4.netlify.app",
  },
  {
    id: 8,
    title: "Architectural",
    description: "",
    image: "img7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/Ayatrio_NextJS",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Socket",
    description: "",
    image: "img5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/Socket-chat-app",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Portfolio",
    description: "",
    image: "img6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harshi706/portfolio",
    previewUrl: "https://harshi706.github.io/portfolio/",
  },

  // {
  //   id: 8,
  //   title: "Myworld",
  //   description: "",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/harshi706/Microfrontend_NextJs",
  //   previewUrl: "/",
  // }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="flex justify-center items-center">
        <span className="flex justify-center items-center prj">Projects</span>
      </div>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
