import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { SignedOut, SignInButton, useAuth } from "@clerk/nextjs"; // Import Clerk's useAuth hook

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

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
        <h2 className="text-lg font-semibold text-gray-800">Login Required</h2>
        <p className="mt-2 text-sm text-gray-600">
          You need to sign in to add items to your cart.
        </p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-white rounded-lg bg-red-500 px-6 hover:text-gray-800 transition duration-300 ease-in">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

const ItemCard: React.FC<ItemCardProps> = ({ product }) => {
  const router = useRouter();
  const { isSignedIn } = useAuth(); // Check if the user is signed in

  const [isModalOpen, setIsModalOpen] = useState(false);

const handleAddToCart = () => {
  if (isSignedIn) {
    // Jika pengguna sudah login, arahkan ke halaman keranjang
    router.push("/cart");
  } else {
    // Jika pengguna belum login, tampilkan modal login
    setIsModalOpen(true);
  }
};
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
        onClick={handleAddToCart}
        className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
      >
        Add To Cart
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ItemCard;
