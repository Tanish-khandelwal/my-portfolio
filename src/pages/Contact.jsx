import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact-me" className="px-10 py-20 bg-black text-white ">
      <h2 className="text-4xl font-bold text-center tracking-wide">Contact Me</h2>
      <div className="w-32 h-1 bg-yellow-500 mx-auto mt-3 rounded"></div>

      <div className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* LEFT PANEL - CONTACT INFO */}
        <div className="flex-1 space-y-6">

          {/* Contact Card */}
          <div className="p-6 bg-gray-900/60 rounded-2xl border border-gray-700 shadow-[0px_0px_25px_#1f1f1f] backdrop-blur-xl">
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-2xl text-yellow-500" />
              <p className="text-lg font-light">tanish26112005@gmail.com</p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-2xl text-green-400" />
              <p className="text-lg font-light">+91 6376872253</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-red-500" />
              <p className="text-lg font-light">Jaipur, Rajasthan</p>
            </div>
          </div>

          {/* Map */}
          <iframe
            className="w-full h-52 rounded-2xl border border-gray-700 shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.247564162817!2d75.76642287884547!3d26.95905849783423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ad9c87e833%3A0xc0b5f0f59161e1!2sKhetan%20Heart%20%26%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1774322597924!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4 text-3xl">
            <a href="https://www.linkedin.com/in/tanish-khandelwal-654108315"
              target="_blank"
              className="text-blue-500 hover:scale-125 hover:-rotate-6 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Tanish-khandelwal"
              target="_blank"
              className="text-gray-300 hover:scale-125 hover:-rotate-6 transition duration-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/_tanishhh26/"
              target="_blank"
              className="text-pink-500 hover:scale-125 hover:-rotate-6 transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT PANEL - FORM */}
        <div className="flex-1">
          <form
            className="flex flex-col gap-5"
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = { name, email, subject, message };

              try {
                const res = await fetch("http://localhost:5170/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });

                if (res.ok) {
                  alert("Message sent successfully 😊");
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                } else {
                  alert("Failed to send ❌");
                }
              } catch (error) {
                alert("Something went wrong!");
              }
            }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none transition"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-semibold py-3 rounded-xl shadow-xl hover:scale-105 hover:shadow-[0_0_25px_#aa00ff] transition flex items-center justify-center gap-3"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
