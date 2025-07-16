import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Clock, Scissors } from "lucide-react";

interface StepFourProps {
  data: {
    monetaryImpact: string;
    timeSavings: string;
    costReductions: string;
  };
  updateData: (data: any) => void;
}

export function StepFour({ data, updateData }: StepFourProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-1">
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-accent" />
              Monetary Impact
            </CardTitle>
            <CardDescription>
              Calculate the financial benefits you bring to an organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="monetaryImpact">Financial Benefits</Label>
            <Textarea
              id="monetaryImpact"
              placeholder="e.g., Generated $500K in additional revenue, reduced costs by $200K annually, improved profit margins by 15%..."
              value={data.monetaryImpact}
              onChange={(e) => updateData({ monetaryImpact: e.target.value })}
              className="mt-2 min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Time Savings
            </CardTitle>
            <CardDescription>
              Determine how much time you save for your clients or organization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="timeSavings">Time Efficiency Gains</Label>
            <Textarea
              id="timeSavings"
              placeholder="e.g., Reduced project completion time by 30%, saved 10 hours/week through automation, improved process efficiency by 50%..."
              value={data.timeSavings}
              onChange={(e) => updateData({ timeSavings: e.target.value })}
              className="mt-2 min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-destructive" />
              Cost Reductions
            </CardTitle>
            <CardDescription>
              Identify areas where you help reduce costs and improve efficiency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="costReductions">Cost Optimization</Label>
            <Textarea
              id="costReductions"
              placeholder="e.g., Eliminated redundant processes saving $100K, optimized vendor contracts reducing costs by 20%, improved resource allocation cutting expenses by $75K..."
              value={data.costReductions}
              onChange={(e) => updateData({ costReductions: e.target.value })}
              className="mt-2 min-h-[100px]"
            />
          </CardContent>
        </Card>
      </div>

      {/* Value Summary Preview */}
      <Card className="bg-gradient-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Your Value Summary</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Preview of your calculated value impact
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span className="font-semibold">Financial Impact</span>
              </div>
              <p className="text-sm opacity-90">
                {data.monetaryImpact || "Add your monetary impact above"}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">Time Savings</span>
              </div>
              <p className="text-sm opacity-90">
                {data.timeSavings || "Add your time savings above"}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Scissors className="h-4 w-4" />
                <span className="font-semibold">Cost Reductions</span>
              </div>
              <p className="text-sm opacity-90">
                {data.costReductions || "Add your cost reductions above"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}