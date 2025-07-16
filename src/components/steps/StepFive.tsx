import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Copy, Download, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface StepFiveProps {
  data: {
    audience: string;
    problem: string;
    uniqueApproach: string;
    technicalSkills: string[];
    softSkills: string[];
    successStories: string[];
    quantifiableResults: string[];
    testimonials: string[];
    monetaryImpact: string;
    timeSavings: string;
    costReductions: string;
    valueProposition: string;
  };
  updateData: (data: any) => void;
}

export function StepFive({ data, updateData }: StepFiveProps) {
  const { toast } = useToast();

  // Generate value proposition based on the formula
  useEffect(() => {
    if (data.audience && data.problem && data.uniqueApproach) {
      const generatedProposition = `I help ${data.audience} ${data.problem ? `solve ${data.problem}` : 'achieve their goals'} through ${data.uniqueApproach}, setting myself apart through my proven track record of ${data.quantifiableResults.length > 0 ? data.quantifiableResults[0] : 'delivering exceptional results'}.`;
      
      if (generatedProposition !== data.valueProposition) {
        updateData({ valueProposition: generatedProposition });
      }
    }
  }, [data.audience, data.problem, data.uniqueApproach, data.quantifiableResults]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data.valueProposition);
    toast({
      title: "Copied to clipboard",
      description: "Your value proposition has been copied to the clipboard.",
    });
  };

  const downloadSummary = () => {
    const summary = `
VALUE PROPOSITION SUMMARY
========================

Value Proposition:
${data.valueProposition}

Technical Skills:
${data.technicalSkills.map(skill => `• ${skill}`).join('\n')}

Soft Skills:
${data.softSkills.map(skill => `• ${skill}`).join('\n')}

Quantifiable Results:
${data.quantifiableResults.map(result => `• ${result}`).join('\n')}

Success Stories:
${data.successStories.map((story, index) => `${index + 1}. ${story}`).join('\n\n')}

Financial Impact:
${data.monetaryImpact}

Time Savings:
${data.timeSavings}

Cost Reductions:
${data.costReductions}

Testimonials:
${data.testimonials.map((testimonial, index) => `${index + 1}. "${testimonial}"`).join('\n\n')}
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
      {/* Formula Explanation */}
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            Value Proposition Formula
          </CardTitle>
          <CardDescription>
            Your value proposition follows this proven formula
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm">
            I help <span className="bg-primary/20 px-1 rounded">[audience]</span> achieve{" "}
            <span className="bg-primary/20 px-1 rounded">[outcome]</span> by{" "}
            <span className="bg-primary/20 px-1 rounded">[method/skill/approach]</span>, 
            setting myself apart through{" "}
            <span className="bg-primary/20 px-1 rounded">[unique differentiator]</span>.
          </div>
        </CardContent>
      </Card>

      {/* Generated Value Proposition */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" />
            Your Value Proposition
          </CardTitle>
          <CardDescription>
            Generated based on your inputs - feel free to customize further
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label htmlFor="valueProposition">Final Value Proposition</Label>
          <Textarea
            id="valueProposition"
            value={data.valueProposition}
            onChange={(e) => updateData({ valueProposition: e.target.value })}
            className="min-h-[120px]"
            placeholder="Your value proposition will be generated here..."
          />
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={copyToClipboard} className="flex items-center gap-2">
              <Copy className="h-4 w-4" />
              Copy to Clipboard
            </Button>
            <Button variant="accent" onClick={downloadSummary} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Summary
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Supporting Evidence Summary */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-1">
                {data.technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-1">
                {data.softSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quantifiable Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.quantifiableResults.map((result, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-sm">{result}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completion Message */}
      <Card className="bg-gradient-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="h-12 w-12 mx-auto" />
            <h3 className="text-xl font-semibold">Congratulations!</h3>
            <p className="opacity-90">
              You've successfully created a compelling value proposition. Use this to enhance your 
              professional profiles, proposals, and networking conversations.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}