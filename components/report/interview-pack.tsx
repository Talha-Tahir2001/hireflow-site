"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MessageSquare, Target, StickyNote } from "lucide-react";

interface Question {
    topic: string;
    duration: string;
    question: string;
    focus: string;
}

interface InterviewPack {
    candidateId: string;
    candidateName: string;
    questions: Question[];
    interviewerNotes: string[];
}

interface InterviewPackProps {
    pack: InterviewPack;
}

export function InterviewPackViewer({ pack }: InterviewPackProps) {
    return (
        <Card className="overflow-hidden border-0 shadow-lg">
            <CardHeader className="bg-linear-to-r from-emerald-50 to-white border-b pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                        <CardTitle className="text-lg">Interview Pack</CardTitle>
                        <p className="text-sm text-muted-foreground">Tailored for {pack.candidateName}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                <div className="space-y-6">
                    {pack.questions.map((q, i) => (
                        <div key={i} className="rounded-lg border border-border bg-muted/50 p-4">
                            <div className="mb-3 flex items-center gap-3">
                                <Badge variant="secondary" className="text-xs">
                                    {q.topic}
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    {q.duration}
                                </div>
                            </div>
                            <p className="mb-3 text-sm font-medium text-foreground leading-relaxed">
                                "{q.question}"
                            </p>
                            <div className="flex items-start gap-2 text-xs text-muted-foreground">
                                <Target className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
                                <span>{q.focus}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-lg border border-amber-100 bg-amber-50/50 p-4">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-800">
                        <StickyNote className="h-4 w-4" />
                        Interviewer Notes
                    </h4>
                    <ul className="space-y-1.5">
                        {pack.interviewerNotes.map((note, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                                {note}
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
}