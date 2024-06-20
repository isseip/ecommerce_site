import Products_Jewelery from "../products/jewelry";
import Heading from "../components/heading";
import Categories from "../components/categories";
import Footer from "../components/footer";
import ThemeToggle from "../theme/toggle";
export default function Jewelry(){
    return( <>
    <Heading/>
    <Categories/>
    <ThemeToggle/>
    <Products_Jewelery/>
    <Footer/>
    </>
    );
}