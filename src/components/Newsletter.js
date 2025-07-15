'use client';

import { motion } from 'framer-motion';

const articles = [
  {
    title: "The Rise of Relay Theft: Why Traditional Alarms Aren't Enough",
    date: 'June 18, 2025',
    preview:
      'Modern vehicle theft has evolved beyond simple break-ins. Relay theft attacks exploit keyless entry systems, making traditional security measures obsolete. Learn how Ghost® Immobiliser technology provides the ultimate protection against these sophisticated attacks.',
    author: 'SecureMyRide Technical Team',
  },
  // Placeholder for future topics
  'Understanding GPS Tracking: Meta Trak vs. GPS Live vs. Global Telematics',
  'Installation Locations: Where to Position Your Vehicle Security Systems',
  'Insurance Benefits: How Security Systems Reduce Your Premiums',
  'London Vehicle Crime Statistics: Areas Most at Risk',
];

export default function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      viewport={{ once: true }}
      className=" text-white bg-[#393E46] min-h-screen flex flex-col items-center py-20 px-6"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12"
        >
          Security Insights & Industry Updates
        </motion.h2>

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-8 mb-16 shadow-lg text-left"
        >
          <h3 className="text-2xl font-semibold mb-3">{articles[0].title}</h3>
          <p className="text-sm text-white/90 mb-2">{articles[0].date}</p>
          <p className="mb-4">{articles[0].preview}</p>
          <p className="italic text-sm text-white/80">— {articles[0].author}</p>
        </motion.article>

        {/* Future Articles (titles only) */}
        <motion.ul className="list-disc list-inside space-y-3 text-left max-w-xl mx-auto text-white/90">
          {articles.slice(1).map((topic, i) => (
            <li
              key={i}
              className="cursor-default hover:text-green-400 transition-colors duration-300"
            >
              {topic}
            </li>
          ))}
        </motion.ul>

        <div className="container text-white  mx-auto mt-25 text-center max-w-5xl">
          <div className="">
            <a
              href="https://cal.com/securemyride"
              className="bg-gradient-to-r from-red-400 to-blue-500 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-bold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
