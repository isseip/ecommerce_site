'use client';
import { useSearchParams } from 'next/navigation';
import products from '../../products_Men.json'; // Adjust the path as needed
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Heading from '../../components/heading';
import Categories from '../../components/categories';
import Footer from '../../components/footer';
import { useCart } from '@/app/context/CartContext';
import { useTheme } from '@/app/theme/themeContext';

const SearchResults: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const { addToCart } = useCart();
  const { theme } = useTheme();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <>
        <Heading/>
        <Categories/>
        <div className="container mx-auto mt-12 p-5">No products found for "{query}".</div>
        <Footer/>
      </>
    );
  }

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

    return (
       <>
      <Heading/>
      <Categories/>
    <div className="container mx-auto mt-12 p-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
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
            <button className="btn btn-primary text-white bg-blue-500" onClick={()=>addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  <Footer/>
  </>
);
};

export default SearchResults;
