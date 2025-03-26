import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Testimonial from "@/components/landing-page/Testimonial";


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
