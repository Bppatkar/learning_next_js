import { NextResponse } from "next/server";

//CRUD
// C --> Create --> POST
// R --> Read --> GET
// U --> Update --> PUT
// D --> Delete --> DELETE

//! here we use route - http://localhost:3000/api

export async function GET(req) {
  return NextResponse.json({
    message: "For checking API use ThunderClient/Postman",
    description: "all api is working fine",
    data: {
      api1: "http://localhost:3000/api/project3_auth?register=true",
      api2: "http://localhost:3000/api/project3_auth?login=true",
    },
    status: 200,
    success: true,
  });
}
