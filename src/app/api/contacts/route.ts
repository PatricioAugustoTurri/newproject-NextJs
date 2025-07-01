import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const res = await pool.query(
    "insert into contacts(contact_name, email, contact_message) values(?,?,?)",
    [body.name, body.email, body.message]
  );
  return NextResponse.json(
    { message: "Datos enviados correctamente", res },
    { status: 200 }
  );
}
