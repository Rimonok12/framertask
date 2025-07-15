'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-blue-900/80 via-purple-900/80 to-blue-800/80 backdrop-blur-lg border-t border-white/20 text-white p-6 text-center text-sm">
      <p>© {new Date().getFullYear()} SecureMyRide. All rights reserved.</p>
      <p className="mt-1">
        Operating Hours: 09:00 - 21:00 Daily | Service Area: London Only
      </p>
      <p className="mt-1">
        Emergency Contact:{' '}
        <a
          href="tel:+YOUR_PHONE"
          className="underline hover:text-green-400 transition-colors duration-300"
        >
          +Your Business Phone
        </a>{' '}
        | Email:{' '}
        <a
          href="mailto:your@email.com"
          className="underline hover:text-green-400 transition-colors duration-300"
        >
          your@email.com
        </a>
      </p>
      <nav className="mt-3 space-x-6">
        <a
          href="/terms"
          className="hover:text-green-400 transition-colors duration-300"
        >
          Terms & Conditions
        </a>
        <a
          href="/privacy"
          className="hover:text-green-400 transition-colors duration-300"
        >
          Privacy Policy
        </a>
        <a
          href="/warranty"
          className="hover:text-green-400 transition-colors duration-300"
        >
          Installation Warranty Terms
        </a>
      </nav>
    </footer>
  );
}
