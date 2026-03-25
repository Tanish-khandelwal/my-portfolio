import React from "react";
import { FaShieldAlt, FaMobileAlt } from "react-icons/fa";

export default function Certificates() {
  return (
    <section id="certificates" className="px-10 py-48 bg-black text-white h-screen " >
      <h2 className="text-4xl font-bold text-center tracking-wide">Certificates</h2>
      <div className="w-32 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">

        {/* Cyber Security Card */}
        <div className="p-8 bg-gray-900/60 rounded-2xl border border-gray-700 backdrop-blur-xl shadow-[0px_0px_25px_#1f1f1f] hover:shadow-[0px_0px_40px_#6a00ff] hover:scale-105 transition duration-300">
          <FaShieldAlt className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">UiPath RPA Developer</h3>

          <p className="text-gray-300 leading-relaxed">
            Completed the UiPath RPA Developer course and Build my first automation process with Studio.
          </p>

          <a
            href="https://drive.google.com/file/d/1UNFwclEm6Hr8sV153y9W0eQZH1pAqEs3/view?usp=drive_link"
            target="_blank"
            className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:scale-110 transition"
          >
            View Certificate
          </a>
        </div>

        {/* Digital Marketing Card */}
        <div className="p-8 bg-gray-900/60 rounded-2xl border border-gray-700 backdrop-blur-xl shadow-[0px_0px_25px_#1f1f1f] hover:shadow-[0px_0px_40px_#6a00ff] hover:scale-105 transition duration-300">
          <FaMobileAlt className="text-4xl text-purple-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Data	Analytics </h3>

          <p className="text-gray-300 leading-relaxed">
            Accenture Data Analytics Simulation (Forage) A simulation that enhances understanding of data
            analytics in a practical environment.
          </p>

          <a
            href="https://drive.google.com/file/d/1FOuvc4d2hbeKGp55w3qqDXmXFf_aUkud/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2 rounded-lg shadow hover:scale-110 transition"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}
