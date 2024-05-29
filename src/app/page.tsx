import Link from "next/link";
import Heading from "./components/heading";
import Categories from "./components/categories";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Breadcrumbs from "./components/breadcrums";
export default function Website(){
  return (
      <>
      <Heading/>
      <Categories/>
      <Banner/>
      <Footer/>
      </>
  );
}