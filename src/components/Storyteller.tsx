import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Lightbulb, Star } from "lucide-react";
import { useValueProp } from '@/context/ValuePropContext';

const toneExamples = [
  {
    tone: "Professional",
    example: "I leverage advanced data analytics to help Fortune 500 companies optimize their operational efficiency...",
    badge: "Corporate"
  },
  {
    tone: "Conversational", 
    example: "I help busy executives cut through the noise and focus on what really matters for their business...",
    badge: "Accessible"
  },
  {
    tone: "Results-Focused",
    example: "I deliver 25% cost reductions and 40% efficiency gains for manufacturing companies through...",
    badge: "Quantified"
  }
];

const audienceInsights = [
  {
    audience: "C-Level Executives",
    pain: "Limited time, need strategic focus",
    language: "ROI, efficiency, competitive advantage"
  },
  {
    audience: "Technical Teams",
    pain: "Complex implementations, resource constraints", 
    language: "Scalability, integration, best practices"
  },
  {
    audience: "SMBs",
    pain: "Budget limitations, need immediate impact",
    language: "Cost-effective, quick wins, growth"
  }
];

export function Storyteller() {
  const { state } = useValueProp();
  const { currentStep } = state;

  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Storytelling Tips
          </CardTitle>
          <CardDescription>
            Craft your message for maximum impact
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Know Your Audience
                </h4>
                <div className="space-y-3">
                  {audienceInsights.map((insight, index) => (
                    <div key={index} className="p-3 bg-muted/50 rounded-lg">
                      <div className="font-medium text-sm">{insight.audience}</div>
                      <div className="text-xs text-muted-foreground mb-1">Pain: {insight.pain}</div>
                      <div className="text-xs">Language: {insight.language}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Story Structure
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-primary/10 rounded">
                    <strong>Situation:</strong> Set the context
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <strong>Task:</strong> Define the challenge
                  </div>
                  <div className="p-2 bg-primary/10 rounded">
                    <strong>Action:</strong> Explain your approach
                  </div>
                  <div className="p-2 bg-accent/20 rounded">
                    <strong>Result:</strong> Quantify the outcome
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            Tone Examples
          </CardTitle>
          <CardDescription>
            Different approaches for different audiences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {toneExamples.map((example, index) => (
            <div key={index} className="p-3 border border-border/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{example.tone}</span>
                <Badge variant="outline" className="text-xs">{example.badge}</Badge>
              </div>
              <p className="text-xs text-muted-foreground italic">{example.example}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}