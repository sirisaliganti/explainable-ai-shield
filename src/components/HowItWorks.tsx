import { Card } from "@/components/ui/card";
import { Database, Brain, AlertTriangle, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Ingest Telemetry",
    description: "Collect logs, telemetry, and endpoint data from your entire infrastructure"
  },
  {
    number: "02",
    icon: Brain,
    title: "Analyze with AI",
    description: "Multi-model AI and behavioral baselining detect anomalies and threats"
  },
  {
    number: "03",
    icon: AlertTriangle,
    title: "Score & Explain Risk",
    description: "Get human-readable rationale with risk scores for each detection"
  },
  {
    number: "04",
    icon: Zap,
    title: "Auto-Route & Respond",
    description: "Route to teams or trigger automated playbooks for instant response"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four steps to complete threat visibility and automated response
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                    {/* Number Badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 mt-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
