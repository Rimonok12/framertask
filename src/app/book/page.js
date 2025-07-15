'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const router = useRouter();

  const handleBooking = async () => {
    if (!selectedTime) {
      alert('Please select a time slot');
      return;
    }

    setLoading(true);
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ timeSlot: selectedTime }),
    });

    const data = await res.json();
    if (data?.url) {
      router.push(data.url);
    } else {
      alert('Failed to redirect to Stripe');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-purple-300 text-white px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Book Your Security Installation
      </h1>

      <p className="text-lg max-w-xl text-center mb-8">
        Choose your preferred time slot and proceed with a £49 deposit to
        confirm your booking.
      </p>

      {/* Time slot selector */}
      <select
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="text-black px-4 py-2 rounded mb-6"
      >
        <option value="">Select a time slot</option>
        <option value="09:00">09:00 AM</option>
        <option value="13:00">01:00 PM</option>
        <option value="17:00">05:00 PM</option>
      </select>

      {/* Payment Button */}
      <button
        onClick={handleBooking}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-bold transition"
      >
        {loading ? 'Redirecting...' : 'Confirm & Pay £49'}
      </button>
    </main>
  );
}
