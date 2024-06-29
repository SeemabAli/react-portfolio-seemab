import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col items-center justify-center md:flex-row md:justify-between py-6">
      <motion.h1
        className="text-2xl mb-4 md:mb-0"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        Hello World!
      </motion.h1>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/seemab-ali-497058179/"
          target="blank"
          rel="noopener noreferrer"
          className="relative group"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <FaLinkedin />
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
            LinkedIn
          </span>
        </motion.a>
        <motion.a
          href="https://github.com/SeemabAli"
          target="blank"
          rel="noopener noreferrer"
          className="relative group"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <FaGithub />
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
            GitHub
          </span>
        </motion.a>
        <motion.a
          href="https://wa.me/+923175691110"
          target="blank"
          rel="noopener noreferrer"
          className="relative group"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <FaWhatsapp />
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp
          </span>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/console.ali790?igsh=OTI2cWZkeWg1cmZl"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <FaInstagram />
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Instagram
          </span>
        </motion.a>
        <motion.a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <GrDocumentUser />
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Resume
          </span>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
