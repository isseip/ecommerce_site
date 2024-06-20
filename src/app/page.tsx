import React from 'react';
import Link from 'next/link';
import Heading from './components/heading_checkout';
import Categories from './components/categories';
import Banner from './components/banner';
import Footer from './components/footer';
import ThemeToggle from './theme/toggle';

export default function Website() {
  return (<>
      <Heading />
      <Categories />
      <ThemeToggle/>
      <Banner />
      <Footer />
      </>
  );
}
