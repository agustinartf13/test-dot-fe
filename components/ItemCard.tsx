
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";

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

interface ItemCardProps {
  product: Product;
}

const ItemCard: React.FC<ItemCardProps> = ({ product }) => {

  const router = useRouter()

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md p-4 transition duration-200">
      {/* Diskon */}
      {product.discount && (
        <div className="absolute bg-red-500 text-white text-xs px-2 py-1 rounded-tr-lg">
          -{product.discount}%
        </div>
      )}

      {/* Gambar Produk */}
      <div className="relative">
        <Image
          src={product.image}
          alt="Product Image"
          width={500}
          height={500}
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
            <FaHeart className="text-gray-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
            <FaEye className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Informasi Produk */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-800 truncate">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-bold text-red-500">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm line-through text-gray-400">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-1 mt-2">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm text-gray-500">
            {product.rating} ({product.reviews})
          </span>
        </div>
      </div>

      {/* Tombol Tambah ke Keranjang */}
      <button
        onClick={() => router.push('/cart')}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ItemCard;
