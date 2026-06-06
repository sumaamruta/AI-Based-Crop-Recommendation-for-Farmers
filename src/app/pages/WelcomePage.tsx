import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        {/* Welcome Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center shadow-lg">
            <Sprout className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl text-primary">
            Welcome, Farmer
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Your smart agricultural companion is ready to help you make data-driven decisions
          </p>
        </div>

        {/* Get Started Button */}
        <div className="pt-8">
          <Button
            onClick={() => navigate("/language")}
            size="lg"
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-lg gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="text-4xl text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Farmers</div>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="text-4xl text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="text-4xl text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}
