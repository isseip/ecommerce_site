import Link from "next/link";
function Categories(){
    return (
        <>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box w-full">
  <li><Link href="/">Home</Link></li>
  <li><Link href="/Men">Men</Link></li>
  <li><Link href="/Women">Women</Link></li>
  <li><Link href="/Shoes">Shoes</Link></li>
  <li><Link href="/Jewelry">Jewelry</Link></li>
  <li><Link href="/Acessories">Acessories</Link></li>
   </ul>
   </>
    );
}

export default Categories;