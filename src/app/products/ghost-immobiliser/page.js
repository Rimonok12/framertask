import Head from 'next/head';

export default function GhostImmobiliser() {
  return (
    <div className="animated-gradient min-h-screen px-6 py-20 text-white">
      <Head>
        <title>Ghost® Immobiliser System | SecureMyRide</title>
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Ghost® Immobiliser System</h1>
        <p className="mb-4">
          The ultimate protection against key-cloning and relay theft. Prevents
          unauthorized engine start without a correct PIN sequence.
        </p>
        <ul className="list-disc list-inside text-white/90 mb-6">
          <li>Insurance-approved</li>
          <li>Undetectable to thieves</li>
          <li>No key fobs required</li>
        </ul>
        <a
          href="https://cal.com"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold text-white"
        >
          Book Installation
        </a>
      </div>
    </div>
  );
}
