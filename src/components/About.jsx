import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from "../assets/aboutMe.jpg";
import { ABOUT_CONTENT } from "../constants";

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === ABOUT_CONTENT.length - 1 ? 0 : prev + 1,
      );
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-neutral-900 pb-16 px-4 md:px-8">
      <motion.h2
        className="mt-12 mb-10 text-center text-3xl md:text-4xl font-light tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-neutral-500 font-semibold">Me</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:min-h-[450px] max-w-6xl mx-auto">
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center p-4 md:p-8 lg:p-12 mb-8 lg:mb-0">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-full h-full border-2 border-cyan-500/30 rounded-2xl -z-10" />
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                src={aboutImg}
                alt="about"
              />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Animated Slideshow */}
        <div className="w-full lg:w-1/2 flex flex-col px-2 md:px-6">
          <div className="relative min-h-[250px] sm:min-h-[200px] flex items-center lg:items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex flex-col items-center lg:items-start"
              >
                <h3 className="text-cyan-400 font-bold text-lg md:text-xl mb-1 tracking-tighter uppercase">
                  {ABOUT_CONTENT[activeSlide].title}
                </h3>
                <p className="text-neutral-500 text-[10px] md:text-xs font-mono mb-4">
                  {ABOUT_CONTENT[activeSlide].highlight}
                </p>
                <p className="text-neutral-400 leading-relaxed text-base md:text-lg text-center lg:text-left">
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
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  activeSlide === index
                    ? "w-8 md:w-10 bg-cyan-500"
                    : "w-3 md:w-4 bg-neutral-800 hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
