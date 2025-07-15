'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleBooking = async () => {
    setLoading(true);
    const res = await fetch('/api/checkout', { method: 'POST' });
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
