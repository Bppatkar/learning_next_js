import { NextResponse } from "next/server";

//CRUD
// C --> Create --> POST
// R --> Read --> GET
// U --> Update --> PUT
// D --> Delete --> DELETE

export async function GET(req) {
  return NextResponse.json({
    message: "For checking more routes use ThunderClient",
    success: true,
  });
}

