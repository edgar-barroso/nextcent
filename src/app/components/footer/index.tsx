"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="text-neutral-white pt-12 ">
      <motion.div
        className=""
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Top Section */}
        <motion.div
          className="flex flex-col justify-between items-center gap-8 pb-12 border-b border-neutral-grey "
          variants={container}
        >
          <motion.div variants={item}>
            <h2 className="md:text-6xl text-3xl font-semibold text-center text-neutral-black">
              Pellentesque suscipit <br/>fringilla libero eu.
            </h2>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#"
              className="bg-primary hover:bg-primary-dark transition-colors rounded-md px-6 py-3 font-medium flex items-center gap-2"
            >
              Get a Demo <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-12 bg-neutral-black p-12"
          variants={container}
        >
          {/* Logo Section */}
          <motion.div variants={item} className="space-y-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="Nexcent Logo" 
                width={40} 
                height={40} 
              />
              <span className="text-xl font-semibold">Nexcent</span>
            </div>
            <p className="text-neutral-l_grey text-sm">
              Copyright © 2020 Nexcent IOL
              <br />
              All rights reserved
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-3 text-neutral-l_grey">
              {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-neutral-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-3 text-neutral-l_grey">
              {['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-neutral-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="font-semibold text-lg">Stay up to date</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white opacity-20 rounded-md py-3 px-4 text-neutral-d_grey placeholder-neutral-l_grey focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-l_grey hover:text-neutral-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}