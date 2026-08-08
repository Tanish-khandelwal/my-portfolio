import React, { useState } from "react";
import { FaCode, FaLaptopCode, FaDatabase, FaGears, FaLayerGroup, FaCss3Alt, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { SiJavascript, SiCplusplus, SiPython, SiHtml5, SiReact, SiNodedotjs, SiExpress, SiVite, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiGithub, SiNetlify, SiUipath } from "react-icons/si";

const skillCategories = [
  { id: "all", label: "All Skills", icon: <FaLayerGroup /> },
  { id: "languages", label: "Languages", icon: <FaCode /> },
  { id: "frameworks", label: "Frameworks & Libs", icon: <FaLaptopCode /> },
  { id: "databases", label: "Databases", icon: <FaDatabase /> },
  { id: "tools", label: "Tools & Automation", icon: <FaGears /> },
];

const skillsData = [
  // Languages
  { name: "JavaScript", category: "languages", level: "Advanced", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", category: "languages", level: "Intermediate", icon: <SiPython className="text-blue-400" /> },
  { name: "C++", category: "languages", level: "Intermediate", icon: <SiCplusplus className="text-indigo-400" /> },
  { name: "HTML5 & CSS3", category: "languages", level: "Advanced", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "SQL", category: "languages", level: "Advanced", icon: <FaDatabase className="text-cyan-400" /> },

  // Frameworks & Libraries
  { name: "React.js", category: "frameworks", level: "Advanced", icon: <SiReact className="text-cyan-400" /> },
  { name: "Node.js", category: "frameworks", level: "Advanced", icon: <SiNodedotjs className="text-emerald-500" /> },
  { name: "Express.js", category: "frameworks", level: "Advanced", icon: <SiExpress className="text-gray-300" /> },
  { name: "Vite", category: "frameworks", level: "Advanced", icon: <SiVite className="text-purple-400" /> },
  { name: "Tailwind CSS", category: "frameworks", level: "Advanced", icon: <SiTailwindcss className="text-sky-400" /> },

  // Databases
  { name: "MongoDB", category: "databases", level: "Advanced", icon: <SiMongodb className="text-emerald-400" /> },
  { name: "MySQL", category: "databases", level: "Advanced", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", category: "databases", level: "Intermediate", icon: <SiPostgresql className="text-blue-400" /> },

  // Tools & Automation
  { name: "UiPath RPA", category: "tools", level: "Certified Developer", icon: <SiUipath className="text-orange-500" /> },
  { name: "Git & GitHub", category: "tools", level: "Advanced", icon: <SiGithub className="text-white" /> },
  { name: "Netlify", category: "tools", level: "Advanced", icon: <SiNetlify className="text-teal-400" /> },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 10);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowAll(false);
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#0d121f] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold">Tech Stack</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Skills & Expertise</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/40"
                  : "bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className="p-5 bg-glass-card rounded-2xl border border-white/10 hover:border-purple-500/50 hover:scale-105 transition duration-300 group shadow-lg text-center flex flex-col items-center justify-center space-y-3"
            >
              <div className="text-4xl p-3 bg-gray-900/90 rounded-2xl border border-gray-800 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>
              <h4 className="text-sm font-bold text-white">{skill.name}</h4>
              <span className="text-[11px] px-2.5 py-0.5 bg-purple-950/60 border border-purple-800/60 text-purple-300 rounded-full font-medium">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {filteredSkills.length > 10 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600 hover:to-pink-600 border border-purple-500/40 text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/25 active:scale-95 group"
            >
              <span>{showAll ? "Show Less" : "Show More Skills"}</span>
              {showAll ? (
                <FaChevronUp className="text-purple-400 group-hover:text-white transition duration-300" />
              ) : (
                <FaChevronDown className="text-purple-400 group-hover:text-white transition duration-300" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
