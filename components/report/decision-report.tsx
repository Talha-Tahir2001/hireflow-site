"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight, Clock, Bot, ListTodo } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

interface ComparisonData {
    candidate: string;
    technical: number;
    systemDesign: number;
    leadership: number;
    communication: number;
    cultureFit: number;
    total: number;
}

interface AuditEntry {
    step: string;
    timestamp: string;
    agent: string;
}

interface DecisionReportProps {
    summary: string;
    topRecommendation: {
        name: string;
        score: number;
        rationale: string;
    };
    comparisonMatrix: ComparisonData[];
    auditTrail: AuditEntry[];
    nextSteps: string[];
}

const COLORS = ["#f59e0b", "#2563eb", "#10b981", "#8b5cf6", "#ef4444"];

export function DecisionReport({ summary, topRecommendation, comparisonMatrix, auditTrail, nextSteps }: DecisionReportProps) {
    return (
        <div className="space-y-8">
            {/* Summary Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="p-8">
                    <div className="mb-6">
                        <Badge className="bg-primary-foreground text-primary border-0 mb-4 hover:bg-primary-foreground/90">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Final Recommendation
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">{topRecommendation.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{summary}</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4">
                        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary-foreground/90">
                            <ArrowRight className="h-4 w-4" />
                            Rationale
                        </div>
                        <p className="text-sm text-primary-foreground/80">{topRecommendation.rationale}</p>
                    </div>
                </CardContent>
            </Card>

            {/* Comparison Chart */}
            <Card className="border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-lg">Candidate Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={comparisonMatrix} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="candidate" tick={{ fontSize: 12 }} />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                                />
                                <Legend />
                                <Bar dataKey="technical" name="Technical" fill={COLORS[0]} radius={[4, 4, 0, 0]} />
                                <Bar dataKey="systemDesign" name="System Design" fill={COLORS[1]} radius={[4, 4, 0, 0]} />
                                <Bar dataKey="leadership" name="Leadership" fill={COLORS[2]} radius={[4, 4, 0, 0]} />
                                <Bar dataKey="communication" name="Communication" fill={COLORS[3]} radius={[4, 4, 0, 0]} />
                                <Bar dataKey="cultureFit" name="Culture Fit" fill={COLORS[4]} radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            {/* Audit Trail */}
            <Card className="border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Bot className="h-5 w-5 text-primary" />
                        Audit Trail
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative">
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
                        <div className="space-y-6">
                            {auditTrail.map((entry, i) => (
                                <div key={i} className="relative flex items-start gap-4 pl-10">
                                    <div className="absolute left-2 top-1.5 h-5 w-5 rounded-full bg-primary/10 border-2 border-primary/20" />
                                    <div className="flex-1 rounded-lg border border-border bg-muted/50 p-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-semibold text-foreground">{entry.step}</span>
                                            <Badge variant="outline" className="text-[10px]">
                                                {entry.agent}
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Clock className="h-3 w-3" />
                                            {entry.timestamp}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="border-0 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <ListTodo className="h-5 w-5 text-primary" />
                        Recommended Next Steps
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {nextSteps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                                    {i + 1}
                                </div>
                                <span className="text-sm text-foreground">{step}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}