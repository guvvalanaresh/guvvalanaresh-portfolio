import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const ContactMe = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setSending(false);
          form.current.reset();
        },
        () => {
          setSuccess(false);
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-10 bg-gray-50 flex flex-col items-center px-4 sm:px-8"
    >
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-widest uppercase
                   px-4 sm:px-5 py-2 border-2 border-[#222] bg-[#fff8e7] text-[#111]
                   shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0_0_#94d82d]
                   transition-all duration-300 ease-in-out bbh-sans-bogle-regular
                   hover:bg-[#222] hover:text-[#fff8e7]
                   hover:-translate-y-1 text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-xl bg-white p-6 rounded-md shadow-md flex flex-col gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="user_name" className="text-sm font-mono font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="user_email" className="text-sm font-mono font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Your Email"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-mono font-semibold mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="border border-gray-300 p-2 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>
        </div>

        {/* Retro Send Message Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={sending}
            className="relative px-5 py-1.5 text-[12px] sm:text-sm font-mono font-semibold uppercase 
                       tracking-widest text-gray-900 bg-white border-2 border-black 
                       shadow-[3px_3px_0px_#000] transition-all duration-300 ease-in-out
                       hover:bg-black hover:text-white hover:translate-x-[-3px] hover:translate-y-[-3px] hover:cursor-pointer
                       hover:shadow-[6px_6px_0px_#22c55e] active:translate-x-0 active:translate-y-0
                       flex items-center gap-2 justify-center"
          >
            <HiOutlineMail size={18} />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>

        {/* Success / Error Message */}
        {success === true && (
          <p className="text-green-600 font-semibold text-center mt-2">Message sent successfully!</p>
        )}
        {success === false && (
          <p className="text-red-600 font-semibold text-center mt-2">
            Oops! Something went wrong. Try again.
          </p>
        )}
      </motion.form>

      {/* Contact Info Cards */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 mt-10 w-full max-w-xl justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Email Card */}
        <motion.a
          href="mailto:youremail@example.com"
          className="flex items-center gap-2 px-2 py-1 border-2 border-black rounded shadow-md bg-white hover:bg-gray-100 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -3 }}
        >
          <HiOutlineMail size={20} />
          <span className="font-mono text-sm font-semibold text-gray-800">gnareshkumarreddy7@gmail.com</span>
        </motion.a>

        {/* Phone Card */}
        <motion.a
          href="tel:+911234567890"
          className="flex items-center gap-2 px-2 py-1 border-2 border-black rounded shadow-md bg-white hover:bg-gray-100 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -3 }}
        >
          <HiOutlinePhone size={20} />
          <span className="font-mono text-sm font-semibold text-gray-800">+91 77948 86654</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ContactMe;
