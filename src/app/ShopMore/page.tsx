
'use client';
import React from 'react';
import Link from 'next/link';

const ThankYou: React.FC = () => {
  return (
    <div className="container mx-auto mt-5 p-5 text-center">
      <h2 className="text-2xl font-bold mb-6">Thank You for Your Order!</h2>
      <p className="text-lg mb-4">Your order has been placed successfully.</p>
      <Link href="/">
        <div className="btn btn-primary text-white bg-blue-500 py-2 px-4 rounded">Continue</div>
      </Link>
      <p className="text-lg mt-5 mb-4">Shop for more products!!@NexBuy</p>
      <a href='/Orders' className="btn btn-primary text-white bg-blue-500 py-2 px-4 rounded">View Orders</a>
    </div>
  );
};

export default ThankYou;
