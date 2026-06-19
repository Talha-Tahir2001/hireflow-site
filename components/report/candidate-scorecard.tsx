"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, XCircle, TrendingUp, User } from "lucide-react";

interface Candidate {
    id: string;
    name: string;
    initials: string;
    role: string;
    scores: Record<string, number>;
    totalScore: number;
    maxTotal: number;
    rank: number;
    strengths: string[];
    gaps: string[];
    recommendation: string;
    recommendationColor: string;
}

interface CandidateScorecardProps {
    candidate: Candidate;
    rubric: { category: string; weight: number; maxScore: number }[];
}

export function CandidateScorecard({ candidate, rubric }: CandidateScorecardProps) {
    const badgeVariant = candidate.recommendationColor as "green" | "blue" | "red" | "amber" | "default";

    return (
        <Card className="overflow-hidden border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-muted to-white border-b pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-lg font-bold">
                            {candidate.initials}
                        </div>
                        <div>
                            <CardTitle className="text-xl">{candidate.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{candidate.role}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <Badge variant={badgeVariant} className="text-sm px-3 py-1">
                            {candidate.recommendation}
                        </Badge>
                        <div className="mt-2">
                            <span className="text-3xl font-bold text-foreground">{candidate.totalScore}</span>
                            <span className="text-sm text-muted-foreground">/{candidate.maxTotal}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Rank #{candidate.rank}</div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                {/* Score Breakdown */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Score Breakdown</h4>
                    {rubric.map((item) => {
                        const score = candidate.scores[item.category] || 0;
                        const percentage = (score / item.maxScore) * 100;
                        return (
                            <div key={item.category} className="space-y-1.5">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-foreground">{item.category}</span>
                                    <span className="font-medium text-foreground">
                                        {score}/{item.maxScore}
                                    </span>
                                </div>
                                <Progress value={percentage} className="h-2" />
                            </div>
                        );
                    })}
                </div>

                <Separator className="my-6" />

                {/* Strengths & Gaps */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                            <TrendingUp className="h-4 w-4" />
                            Strengths
                        </h4>
                        <ul className="space-y-2">
                            {candidate.strengths.map((strength, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                                    {strength}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-700 uppercase tracking-wider">
                            <XCircle className="h-4 w-4" />
                            Gaps
                        </h4>
                        <ul className="space-y-2">
                            {candidate.gaps.map((gap, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                                    {gap}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}