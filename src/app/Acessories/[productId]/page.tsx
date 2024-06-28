'use client'
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import products from '@/app/products_Acessories.json';
import Image from 'next/image';
import Heading from '@/app/components/heading';
import Footer from '@/app/components/footer';
import Breadcrumbs from '@/app/components/breadcrums';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';
import { useTheme } from '@/app/theme/themeContext';
import ReviewSection from '@/app/components/review';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string | StaticImageData;
  category: string;
}

interface Review {
  id: number;
  author: string;
  comment: string;
  rating: number;
  replies: string[];
  likes: number;
  replyActive: boolean;
}

const ProductDetail = () => {
  const pathname = usePathname();
  const productId = pathname.split('/').pop(); // Extract the product ID from the path
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { theme } = useTheme();
  const { addToCart } = useCart();

  const [reviews, setReviews] = useState<Review[]>([
    // Initial fake reviews for demonstration
    { id: 1, author: 'John Doe', comment: 'Great product!', rating: 5, replies: [], likes: 0, replyActive: false },
    { id: 2, author: 'Jane Smith', comment: 'Not bad.', rating: 3, replies: [], likes: 0, replyActive: false }
  ]);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find((product) => product.id === parseInt(productId as string));
      setProduct(foundProduct || null);

      if (foundProduct) {
        const related = products.filter((p) => p.id !== foundProduct.id);
        setRelatedProducts(related);
      }
    }
  }, [productId]);

  const addReview = (review: Review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  const likeReview = (id: number) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) => (review.id === id ? { ...review, likes: review.likes + 1 } : review))
    );
  };

  const toggleReplyBox = (id: number) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) => (review.id === id ? { ...review, replyActive: !review.replyActive } : review))
    );
  };

  const addReply = (id: number, reply: string) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id ? { ...review, replies: [...review.replies, reply], replyActive: false } : review
      )
    );
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <>
      <Heading />
      <Breadcrumbs />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={product.imgUrl} alt={product.name} className="max-w-sm rounded-lg shadow-2xl" width={400} height={400} />
          <div>
            <h1 className="text-5xl font-bold ">{product.name}</h1>
            <p className="py-6 text-xl">{product.description}</p>
            <p className="text-lg font-semibold mt-4 p-1">Price: ${product.price}</p>
            <button className="btn btn-primary text-white bg-blue-500" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-base-200 p-5">
        <h2 className={`text-3xl font-bold mb-6 ${textColor}`}>Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
              <Link href={`/Acessories/${relatedProduct.id}`}>
                <Image src={relatedProduct.imgUrl} alt={relatedProduct.name} className="w-full h-48 object-cover" width={500} height={300} />
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <h2 className={`text-xl font-bold mb-2 ${textColor}`}>
                  <Link href={`/Acessories/${relatedProduct.id}`}>{relatedProduct.name}</Link>
                </h2>
                <p className={`flex-grow ${textColor}`}>
                  <Link href={`/Acessories/${relatedProduct.id}`}>{relatedProduct.description}</Link>
                </p>
                <p className={`text-lg font-semibold mt-4 ${textColor}`}>
                  <Link href={`/Acessories/${relatedProduct.id}`}>Price: ${relatedProduct.price}</Link>
                </p>
                <button className="btn btn-primary text-white bg-blue-500 mt-2" onClick={() => addToCart(relatedProduct)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReviewSection
        reviews={reviews}
        addReview={addReview}
        likeReview={likeReview}
        toggleReplyBox={toggleReplyBox}
        addReply={addReply}
      />
      <Footer />
    </>
  );
};

export default ProductDetail;
