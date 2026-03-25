import React from "react";
import { FaReact, FaNodeJs, FaDatabase} from "react-icons/fa";
import { SiUipath } from "react-icons/si";

export default function MyRole() {
  const skills = [
    { title: "Frontend Development", text: "Building modern, responsive UIs using React, Tailwind CSS & JavaScript.", icon: <FaReact /> },
    { title: "Backend Development", text: "Creating APIs & server logic using Node.js, Express, and REST architecture.", icon: <FaNodeJs /> },
    { title: "Database Management", text: "Handling data efficiently using MongoDB, SQL & schema design.", icon: <FaDatabase /> },
    { title: "RPA Development", text: "Designing and implementing automation solutions using UiPath.", icon: <SiUipath /> },
  ];

  return (
    <section id="skills" className="px-10 py-36 bg-[#0d0f15] text-white ">
      <h2 className="text-4xl font-semibold text-center">What I Do</h2>
      <div className="w-24 h-[3px] bg-[#6c6cff] mx-auto mt-4 rounded-full"></div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {skills.map((s, i) => (
          <div key={i} className="bg-[#161922] p-6 rounded-xl border border-gray-700 hover:border-[#6c6cff] transition">
            <div className="text-3xl mb-4 text-[#a9adff]">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 text-[15px]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
