import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";

export default function About() {
  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="mt-20 text-center text-4xl"
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
      >
        About<span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8">
          <motion.div
            className="w-48 h-48 lg:w-64 lg:h-64 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <img
              className="object-cover rounded-full w-full h-full"
              src={aboutImg}
              alt="about"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:p-8">
          <motion.div
            className="max-w-xl py-6"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <p className="my-2">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
