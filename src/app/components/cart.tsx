'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTheme } from '../theme/themeContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  // Calculate the total price of the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
   // Function to handle checkout button click
  const router=useRouter();
  const { theme } = useTheme();

   const handleCheckout = () => {
    if (cart.length === 0) {
      alert("No Items Added Still Please Add some Item To Checkout");
    } else {
      // Proceed to checkout or navigate to the checkout page
      router.push('/Checkout');
    }
  };
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';


  return (
    <div className="container mx-auto mt-5 p-5">
      <div className="sticky top-0 bg-base-100 shadow-md p-5 z-10">
        <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${textColor}`}>Shopping Cart</h2>
        <h3 className={`text-xl font-bold ${textColor}`}>Grand Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
      {cart.length === 0 ? (
        <p className={`text-lg mt-5 ${textColor}`}>Your cart is empty</p>
      ) : (
        <div className="mt-5 flex flex-col">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center rounded-lg bg-base-100 shadow-md overflow-hidden p-4 mb-4">
              <Link href={`/${item.category}/${item.id}`}>
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="object-cover"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </Link>
              <div className={`flex flex-col flex-grow p-5 text-white ${textColor}`}>
                <h2 className={`text-xl font-bold mb-2  ${textColor}`}>
                  <Link href={`/${item.category}/${item.id}`}>
                    {item.name}
                  </Link>
                </h2>
                <p className={`mb-4  ${textColor}`}>
                  <Link href={`/${item.category}/${item.id}`}>
                    {item.description}
                  </Link>
                </p>
                <p className={`text-lg font-semibold ${textColor}`}>
                  Price: ${item.price} each
                </p>
                <div className="flex items-center mt-4">
                  <button
                    className="btn btn-primary text-white bg-blue-500"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className={`mx-2 ${textColor}`}>{item.quantity}</span>
                  <button
                    className="btn btn-primary text-white bg-blue-500"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold mt-4">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="btn btn-wide text-white bg-red-500 mt-2 py-1 px-2 text-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex justify-between items-center">
        <h3 className={`text-xl font-bold  ${textColor}`}>Grand Total: ${totalPrice.toFixed(2)}</h3>
        <button className="btn btn-wide text-white bg-green-500  " onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

