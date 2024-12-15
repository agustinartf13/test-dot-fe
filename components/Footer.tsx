// components/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Exclusive</h4>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-600 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black"
            />
            <button className="bg-white text-black px-4 py-2">&rarr;</button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <p>Bali Tabanan jln Yeh Gangga Street 13.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Account</h4>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Download App</h4>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex items-center space-x-4 mb-4">
         
          </div>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center">
        <p>&copy; Copyright Agustina Saputra 2024. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
