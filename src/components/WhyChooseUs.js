'use client';

import { motion } from 'framer-motion';

const benefits = [
  'We specialize exclusively in vehicle security - not general repairs',
  'All installations come to you anywhere in London',
  'Insurance-approved installations',
  'Full warranty on all systems',
  'Certified technician expertise',
  'Fixed pricing with no hidden costs',
];

const stats = [
  { number: '3+', label: 'Years of Security Experience' },
  { number: '500+', label: 'Successful Installations' },
  { number: '09:00-21:00', label: 'Daily Operating Hours' },
  { number: '3-Hour', label: 'Guaranteed Installation Time' },
];

export default function WhyChooseUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className=" bg-[#1B3C53] min-h-screen flex items-center py-20 px-6"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-10"
        >
          Why Choose SecureMyRide?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 text-lg max-w-3xl mx-auto text-white/90"
        >
          We are London&apos;s premier choice for professional vehicle security
          installation. Our specialized focus, mobile service, and commitment to
          quality set us apart from general automotive service providers.
        </motion.p>

        {/* Benefits List */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto text-left"
        >
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="inline-block mt-1 text-green-400 font-bold text-xl">
                ✓
              </span>
              <p>{benefit}</p>
            </li>
          ))}
        </motion.ul>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map(({ number, label }, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-6 shadow-lg"
            >
              <p className="text-4xl font-extrabold text-white mb-2">
                {number}
              </p>
              <p className="text-sm text-white/90">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
