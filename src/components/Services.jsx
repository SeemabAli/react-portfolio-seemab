import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";

export default function Services() {
  const itemVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-20 text-center text-4xl">
        My <span className="text-neutral-500">Services</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            className="w-full lg:w-1/3 p-4 text-justify"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center bg-neutral-800 p-6 rounded-lg shadow-lg">
              <img
                src={service.img}
                alt={service.name}
                className="mb-4 w-16 h-16 object-contain"
              />
              <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
              <p className="text-center text-sm text-neutral-400">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
