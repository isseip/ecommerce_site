'use client';
import { usePathname } from 'next/navigation';
import products from '@/app/products_Men';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import Heading from '@/app/components/heading';
import Footer from '@/app/components/footer';
import Breadcrumbs from '@/app/components/breadcrums';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string | StaticImageData;
}

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split('/').pop();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find(product => product.id === parseInt(productId as string));
      if (foundProduct) {
        const adjustedProduct: Product = {
          ...foundProduct,
          imgUrl: typeof foundProduct.imgUrl === 'string' ? `/${foundProduct.imgUrl}` : foundProduct.imgUrl
        };
        setProduct(adjustedProduct);
      } else {
        setProduct(null);
      }
    }
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Heading />
      <Breadcrumbs />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={product.imgUrl} alt={product.name} className="max-w-sm rounded-lg shadow-2xl" width={500} height={300} />
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="py-6">{product.description}</p>
            <p className="text-lg font-semibold mt-4 p-1">Price: ${product.price}</p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;