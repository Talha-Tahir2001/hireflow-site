"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, MessageSquare, ClipboardCheck, ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Job Analyzer",
        description: "Parses raw job descriptions into weighted scoring rubrics, seniority signals, and red flag detection.",
        icon: FileText,
        color: "bg-amber-50 text-amber-600 border-amber-200",
        output: "Structured rubric with explicit criteria",
    },
    {
        id: 2,
        title: "Resume Screener",
        description: "Evaluates candidates against the rubric with consistent scoring, identifies strengths & gaps, and ranks applicants.",
        icon: Search,
        color: "bg-primary/10 text-primary border-primary/20",
        output: "Scored & ranked candidate list",
    },
    {
        id: 3,
        title: "Interview Planner",
        description: "Generates tailored interview question packs based on each candidate's specific strengths and gaps.",
        icon: MessageSquare,
        color: "bg-emerald-50 text-emerald-600 border-emerald-200",
        output: "Custom question packs per candidate",
    },
    {
        id: 4,
        title: "Decision Summarizer",
        description: "Produces the final hiring report with recommendations, comparisons, audit trail, and next steps.",
        icon: ClipboardCheck,
        color: "bg-violet-50 text-violet-600 border-violet-200",
        output: "Final report + audit trail",
    },
];

export function PipelineSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Four specialized agents, one orchestrated pipeline. Each agent passes
                        structured output to the next, creating a transparent, auditable workflow.
                    </p>
                </motion.div>

                <div className="relative mx-auto max-w-5xl">
                    {/* Connecting line */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-200 via-blue-200 to-violet-200 lg:block" />

                    <div className="space-y-8 lg:space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col items-center gap-6 lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Step number on line */}
                                <div className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sm font-bold text-foreground shadow-md ring-2 ring-slate-200 lg:flex">
                                    {step.id}
                                </div>

                                {/* Card */}
                                <div className={`w-full lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? "lg:pr-0" : "lg:pl-0"}`}>
                                    <Card className="border-l-4 border-l-transparent hover:shadow-lg transition-shadow duration-300" style={{ borderLeftColor: step.id === 1 ? '#f59e0b' : step.id === 2 ? '#2563eb' : step.id === 3 ? '#10b981' : '#8b5cf6' }}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${step.color}`}>
                                                    <step.icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                                            Step {step.id}
                                                        </span>
                                                        <ArrowRight className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-xs font-medium text-muted-foreground">
                                                            {step.output}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-foreground mb-2">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}