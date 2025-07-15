export async function POST(req) {
  const { timeSlot } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: `SecureMyRide Installation - ${timeSlot}`,
          },
          unit_amount: 4900,
        },
        quantity: 1,
      },
    ],
    metadata: {
      time_slot: timeSlot,
    },
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book`,
  });

  return NextResponse.json({ url: session.url });
}
