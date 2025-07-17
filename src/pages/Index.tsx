import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Operator } from "@/components/Operator";
import { ExamplesSection } from "@/components/ExamplesSection";
import { 
  Target, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb,
  Building
} from "lucide-react";

const Index = () => {
  const [showBuilder, setShowBuilder] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'builder' | 'examples'>('home');

  if (showBuilder || activeSection === 'builder') {
    return <Operator />;
  }

  if (activeSection === 'examples') {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <div className="bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">Value Proposition Builder</h1>
              <div className="flex gap-2">
                <Button variant="ghost" onClick={() => setActiveSection('home')}>
                  Home
                </Button>
                <Button variant="outline" onClick={() => setActiveSection('examples')}>
                  Examples
                </Button>
                <Button variant="professional" onClick={() => setActiveSection('builder')}>
                  Start Building
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-12">
          <ExamplesSection />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Professional Value Proposition Tool
            </Badge>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Craft Your Compelling
              <span className="block text-primary-glow">Value Proposition</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Transform your expertise into a clear, quantifiable value proposition that resonates with your target audience and sets you apart from the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setShowBuilder(true)}
                className="flex items-center gap-2"
              >
                Start Building Your Value Proposition
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setActiveSection('examples')}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Use Our Value Proposition Builder?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow a proven 5-step framework used by top consultants and subject matter experts
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-card bg-gradient-card border-primary/10">
            <CardHeader>
              <Target className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Define Your Context</CardTitle>
              <CardDescription>
                Identify your target audience and the specific problems you solve better than anyone else.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card bg-gradient-card border-primary/10">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Inventory Your Assets</CardTitle>
              <CardDescription>
                Catalog your technical skills, soft skills, and success stories that demonstrate your expertise.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card bg-gradient-card border-primary/10">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Quantify Your Impact</CardTitle>
              <CardDescription>
                Generate concrete numbers and metrics that prove your value and validate your claims.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-muted/30">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven 5-Step Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your expertise into a compelling value proposition that wins clients and opportunities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {[
              { icon: Target, title: "Define Context", description: "Identify audience & problems" },
              { icon: Building, title: "Your Assets", description: "Skills & success stories" },
              { icon: TrendingUp, title: "Generate Numbers", description: "Quantifiable results" },
              { icon: CheckCircle, title: "Calculate Value", description: "Financial impact" },
              { icon: Lightbulb, title: "Craft Proposition", description: "Final value statement" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute translate-x-8 translate-y-8">
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Value Proposition?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with a compelling value proposition.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => setShowBuilder(true)}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
          >
            Start Building Now - It's Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
