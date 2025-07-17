import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Target, AlertTriangle } from "lucide-react";
import { useValueProp } from '@/context/ValuePropContext';

const metricSuggestions = [
  {
    category: "Efficiency",
    metrics: ["% time reduction", "% cost savings", "hours saved per week"],
    examples: ["Reduced processing time by 40%", "Saved 15 hours per week", "Cut costs by 25%"]
  },
  {
    category: "Revenue",
    metrics: ["$ revenue generated", "% conversion increase", "new clients acquired"],
    examples: ["Generated $500K in new revenue", "Increased conversions by 35%", "Acquired 50 new clients"]
  },
  {
    category: "Quality",
    metrics: ["% error reduction", "customer satisfaction score", "% improvement in accuracy"],
    examples: ["Reduced errors by 90%", "Achieved 98% satisfaction", "Improved accuracy by 60%"]
  }
];

const evidenceTypes = [
  {
    type: "Before/After Comparisons",
    description: "Show the transformation you created",
    example: "Reduced manual processing from 8 hours to 30 minutes"
  },
  {
    type: "Industry Benchmarks",
    description: "Compare your results to industry standards", 
    example: "Achieved 95% accuracy vs. industry average of 75%"
  },
  {
    type: "Client Testimonials",
    description: "Let clients validate your impact",
    example: "\"John's solution saved us $200K annually\" - CEO, TechCorp"
  }
];

export function Analyst() {
  const { state } = useValueProp();
  const { data } = state;

  const hasResults = data.quantifiableResults.length > 0;
  const hasTestimonials = data.testimonials.length > 0;

  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Metrics Analyzer
          </CardTitle>
          <CardDescription>
            Suggestions for quantifying your impact
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {metricSuggestions.map((category, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                {category.category} Metrics
              </h4>
              <div className="space-y-1">
                {category.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="text-xs p-2 bg-muted/50 rounded">
                    <div className="font-medium">{metric}</div>
                    <div className="text-muted-foreground">{category.examples[mIndex]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" />
            Evidence Builder
          </CardTitle>
          <CardDescription>
            Types of proof that strengthen your claims
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {evidenceTypes.map((evidence, index) => (
            <div key={index} className="p-3 border border-border/50 rounded-lg">
              <div className="font-medium text-sm mb-1">{evidence.type}</div>
              <div className="text-xs text-muted-foreground mb-2">{evidence.description}</div>
              <div className="text-xs bg-accent/10 p-2 rounded italic">{evidence.example}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Progress Tracker */}
      <Card className={`border-2 ${hasResults && hasTestimonials ? 'border-accent' : 'border-destructive/50'}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {hasResults && hasTestimonials ? (
              <BarChart3 className="h-5 w-5 text-accent" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-destructive" />
            )}
            Evidence Checklist
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Quantifiable Results</span>
            <Badge variant={hasResults ? "default" : "destructive"}>
              {data.quantifiableResults.length} added
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Testimonials/Cases</span>
            <Badge variant={hasTestimonials ? "default" : "destructive"}>
              {data.testimonials.length} added
            </Badge>
          </div>
          {hasResults && hasTestimonials && (
            <div className="mt-3 p-2 bg-accent/10 rounded text-xs text-center">
              ✅ Strong evidence foundation!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}