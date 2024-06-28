'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '../components/footer';
import Heading from '../components/heading_checkout';
import Breadcrumbs from '../components/breadcrums';

const ThankYou: React.FC = () => {
  return (<>
     <Heading/>
     <Breadcrumbs/>
    <div className="container mx-auto mt-5 p-5 text-center">
      <div
        role="alert"
        className="alert alert-success mb-5 animate-fade-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Your purchase has been confirmed!</span>
      </div>
      <Link href="/">
        <div className="btn btn-primary text-white bg-blue-500 py-2 px-4 rounded transition-transform transform hover:scale-105">
          Continue
        </div>
      </Link>
      <p className="text-lg mt-5 mb-4 animate-fade-in">Shop for more products!!@NexBuy</p>
      <a href="/Orders" className="btn btn-primary text-white bg-blue-500 py-2 px-4 rounded transition-transform transform hover:scale-105 ">
        View Orders
      </a>
      <h2 className="text-2xl font-bold mb-6 animate-fade-in mt-3">Thank You for Your Order!</h2>
    </div>
    <Footer/>
    </>
  );
};

export default ThankYou;

