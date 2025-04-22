
import Image from "next/image";
import Button from "../../(components)/Button/Button"; 

const products = [
  {
    id: 1,
    title: "Premium Wash & Wear Boski Finish - Amber Brunt",
    price: 2099,
    oldPrice: 4249,
    image: "/1.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  
  {
    id: 2,
    title: "Premium Wash & Wear Boski Finish - Amber Brunt",
    price: 2099,
    oldPrice: 4249,
    image: "/headerimg.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  {
    id: 3,
    title: "Premium Wash & Wear Boski Finish - Ash Grey Dark",
    price: 2099,
    oldPrice: 4249,
    image: "/headerimg2.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  {
    id: 4,
    title: "Premium Wash & Wear Boski Finish - Ash Grey Light",
    price: 2099,
    oldPrice: 4249,
    image: "/1.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  {
    id: 5,
    title: "Premium Wash & Wear Boski Finish - Amber Brunt",
    price: 2099,
    oldPrice: 4249,
    image: "/headerimg.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  {
    id: 1,
    title: "Premium Wash & Wear Boski Finish - Amber Brunt",
    price: 2099,
    oldPrice: 4249,
    image: "/1.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  
  {
    id: 2,
    title: "Premium Wash & Wear Boski Finish - Amber Brunt",
    price: 2099,
    oldPrice: 4249,
    image: "/headerimg.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  {
    id: 3,
    title: "Premium Wash & Wear Boski Finish - Ash Grey Dark",
    price: 2099,
    oldPrice: 4249,
    image: "/headerimg2.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  {
    id: 4,
    title: "Premium Wash & Wear Boski Finish - Ash Grey Light",
    price: 2099,
    oldPrice: 4249,
    image: "/1.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
  {
    id: 5,
    title: "Premium Wash & Wear Boski Finish - Amber Brunt",
    price: 2099,
    oldPrice: 4249,
    image: "/headerimg.jpg",
    buttonLabel: "Add to cart",
    tag: "Sale",
  },
];

export default function ExclusivePicks() {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden shadow-md">
              {product.tag && (
                <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
                  {product.tag}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4 text-sm font-medium text-gray-700">
              {product.title}
            </div>
            <div className="mt-1 text-lg font-semibold">
              {product.oldPrice && (
                <span className="line-through text-gray-400 mr-2">
                  Rs.{product.oldPrice.toLocaleString()} PKR
                </span>
              )}
              <span>Rs.{product.price.toLocaleString()} PKR</span>
            </div>
            <Button className="mt-3 w-full" variant="outline">
              {product.buttonLabel}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
