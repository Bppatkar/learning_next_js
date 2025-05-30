//! here we use route - http://localhost:3000/api/products
import { NextResponse } from "next/server";

let products = [
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
    title: "MacBook Pro M2",
    price: 149999,
    description: "this is a laptop",
    category: "laptops",
    userRating: 4.9,
  },
  {
    id: 3,
    title: "Canon EOS R5",
    price: 249999,
    description: "this is a camera",
    category: "cameras",
    userRating: 4.8,
  },
  {
    id: 4,
    title: "Apple Watch Series 8",
    price: 41999,
    description: "this is a smart watch",
    category: "smart-watches",
    userRating: 4.8,
  },
  {
    id: 5,
    title: "Samsung Galaxy Buds 2 Pro",
    price: 13999,
    description: "this is a earbuds",
    category: "earbuds",
    userRating: 4.7,
  },
  {
    id: 6,
    title: "Anker PowerCore 90W",
    price: 13999,
    description: "this is a charger",
    category: "chargers",
    userRating: 4.7,
  },
  {
    id: 7,
    title: "Apple Silicone Case",
    price: 3999,
    description: "this is a backcover",
    category: "backcovers",
    userRating: 4.8,
  },
  {
    id: 8,
    title: "Sony Bravia XR A95K",
    price: 249999,
    description: "this is a tv",
    category: "tvs",
    userRating: 4.9,
  },
];

//! GET request
// fetching all products
export async function GET(req) {
  return NextResponse.json({
    message: "all products are fetched successfully🔥",
    success: true,
    products,
  });
}

//! POST request
//? checking by me
//* in next_js POST route we get data in "json" from body
/* export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);

    products.push(data);

    return NextResponse.json({
      message: "getting data from Body and check product array",
      success: true,
      bodyData: data,
    });
  } catch (error) {
    console.error("Error parsing JSON:", error);

    return NextResponse.json({
      message: "Failed to parse JSON",
      success: false,
    });
  }
} */

export async function POST(req) {
  const { title, price, description, category, userRating } = await req.json();
  products.push({
    id: products.length + 1,
    title,
    price,
    description,
    category,
    userRating,
  });
  return NextResponse.json({
    message: "product is added successfully🔥",
    success: true,
    products,
  });
}

//! PUT request
// update product
//! here we use route - http://localhost:3000/api/products?id=21
export async function PUT(req) {
  try {
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    const updatedProduct = await req.json();
    updatedProduct.id = +id;

    //* updating product
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === +id) {
        products[i] = { ...products[i], ...updatedProduct };
        break;
      }
    }

    //? or we can do same thing with findIndex method
    /* const index = products.findIndex((product) => product.id == id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updatedProduct, id: +id };
    } */

    return NextResponse.json({
      message: "product is updated successfully",
      success: true,
      updatedProduct: products.find((product) => product.id === +id),
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update product",
      success: false,
    });
  }
}

//! DELETE request
// delete product
//! here we use route - http://localhost:3000/api/products?id=21
export async function DELETE(req) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  products = products.filter((product) => product.id !== +id);

  return NextResponse.json({
    message: "product is deleted successfully",
    success: true,
    products,
  });
}
