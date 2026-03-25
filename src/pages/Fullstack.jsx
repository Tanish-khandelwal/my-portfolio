import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaLightbulb } from "react-icons/fa";

import frontens from "../assets/image/frontens.jpg";
import backend from "../assets/backend.jpg";
import database from "../assets/database.jpg";
import problem from "../assets/problem.jpg";

export default function Fullstack() {
  return (
    <section id="fullstack" className="px-10 py-20 bg-black text-white h-screen">
      <h2 className="text-4xl font-bold text-center tracking-wide">Full Stack Developer</h2>
      <div className="w-32 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-center leading-relaxed">
        Hi, I’m Tanish Khandelwal, a passionate full-stack developer focused on building responsive websites.
        Skilled in frontend design, backend logic, and databases — I love turning ideas into real digital products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* Frontend Development */}
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={frontens}
            alt="frontend"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaLaptopCode className="text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-300">
              I design modern UI using HTML, CSS, JavaScript & React for fast and smooth user experience.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Backend Development */}
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={backend}
            alt="backend"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaServer className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-300">
              I create secure and scalable APIs using Node.js & Express for smooth functionality.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Database */}
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={database}
            alt="database"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaDatabase className="text-4xl text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database Management</h3>
            <p className="text-gray-300">
              I work with MongoDB & SQL to manage structured data efficiently.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        {/* Problem Solving */}
        <div className="relative p-8 bg-gray-900/60 rounded-2xl backdrop-blur-xl border border-gray-700 overflow-hidden shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300">
          <img
            src={problem}
            alt="problem"
            className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
          />
          <div className="relative z-20">
            <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-300">
              I solve logical challenges by combining UI, backend, and data to create real solutions.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
