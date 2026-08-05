import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaLocationDot, FaArrowUp } from "react-icons/fa6";

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080b12] text-gray-400 pt-16 pb-12 relative border-t border-white/10">
      
      {/* Top Gradient Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="space-y-3 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg">
                TK
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Tanish Khandelwal
              </span>
            </a>
            
            <p className="text-xs text-gray-400 max-w-md leading-relaxed">
              Full Stack Developer (MERN / PHP MySQL) & UiPath RPA Automation Developer. Building fast, scalable digital products and intelligent process automation.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-gray-300">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#automation" className="hover:text-purple-400 transition">RPA Automation</a>
            <a href="#contact-me" className="hover:text-purple-400 transition">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500 text-purple-300 hover:text-white transition shadow-lg flex items-center gap-2 text-xs font-semibold"
            title="Back to top"
          >
            Top <FaArrowUp />
          </button>

        </div>

        {/* Bottom Contact & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-wrap gap-4 text-gray-400 justify-center">
            <span className="flex items-center gap-1.5"><FaEnvelope className="text-purple-400" /> tanishkhandelwal2605@gmail.com</span>
            <span className="flex items-center gap-1.5"><FaPhone className="text-emerald-400" /> +91 63768-72253</span>
            <span className="flex items-center gap-1.5"><FaLocationDot className="text-pink-400" /> Jaipur, Rajasthan</span>
          </div>

          <p className="text-gray-500">
            © {new Date().getFullYear()} Tanish Khandelwal. Built with React, Vite & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}
