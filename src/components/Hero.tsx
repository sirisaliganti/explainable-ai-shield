import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock } from "lucide-react";
import heroNetwork from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroNetwork})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Animated Network Nodes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-network-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary rounded-full animate-network-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-primary rounded-full animate-network-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary rounded-full animate-network-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">99.8% Detection Accuracy</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
            Detect threats faster with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-hero">
              explainable AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            AI-powered threat detection that prioritizes, explains, and routes high-risk incidents to your team — in real time
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="text-base px-8">
              <Zap className="w-5 h-5 mr-2" />
              Request a Demo
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 border-primary/30 hover:border-primary">
              See a Live Demo
            </Button>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-muted-foreground flex items-center justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Lock className="w-4 h-4 text-success" />
            GDPR & SOC2 compliant · 30-day pilot available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
