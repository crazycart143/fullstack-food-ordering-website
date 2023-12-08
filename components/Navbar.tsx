import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between">
      <a href="" className="text-[#F97316] font-semibold text-2xl">
        ST PIZZA
      </a>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href="">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        <Link
          href=""
          className="bg-[#F97316] rounded-full text-white px-8 py-2"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
