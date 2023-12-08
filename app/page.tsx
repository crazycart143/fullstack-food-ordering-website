import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <MaxWidthWrapper className="grid grid-cols-2 max-w-4xl mx-auto">
        <div>
          <h1 className="text-4xl font-semibold leading-[46px]">
            Everything <br /> is better <br /> with a{" "}
            <span className="text-[#F97316]">Pizza</span>
          </h1>
          <p className="my-4 text-gray-500">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life
          </p>
          <div className="flex gap-4">
            <Link href="/products" className={buttonVariants()}>
              Order Now
            </Link>
            <Link
              href="/products"
              className={`${buttonVariants({
                variant: "ghost",
              })} gap-x-4`}
            >
              Learn More <MoveRight strokeWidth={1} className="mt-[4px]" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/pizza.png"
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </MaxWidthWrapper>

      {/* Check out menu */}
      <section className="max-w-4xl mx-auto">
        <MaxWidthWrapper>
          <div className="h-48 w-48 absolute -left-12  ">
            <Image
              src="/sallad1.png"
              layout="fill"
              objectFit="contain"
              alt="sallad"
            />
          </div>
          <div className="h-48 w-48 absolute -right-12 top-[200px]">
            <Image
              src="/sallad2.png"
              layout="fill"
              objectFit="contain"
              alt="sallad"
            />
          </div>
          <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold">Check out</h3>
            <h2 className="text-primaryy font-bold text-4xl italic">Menu</h2>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
