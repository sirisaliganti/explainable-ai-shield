import { Card } from "@/components/ui/card";
import { Cloud, Server, Shield, Database, Zap, Lock } from "lucide-react";

const integrations = [
  { name: "Splunk", icon: Database, color: "text-primary" },
  { name: "AWS CloudTrail", icon: Cloud, color: "text-warning" },
  { name: "Microsoft Sentinel", icon: Shield, color: "text-secondary" },
  { name: "CrowdStrike", icon: Lock, color: "text-destructive" },
  { name: "Datadog", icon: Server, color: "text-success" },
  { name: "Elastic SIEM", icon: Zap, color: "text-primary" }
];

const Integrations = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Integrates with your security stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pre-built connectors for SIEMs, cloud platforms, and EDR solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => {
              const Icon = integration.icon;
              return (
                <Card
                  key={index}
                  className="p-6 flex flex-col items-center justify-center gap-3 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Icon className={`w-8 h-8 ${integration.color}`} />
                  </div>
                  <span className="font-semibold text-center">{integration.name}</span>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              + 50 more integrations available
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["REST API", "Webhook", "Custom Connectors"].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
