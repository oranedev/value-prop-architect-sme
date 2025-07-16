import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Wrench, Heart, Star, Plus, X } from "lucide-react";

interface StepTwoProps {
  data: {
    technicalSkills: string[];
    softSkills: string[];
    successStories: string[];
  };
  updateData: (data: any) => void;
}

export function StepTwo({ data, updateData }: StepTwoProps) {
  const [newTechnicalSkill, setNewTechnicalSkill] = useState("");
  const [newSoftSkill, setNewSoftSkill] = useState("");
  const [newSuccessStory, setNewSuccessStory] = useState("");

  const addTechnicalSkill = () => {
    if (newTechnicalSkill.trim()) {
      updateData({ 
        technicalSkills: [...data.technicalSkills, newTechnicalSkill.trim()] 
      });
      setNewTechnicalSkill("");
    }
  };

  const removeTechnicalSkill = (index: number) => {
    updateData({ 
      technicalSkills: data.technicalSkills.filter((_, i) => i !== index) 
    });
  };

  const addSoftSkill = () => {
    if (newSoftSkill.trim()) {
      updateData({ 
        softSkills: [...data.softSkills, newSoftSkill.trim()] 
      });
      setNewSoftSkill("");
    }
  };

  const removeSoftSkill = (index: number) => {
    updateData({ 
      softSkills: data.softSkills.filter((_, i) => i !== index) 
    });
  };

  const addSuccessStory = () => {
    if (newSuccessStory.trim()) {
      updateData({ 
        successStories: [...data.successStories, newSuccessStory.trim()] 
      });
      setNewSuccessStory("");
    }
  };

  const removeSuccessStory = (index: number) => {
    updateData({ 
      successStories: data.successStories.filter((_, i) => i !== index) 
    });
  };

  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            Technical Skills
          </CardTitle>
          <CardDescription>
            List your core areas of technical expertise
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="e.g., Data Analysis, Project Management, Software Development..."
              value={newTechnicalSkill}
              onChange={(e) => setNewTechnicalSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTechnicalSkill()}
            />
            <Button variant="outline" onClick={addTechnicalSkill}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.technicalSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {skill}
                <button onClick={() => removeTechnicalSkill(index)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Soft Skills
          </CardTitle>
          <CardDescription>
            Highlight your interpersonal and communication skills
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="e.g., Leadership, Communication, Problem Solving..."
              value={newSoftSkill}
              onChange={(e) => setNewSoftSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addSoftSkill()}
            />
            <Button variant="outline" onClick={addSoftSkill}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.softSkills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {skill}
                <button onClick={() => removeSoftSkill(index)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Success Stories
          </CardTitle>
          <CardDescription>
            Provide brief, high-impact stories of your successes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Textarea
              placeholder="Describe a specific success story with measurable outcomes..."
              value={newSuccessStory}
              onChange={(e) => setNewSuccessStory(e.target.value)}
              className="min-h-[60px]"
            />
            <Button variant="outline" onClick={addSuccessStory} className="self-start">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            {data.successStories.map((story, index) => (
              <Card key={index} className="p-3 bg-muted/50">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-sm">{story}</p>
                  <button onClick={() => removeSuccessStory(index)}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}