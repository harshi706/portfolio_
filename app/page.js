import About from "@/components/About";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white overflow-x-hidden">
        <Navbar />
        <div id="home">
          <Intro />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <Email />
        </div>
        <Footer />
      </div>
    </>
  );
}
