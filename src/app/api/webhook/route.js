import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { pool } from "@/lib/db";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  const body = await request.text();
  const headersList = headers();
  const sig = headersList.get("stripe-signature");
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      const sessionId = event.data.object.id;
      const sessionCustomer = event.data.object.customer_details;
      const products = event.data.object.metadata.products;
      //enviar mail
      //enviar sms
      //guardar en la base de datos
      await pool.query(
        "insert into orders (order_id, person, products) values (?, ?, ?)",
        [sessionId, JSON.stringify(sessionCustomer), products]
      );
      break;
    default:
      console.log("No se reconoce el evento");
  }
  return NextResponse.json(null, { status: 200 });
}
