import React from "react";
import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 py-20
      bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white h-screen"
    >
      {/* LEFT TEXT */}
      <div className="max-w-xl mt-10 md:mt-0">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Tanish Khandelwal
          </span>
        </h2>

        <p className="text-xl mt-4 font-semibold text-gray-200">
          I'm a{" "}
          <span className="text-purple-400 animate-pulse">
            Full-Stack and RPA Developer (Automation)
          </span>
        </p>

        <p className="text-gray-300 mt-5 leading-relaxed text-lg">
          🚀 I build fast, responsive & visually modern web experiences with clean
          code, strong UI/UX, and real-world functionality and Streamlining automation processes .

        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
         <a href="#services" className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-[YOUR_EXISTING_CLASSES]">
          View Projects
         </a>

          <a
            href="#contact-me"
            className="px-6 py-3 border border-purple-500 rounded-xl text-lg font-medium hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_#8800ff] transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[4px] border-purple-600 shadow-[0_0_40px_#a400ff] ring-offset-2 hover:scale-105 transition">
        <img src={hero} alt="profile" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
