import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="mt-8 h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-center text-primary text-4xl">Register</h1>
      <form className="w-[500px] flex flex-col justify-center items-center gap-y-6 mt-10 px-10">
        <Input placeholder="Email" className="placeholder:text-gray-400" />
        <Input placeholder="Password" className="placeholder:text-gray-400" />
        <Link
          href="/register"
          className={cn("w-full rounded-full", buttonVariants())}
        >
          Register
        </Link>
        <div className="relative flex py-5 w-full items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">or login with</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <Button className="flex gap-x-4 bg-white text-black border-2 border-gray-300 rounded-full w-full hover:text-white">
          <Image src="/google.png" alt="google" height={16} width={16} /> Login
          with Google
        </Button>
      </form>
    </section>
  );
};

export default page;
