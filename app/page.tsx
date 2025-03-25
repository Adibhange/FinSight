import CTA from "@/components/CTA";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonial />
      <CTA />
    </div>
  );
}
