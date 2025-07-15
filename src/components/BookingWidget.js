// 'use client';

// import { motion } from 'framer-motion';

// export default function BookingWidget() {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.2 }}
//       className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center px-6 py-20"
//     >
//       <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-4xl w-full text-white text-center">
//         <h2 className="text-3xl font-bold mb-6">Schedule Your Installation</h2>
//         <p className="text-white/80 mb-8">
//           Choose your preferred time slot and location below.
//         </p>

//         {/* Embed Cal.com iframe */}
//         <div className="w-full h-[700px]">
//           <iframe
//             src="https://cal.com/onish12"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             className="rounded-lg shadow-md"
//           ></iframe>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
