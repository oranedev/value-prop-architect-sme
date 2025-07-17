import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Copy, Share2, Download, CheckCircle, DollarSign } from "lucide-react";
import { useValueProp } from '@/context/ValuePropContext';
import { useToast } from "@/hooks/use-toast";

const ctaFormats = [
  {
    platform: "LinkedIn Headline",
    format: "Executive Assistant | Saving C-Suite 20+ hrs/week | 15% Cost Reduction Expert",
    maxLength: "120 characters"
  },
  {
    platform: "Email Signature",
    format: "Helping executives achieve strategic focus through operational efficiency",
    maxLength: "60 characters"
  },
  {
    platform: "Elevator Pitch",
    format: "30-second verbal introduction with your key value points",
    maxLength: "30 seconds"
  }
];

const channels = [
  {
    name: "Professional Networks",
    description: "LinkedIn, industry forums",
    tip: "Focus on credibility and results"
  },
  {
    name: "Proposals & Pitches", 
    description: "Client presentations, RFPs",
    tip: "Lead with quantifiable impact"
  },
  {
    name: "Website & Portfolio",
    description: "Personal branding, case studies", 
    tip: "Include testimonials prominently"
  }
];

export function Seller() {
  const { state } = useValueProp();
  const { data, currentStep } = state;
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
  };

  const shareValueProp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Value Proposition',
        text: data.valueProposition,
      });
    } else {
      copyToClipboard(data.valueProposition, "Value proposition");
    }
  };

  const downloadSummary = () => {
    const summary = `
VALUE PROPOSITION SUMMARY
========================

Value Proposition:
${data.valueProposition}

Key Metrics:
${data.quantifiableResults.map(result => `• ${result}`).join('\n')}

Financial Impact:
${data.monetaryImpact}

Time Savings:
${data.timeSavings}

Cost Reductions:
${data.costReductions}
    `;

    const blob = new Blob([summary], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'value-proposition-summary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download started",
      description: "Your value proposition summary is being downloaded.",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-primary" />
            Marketing Formats
          </CardTitle>
          <CardDescription>
            Adapt your value prop for different channels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {ctaFormats.map((format, index) => (
            <div key={index} className="p-3 border border-border/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{format.platform}</span>
                <Badge variant="outline" className="text-xs">{format.maxLength}</Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{format.format}</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => copyToClipboard(format.format, format.platform)}
                className="h-7 text-xs"
              >
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5 text-accent" />
            Distribution Channels
          </CardTitle>
          <CardDescription>
            Where to use your value proposition
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {channels.map((channel, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <div className="font-medium text-sm">{channel.name}</div>
              <div className="text-xs text-muted-foreground mb-1">{channel.description}</div>
              <div className="text-xs bg-accent/20 p-1 rounded">💡 {channel.tip}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {currentStep === 5 && data.valueProposition && (
        <Card className="border-accent bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              Ready to Launch
            </CardTitle>
            <CardDescription>
              Your value proposition is complete
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Button 
                variant="default" 
                onClick={shareValueProp}
                className="w-full flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share Value Proposition
              </Button>
              
              <Button 
                variant="outline" 
                onClick={downloadSummary}
                className="w-full flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Complete Summary
              </Button>
            </div>

            <div className="mt-4 p-3 bg-gradient-primary text-primary-foreground rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4" />
                <span className="font-medium text-sm">Next Steps</span>
              </div>
              <ul className="text-xs space-y-1 opacity-90">
                <li>• Update your LinkedIn headline</li>
                <li>• Refresh your email signature</li>
                <li>• Practice your 30-second pitch</li>
                <li>• Update your website/portfolio</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}