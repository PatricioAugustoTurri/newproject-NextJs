import { FotoTypes } from "@/types/type-fotos";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: Request) {
  const { items } = await request.json();
  const shipping = 6;
  const subtotal = items.reduce(
    (acc: number, item: FotoTypes) => acc + item.price * item.cant,
    0
  );
  const total = subtotal + 2 + shipping;
  const tax = total * 0.04;
  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/error",
    shipping_address_collection: {
      allowed_countries: ["IT"],
    },
    phone_number_collection: { enabled: true },
    line_items: [
      ...items.map((item: FotoTypes) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            images: [item.image],
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
    metadata: {
      products: items
        .map(
          (item: FotoTypes) =>
            `id:${item.foto_id}, nombre:${item.name}, cant:${item.cant}`
        )
        .join("|"),
    },
    mode: "payment",
  });

  return NextResponse.json(session);
}
