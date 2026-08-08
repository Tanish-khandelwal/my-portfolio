import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaRobot, FaLaptopCode, FaWandMagicSparkles, FaBolt } from "react-icons/fa6";

const techBadges = [
  "⚡ MERN Stack",
  "🤖 UiPath RPA Certified",
  "🗄️ MySQL & MongoDB",
  "🚀 REST APIs & Full-Stack",
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Progress counter animation
    const duration = 1800; // 1.8 seconds total loader duration
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600); // match exit animation duration
          }, 300);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // Rotate tech badges during load
    const badgeTimer = setInterval(() => {
      setBadgeIndex((prev) => (prev + 1) % techBadges.length);
    }, 450);

    return () => {
      clearInterval(timer);
      clearInterval(badgeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(12px)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070a13] text-white overflow-hidden select-none"
        >
          {/* Animated Background Glow Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-cyan-500/30 rounded-full blur-[130px] pointer-events-none"
          />

          {/* Cyber Grid Pattern Background */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Main Logo & Typography Container */}
          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            
            {/* Animated TK Shield / Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 14 }}
              className="relative mb-6 group cursor-default"
            >
              {/* Outer Pulsing Glow Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 0.9, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 rounded-3xl blur-md"
              />

              <div className="relative w-24 h-24 rounded-2xl bg-[#0d1222] border-2 border-purple-400/50 flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20" />
                <span className="text-4xl font-extrabold tracking-tighter bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-300 bg-clip-text text-transparent drop-shadow">
                  TK
                </span>
              </div>
            </motion.div>

            {/* Name Reveal */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white uppercase mb-2 font-mono"
            >
              Tanish <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Khandelwal</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-xs uppercase tracking-[0.25em] text-purple-300 font-semibold mb-6 flex items-center gap-2 justify-center"
            >
              <FaWandMagicSparkles className="text-pink-400 animate-pulse text-xs" />
              Full-Stack & RPA Specialist
              <FaBolt className="text-cyan-400 animate-pulse text-xs" />
            </motion.p>

            {/* Animated Rotating Tech Badge */}
            <div className="h-8 mb-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={badgeIndex}
                  initial={{ y: 12, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -12, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs font-mono font-medium shadow-lg backdrop-blur-md"
                >
                  {techBadges[badgeIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full space-y-2"
            >
              <div className="w-full h-2 bg-gray-900/90 rounded-full border border-purple-900/40 p-0.5 overflow-hidden shadow-inner relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 rounded-full relative"
                  style={{ width: `${Math.min(100, Math.round(progress))}%` }}
                >
                  {/* Glowing lead light */}
                  <div className="absolute top-0 right-0 bottom-0 w-3 bg-white blur-[2px] rounded-full animate-pulse" />
                </motion.div>
              </div>

              {/* Progress Percentage Display */}
              <div className="flex justify-between items-center text-[11px] font-mono text-gray-400 font-semibold px-1">
                <span>INITIALIZING SYSTEM...</span>
                <span className="text-purple-300 font-bold">{Math.min(100, Math.round(progress))}%</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
