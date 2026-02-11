/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNode, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";
import { DiJsBadge, DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io5";

const TechCard = ({ title, icons, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-3xl backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-500 group"
  >
    <h3 className="text-neutral-500 text-sm font-medium mb-6 uppercase tracking-widest">
      {title}
    </h3>
    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="text-5xl md:text-6xl cursor-pointer"
          title={item.name}
        >
          {React.cloneElement(item.icon, { className: item.color })}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function Technologies() {
  const categories = [
    {
      title: "Frontend",
      delay: 0.1,
      icons: [
        { name: "React", icon: <RiReactjsLine />, color: "text-cyan-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill />,
          color: "text-cyan-400",
        },
        { name: "HTML5", icon: <DiHtml5 />, color: "text-orange-400" },
        { name: "CSS3", icon: <IoLogoCss3 />, color: "text-blue-600" },
        { name: "JS", icon: <DiJsBadge />, color: "text-yellow-400" },
      ],
    },
    {
      title: "Backend & DB",
      delay: 0.3,
      icons: [
        { name: "Node.js", icon: <FaNode />, color: "text-green-400" },
        { name: "Express", icon: <SiExpress />, color: "text-white" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
      ],
    },
    {
      title: "Tools & UI",
      delay: 0.5,
      icons: [
        { name: "Github", icon: <FaGithub />, color: "text-white" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-400" },
      ],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        className="my-20 text-center text-4xl font-light"
      >
        Tech <span className="text-neutral-500 font-semibold">Stack</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {categories.map((cat, i) => (
          <TechCard
            key={i}
            title={cat.title}
            icons={cat.icons}
            delay={cat.delay}
          />
        ))}
      </div>

      {/* Modern Floating Animation for the Background */}
      <div className="mt-16 flex justify-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] absolute -z-10"
        />
      </div>
    </div>
  );
}
