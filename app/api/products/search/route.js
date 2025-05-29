//! here we use route - http://localhost:3000/api/products/search?query=iphone&price=99999
//! here we can use route without price- http://localhost:3000/api/products/search?query=Apple

import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    price: 99999,
    description: "this is a phone",
    category: "phones",
    userRating: 4.8,
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    price: 79999,
    description: "this is a phone",
    category: "phones",
    userRating: 4.7,
  },
  {
    id: 3,
    title: "Google Pixel 7",
    price: 69999,
    description: "this is a phone",
    category: "phones",
    userRating: 4.6,
  },
  {
    id: 4,
    title: "OnePlus 9 Pro",
    price: 69999,
    description: "this is a phone",
    category: "phones",
    userRating: 4.5,
  },
  {
    id: 5,
    title: "Xiaomi 13 Pro",
    price: 59999,
    description: "this is a phone",
    category: "phones",
    userRating: 4.4,
  },
  {
    id: 6,
    title: "MacBook Pro M2",
    price: 149999,
    description: "this is a laptop",
    category: "laptops",
    userRating: 4.9,
  },
  {
    id: 7,
    title: "Dell XPS 15",
    price: 139999,
    description: "this is a laptop",
    category: "laptops",
    userRating: 4.8,
  },
  {
    id: 8,
    title: "Lenovo ThinkPad X1",
    price: 129999,
    description: "this is a laptop",
    category: "laptops",
    userRating: 4.7,
  },
  {
    id: 9,
    title: "HP Envy 15",
    price: 109999,
    description: "this is a laptop",
    category: "laptops",
    userRating: 4.6,
  },
  {
    id: 10,
    title: "Asus ZenBook 14",
    price: 89999,
    description: "this is a laptop",
    category: "laptops",
    userRating: 4.5,
  },
  {
    id: 11,
    title: "Canon EOS R5",
    price: 249999,
    description: "this is a camera",
    category: "cameras",
    userRating: 4.8,
  },
  {
    id: 12,
    title: "Sony Alpha A7 IV",
    price: 199999,
    description: "this is a camera",
    category: "cameras",
    userRating: 4.7,
  },
  {
    id: 13,
    title: "Nikon Z9",
    price: 289999,
    description: "this is a camera",
    category: "cameras",
    userRating: 4.9,
  },
  {
    id: 14,
    title: "Fujifilm X-T4",
    price: 159999,
    description: "this is a camera",
    category: "cameras",
    userRating: 4.6,
  },
  {
    id: 15,
    title: "Apple Watch Series 8",
    price: 41999,
    description: "this is a smart watch",
    category: "smart-watches",
    userRating: 4.8,
  },
  {
    id: 16,
    title: "Samsung Galaxy Buds 2 Pro",
    price: 13999,
    description: "this is a earbuds",
    category: "earbuds",
    userRating: 4.7,
  },
  {
    id: 17,
    title: "Apple AirPods Pro",
    price: 19999,
    description: "this is a earbuds",
    category: "earbuds",
    userRating: 4.8,
  },
  {
    id: 18,
    title: "Anker PowerCore 90W",
    price: 13999,
    description: "this is a charger",
    category: "chargers",
    userRating: 4.7,
  },
  {
    id: 19,
    title: "Anker PowerCore 45W",
    price: 9999,
    description: "this is a charger",
    category: "chargers",
    userRating: 4.6,
  },
  {
    id: 20,
    title: "Apple Silicone Case",
    price: 3999,
    description: "this is a backcover",
    category: "backcovers",
    userRating: 4.8,
  },
];

// fetching single product
export async function GET(req) {
  const { searchParams } = req.nextUrl;
  // console.log("searchParams result", searchParams);
  const query = searchParams.get("query");
  // above we use quer after ? if we use bhanu above then we use bhanu here
  const price = searchParams.get("price");
  // console.log("we get price and query from searchParam : =", query, price);

  const searchedProduct = products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.price == price
  );

  // console.log("searchedProduct here", searchedProduct);
  if (searchedProduct.length === 0)
    return NextResponse.json({
      message: "product not found",
      success: false,
    });

  return NextResponse.json({
    message: "single product is fetched successfully🔥",
    success: true,
    searchedProduct,
  });
}
