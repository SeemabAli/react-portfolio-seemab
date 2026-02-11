import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

// Container variant to stagger the children's entry
const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each icon appearing
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

// eslint-disable-next-line react/prop-types
const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group p-2 hover:text-cyan-400 transition-colors duration-300"
    variants={itemVariants}
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-max px-3 py-1 text-[10px] font-medium text-white bg-black/80 backdrop-blur-sm border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      {label}
    </span>
  </motion.a>
);

const Navbar = () => {
  return (
    <nav className="mb-20 py-6 flex flex-col items-center justify-center md:flex-row md:justify-between border-b border-white/10">
      <motion.h1
        className="text-2xl font-bold tracking-tighter mb-4 md:mb-0 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hello World!
      </motion.h1>

      <motion.div
        className="flex items-center justify-center gap-2 text-2xl"
        initial="hidden"
        animate="visible"
        variants={navContainerVariants}
      >
        <SocialLink
          href="https://www.linkedin.com/in/seemab-ali-497058179/"
          icon={<FaLinkedin />}
          label="LinkedIn"
        />
        <SocialLink
          href="https://github.com/SeemabAli"
          icon={<FaGithub />}
          label="GitHub"
        />
        <SocialLink
          href="https://wa.me/+923395914110"
          icon={<FaWhatsapp />}
          label="WhatsApp"
        />
        <SocialLink
          href="https://www.instagram.com/console.ali790?igsh=OTI2cWZkeWg1cmZl"
          icon={<FaInstagram />}
          label="Instagram"
        />
        <SocialLink href={resume} icon={<GrDocumentUser />} label="Resume" />
      </motion.div>
    </nav>
  );
};

export default Navbar;
