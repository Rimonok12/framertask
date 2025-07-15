'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-black min-h-screen flex items-center py-20 px-6"
    >
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-10 text-white"
        >
          What Our Customers Say
        </motion.h2>

        {/* Testimonial Cards (manual like OurExpertise) */}
        <div className="flex flex-wrap justify-center gap-12">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       bg-white/10 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 text-white"
          >
            <Image
              src="/images/test1.jpg"
              alt="James Mitchell"
              width={200}
              height={100}
              className="rounded-xl mb-4 border-2 border-white"
            />
            <h3 className="text-xl font-semibold mb-1">James Mitchell</h3>
            <p className="text-sm text-white/70 mb-2">
              Range Rover Owner, Canary Wharf
            </p>
            <p className="text-sm italic text-white/90">
              &quot;Outstanding service! The Ghost immobiliser installation was
              completed professionally at my office car park. Haven&apos;t
              worried about car theft since. Highly recommend
              SecureMyRide!&quot;
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       bg-white/10 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 text-white"
          >
            <Image
              src="/images/test2.jpg"
              alt="Sarah Thompson"
              width={200}
              height={100}
              className="rounded-xl mb-4 border-2 border-white"
            />
            <h3 className="text-xl font-semibold mb-1">Sarah Thompson</h3>
            <p className="text-sm text-white/70 mb-2">BMW Owner, Clapham</p>
            <p className="text-sm italic text-white/90">
              &quot;Fantastic mobile service – they came to my home in South
              London and installed the GPS tracker system in exactly 3 hours as
              promised. Professional, clean, and efficient.&quot;
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       bg-white/10 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 text-white"
          >
            <Image
              src="/images/test3.jpg"
              alt="Michael Chen"
              width={200}
              height={100}
              className="rounded-xl mb-4 border-2 border-white"
            />
            <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
            <p className="text-sm text-white/70 mb-2">
              Mercedes Owner, Hampstead
            </p>
            <p className="text-sm italic text-white/90">
              &quot;After my neighbour&apos;s car was stolen using relay theft,
              I called SecureMyRide immediately. The Ghost system gives me
              complete peace of mind. Worth every penny!&quot;
            </p>
          </motion.div>
        </div>

        {/* ⭐ Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-white text-sm"
        >
          ⭐ 4.9 out of 5 — based on 200+ installations
        </motion.div>
      </div>
    </motion.section>
  );
}
