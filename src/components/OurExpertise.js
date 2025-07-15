'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  whileHover: {
    scale: 1.05,
    y: -5,
    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
    transition: { type: 'spring', stiffness: 300 },
  },
};

export default function OurExpertise() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      //   bg-gradient-to-br from-blue-300 to-purple-300
      className="animated-gradient py-20 px-6 min-h-screen flex items-center"
    >
      <div className="container mx-auto text-center relative text-white">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl font-bold mb-6"
        >
          Our Security Solutions
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-lg max-w-3xl mx-auto mb-12"
        >
          SecureMyRide specializes in advanced vehicle security systems designed
          to protect against today&apos;s sophisticated theft techniques. Our
          mobile installation service brings professional-grade security
          directly to your location across London.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="whileHover"
            viewport={{ once: true }}
            className="bg-white/10 relative backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/oe1.jpeg"
              alt="Ghost Immobiliser Unit"
              width={300}
              height={200}
              className="rounded-lg mx-auto m-auto"
            />
            <h3 className="text-xl font-bold mb-2 mt-2">
              Ghost® Immobiliser System
            </h3>
            <p className="text-sm mb-3">
              The ultimate protection against key-cloning and relay theft. This
              invisible system prevents unauthorized engine start without the
              correct PIN sequence.
            </p>
            <p className="text-xs font-semibold">
              • Insurance-approved • Undetectable • No key fobs required
            </p>
            <a
              href="/products/ghost-immobiliser"
              className="text-blue-300 hover:underline text-xs mt-2 hover:text-sm"
            >
              Learn More About Ghost Immobiliser
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="whileHover"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/oe2.jpeg"
              alt="Ghost Immobiliser Unit"
              width={300}
              height={200}
              className="rounded-lg mx-auto m-auto"
            />
            <h3 className="text-xl font-bold mt-2 mb-2">
              Professional GPS Tracking
            </h3>
            <p className="text-sm mb-3">
              Real-time vehicle location monitoring with Meta Trak, GPS Live,
              and Global Telematics systems. Features remote immobilization
              capabilities.
            </p>
            <p className="text-xs font-semibold">
              • 24/7 monitoring • Remote immobilization • Theft recovery
              assistance
            </p>

            <a
              href="/products/gps-tracker"
              className="text-blue-300 hover:underline text-xs  hover:text-blue"
            >
              Compare gps tracking system
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="whileHover"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] text-white transition-transform duration-300 hover:scale-105"
          >
            {' '}
            <Image
              src="/images/oe3.jpeg"
              alt="Ghost Immobiliser Unit"
              width={300}
              height={200}
              className="rounded-lg mx-auto m-auto"
            />
            <h3 className="text-xl font-bold mt-2 mb-2">
              Mobile Installation Service
            </h3>
            <p className="text-sm mb-3">
              Professional installation at your preferred London location. Our
              certified technicians complete installations in 3 hours with
              minimal disruption to your schedule.
            </p>
            <p className="text-xs font-semibold">
              • London-wide coverage • Fixed 3-hour installation • Flexible
              scheduling
            </p>
            <a
              href="/products/gps-tracker"
              className="text-blue-300 hover:underline text-xs  hover:text-blue"
            >
              Check Service Area Coverage
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
