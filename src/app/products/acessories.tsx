import React from 'react';
import productsData from '../products_Acessories.json';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string | StaticImageData;
}

const Products_Acessories = () => {
  const products_acessories: Product[] = productsData.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    imageUrl: typeof product.imgUrl === 'string' ? `/images/${product.imgUrl}` : product.imgUrl  // Adjust path if necessary
  }));

  if (!products_acessories || products_acessories.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="container mx-auto mt-12 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products_acessories.map((product) => (
          <div key={product.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
            <Link href={`/Acessories/${product.id}`}>
              <a>
                <Image src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" width={500} height={300} />
              </a>
            </Link>
            <div className="p-4 flex flex-col flex-grow text-white">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/Acessories/${product.id}`}>
                  <a>{product.name}</a>
                </Link>
              </h2>
              <p className="flex-grow">
                <Link href={`/Acessories/${product.id}`}>
                  <a>{product.description}</a>
                </Link>
              </p>
              <p className="text-lg font-semibold mt-4">
                <Link href={`/Acessories/${product.id}`}>
                  <a>Price: ${product.price}</a>
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

export default Products_Acessories;
