import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, Scissors, TrendingUp, Users } from "lucide-react";

const examples = [
  {
    role: "Executive Assistant",
    audience: "C-level executives and senior management",
    valueProposition: "I help C-level executives achieve strategic focus and operational efficiency by managing complex administrative tasks and optimizing their time allocation, setting myself apart through my proven track record of saving executives 20+ hours per week while reducing operational costs by 15%.",
    metrics: {
      money: [
        "Reduced annual travel and entertainment expenses by 10%, saving $20,000",
        "Facilitated additional $100,000 in sales through optimized executive time allocation"
      ],
      time: [
        "Reduced administrative task time by 20%, freeing 520 hours annually",
        "Optimized calendar efficiency, saving 10 hours per week"
      ],
      costCutting: [
        "Negotiated 15% reduction in service costs, saving $15,000 annually",
        "Reduced travel expenses by 10%, saving $30,000 annually"
      ],
      revenue: [
        "Improved client satisfaction by 10%, contributing to $50,000 in additional sales",
        "Increased repeat business through follow-up management, generating $75,000 in revenue"
      ],
      profitImprovement: [
        "Workflow optimization contributed to 10% efficiency increase",
        "Strategic project support led to 10% profit increase"
      ]
    }
  },
  {
    role: "Data Analytics Consultant",
    audience: "Mid-market companies and enterprise organizations",
    valueProposition: "I help mid-market companies achieve data-driven decision making and operational insights by implementing advanced analytics frameworks and automated reporting systems, setting myself apart through my proven track record of delivering 300% ROI on analytics investments within 6 months.",
    metrics: {
      money: [
        "Generated $2M in additional revenue through predictive analytics",
        "Identified $500K in cost savings through operational data analysis"
      ],
      time: [
        "Reduced reporting time from 40 hours to 2 hours per week",
        "Automated data processing, saving 25 hours per week across teams"
      ],
      costCutting: [
        "Eliminated redundant data tools, saving $150K annually",
        "Optimized data infrastructure, reducing costs by 30%"
      ],
      revenue: [
        "Customer segmentation analysis increased conversion rates by 45%",
        "Pricing optimization models generated $800K in additional revenue"
      ],
      profitImprovement: [
        "Improved profit margins by 25% through cost analytics",
        "Increased operational efficiency by 40% through data insights"
      ]
    }
  },
  {
    role: "Project Management Specialist",
    audience: "Technology companies and software development teams",
    valueProposition: "I help technology companies achieve on-time project delivery and improved team productivity by implementing agile methodologies and risk management frameworks, setting myself apart through my proven track record of reducing project delivery time by 35% while maintaining 98% quality standards.",
    metrics: {
      money: [
        "Saved $1.2M in project costs through efficient resource allocation",
        "Prevented $800K in potential losses through early risk identification"
      ],
      time: [
        "Reduced average project delivery time by 35%",
        "Decreased meeting time by 50% through structured communication"
      ],
      costCutting: [
        "Eliminated scope creep, saving 20% on project budgets",
        "Optimized team structure, reducing overhead by 25%"
      ],
      revenue: [
        "Faster time-to-market generated $600K in early revenue",
        "Improved client satisfaction led to 30% increase in repeat business"
      ],
      profitImprovement: [
        "Increased project profitability by 40% through efficiency gains",
        "Improved team utilization from 65% to 85%"
      ]
    }
  }
];

const metricIcons = {
  money: DollarSign,
  time: Clock,
  costCutting: Scissors,
  revenue: TrendingUp,
  profitImprovement: Users
};

const metricLabels = {
  money: "💰 Financial Impact",
  time: "⏱️ Time Savings",
  costCutting: "✂️ Cost Reductions",
  revenue: "📈 Revenue Generation",
  profitImprovement: "💹 Profit Improvement"
};

export function ExamplesSection() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Real SME Value Propositions</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how other Subject Matter Experts have crafted compelling value propositions with quantifiable results
        </p>
      </div>

      <div className="grid gap-8">
        {examples.map((example, index) => (
          <Card key={index} className="shadow-card bg-gradient-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{example.role}</CardTitle>
                <Badge variant="secondary">{example.audience}</Badge>
              </div>
              <CardDescription className="text-base">
                <strong>Value Proposition:</strong> {example.valueProposition}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(example.metrics).map(([category, items]) => {
                  const Icon = metricIcons[category as keyof typeof metricIcons];
                  const label = metricLabels[category as keyof typeof metricLabels];
                  
                  return (
                    <Card key={category} className="border-primary/10">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm flex items-center gap-2">
                          {Icon && <Icon className="h-4 w-4" />}
                          {label}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-muted-foreground">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}