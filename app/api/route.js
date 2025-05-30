import { NextResponse } from "next/server";

//CRUD
// C --> Create --> POST
// R --> Read --> GET
// U --> Update --> PUT
// D --> Delete --> DELETE

//! here we use route - http://localhost:3000/api

export async function GET(req) {
  return NextResponse.json({
    message: "For checking more routes use ThunderClient",
    success: true,
  });
}

