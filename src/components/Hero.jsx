import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.svg";
import { motion } from "framer-motion";

// Container for staggering the text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Text elements appear one after another
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-36">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="pb-8 text-6xl font-extralight tracking-tight lg:mt-16 lg:text-8xl text-white"
              variants={childVariants}
            >
              SEEMAB ALI
            </motion.h1>

            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-slate-400 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent font-medium"
              variants={childVariants}
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              className="my-4 max-w-xl py-6 font-light tracking-normal leading-relaxed text-neutral-400 text-lg lg:text-left text-center"
              variants={childVariants}
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div variants={childVariants}>
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-cyan-500/20">
                <a
                  href="https://github.com/SeemabAli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Work
                </a>
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 mt-12 lg:mt-0">
          <div className="flex justify-center relative">
            {/* Soft glow effect behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]" />

            <motion.img
              src={profilePic}
              alt="SEEMAB ALI"
              className="w-4/5 h-auto object-contain rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
