import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between max-w-4xl mx-auto">
      <nav className="flex w-full justify-between items-center gap-8 text-gray-500 font-semibold px-10">
        <div className="flex gap-x-8">
          <a href="/" className="text-[#F97316] font-semibold text-2xl">
            ST PIZZA
          </a>
          <div className="hidden md:flex items-center gap-x-6 ">
            <Link href="/">Home</Link>
            <Link href="">Menu</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Link href="/" className="py-2 px-4">
            Login
          </Link>
          <Link href="/register" className={cn("w-[80px]", buttonVariants())}>
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
