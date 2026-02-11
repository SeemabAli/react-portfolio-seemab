import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from "../assets/aboutMe.jpg";
import { ABOUT_CONTENT } from "../constants";

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Optional: Auto-play logic to switch slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === ABOUT_CONTENT.length - 1 ? 0 : prev + 1,
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        className="mt-20 mb-12 text-center text-4xl font-light tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-neutral-500 font-semibold">Me</span>
      </motion.h2>

      <div className="flex flex-wrap items-center lg:min-h-[450px]">
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:p-12 mb-12 lg:mb-0">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-500/30 rounded-2xl -z-10" />
            <div className="w-64 h-64 lg:w-80 lg:h-80 overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                src={aboutImg}
                alt="about"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Slideshow */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:p-8">
          <div className="relative w-full min-h-[280px] md:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center lg:items-start"
              >
                <h3 className="text-cyan-400 font-bold text-xl mb-1 tracking-tighter uppercase">
                  {ABOUT_CONTENT[activeSlide].title}
                </h3>
                <p className="text-neutral-500 text-xs font-mono mb-4">
                  {ABOUT_CONTENT[activeSlide].highlight}
                </p>
                <p className="text-neutral-400 leading-relaxed text-lg text-center lg:text-left">
                  {ABOUT_CONTENT[activeSlide].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Dots) */}
          <div className="mt-8 flex justify-center lg:justify-start gap-3">
            {ABOUT_CONTENT.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  activeSlide === index
                    ? "w-10 bg-cyan-500"
                    : "w-4 bg-neutral-800 hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
