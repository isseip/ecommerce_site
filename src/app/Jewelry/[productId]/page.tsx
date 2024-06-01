'use client';
import { usePathname } from 'next/navigation';
import products from '@/app/products_Jewelery.json';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Heading from '@/app/components/heading';
import Footer from '@/app/components/footer';
import Breadcrumbs from '@/app/components/breadcrums';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split('/').pop(); // Extract the product ID from the path
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((product) => product.id === parseInt(productId as string));
      setProduct(foundProduct || null);
    }
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return ( <>
    <Heading/>
    <Breadcrumbs/>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
      <Image src={product.imageUrl} alt={product.name} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <p className="py-6 text-xl">{product.description}</p>
        <p className="text-lg font-semibold mt-4 p-1">Price:${product.price}</p>
        <button className="btn btn-primary text-white bg-blue-500">Add To Cart</button>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  );
};

export default ProductDetail;