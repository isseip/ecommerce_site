'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import Head_Checkout from '../components/heading_checkout'
import Footer from '../components/footer';

const Checkout: React.FC = () => {
  const { cart } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    const isFormComplete = Object.values(formData).every(field => field.trim() !== '');
    if (!isFormComplete) {
      alert('Please fill out all fields.');
      return;
    }

    // Redirect to Thank You page if form is complete
    router.push('/ShopMore');
  };

  // Calculate the total price of the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return ( <>
    <Head_Checkout/>
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-5">
          <h3 className="text-xl font-bold mb-4">Billing Details</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="city">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-bold mb-2" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-bold mb-2" htmlFor="zip">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-bold mb-2" htmlFor="expirationDate">
                  Expiration Date
                </label>
                <input
                  type="text"
                  name="expirationDate"
                  id="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-bold mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary text-white bg-green-500 w-full py-2 rounded"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </form>
          <h3 className="text-xl font-bold mt-5">Grand Total: ${totalPrice.toFixed(2)}</h3>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0 md:pl-5">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center bg-base-100 shadow-md p-4 rounded">
                <Link href={`/${item.category}/${item.id}`}>
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    width={75}
                    height={75}
                    className="object-cover"
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </Link>
                <div className="ml-4 flex-grow">
                  <h4 className="text-lg font-bold">
                    <Link href={`/${item.category}/${item.id}`}>
                      {item.name}
                    </Link>
                  </h4>
                  <p className="text-sm">{item.description}</p>
                  <p className="text-sm font-semibold">Price: ${item.price}</p>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                  <p className="text-sm font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
