'use client';
import { usePathname } from 'next/navigation';
import products from '@/app/products_Women.json';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Heading from '@/app/components/heading';
import Footer from '@/app/components/footer';
import Breadcrumbs from '@/app/components/breadcrums';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string | StaticImageData;
}

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split('/').pop(); // Extract the product ID from the path
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((product) => product.id === parseInt(productId as string));
      setProduct(foundProduct || null);

      console.log('Found product:', foundProduct);

      // Find related products (e.g., products in the same category or any other criterion)
      if (foundProduct) {
        const related = products.filter(
          (p) => p.id !== foundProduct.id // Exclude the current product
        );
        setRelatedProducts(related);

        console.log('Related products:', related);
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
          <Image src={product.imgUrl} alt={product.name} className="max-w-sm rounded-lg shadow-2xl" width={400} height={400} />
          <div>
            <h1 className="text-5xl font-bold">{product.name}</h1>
            <p className="py-6 text-xl">{product.description}</p>
            <p className="text-lg font-semibold mt-4 p-1">Price: ${product.price}</p>
            <button className="btn btn-primary text-white bg-blue-500">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-base-200 p-5">
        <h2 className="text-3xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
              <Link href={`/Women/${relatedProduct.id}`}>
                  <Image
                    src={relatedProduct.imgUrl}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                    width={500}
                    height={300}
                  />
              </Link>
              <div className="p-4 flex flex-col flex-grow text-white">
                <h2 className="text-xl font-bold mb-2">
                  <Link href={`/Women/${relatedProduct.id}`}>
                    {relatedProduct.name}
                  </Link>
                </h2>
                <p className="flex-grow">
                  <Link href={`/Women/${relatedProduct.id}`}>
                  {relatedProduct.description}
                  </Link>
                </p>
                <p className="text-lg font-semibold mt-4">
                  <Link href={`/Women/${relatedProduct.id}`}>
                   Price: ${relatedProduct.price}
                  </Link>
                </p>
                <button className="btn btn-primary text-white bg-blue-500 mt-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;