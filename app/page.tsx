import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { menu } from "@/config/constant";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <MaxWidthWrapper className="grid grid-cols-2 max-w-4xl mx-auto my-10">
        <div>
          <h1 className="text-4xl font-semibold leading-[46px]">
            Everything is better <br /> with a{" "}
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
        <div className="relative  ">
          <Image
            src="/pizza.png"
            alt="pizza"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </MaxWidthWrapper>

      {/* Check out menu */}
      <section>
        <MaxWidthWrapper>
          <div className="h-48 w-48 absolute -left-12">
            <Image
              src="/sallad1.png"
              layout="fill"
              objectFit="contain"
              alt="sallad"
            />
          </div>
          <div className="h-48 w-48 absolute -right-12">
            <Image
              src="/sallad2.png"
              layout="fill"
              objectFit="contain"
              alt="sallad"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center flex flex-col justify-center items-center pt-2">
            <h3 className="uppercase text-gray-500 font-semibold">Check out</h3>
            <h2 className="text-primaryy font-bold text-4xl italic">Menu</h2>
            <div className="flex flex-wrap gap-x-10 justify-start items-center pt-20">
              {menu.map((item, i) => (
                <Card
                  className="flex flex-col relative h-[200px] w-[240px] justify-center items-center bg-gray-300"
                  key={i}
                >
                  <CardHeader>
                    <Image
                      src={item.imageSrc}
                      width={100}
                      height={100}
                      objectFit="contain"
                      alt={item.productName}
                      className="w-[100px] h-[100px] absolute -top-16 left-0 right-0 mx-auto"
                    />
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold">{item.productName}</h4>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/products" className={buttonVariants()}>
                      Add to cart $12
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
