import Head from 'next/head';

export default function GPSTracker() {
  return (
    <div className="animated-gradient min-h-screen px-6 py-20 text-white">
      <Head>
        <title>GPS Tracking Systems | SecureMyRide</title>
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Professional GPS Tracking</h1>

        <p className="mb-4">
          Our GPS tracking solutions offer real-time vehicle monitoring using
          advanced technologies like Meta Trak, GPS Live, and Global Telematics
          systems. Whether for personal or fleet use, our trackers provide
          complete visibility and peace of mind.
        </p>

        <ul className="list-disc list-inside text-white/90 mb-6">
          <li>24/7 live location monitoring</li>
          <li>Remote immobilization capabilities</li>
          <li>Theft recovery assistance</li>
        </ul>

        <p className="mb-8">
          SecureMyRide’s certified installers ensure proper placement and
          testing of your system. We also offer user training and remote access
          setup to help you get the most out of your GPS tracker from day one.
        </p>

        <a
          href="https://cal.com"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold text-white"
        >
          Book Your Tracker Installation
        </a>
      </div>
    </div>
  );
}
