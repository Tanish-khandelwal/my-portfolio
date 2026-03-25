import React from "react";
import { FaLaptopCode, FaGears, FaLightbulb, FaPeopleGroup } from "react-icons/fa6";

export default function Service() {
  return (
    <section id="how-i-work" className="px-10 py-20 bg-black text-white h-screen">
      <h2 className="text-4xl font-bold text-center tracking-wide">How I Work</h2>
      <div className="w-36 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-center leading-relaxed">
        Creating responsive , user-friendly websites using modern technologies and automation workflows.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16">

        {/* CARD 1 */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300 text-center">
          <FaLaptopCode className="text-5xl text-purple-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-3">Creative Frontend Builder</h3>
          <p className="text-gray-300 leading-relaxed">
            I design smooth, responsive, and interactive UIs that enhance user experience across devices.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300 text-center">
          <FaGears className="text-5xl text-blue-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-3">Problem Solver</h3>
          <p className="text-gray-300 leading-relaxed">
            I understand the problem first, then build scalable & clean solutions that are simple to maintain.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300 text-center">
          <FaLightbulb className="text-5xl text-green-400 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-3">Continuous Learner</h3>
          <p className="text-gray-300 leading-relaxed">
            I keep learning new tools, frameworks, and best practices to stay ahead in development.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="p-8 bg-gray-900/60 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-[0_0_25px_#1f1f1f] hover:shadow-[0_0_45px_#6a00ff] hover:scale-105 transition duration-300 text-center">
          <FaPeopleGroup className="text-5xl text-pink-500 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-3">Team Collaborator</h3>
          <p className="text-gray-300 leading-relaxed">
            I love building with teams, sharing ideas, and contributing to meaningful projects.
          </p>
        </div>

      </div>
    </section>
  );
}
