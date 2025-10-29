import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default Index;
