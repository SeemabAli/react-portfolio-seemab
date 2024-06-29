import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";
import { DiJsBadge, DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})
export default function Technologies() {
  return (
    <div className="border-b pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl p-4">
          <RiReactjsLine className="text-8xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <FaNode className="text-8xl text-green-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <SiMongodb className="text-8xl text-green-700" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <SiExpress className="text-8xl text-white-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <SiTypescript className="text-8xl text-blue-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <DiJsBadge className="text-8xl text-yellow-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <DiHtml5 className="text-8xl text-orange-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <IoLogoCss3 className="text-8xl text-blue-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <FaGithub className="text-8xl text-white-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <SiPostman className="text-8xl text-orange-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <RiTailwindCssFill className="text-8xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl p-4">
          <SiBootstrap className="text-8xl text-purple-400" />
        </motion.div>
      </div>
    </div>
  );
}
