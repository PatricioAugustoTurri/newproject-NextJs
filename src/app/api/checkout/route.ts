import { NextResponse } from "next/server";
import Stripe from "stripe";

console.log(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  const { items } = await request.json();
  console.log(items);
  const total = items.reduce((acc, item) => acc + item.price * item.cant, 0);
  console.log(total);
  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/error",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: items[0].title,
            images: [items[0].images[0]],
          },
          unit_amount: total * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  return NextResponse.json(session);
}
