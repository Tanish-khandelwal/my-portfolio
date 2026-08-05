import React, { useState } from "react";
import { FaBars, FaXmark, FaFileLines } from "react-icons/fa6";

export default function Navbar({ onOpenResume }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "RPA Automation", link: "#automation" },
    { name: "Certificates", link: "#certificates" },
    { name: "Contact", link: "#contact-me" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg group-hover:scale-110 transition duration-300">
            TK
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
            Tanish Khandelwal
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="group relative py-1 hover:text-white transition duration-200"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 text-xs font-semibold shadow-lg transition transform hover:scale-105"
          >
            <FaFileLines /> Resume
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-semibold"
          >
            <FaFileLines /> Resume
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#0f172a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl animate-fadeIn">
          <ul className="flex flex-col gap-4 text-center text-base font-medium text-gray-300">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 hover:text-purple-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
