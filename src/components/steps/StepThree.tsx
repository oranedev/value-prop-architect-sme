import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { BarChart3, MessageSquareQuote, Plus, X } from "lucide-react";

interface StepThreeProps {
  data: {
    quantifiableResults: string[];
    testimonials: string[];
  };
  updateData: (data: any) => void;
}

export function StepThree({ data, updateData }: StepThreeProps) {
  const [newResult, setNewResult] = useState("");
  const [newTestimonial, setNewTestimonial] = useState("");

  const addResult = () => {
    if (newResult.trim()) {
      updateData({ 
        quantifiableResults: [...data.quantifiableResults, newResult.trim()] 
      });
      setNewResult("");
    }
  };

  const removeResult = (index: number) => {
    updateData({ 
      quantifiableResults: data.quantifiableResults.filter((_, i) => i !== index) 
    });
  };

  const addTestimonial = () => {
    if (newTestimonial.trim()) {
      updateData({ 
        testimonials: [...data.testimonials, newTestimonial.trim()] 
      });
      setNewTestimonial("");
    }
  };

  const removeTestimonial = (index: number) => {
    updateData({ 
      testimonials: data.testimonials.filter((_, i) => i !== index) 
    });
  };

  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Quantifiable Results
          </CardTitle>
          <CardDescription>
            Identify metrics that demonstrate your impact (e.g., percentage improvements, cost savings)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="e.g., 25% increase in efficiency, $50K cost savings, 40% faster delivery..."
              value={newResult}
              onChange={(e) => setNewResult(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addResult()}
            />
            <Button variant="outline" onClick={addResult}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-2">
            {data.quantifiableResults.map((result, index) => (
              <Card key={index} className="p-3 bg-accent/50">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-sm font-medium">{result}</span>
                  <button onClick={() => removeResult(index)}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
          
          {data.quantifiableResults.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Add quantifiable results to strengthen your value proposition</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquareQuote className="h-5 w-5 text-primary" />
            Testimonials and Case Studies
          </CardTitle>
          <CardDescription>
            Gather evidence that validates your claims and demonstrates client satisfaction
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Textarea
              placeholder="Include a testimonial or brief case study that validates your impact..."
              value={newTestimonial}
              onChange={(e) => setNewTestimonial(e.target.value)}
              className="min-h-[80px]"
            />
            <Button variant="outline" onClick={addTestimonial} className="self-start">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {data.testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 bg-gradient-card border-primary/10">
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <MessageSquareQuote className="h-4 w-4 text-primary mb-2" />
                    <p className="text-sm italic">&ldquo;{testimonial}&rdquo;</p>
                  </div>
                  <button onClick={() => removeTestimonial(index)}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
          
          {data.testimonials.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <MessageSquareQuote className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Add testimonials to build credibility for your value proposition</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}