import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export function DELETE(request, { params }) {
  console.log(params.id);
  return NextResponse.json("Eliminando foto");
}

export async function GET(request, { params }) {
  try {
    const res = await pool.query("SELECT * FROM fotos WHERE foto_id = ?", [
      params.id,
    ]);
    if (res.length === 0) {
      return NextResponse.json(
        { message: "Foto no encontrada" },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(res[0]);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export function PUT(request, { params }) {
  console.log(params.id);
  return NextResponse.json("Editando foto");
}
