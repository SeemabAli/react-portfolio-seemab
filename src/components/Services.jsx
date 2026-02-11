import { motion } from "framer-motion";
import { SERVICES } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Services() {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-16 text-center text-4xl font-light tracking-tight"
      >
        My <span className="text-neutral-500 font-semibold">Expertise</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            {/* Animated Gradient Background on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>

            <div className="relative flex flex-col h-full bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl backdrop-blur-xl hover:border-neutral-700 transition-all duration-300">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-neutral-800 group-hover:bg-neutral-700 transition-colors duration-300">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold text-white tracking-tight">
                {service.name}
              </h3>

              <p className="text-neutral-400 leading-relaxed text-sm">
                {service.desc}
              </p>

              {/* Decorative Accent */}
              <div className="mt-6 w-8 h-1 bg-neutral-800 group-hover:w-16 group-hover:bg-cyan-500 transition-all duration-500 rounded-full" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
