import { login, register } from "../../controller/project3.controller";
import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";

//! here we use router - http://localhost:3000/api/project3_auth
//* POST method
export async function POST(req) {
  await connectDB().catch((error) =>
    console.error("Error connecting to database:", error)
  );
  try {
    const { searchParams } = new URL(req.url);
    //? http://localhost:3000/api/project3_auth?register=true
    if (searchParams.get("register")) {
      return register(req);
    }
    //? http://localhost:3000/api/project3_auth?login=true
    if (searchParams.get("login")) {
      return login(req);
    }
    return NextResponse.json({
      message: "Invalid Route in project3_auth",
      success: false,
    });
  } catch (error) {
    return NextResponse.json({
      message: `error in project3_auth register route ${error.message}`,
      success: false,
    });
  }
}
