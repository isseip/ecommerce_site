import React from 'react';
import products from '../products_Shoes.json';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string | StaticImageData;  // Accept both string URLs and StaticImageData
}

const Products_Shoes = () => {
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <>
      <div className="container mx-auto mt-12 p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
              <Link href={`/Shoes/${product.id}`}>
                <a>
                  <Image
                    src={product.imgUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    width={500}
                    height={300}
                    unoptimized={typeof product.imgUrl !== 'string'}  // Optimize if it's a URL, not if it's StaticImageData
                    layout="responsive"
                  />
                </a>
              </Link>
              <div className="p-4 flex flex-col flex-grow text-white">
                <h2 className="text-xl font-bold mb-2">
                  <Link href={`/Shoes/${product.id}`}>
                    <a>{product.name}</a>
                  </Link>
                </h2>
                <p className="flex-grow">
                  <Link href={`/Shoes/${product.id}`}>
                    <a>{product.description}</a>
                  </Link>
                </p>
                <p className="text-lg font-semibold mt-4">
                  <Link href={`/Shoes/${product.id}`}>
                    <a>Price: ${product.price}</a>
                  </Link>
                </p>
                <button className="btn btn-primary text-white bg-blue-500">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products_Shoes;
