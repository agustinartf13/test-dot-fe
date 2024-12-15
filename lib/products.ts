import product1 from "@/images/product1.png";
import product2 from "@/images/product2.png";
import product3 from "@/images/product3.png";
import product4 from "@/images/product4.png";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: product1,
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 4.8,
    reviews: 88,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: product2,
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4.5,
    reviews: 75,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: product3,

    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 4.7,
    reviews: 99,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: product4,
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.6,
    reviews: 80,
  },
];
