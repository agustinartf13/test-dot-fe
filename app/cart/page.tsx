"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import product1 from "@/images/product1.png";
import product2 from "@/images/product2.png";
import BillingForm from "@/components/BillingForm";

interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  quantity: number;
}

const cartItemsInitial: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: product1,
    price: 120,
    quantity: 1,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: product2,
    price: 650,
    quantity: 2,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>(cartItemsInitial);

  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  const calculateSubtotal = (quantity: number, price: number) => {
    return quantity * price;
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + calculateSubtotal(item.quantity, item.price),
      0
    );
  };

  return (
    <div className="container mx-auto min-h-screen w-full mt-10 p-5">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>

      <div className="shadow rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4 px-4 py-4 border-b font-semibold">
          <span>Product</span>
          <span>Price</span>
          <span className="text-right">Quantity</span>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 gap-4 items-center py-4 px-4"
          >
            <div className="flex items-center gap-5">
              <Image src={item.image} width={96} height={96} alt="product" />
              <span>{item.name}</span>
            </div>
            <span>${item.price}</span>

            <div className="text-right">
              <select
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, Number(e.target.value))
                }
                className="border rounded py-1 px-2"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-between items-center">
        <button className="border text-black p-4">Return To Shop</button>

        <div className="font-bold">
          Total: <span className="text-red-500">${calculateTotal()}</span>
        </div>

        <button className="border text-black p-4">Update Cart</button>
      </div>

      <BillingForm/>
    </div>
  );
};

export default CartPage;
