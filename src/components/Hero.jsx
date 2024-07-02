import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.svg";
import { motion } from "framer-motion";

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
            >
              SEEMAB ALI
            </motion.h1>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
            >
              {HERO_CONTENT}
            </motion.p>
            {/* Uncomment and update the link to your resume file if needed */}
            {/* <a href={resume} download className="mt-4 inline-block px-6 py-3 bg-cyan-500 text-white font-semibold text-lg rounded-md shadow-md hover:bg-cyan-600 transition duration-300">
              <span className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-2xl">My Resume</span>
            </a> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              src={profilePic}
              alt="SEEMAB ALI"
              className="w-full h-auto object-contain"
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 0, y: 80 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
