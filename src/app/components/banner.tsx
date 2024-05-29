import Image from "next/image";
import banner from '../images/banner.jpg'

function Banner(){
    return (<>
    <div className="hero min-h-screen">
        <Image src={banner} alt="banner" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">DENIM JACKETS</h1>
      <p className="mb-5">Denim jackets are a timeless piece of clothing, known for their versatility, durability, and classic style. Originating in the late 19th century, denim jackets were initially designed as practical workwear for laborers due to their sturdy fabric</p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
    </>
    );
}

export default Banner;