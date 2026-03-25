import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        flex justify-between items-center px-8 md:px-14 py-5
        bg-[#0f121a]/85 backdrop-blur-md sticky top-0 z-50
        border-b border-[#272b35]
        shadow-[0_2px_15px_rgba(0,0,0,0.4)]
        text-[#d5d7df]
      "
    >
      {/* Logo with soft gradient */}
      <h1 className="
        text-2xl font-semibold tracking-wide 
        bg-gradient-to-r from-[#8f86ff] to-[#d08fff] bg-clip-text text-transparent
      ">
        Tanish Khandelwal
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {[
          { name: "Home", link: "#home" },
          { name: "About", link: "#about" },
          { name: "Certificates", link: "#certificates" },
          { name: "Services", link: "#services" },
          { name: "Fullstack", link: "#fullstack" },
          { name: "How I Work", link: "#how-i-work" },
          { name: "Contact", link: "#contact-me" },
        ].map((item, i) => (
          <li key={i}>
            <a
              href={item.link}
              className="relative transition hover:text-white"
            >
              {item.name}

              {/* softer underline, subtle color */}
              <span
                className="
                  absolute left-0 bottom-[-3px] h-[2px] w-0 
                  bg-gradient-to-r from-[#7d82ff] to-[#b17fff]
                  rounded-full opacity-70
                  transition-all duration-300 group-hover:w-full
                "
              ></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className="
            md:hidden absolute top-[70px] left-0 w-full 
            bg-[#11141c]/97 backdrop-blur-xl 
            flex flex-col items-center gap-6 py-6
            border-t border-[#252a33]
            shadow-[0_8px_20px_rgba(0,0,0,0.45)]
            text-[#d4d6de]
          "
        >
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Certificates", link: "#certificates" },
            { name: "Services", link: "#services" },
            { name: "Fullstack", link: "#fullstack" },
            { name: "How I Work", link: "#how-i-work" },
            { name: "Contact", link: "#contact-me" },
          ].map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-white text-lg transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
