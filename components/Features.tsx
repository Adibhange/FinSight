import { featuresData } from "@/data/features";
import { Card, CardContent } from "./ui/card";

const Features = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="gradient inline-block rounded-lg px-3 py-1 text-sm text-white">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful Financial Tools
            </h2>
            <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to manage your finances in one place, powered
              by advanced AI technology.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <Card
              className="group relative overflow-hidden p-4 transition-all hover:shadow-lg"
              key={index}
            >
              <div className="from-primary/10 to-primary/5 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100" />
              <CardContent className="space-y-3 pt-4">
                <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg p-2">
                  <feature.icon className="text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
