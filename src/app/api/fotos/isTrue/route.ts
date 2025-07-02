import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    const result = await pool.query("SELECT * FROM fotos WHERE isFavorite = true");
    return NextResponse.json(result);
}
