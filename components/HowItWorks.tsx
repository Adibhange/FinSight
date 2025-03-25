import { howItWorksData } from "@/data/howItWorks";

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="gradient text-white inline-block rounded-lg px-3 py-1 text-sm">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple Steps to Financial Freedom
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Getting started with FinSight is easy. Follow these simple steps
              to take control of your finances.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-12 md:grid-cols-3">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <div className="bg-background absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full shadow-lg">
                    <step.icon className="size-3" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <div className="bg-primary/50 group-hover:bg-primary mt-6 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
