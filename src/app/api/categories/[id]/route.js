import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const res = await pool.query(
      "Select * from fotos inner join categories on fotos.category_id = categories.category_id where categories.category_id = ?",
      [id]
    );
    if (res.length === 0) {
      return NextResponse.json(
        { message: "Categoria no encontrada" },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
