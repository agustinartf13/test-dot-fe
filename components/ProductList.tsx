"use client"
import React from "react";
import ItemCard from "./ItemCard";
import { products } from "@/lib/products";


const ProductList = () => {

  return (
    <div className="flex max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ItemCard 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
