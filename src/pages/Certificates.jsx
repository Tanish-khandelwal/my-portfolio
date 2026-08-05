import React from "react";
import { FaAward, FaGraduationCap, FaUpRightFromSquare } from "react-icons/fa6";
import { SiUipath, SiAccenture } from "react-icons/si";

const certificatesData = [
  {
    title: "UiPath RPA Developer Certification",
    issuer: "UiPath Studio & Automation",
    year: "Certified",
    icon: <SiUipath className="text-3xl text-orange-500" />,
    desc: "Completed UiPath RPA Developer certification, building automated data extraction, web scraping, and workflow processes.",
    link: "https://drive.google.com/file/d/1UNFwclEm6Hr8sV153y9W0eQZH1pAqEs3/view?usp=drive_link"
  },
  {
    title: "Data Analytics Simulation Certificate",
    issuer: "Accenture (via Forage)",
    year: "2025",
    icon: <SiAccenture className="text-3xl text-purple-400" />,
    desc: "Completed Accenture Data Analytics Simulation covering data cleaning, modeling, visualization, and strategic data insights.",
    link: "https://drive.google.com/file/d/1FOuvc4d2hbeKGp55w3qqDXmXFf_aUkud/view?usp=drive_link"
  },
  {
    title: "Full Stack Development Internship Certificate",
    issuer: "Biyani Group of Colleges",
    year: "2025",
    icon: <FaGraduationCap className="text-3xl text-blue-400" />,
    desc: "Certificate of completion for end-to-end full stack web application development using PHP, MySQL, and AJAX web architecture.",
    link: "https://drive.google.com/file/d/173EF0FwQCy0VuBO9LdXNCjOoIZBsRSP4/view?usp=drivesdk"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 md:px-12 bg-[#0d121f] relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold">Credentials</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Certifications & <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Accomplishments</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificatesData.map((cert, index) => (
            <div
              key={index}
              className="p-8 bg-glass-card rounded-2xl border border-white/10 hover:border-purple-500/40 transition duration-300 group shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 rounded-2xl bg-gray-900 border border-gray-800 group-hover:scale-110 transition duration-300">
                    {cert.icon}
                  </div>
                  <span className="px-3 py-1 bg-purple-950/80 border border-purple-800 text-purple-300 text-xs font-mono font-bold rounded-full">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-purple-400 mb-3">{cert.issuer}</p>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-xs rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  Verify Certificate <FaUpRightFromSquare className="text-[10px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
