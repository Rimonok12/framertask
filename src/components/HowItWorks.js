'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#393E46] relative  min-h-screen justify-center items-center py-20 px-6"
    >
      <div className="container text-white relative mx-auto text-center max-w-5xl">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-white"
        >
          Simple Booking Process
        </motion.h2>

        {/* Cards (manual layout like Testimonials/OurExpertise) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       bg-white/10 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 text-white"
          >
            <Image
              src="/images/21211.jpg"
              alt="Book Online"
              width={100}
              height={100}
              className="rounded-xl mb-4 border border-white object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Book Online</h3>
            <p className="text-sm text-white/90">
              Choose your preferred date and time slot (9:00 AM, 1:00 PM, or
              5:00 PM) and secure your appointment with a mandatory deposit via
              our integrated booking system.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       bg-white/10 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 text-white"
          >
            <Image
              src="/images/21212.png"
              alt="Installation"
              width={100}
              height={100}
              className="rounded-xl mb-4 border border-white object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">
              Professional Installation
            </h3>
            <p className="text-sm text-white/90">
              Our certified technician arrives at your London location with all
              necessary equipment. Installation takes exactly 3 hours with full
              system testing.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 max-w-xs
                       bg-white/10 backdrop-blur-lg rounded-2xl 
                       shadow-xl border border-white/20 text-white"
          >
            <Image
              src="/images/43023.jpg"
              alt="Complete Protection"
              width={100}
              height={100}
              className="rounded-xl mb-4 border border-white object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">Complete Protection</h3>
            <p className="text-sm text-white/90">
              Receive system training, warranty documentation, and your
              complimentary RFID-blocking key pouch or dash cam for booking
              online.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container text-white  mx-auto mt-25 text-center max-w-5xl">
        <motion.h2 className="text-3xl font-bold mb-6 text-white">
          Ready to secure your vehicle?
        </motion.h2>
        <p className="text-white/80 mb-8">
          Book your professional installation today with our certified experts.
        </p>

        <div className="mt-10">
          <a
            href="https://cal.com/securemyride"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-bold"
          >
            Schedule Your Installation
          </a>
        </div>
      </div>
    </motion.section>
  );
}
