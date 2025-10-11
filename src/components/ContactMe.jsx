import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="py-10 bg-gray-50 flex flex-col items-center min-h-screen px-4 sm:px-6"
    >
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest uppercase
                   px-4 sm:px-5 py-2 border-2 border-[#222] bg-[#fff8e7] text-[#111]
                   shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0_0_#94d82d]
                   transition-all duration-300 ease-in-out cursor-pointer
                   hover:bg-[#222] hover:text-[#fff8e7] hover:-translate-y-1
                   bbh-sans-bogle-regular text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Card */}
      <motion.div
        className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-[3px_3px_0px_#000]
                   p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300 
                   hover:-translate-y-1 hover:shadow-[6px_6px_0px_#22c55e]"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-gray-700 font-mono text-xs font-bold sm:text-base">
          <p className="flex items-center gap-3 break-words">
            <FaEnvelope className="text-[#22c55e] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            gnareshkumarreddy7@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#22c55e] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            +91 77948 86654
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#22c55e] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            Hyderabad, India
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-black px-3 py-2 font-mono text-sm rounded-sm
                       focus:outline-none focus:border-[#22c55e] transition-all duration-300 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 border-black px-3 py-2 font-mono text-sm rounded-sm
                       focus:outline-none focus:border-[#22c55e] transition-all duration-300 w-full"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border-2 border-black px-3 py-2 font-mono text-sm rounded-sm
                       focus:outline-none focus:border-[#22c55e] transition-all duration-300 w-full resize-none"
          ></textarea>

          {/* Send Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              x: -2,
              y: -2,
              boxShadow: "4px 4px 0px #22c55e",
              backgroundColor: "#000",
              color: "#fff",
            }}
            transition={{ duration: 0.3 }}
            className="relative px-5 py-2 text-sm font-mono font-semibold uppercase tracking-widest
                       text-gray-900 bg-white border-2 border-black shadow-[2px_2px_0px_#000]
                       transition-all duration-300 ease-in-out active:translate-x-0 active:translate-y-0"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactMe;
