import Link from "next/link";

function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-4 py-4 flex items-center justify-between ">
      <div className="flex flex-col">
        <h1 className="">Pato Turri</h1>
        <p>asdsandkhas dsakd asl</p>
      </div>
      <div className="flex gap-4 text-gray-500">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
