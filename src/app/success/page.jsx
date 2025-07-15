export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-purple-300 text-white text-center px-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-lg">
          You have cancelled your booking. Please try again if this was a
          mistake.
        </p>
      </div>
    </main>
  );
}
