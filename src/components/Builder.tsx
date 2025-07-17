import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  User, 
  TrendingUp, 
  Calculator, 
  Lightbulb,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useValueProp } from '@/context/ValuePropContext';
import { Storyteller } from './Storyteller';
import { Analyst } from './Analyst';
import { Seller } from './Seller';
import { StepOne } from "./steps/StepOne";
import { StepTwo } from "./steps/StepTwo";
import { StepThree } from "./steps/StepThree";
import { StepFour } from "./steps/StepFour";
import { StepFive } from "./steps/StepFive";

const steps = [
  {
    id: 1,
    title: "Define Your Context",
    description: "Identify your audience and unique approach",
    icon: Target,
  },
  {
    id: 2,
    title: "Your Assets",
    description: "List your skills and success stories",
    icon: User,
  },
  {
    id: 3,
    title: "Generate Numbers",
    description: "Quantify your impact and results",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Calculate Value",
    description: "Determine your financial impact",
    icon: Calculator,
  },
  {
    id: 5,
    title: "Craft Proposition",
    description: "Create your final value proposition",
    icon: Lightbulb,
  },
];

export function Builder() {
  const { state, updateData, nextStep, prevStep } = useValueProp();
  const { data, currentStep } = state;

  const progress = (currentStep / steps.length) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne data={data} updateData={updateData} />;
      case 2:
        return <StepTwo data={data} updateData={updateData} />;
      case 3:
        return <StepThree data={data} updateData={updateData} />;
      case 4:
        return <StepFour data={data} updateData={updateData} />;
      case 5:
        return <StepFive data={data} updateData={updateData} />;
      default:
        return <StepOne data={data} updateData={updateData} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Value Proposition Builder</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Craft a compelling value proposition that clearly communicates your unique value and impact as a Subject Matter Expert.
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
            </h2>
            <Badge variant="secondary" className="font-medium">
              {Math.round(progress)}% Complete
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
          
          {/* Step Navigation */}
          <div className="flex items-center gap-4 mt-6 overflow-x-auto">
            {steps.map((step) => {
              const Icon = step.icon;
              const isCompleted = step.id < currentStep;
              const isCurrent = step.id === currentStep;
              
              return (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    isCurrent
                      ? "bg-primary text-primary-foreground shadow-professional"
                      : isCompleted
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Card className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5" })}
                  {steps[currentStep - 1].title}
                </CardTitle>
                <CardDescription>
                  {steps[currentStep - 1].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {renderStep()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <Button
                    variant="professional"
                    onClick={nextStep}
                    disabled={currentStep === steps.length}
                    className="flex items-center gap-2"
                  >
                    {currentStep === steps.length ? "Complete" : "Next"}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agent Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {currentStep <= 2 && <Storyteller />}
            {currentStep === 3 && <Analyst />}
            {currentStep >= 4 && <Seller />}
          </div>
        </div>
      </div>
    </div>
  );
}