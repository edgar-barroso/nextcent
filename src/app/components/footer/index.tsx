"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

const COMPANY_LINKS: FooterLink[] = [
  { label: 'About us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' },
];

const SUPPORT_LINKS: FooterLink[] = [
  { label: 'Help center', href: '/help' },
  { label: 'Terms of service', href: '/terms' },
  { label: 'Legal', href: '/legal' },
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Status', href: '/status' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const hoverVariants = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

const tapVariants = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

export function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="text-neutral-white pt-12" role="contentinfo">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col justify-between items-center gap-8 pb-12 border-b border-neutral-grey"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="md:text-6xl text-3xl font-semibold text-center text-neutral-black">
              Pellentesque suscipit <br/>fringilla libero eu.
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={hoverVariants}
            whileTap={tapVariants}
          >
            <Link
              href="#"
              className="bg-primary hover:bg-primary-dark transition-colors rounded-md px-6 py-3 font-medium flex items-center gap-2"
              aria-label="Get a demo"
            >
              Get a Demo <span className="text-xl" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-12 bg-neutral-black p-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.svg" 
                alt="Nexcent Logo" 
                width={40} 
                height={40} 
                priority
              />
              <span className="text-xl font-semibold">Nexcent</span>
            </div>
            <p className="text-neutral-l_grey text-sm">
              Copyright © {new Date().getFullYear()} Nexcent IOL
              <br />
              All rights reserved
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-3 text-neutral-l_grey">
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="hover:text-neutral-white transition-colors"
                    aria-label={label}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <ul className="space-y-3 text-neutral-l_grey">
              {SUPPORT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link 
                    href={href} 
                    className="hover:text-neutral-white transition-colors"
                    aria-label={label}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Stay up to date</h3>
            <form onSubmit={handleEmailSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white opacity-20 rounded-md py-3 px-4 text-neutral-d_grey placeholder-neutral-l_grey focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email address"
                required
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-l_grey hover:text-neutral-white"
                aria-label="Subscribe to newsletter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}