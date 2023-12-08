import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper className="grid grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a{" "}
          <span className="text-[#F97316]">Pizza</span>
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-10">
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
        <Image src="/pizza.png" alt="pizza" layout="fill" objectFit="contain" />
      </div>
    </MaxWidthWrapper>
  );
}
