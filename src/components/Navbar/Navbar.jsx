import { useState } from "react";

import {
  Briefcase,
  Code,
  Download,
  Home,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <HashLink smooth to="/#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Tech Insights Logo"
            className="w-14 h-14 rounded-full border-[3px] border-[#354770] p-1 bg-white object-cover shadow-md"
          />

          <h1 className="text-2xl font-bold">
            <span className="text-[#354770]">Tech</span>
            <span className="text-[#354770]"> Insights</span>
          </h1>
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-1">
          <HashLink
            smooth
            to="/#home"
            className="transition-all duration-300 font-medium rounded-lg text-gray-600 hover:text-[#354770] border-b-2 border-transparent hover:border-[#354770] text-sm flex px-4 py-2 items-center gap-2"
          >
            <Home className="size-4" />
            Home
          </HashLink>

          <HashLink
            smooth
            to="/#about"
            className="transition-all duration-300 font-medium rounded-lg text-gray-600 hover:text-[#354770] border-b-2 border-transparent hover:border-[#354770] text-sm flex px-4 py-2 items-center gap-2"
          >
            <User className="size-4" />
            About
          </HashLink>

          <HashLink
            smooth
            to="/#skills"
            className="transition-all duration-300 font-medium rounded-lg text-gray-600 hover:text-[#354770] border-b-2 border-transparent hover:border-[#354770] text-sm flex px-4 py-2 items-center gap-2"
          >
            <Code className="size-4" />
            Skills
          </HashLink>

          <HashLink
            smooth
            to="/#projects"
            className="transition-all duration-300 font-medium rounded-lg text-gray-600 hover:text-[#354770] border-b-2 border-transparent hover:border-[#354770] text-sm flex px-4 py-2 items-center gap-2"
          >
            <Briefcase className="size-4" />
            Projects
          </HashLink>

          <HashLink
            smooth
            to="/contact"
            className="transition-all duration-300 font-medium rounded-lg text-gray-600 hover:text-[#354770] border-b-2 border-transparent hover:border-[#354770] text-sm flex px-4 py-2 items-center gap-2"
          >
            <Mail className="size-4" />
            Contact
          </HashLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Resume Button Desktop */}
          <Link
            to="/projects-coming-soon"
            className="hidden md:flex items-center gap-2 bg-[#354770] hover:bg-[#2c3a61] text-white px-5 py-2 rounded-lg shadow-md transition-all duration-300"
          >
            <Download className="size-4" />
            Resume
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#354770]"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed to overlay on top of content */}
      <div
        className={`md:hidden absolute w-full left-0 bg-white border-t border-b border-gray-200 shadow-xl overflow-hidden transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-5">
          <HashLink smooth to="/#home" onClick={() => setIsOpen(false)}>
            Home
          </HashLink>

          <HashLink smooth to="/#about" onClick={() => setIsOpen(false)}>
            About
          </HashLink>

          <HashLink smooth to="/#skills" onClick={() => setIsOpen(false)}>
            Skills
          </HashLink>

          <HashLink smooth to="/#projects" onClick={() => setIsOpen(false)}>
            Projects
          </HashLink>

          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <Link
            to="/projects-coming-soon"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#354770] text-white py-3 rounded-xl"
          >
            <Download size={18} />
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
