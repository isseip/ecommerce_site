import Products_Men from "../products/men";
import Heading from "../components/heading";
import Categories from "../components/categories";
import Footer from "../components/footer";
import ThemeToggle from "../theme/toggle";
export default function Men(){
    return( <>
    <Heading/>
    <Categories/>
    <ThemeToggle/>
    <Products_Men/>
    <Footer/>
    </>
    );
}