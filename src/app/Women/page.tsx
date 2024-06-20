import Products_Women from "../products/women";
import Heading from "../components/heading";
import Categories from "../components/categories";
import Footer from "../components/footer"
import ThemeToggle from "../theme/toggle";
export default function Women(){
    return( <>
    <Heading/>
    <Categories/>
    <ThemeToggle/>
    <Products_Women/>
    <Footer/>
    </>
    );
}