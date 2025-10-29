import { Card } from "@/components/ui/card";
import { Shield, FileText, Link2, Workflow } from "lucide-react";
import detectionImg from "@/assets/feature-detection.png";
import explainableImg from "@/assets/feature-explainable.png";
import integrationsImg from "@/assets/feature-integrations.png";
import automationImg from "@/assets/feature-automation.png";

const features = [
  {
    icon: Shield,
    title: "Real-time Detection & Prioritization",
    description: "AI filters noise, surfaces high-risk events, and ranks by business impact.",
    image: detectionImg,
    badge: "Critical",
    badgeColor: "destructive"
  },
  {
    icon: FileText,
    title: "Explainable Alerts",
    description: "Each alert includes an AI-generated summary, root-cause clues, and remediation steps.",
    image: explainableImg,
    badge: "Transparent",
    badgeColor: "success"
  },
  {
    icon: Link2,
    title: "Seamless Integrations",
    description: "Plug into SIEMs, cloud platforms, and EDRs with prebuilt connectors.",
    image: integrationsImg,
    badge: "Connected",
    badgeColor: "secondary"
  },
  {
    icon: Workflow,
    title: "Automated Response Playbooks",
    description: "Auto-triage playbooks that reduce mean time to resolution.",
    image: automationImg,
    badge: "Fast",
    badgeColor: "warning"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-grade threat detection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powered by multi-model AI that learns your environment and prioritizes what matters
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold">{feature.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        feature.badgeColor === 'destructive' ? 'bg-destructive/10 text-destructive' :
                        feature.badgeColor === 'success' ? 'bg-success/10 text-success' :
                        feature.badgeColor === 'warning' ? 'bg-warning/10 text-warning' :
                        'bg-secondary/10 text-secondary'
                      }`}>
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-contain"
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
