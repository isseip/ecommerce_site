import Products_Acessories from "../products/acessories";
import Heading from "../components/heading";
import Categories from "../components/categories";
import Footer from "../components/footer";
import ThemeToggle from "../theme/toggle";
export default function Acessories(){
    return( <>
    <Heading/>
    <Categories/>
    <ThemeToggle/>
    <Products_Acessories/>
    <Footer/>
    </>
    );
}