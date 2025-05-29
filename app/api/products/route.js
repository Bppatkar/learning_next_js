//! here we use route - http://localhost:3000/api/products
import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "phones",
    price: 6999,
    description: "this is a phone",
    category: "phones",
    userRating: 4.5,
  },
  {
    id: 2,
    title: "laptops",
    price: 87999,
    description: "this is a laptop",
    category: "laptops",
    userRating: 4.0,
  },
  {
    id: 3,
    title: "cameras",
    price: 33999,
    description: "this is a camera",
    category: "cameras",
    userRating: 4.2,
  },
];

export async function GET(req) {
  return NextResponse.json({
    message: "all products are fetched successfully🔥",
    success: true,
    products,
  });
}
