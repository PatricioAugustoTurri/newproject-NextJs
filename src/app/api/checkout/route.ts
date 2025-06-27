import { NextResponse } from "next/server";
import Stripe from "stripe";

console.log(process.env.STRIPE_SECRET_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  const { items } = await request.json();
  const shipping = 6;
  const subtotal = items.reduce((acc, item) => acc + item.price * item.cant, 0);
  const total = subtotal + 2 + shipping;
  const tax = total * 0.04;
  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/error",
    line_items: [
      ...items.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.title,
            images: [item.images[0]],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.cant,
      })),
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Envio",
          },
          unit_amount: shipping * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Impuesto fijo",
          },
          unit_amount: 2 * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Impuesto del 4%",
          },
          unit_amount: tax * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  return NextResponse.json(session);
}
