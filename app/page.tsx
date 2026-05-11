import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Problem from "@/components/sections/Problem";
import Solutions from "@/components/sections/Solutions";
import Technology from "@/components/sections/Technology";
import Robotics from "@/components/sections/Robotics";
import Projects from "@/components/sections/Projects";
import CollaborationHub from "@/components/sections/CollaborationHub";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Problem />
      <Solutions />
      <Technology />
      <Robotics />
      <Projects />
      <CollaborationHub />
      <Process />
      <Contact />
    </div>
  );
}
