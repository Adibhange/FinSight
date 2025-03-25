"use client";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import { LineChart } from "./Chart";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h1 className="gradient-title pb-6 text-5xl md:text-6xl lg:text-7xl">
          AI-Powered Financial Insights <br /> at Your Fingertips
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
          Take control of your finances with intelligent predictions, automated
          tracking, and personalized recommendations.
        </p>

        <div className="flex flex-col justify-center gap-2 md:flex-row">
          <Link href={"/dashboard"}>
            <Button size="lg" className="h-12 px-6">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <Link href={""}>
            <Button size="lg" variant="outline" className="h-12 px-6">
              Learn More
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center md:mt-16">
          <div className="h-auto min-h-[300px] w-full max-w-[1280px] overflow-hidden rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 shadow-xl md:h-[500px] lg:h-[720px]">
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Financial Overview</h3>
                  <p className="text-muted-foreground text-sm">Last 30 days</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">Healthy</span>
                </div>
              </div>
              <div className="mt-6 flex-1">
                <LineChart
                  data={[
                    { name: "Jan", value: 2500 },
                    { name: "Feb", value: 1800 },
                    { name: "Mar", value: 3200 },
                    { name: "Apr", value: 2800 },
                    { name: "May", value: 2000 },
                    { name: "Jun", value: 3500 },
                    { name: "Jul", value: 4000 },
                  ]}
                  categories={["value"]}
                  colors={["var(--chart-2)"]}
                  yAxisWidth={60}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                  showGridLines={true}
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-secondary-foreground text-xs">Income</p>
                  <p className="text-lg font-semibold">$8,540</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-secondary-foreground text-xs">Expenses</p>
                  <p className="text-lg font-semibold">$4,205</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-secondary-foreground text-xs">Savings</p>
                  <p className="text-lg font-semibold">$2,100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
