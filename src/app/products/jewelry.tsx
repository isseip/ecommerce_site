import React from 'react';
import productsData from '../products_Jewelery.json';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | StaticImageData;
}

const Products_Jewelery = () => {
  const products_jewelery: Product[] = productsData.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    imageUrl: product.imgUrl  // Adjust path if necessary
  }));

  if (!products_jewelery || products_jewelery.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="container mx-auto mt-12 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products_jewelery.map((product) => (
          <div key={product.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
            <Link href={`/Jewelry/${product.id}`}>
                <Image src={product.imageUrl} alt={product.name} className="w-full h-70 object-cover" width={500} height={300} />
            </Link>
            <div className="p-4 flex flex-col flex-grow text-white">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/Jewelry/${product.id}`}>
                  {product.name}
                </Link>
              </h2>
              <p className="flex-grow">
                <Link href={`/Jewelry/${product.id}`}>
                  {product.description}
                </Link>
              </p>
              <p className="text-lg font-semibold mt-4">
                <Link href={`/Jewelry/${product.id}`}>
                  Price: ${product.price}
                </Link>
              </p>
              <button className="btn btn-primary text-white bg-blue-500">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products_Jewelery;