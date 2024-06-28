import Breadcrumbs from "../components/breadcrums";
import Cart from "../components/cart";
import Footer from "../components/footer";
import Heading from "../components/heading_checkout";
import ThemeToggle from "../theme/toggle";

export default function kart () {
  return (
    <>
    <Heading/>
    <Breadcrumbs/>
    <ThemeToggle/>
    <Cart/>
    <Footer/>
    </>
  );
}