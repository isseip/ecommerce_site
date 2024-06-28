'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import AutoSlidingCarousel from './sliding';

const Heading: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Extract the section from the current pathname
      const section = pathname.split('/')[1] || 'Men';
      router.push(`/${section}/search?query=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">NexBuy</Link>
        </div>
        <div className="flex-none mx-auto">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search With NexBuy🫡"
              className="input input-bordered w-full max-w-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
        <div className="flex-none">
          <CartSummary />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a href='/Orders'>Your Orders</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16">
        {/* Add this margin top to push the content below the fixed navbar */}
      </div>
    </>
  );
};

const CartSummary: React.FC = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">{totalItems}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{totalItems} Items</span>
          <span className="text-info">Subtotal: ${subtotal.toFixed(2)}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">
              <Link href="/cart">View Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
