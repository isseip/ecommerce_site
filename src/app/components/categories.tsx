import Link from "next/link";
function Categories(){
    return (
        <>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box w-full">
  <li><Link href="/">Home</Link></li>
  <li><Link href="/Men">Men</Link></li>
  <li><a>Women</a></li>
  <li><a>Shoes</a></li>
  <li><a>Jewelry</a></li>
  <li><a>Acessories</a></li>
</ul>
        </>
    );
}

export default Categories;