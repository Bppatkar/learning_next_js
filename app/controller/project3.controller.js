import { NextResponse } from "next/server";
import  User  from "../models/project3.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function register(req) {
  try {
    const { userName, email, password } = await req.json();

    if (!userName || !email || !password) {
      return NextResponse.json({
        message: "All fields are required",
        success: false,
      });
    }

    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        message: "User already exists",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      userName,
      email,
      password: hashPassword,
    });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json({
      message: `error in project3_auth register Controller ${error.message}`,
      success: false,
    });
  }
}

export async function login(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json({
        message: "Invalid credentials",
        success: false,
      });
    }
    const token = jwt.sign({ id: user._id }, "secret", {
      expiresIn: "1d",
    });

    return NextResponse.json({
      message: `Welcome ${user.userName}`,
      success: true,
      user,
      token,
    });
  } catch (error) {
    return NextResponse.json({
      message: `error in project3_auth login Controller ${error.message}`,
      success: false,
    });
  }
}
