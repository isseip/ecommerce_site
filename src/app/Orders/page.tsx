'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Define types for the order and item
interface Item {
  id: string;
  category: string;
  name: string;
  imgUrl: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  status: string;
  items: Item[];
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch orders from the server or context (assuming orders are stored in local storage or fetched from an API)
    const fetchOrders = async () => {
      // Replace this with your fetch logic
      const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      setOrders(storedOrders);
    };

    fetchOrders();
  }, []);

  const handleViewDetails = (orderId: string) => {
    // Navigate to the order details page (you need to create this page)
    router.push(`/Orders/${orderId}`);
  };

  return (
    <div className="container mx-auto mt-5 p-5">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-lg">You have no orders.</p>
      ) : (
        <div className="flex flex-col">
          {orders.map((order) => (
            <div key={order.id} className="flex flex-col rounded-lg bg-base-100 shadow-md overflow-hidden p-4 mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold mb-2">Order ID: {order.id}</h3>
                <p className="text-lg font-semibold">Order Status: {order.status}</p>
              </div>
              <div className="flex flex-col md:flex-row">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center mb-4 md:mb-0 md:mr-4">
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
                    <div className="flex flex-col flex-grow p-4 text-white">
                      <h2 className="text-xl font-bold mb-2">
                        <Link href={`/${item.category}/${item.id}`}>
                          {item.name}
                        </Link>
                      </h2>
                      <p className="text-lg font-semibold">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-lg font-semibold">
                        Price: ${item.price}
                      </p>
                      <p className="text-lg font-semibold">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="btn btn-primary text-white bg-blue-500 mt-4 py-1 px-2 text-sm"
                onClick={() => handleViewDetails(order.id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

