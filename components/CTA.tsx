import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { ctaData } from "@/data/cta";

const CTA = () => {
  return (
    <section className="gradient py-20">
      <div className="relative z-10 container mx-auto grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-1 lg:gap-10">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Ready to transform your financial future?
          </h2>
          <p className="text-xl">
            Join thousands of users who have already taken control of their
            finances with FinSight's AI-powered platform.
          </p>

          <Link href={"/dashboard"}>
            <Button
              size="lg"
              className="group relative mt-4 h-12 animate-bounce overflow-hidden px-8"
            >
              <span className="relative z-10 flex items-center transition-transform duration-500 group-hover:translate-x-1">
                Get Started for Free
                <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Button>
          </Link>

          <div className="mt-4 flex items-center justify-center space-x-4">
            <div className="flex -space-x-2">
              {ctaData.map((i, index) => (
                <div
                  key={index}
                  className="ring-ring inline-block h-8 w-8 rounded-full ring-2"
                >
                  <Image
                    src={i.image}
                    alt={"User"}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">1,000+</span> users joined this month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
