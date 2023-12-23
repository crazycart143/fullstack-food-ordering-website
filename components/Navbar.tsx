"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;
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
        {status === "authenticated" ? (
          <Link
            href="/login"
            onClick={() => signOut()}
            className={cn("w-[80px]", buttonVariants())}
          >
            Logout
          </Link>
        ) : (
          <div className="hidden md:flex">
            <Link href="/login" className="py-2 px-4">
              Login
            </Link>
            <Link href="/register" className={cn("w-[80px]", buttonVariants())}>
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
