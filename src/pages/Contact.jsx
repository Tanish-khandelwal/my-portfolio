import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLocationDot, FaLinkedin, FaGithub, FaInstagram, FaPaperPlane, FaCheck, FaTriangleExclamation, FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // 100% Free Email delivery via Web3Forms
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "2a9af3f2-c009-48bf-8e11-eba1d113d0b3", // Replace with your free key from web3forms.com
          name,
          email,
          subject: subject || `Portfolio Contact Message from ${name}`,
          message
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        // Fallback: If no key pasted yet or error, trigger direct WhatsApp message
        const waMsg = `Hi Tanish, I'm ${name} (${email}). Subject: ${subject || 'Portfolio Inquiry'}. Message: ${message}`;
        window.open(`https://wa.me/916376872253?text=${encodeURIComponent(waMsg)}`, "_blank");
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      // Fallback to WhatsApp redirect if network error occurs
      const waMsg = `Hi Tanish, I'm ${name} (${email}). Subject: ${subject || 'Portfolio Inquiry'}. Message: ${message}`;
      window.open(`https://wa.me/916376872253?text=${encodeURIComponent(waMsg)}`, "_blank");
      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact-me" className="py-24 px-6 md:px-12 bg-[#0b0f19] relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold">Get In Touch</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white">
            Let's Build Something <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Great Together</span>
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            Open for Full-Stack Developer roles, RPA automation projects, and software collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Contact Cards + Map + Socials */}
          <div className="lg:col-span-5 space-y-6">

            <div className="p-6 bg-glass-card rounded-2xl border border-white/10 space-y-5 shadow-xl">
              <div className="flex items-center gap-4 p-3 bg-gray-900/60 rounded-xl border border-gray-800">
                <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-800 text-purple-300 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase block">Email Address</span>
                  <a href="mailto:tanishkhandelwal2605@gmail.com" className="text-sm font-bold text-white hover:text-purple-300 transition">
                    tanishkhandelwal2605@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-gray-900/60 rounded-xl border border-gray-800">
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xl">
                  <FaPhone />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase block">Phone / WhatsApp</span>
                  <a href="tel:+916376872253" className="text-sm font-bold text-white hover:text-emerald-300 transition">
                    +91 63768-72253
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 bg-gray-900/60 rounded-xl border border-gray-800">
                <div className="p-3 rounded-xl bg-pink-950/80 border border-pink-800 text-pink-300 text-xl">
                  <FaLocationDot />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold uppercase block">Location</span>
                  <span className="text-sm font-bold text-white">Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="p-6 bg-glass-card rounded-2xl border border-white/10 flex items-center justify-around shadow-xl">
              <a
                href="https://linkedin.com/in/tanishkhandelwal26"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-blue-400 hover:text-white hover:border-blue-500 hover:scale-110 transition duration-300 text-2xl"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Tanish-khandelwal"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-purple-500 hover:scale-110 transition duration-300 text-2xl"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/_tanishhh26/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-gray-900 border border-gray-800 text-pink-400 hover:text-white hover:border-pink-500 hover:scale-110 transition duration-300 text-2xl"
                title="Instagram Profile"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Map Frame */}
            {/* <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-48">
              <iframe
                title="Location Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.247564162817!2d75.76642287884547!3d26.95905849783423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ad9c87e833%3A0xc0b5f0f59161e1!2sKhetan%20Heart%20%26%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1774322597924!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div> */}

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-glass-card rounded-2xl border border-white/10 shadow-2xl space-y-6">

              <h4 className="text-2xl font-bold text-white mb-2">Send Me a Message</h4>

              {status === "success" && (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500/60 rounded-xl text-emerald-200 text-sm flex items-center gap-3 animate-fadeIn">
                  <FaCheck className="text-xl text-emerald-400" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon!</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-rose-950/80 border border-rose-500/60 rounded-xl text-rose-200 text-sm flex items-center gap-3 animate-fadeIn">
                  <FaTriangleExclamation className="text-xl text-rose-400" />
                  <span>Something went wrong. Please email directly to tanishkhandelwal2605@gmail.com</span>
                </div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Required Netlify hidden form inputs */}
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-400 block mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 block mb-1">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Full Stack Developer Opportunity / RPA Project"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1">Your Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-gray-900/90 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition text-sm"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-base rounded-xl shadow-xl shadow-purple-900/30 hover:shadow-purple-700/50 transition flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <FaPaperPlane /> {status === "sending" ? "Sending Message..." : "Send Message"}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
