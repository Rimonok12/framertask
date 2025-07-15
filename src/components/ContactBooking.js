'use client';

import { motion } from 'framer-motion';

export default function ContactBooking() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className=" text-white min-h-screen flex items-center py-20 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Contact & Booking Information
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/90">
          {/* Operating Hours & Slots */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Service Hours & Booking Slots
            </h3>
            <ul className="space-y-3 text-lg">
              <li>Service Hours: 09:00 - 21:00 Daily</li>
              <li>Installation Slots: 09:00 | 13:00 | 17:00</li>
              <li>Service Area: London Only</li>
              <li>
                Booking Requirement: Online deposit required to confirm
                appointment
              </li>
            </ul>
          </div>

          {/* Contact & Booking Details */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Contact & Booking Details
            </h3>
            <ul className="space-y-3 text-lg">
              <li>Service Area: Greater London</li>
              <li>Mobile Installation: Yes (includes travel time)</li>
              <li>
                Booking Platform: Cal.com integration with fixed daily slots
              </li>
              <li>Payment: Stripe integration for mandatory deposits</li>
              <li>Notifications: Automated email and SMS confirmations</li>
              <li>
                Emergency Contact:{' '}
                <a
                  href="tel:+YOUR_PHONE"
                  className="underline hover:text-green-400"
                >
                  +Your Business Phone
                </a>
              </li>
              <li>
                Email:{' '}
                <a
                  href="mailto:your@email.com"
                  className="underline hover:text-green-400"
                >
                  your@email.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
