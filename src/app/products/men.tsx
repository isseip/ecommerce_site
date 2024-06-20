'use client';
import React, { useState } from 'react';
import products from '../products_Men.json';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import { useTheme } from '../theme/themeContext'; // Import useTheme

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string | StaticImageData;
  category: string;
}

const Products_Men: React.FC = () => {
  const { addToCart } = useCart();
  const { theme } = useTheme(); // Use the useTheme hook to get the current theme

  const products_men: Product[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    imgUrl: product.imgUrl,
    category: product.category,
  }));

  const [sortOption, setSortOption] = useState('default');

  const sortedProducts = [...products_men].sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'highToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  if (!products_men || products_men.length === 0) {
    return <div>No products available.</div>;
  }

  // Define text color based on theme
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className="container mx-auto mt-2 p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-2xl font-bold ${textColor}`}>Men's Products</h2>
        <div>
          <label htmlFor="sort" className={`mr-2 ${textColor}`}>Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className={`p-2 border rounded ${textColor} bg-${theme === 'dark' ? 'gray-800' : 'white'} border-${theme === 'dark' ? 'gray-700' : 'gray-300'}`}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
            <Link href={`/Men/${product.id}`}>
              <Image
                src={product.imgUrl}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover"
                unoptimized={process.env.NODE_ENV === 'development'}
              />
            </Link>
            <div className={`p-4 flex flex-col flex-grow ${textColor}`}>
              <h2 className={`text-xl font-bold mb-2 ${textColor}`}>
                <Link href={`/Men/${product.id}`}>
                  {product.name}
                </Link>
              </h2>
              <p className={`flex-grow ${textColor}`}>
                <Link href={`/Men/${product.id}`}>
                  {product.description}
                </Link>
              </p>
              <p className={`text-lg font-semibold mt-4 ${textColor}`}>
                <Link href={`/Men/${product.id}`}>
                  Price: ${product.price}
                </Link>
              </p>
              <button
                className="btn btn-primary text-white bg-blue-500 mt-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products_Men;
