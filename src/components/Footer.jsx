import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 relative ">

      {/* Top Glow Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 opacity-70"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black flex items-center justify-center font-bold text-2xl shadow-lg">
            TK
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Tanish Khandelwal
        </h1>

        {/* Tagline */}
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
          Full Stack Developer | Frontend Specialist | Backend Enthusiast <br /> RPA Developer | Automation Expert  
          <br />I build modern, premium digital experiences.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-8">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tanish-khandelwal-654108315" },
            { icon: <FaGithub />, link: "https://github.com/Tanish-khandelwal" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_tanishhh26/" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 
              hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 
              hover:shadow-[0_0_20px_#a100ff] transition text-white text-lg"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex justify-center gap-6 mt-8 text-sm text-gray-400 flex-wrap">
          <p className="flex items-center gap-2"><FaEnvelope /> tanish26112005@gmail.com</p>
          <p className="flex items-center gap-2"><FaPhone /> +91 6376872253</p>
          <p className="flex items-center gap-2"><FaLocationDot /> Jaipur, Rajasthan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Tanish Khandelwal — All Rights Reserved.
      </div>
    </footer>
  );
}
