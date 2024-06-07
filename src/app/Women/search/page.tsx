'use client';
import { useSearchParams } from 'next/navigation';
import products from '../../products_Women.json'; // Adjust the path as needed
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Heading from '../../components/heading';
import Categories from '../../components/categories';
import Footer from '../../components/footer';

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

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

  return (
       <>
      <Heading/>
      <Categories/>
    <div className="container mx-auto mt-12 p-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div key={product.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
          <Link href={`/Women/${product.id}`}>
            <Image 
              src={product.imgUrl}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover"
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </Link>
          <div className="p-4 flex flex-col flex-grow text-white">
            <h2 className="text-xl font-bold mb-2">
              <Link href={`/Women/${product.id}`}>
                {product.name}
              </Link>
            </h2>
            <p className="flex-grow">
              <Link href={`/Women/${product.id}`}>
                {product.description}
              </Link>
            </p>
            <p className="text-lg font-semibold mt-4">
              <Link href={`/Women/${product.id}`}>
                Price: ${product.price}
              </Link>
            </p>
            <button className="btn btn-primary text-white bg-blue-500">Add to Cart</button>
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
