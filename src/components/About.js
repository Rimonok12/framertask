'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="bg-black  relative min-h-screen flex flex-col justify-center items-center py-20 px-6"
    >
      <Image
        src="/images/about.jpeg"
        alt="Technician installing Ghost immobiliser"
        fill
        className="object-cover z-0 opacity-80"
      />
      <div className="container mx-auto text-center max-w-4xl space-y-10 relative text-white">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="text-4xl font-bold "
        >
          About SecureMyRide
        </motion.h2>

        {/* Main Heading */}
        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-2xl font-semibold"
        >
          London&apos;s Trusted Vehicle Security Installation Specialists
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-lg leading-relaxed text-white/90"
        >
          SecureMyRide is a specialist vehicle security installer serving London
          with both on-premise and mobile installation services. We focus
          exclusively on advanced aftermarket security systems that protect
          against modern vehicle theft methods.
        </motion.p>

        {/* Mission + Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white transition-transform duration-300 hover:scale-105"
          >
            <h4 className="text-xl font-bold mb-2">Our Mission</h4>
            <p className="text-sm leading-relaxed text-white/90">
              Our mission is to provide London vehicle owners with peace of mind
              through professional installation of the most advanced security
              systems available, delivered with convenience and expertise.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white transition-transform duration-300 hover:scale-105"
          >
            <h4 className="text-xl font-bold mb-2">Our Vision</h4>
            <p className="text-sm leading-relaxed text-white/90">
              To be London&apos;s most trusted name in vehicle security, setting
              the standard for professional installation and customer service in
              the automotive security industry.
            </p>
          </motion.div>
        </div>
        <motion.a
          href="https://cal.com/onish12"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Get your Quote today
        </motion.a>
      </div>
    </motion.section>
  );
}
