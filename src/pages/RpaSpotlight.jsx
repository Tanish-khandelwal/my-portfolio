import React from "react";
import { SiUipath } from "react-icons/si";
import { FaGears, FaRobot, FaFileExcel, FaGlobe, FaShieldHalved, FaArrowRight } from "react-icons/fa6";

const botWorkflows = [
  {
    title: "Web Scraping & Data Extraction Bot",
    desc: "Automates web data scraping across dynamic websites, extracts tabular data, and exports directly to structured Excel/CSV files.",
    icon: <FaGlobe className="text-cyan-400 text-2xl" />,
    badge: "UiPath Studio"
  },
  {
    title: "Automated Excel & Data Processing",
    desc: "Processes multi-sheet Excel workbooks, cleans invalid entries, calculates metrics, and generates automated email reports.",
    icon: <FaFileExcel className="text-emerald-400 text-2xl" />,
    badge: "Excel Automation"
  },
  {
    title: "PDF & Invoice Data Extraction",
    desc: "Extracts key invoice metadata (Invoice No, Date, Total Amount) from unstructured PDF files using OCR and regex matching.",
    icon: <FaRobot className="text-pink-400 text-2xl" />,
    badge: "Document Understanding"
  },
  {
    title: "API & Process Orchestration",
    desc: "Integrates UiPath Orchestrator with web REST APIs to trigger background automated bot queues on scheduled intervals.",
    icon: <FaShieldHalved className="text-amber-400 text-2xl" />,
    badge: "UiPath Orchestrator"
  }
];

export default function RpaSpotlight() {
  return (
    <section id="automation" className="py-24 px-6 md:px-12 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-300 text-xs font-semibold">
            <SiUipath className="text-orange-500" /> Enterprise RPA Expertise
          </div>

          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            UiPath <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">Robotic Process Automation</span>
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Certified UiPath RPA Developer combining full-stack software development with automated workflow bots to eliminate repetitive manual operations and optimize business productivity.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Workflows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {botWorkflows.map((bot, idx) => (
            <div
              key={idx}
              className="p-6 bg-glass-card rounded-2xl border border-white/10 hover:border-orange-500/40 transition duration-300 group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-gray-900 border border-gray-800 group-hover:scale-110 transition">
                    {bot.icon}
                  </div>
                  <span className="px-2.5 py-1 bg-orange-950/80 border border-orange-800/80 text-orange-300 text-[11px] font-mono rounded-full">
                    {bot.badge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition">
                  {bot.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {bot.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-orange-400 font-semibold">
                <span>Automated Workflow</span>
                <FaGears className="group-hover:rotate-180 transition duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Certificate CTA Banner */}
        <div className="mt-12 p-8 bg-gradient-to-r from-purple-950/50 via-gray-900 to-orange-950/50 border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <SiUipath className="text-orange-500" /> UiPath RPA Developer Certificate
            </h4>
            <p className="text-xs text-gray-300">
              Completed official UiPath RPA Developer training & built automation bots in UiPath Studio.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1UNFwclEm6Hr8sV153y9W0eQZH1pAqEs3/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 text-white font-semibold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
          >
            View Certificate <FaArrowRight />
          </a>
        </div>

      </div>
    </section>
  );
}
