import {
  Code,
  Coffee,
  Cpu,
  Database,
  Download,
  FolderOpen,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Hero() {
  // Numbers ke liye state
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [tech, setTech] = useState(0);

  useEffect(() => {
    // 1. Years Learning (Bohot slow - har 1 second mein sirf ek number badhega)
    const yearsInterval = setInterval(() => {
      setYears((prev) => {
        if (prev < 3) return prev + 1;
        clearInterval(yearsInterval);
        return 3;
      });
    }, 1000);

    // 2. Projects Built (Kafi slow - har 400ms par ek number badhega, 15 tak jaane mein ~6 sec lagenge)
    const projectsInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 15) return prev + 1;
        clearInterval(projectsInterval);
        return 15;
      });
    }, 200);

    // 3. Technologies (Slow - har half second (500ms) mein ek number badhega)
    const techInterval = setInterval(() => {
      setTech((prev) => {
        if (prev < 10) return prev + 1;
        clearInterval(techInterval);
        return 10;
      });
    }, 300);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(projectsInterval);
      clearInterval(techInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-white to-[#dbe4ff]"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#354770] text-sm font-medium mb-6">
            🟢 Available for Opportunities
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-[#354770]">Ravi Kumar</span>
          </h1>

          <h2 className="text-3xl font-semibold text-gray-700 mt-4">
            Java & Full Stack Developer
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
            I build modern and scalable web applications using Java and
            full-stack technologies. Passionate about problem solving and
            creating impactful digital solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/projects-coming-soon"
              className="flex items-center gap-2 bg-[#354770] hover:bg-[#2c3a61] text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </Link>

            <Link
              to="/projects-coming-soon"
              className="flex items-center gap-2 border border-[#354770] text-[#354770] hover:bg-[#354770] hover:text-white px-6 py-3 rounded-xl transition-all duration-300"
            >
              <FolderOpen size={18} />
              View Projects
            </Link>
          </div>

          {/* Stats Section */}
          <div className="flex gap-10 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-[#354770]">{years}+</h3>
              <p className="text-gray-500">Years Learning</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#354770]">{projects}+</h3>
              <p className="text-gray-500">Projects Built</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#354770]">{tech}+</h3>
              <p className="text-gray-500">Technologies</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="absolute w-72 h-72 bg-[#354770]/10 rounded-full blur-3xl"></div>
          <img
            src="/hero-image.svg"
            alt="Developer Illustration"
            className="w-full max-w-lg h-auto object-contain"
          />

          {/* Floating Badges */}
          {/* Java */}
          <div className="absolute top-10 left-4 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <Coffee size={16} className="text-[#354770]" />
            <span className="text-sm font-medium">Java</span>
          </div>

          {/* DSA */}
          <div className="absolute top-20 right-0 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <Code size={16} className="text-orange-500" />
            <span className="text-sm font-medium">DSA</span>
          </div>

          {/* Node */}
          <div className="absolute bottom-32 left-0 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium">Node.js</span>
          </div>

          {/* MongoDB */}
          <div className="absolute bottom-8 right-6 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <Database size={16} className="text-green-600" />
            <span className="text-sm font-medium">MongoDB</span>
          </div>

          {/* React */}
          <div className="absolute bottom-28 right-6 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
            <Cpu size={16} className="text-blue-500" />
            <span className="text-sm font-medium">React</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
