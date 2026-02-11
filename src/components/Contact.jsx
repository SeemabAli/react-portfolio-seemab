import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-12 text-center text-4xl font-light tracking-tight"
      >
        Get in <span className="text-neutral-500 font-semibold">Touch</span>
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          {/* Address */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-neutral-800 rounded-full mb-4 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <FaMapMarkerAlt size={20} />
            </div>
            <p className="text-neutral-400 tracking-tighter">
              {CONTACT.address}
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-neutral-800 rounded-full mb-4 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <FaPhoneAlt size={20} />
            </div>
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {CONTACT.phoneNo}
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="p-4 bg-neutral-800 rounded-full mb-4 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300">
              <FaEnvelope size={20} />
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="border-b border-neutral-700 text-neutral-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 pb-1"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer-style Signature */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-neutral-600 text-sm mt-20"
      >
        &copy; 2026 Seemab Ali. All rights reserved.
      </motion.p>
    </div>
  );
};

export default Contact;
