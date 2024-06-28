import Image from "next/image";
import banner from '../images/banner.jpg'
import Link from "next/link"
function Banner(){
    return (<>
    <div className="hero min-h-screen mb-5 ">
        <Image src={banner} alt="banner" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">DENIM JACKETS</h1>
      <p className="mb-5">Denim jackets are a timeless piece of clothing, known for their versatility, durability, and classic style. Originating in the late 19th century, denim jackets were initially designed as practical workwear for laborers due to their sturdy fabric</p>
    <Link href='/Women'><button className="btn">Shop Now</button></Link>
    </div>
  </div>
</div>

<div className="container mx-auto flex gap-4 p-4 mb-5">
      {/* First Image Gallery */}
      <div className="w-1/3 p-2">
        <div className="border-gray-300 rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-2xl mb-4">Best Seller</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <Link href={`/Men/103`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/men/product_3.jpg"
                    width={200}
                    height={200}
                    alt="Snapback Cap"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Snapback Cap</h3>
                </div>
              </Link>
              <Link href={`/Shoes/303`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/shoes/product_3.jpg"
                    width={200}
                    height={200}
                    alt="Air Force 1"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Air Force 1</h3>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={`/Women/208`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/women/product_8.jpg"
                    width={200}
                    height={200}
                    alt="Demin Skirt"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Demin Skirt</h3>
                </div>
              </Link>
              <Link href={`/Acessories/501`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/acessories/product_1.jpg"
                    width={200}
                    height={200}
                    alt="Wireless Charging Pad"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Wireless Charging Pad</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Second Image Gallery */}
      <div className="w-1/3 p-2">
        <div className="border-gray-300 rounded-lg shadow-lg p-5  hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-2xl mb-4">NexBuy's Choice</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <Link href={`/Men/101`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/men/product_1.jpg"
                    width={200}
                    height={200}
                    alt="Dress Shirt"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Dress Shirt</h3>
                </div>
              </Link>
              <Link href={`/Acessories/503`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/acessories/product_3.jpg"
                    width={200}
                    height={200}
                    alt="Phone Grip Stand"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Phone Grip Stand</h3>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={`/Women/209`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/women/product_9.jpg"
                    width={200}
                    height={200}
                    alt="Off-Shoulder Top"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Off-Shoulder Top</h3>
                </div>
              </Link>
              <Link href={`/Shoes/301`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/shoes/product_1.jpg"
                    width={200}
                    height={200}
                    alt="Air Max 270"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Air Max 270</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Third Image Gallery */}
      <div className="w-1/3 p-2">
        <div className="border-gray-300 rounded-lg shadow-lg p-5  hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-2xl mb-4">Top Picks</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <Link href={`/Men/105`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/men/product_5.jpg"
                    width={200}
                    height={200}
                    alt="Casual Jacket"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Chino Shorts</h3>
                </div>
              </Link>
              <Link href={`/Acessories/505`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/acessories/product_5.jpg"
                    width={200}
                    height={200}
                    alt="Bluetooth Headphones"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Phone Camera Lens Kit</h3>
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={`/Women/211`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/women/product_5.jpg"
                    width={200}
                    height={200}
                    alt="Maxi Dress"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Lenin Shorts</h3>
                </div>
              </Link>
              <Link href={`/Shoes/305`}>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/shoes/product_5.jpg"
                    width={200}
                    height={200}
                    alt="Running Shoes"
                    className="rounded-lg shadow-lg w-48 h-48 object-cover"
                  />
                  <h3 className="text-xl mt-2">Gel-Kayano 28</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    );
}

export default Banner;