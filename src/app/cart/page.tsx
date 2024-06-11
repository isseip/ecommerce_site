import Cart from "../components/cart";
import { CartProvider } from "../context/CartContext";

export default function kart () {
  return (
    <CartProvider> 
    <Cart/>
    </CartProvider>
  );
}