'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-400 to-blue-500 backdrop-blur-lg border-t border-white/20 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Operating Hours Section */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm">
            <span className="font-semibold">Operating Hours:</span> 09:00 -
            21:00 Daily | Service Area: London Only
          </p>
          <div className="space-x-4">
            <a
              href="tel:+YOUR_PHONE"
              className="underline hover:text-green-400 transition-colors duration-300"
            >
              Call Us: +Your Business Phone
            </a>
            <a
              href="mailto:your@email.com"
              className="underline hover:text-green-400 transition-colors duration-300"
            >
              Email: your@email.com
            </a>
          </div>
        </div>

        {/* Legal and Links Section */}
        <div className="border-t border-white/30 pt-6 text-center text-sm">
          <p className="text-xs mb-2">
            © {new Date().getFullYear()} SecureMyRide. All rights reserved.
          </p>
          <nav className="space-x-6">
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
        </div>
      </div>
    </footer>
  );
}
