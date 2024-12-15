"use client";
import { useState } from "react";
import FormLocation from "./FormLocation";


const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
    paymentMethod: "COD",
    coupon: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };


  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Billing Details */}
        <form onSubmit={handleSubmit} className="space-y-5 border rounded p-5">
          <h2 className="text-2xl font-semibold mb-5">Billing Details</h2>

          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            className="w-full border p-3 rounded"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address*"
            className="w-full border p-3 rounded"
            value={formData.streetAddress}
            onChange={handleInputChange}
            required
          />

          <FormLocation />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            className="w-full border p-3 rounded"
            value={formData.streetAddress}
            onChange={handleInputChange}
            required
          />

          <input
            type="text"
            name="email"
            placeholder="Email Address*"
            className="w-full border p-3 rounded"
            value={formData.streetAddress}
            onChange={handleInputChange}
            required
          />

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="saveInfo"
              id="saveInfo"
              checked={formData.saveInfo}
              onChange={handleInputChange}
            />
            <label htmlFor="saveInfo" className="text-sm">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>

        {/* Order Summary */}
        <div className="space-y-5 border rounded p-5 shadow">
          <h2 className="text-2xl font-semibold mb-5">Order Summary</h2>

          {/* Products */}
          <div className="flex justify-between">
            <span>LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="flex justify-between">
            <span>HI Gamepad</span>
            <span>$1100</span>
          </div>

          <hr />

          {/* Summary */}
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>$1750</span>
          </div>

          {/* Payment Methods */}

          {/* Coupon */}
          <div className="flex-col w-full items-center gap-5">
            <input
              type="text"
              name="coupon"
              placeholder="Coupon Code"
              className="w-full border p-2 rounded"
              value={formData.coupon}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="bg-red-500 w-fit mt-2 hover:bg-red-600 text-white py-2 px-3 rounded transition"
            >
              Apply Coupon
            </button>
          </div>

          {/* Place Order */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
