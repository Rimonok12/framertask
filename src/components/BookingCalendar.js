'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

const timeSlots = ['09:00', '13:00', '17:00'];

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(
        `Booking confirmed for ${selectedDate.toDateString()} at ${selectedTime}`
      );
    } else {
      alert('Please select both date and time slot');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center px-6 py-20"
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-lg w-full text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Book Your Appointment</h2>

        {/* Date Picker */}
        <div className="mb-6">
          <label className="block mb-2 text-white font-semibold">
            Select a Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            className="w-full p-2 rounded text-black"
            placeholderText="Click to choose a date"
          />
        </div>

        {/* Time Slot Picker */}
        <div className="mb-6">
          <label className="block mb-2 text-white font-semibold">
            Select a Time Slot
          </label>
          <div className="flex justify-center gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`px-4 py-2 rounded-full ${
                  selectedTime === slot
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-700'
                } transition duration-200`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full text-white font-bold transition"
        >
          Confirm Booking
        </button>
      </div>
    </motion.section>
  );
}
