'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="bg-black  relative min-h-screen flex flex-col justify-center items-center py-20 px-6"
    >
      <Image
        src="/images/heroSection.jpeg"
        alt="Technician installing Ghost immobiliser"
        fill
        className="object-cover z-0 opacity-80"
      />
      <div className="container mx-auto text-center relative z-10 text-white">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl font-bold mb-4 "
        >
          London&apos;s Leading Vehicle Security Specialists
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-lg mb-10 max-w-xl mx-auto"
        >
          Protect Your Investment with Professional Ghost® Immobiliser & GPS
          Tracker Installation
        </motion.p>

        {/* 🔐 Feature Cards Section */}
        <div className="flex flex-wrap justify-center gap-12 mb-12 px-4 py-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl 
                       border border-white/10"
          >
            <h3 className="font-semibold text-xl mb-2">Advanced Protection</h3>
            <p className="text-sm text-amber-950">
              Ghost® Immobiliser technology prevents key-cloning and relay theft
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl 
                       border border-white/10"
          >
            <h3 className="font-semibold text-xl mb-2">Mobile Service</h3>
            <p className="text-sm text-amber-950">
              Professional installation at your location across London
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       rounded-2xl bg-white/20 backdrop-blur-md shadow-2xl 
                       border border-white/10"
          >
            <h3 className="font-semibold text-xl mb-2">Expert Installation</h3>
            <p className="text-sm text-amber-950">
              Certified technicians with 3-hour guaranteed completion
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Book Your Security Installation
        </motion.a>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mt-6 text-lg text-white max-w-2xl mx-auto"
        >
          At SecureMyRide, we understand that your vehicle is more than
          transportation—it&apos;s a valuable asset that deserves the highest
          level of protection. That&apos;s why we specialize in installing
          cutting-edge aftermarket security systems that keep your vehicle safe
          from modern theft methods.
        </motion.p>
      </div>
    </motion.section>
  );
}
