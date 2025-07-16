import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

interface StepOneProps {
  data: {
    audience: string;
    problem: string;
    uniqueApproach: string;
  };
  updateData: (data: any) => void;
}

export function StepOne({ data, updateData }: StepOneProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Identify Your Audience
            </CardTitle>
            <CardDescription>
              Who benefits most from your expertise? Be specific about your target audience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="audience">Target Audience</Label>
            <Input
              id="audience"
              placeholder="e.g., Fortune 500 executives, startup founders, marketing teams..."
              value={data.audience}
              onChange={(e) => updateData({ audience: e.target.value })}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Problem Solving
            </CardTitle>
            <CardDescription>
              What pressing problem do you solve better than others?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="problem">Core Problem You Solve</Label>
            <Textarea
              id="problem"
              placeholder="Describe the specific problem or pain point you address..."
              value={data.problem}
              onChange={(e) => updateData({ problem: e.target.value })}
              className="mt-2 min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Unique Approach
            </CardTitle>
            <CardDescription>
              What sets your approach apart from competitors?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="uniqueApproach">Your Unique Differentiator</Label>
            <Textarea
              id="uniqueApproach"
              placeholder="Explain what makes your methodology, experience, or approach unique..."
              value={data.uniqueApproach}
              onChange={(e) => updateData({ uniqueApproach: e.target.value })}
              className="mt-2 min-h-[100px]"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}