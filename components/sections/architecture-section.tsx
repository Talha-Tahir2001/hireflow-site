"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Search, MessageSquare, ClipboardCheck, Database, ArrowDown, ArrowRight } from "lucide-react";

export function ArchitectureSection() {
    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Architecture
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Built on <span className="font-semibold text-foreground">LangGraph</span> for
                        stateful agent orchestration with checkpointing, human-in-the-loop, and full audit trails.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl"
                >
                    <Card className="overflow-hidden border-0 shadow-xl">
                        <CardContent className="p-8">
                            {/* Input */}
                            <div className="mb-8 text-center">
                                <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 shadow-sm">
                                    <FileText className="h-5 w-5 text-muted-foreground" />
                                    <span className="text-sm font-medium text-foreground">Raw Job Description + Resumes</span>
                                </div>
                            </div>

                            <div className="flex justify-center mb-6">
                                <ArrowDown className="h-6 w-6 text-muted-foreground" />
                            </div>

                            {/* Agent Pipeline */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                                {[
                                    {
                                        icon: FileText,
                                        name: "Job Analyzer",
                                        color: "bg-secondary",
                                        lightColor: "bg-secondary/10",
                                        textColor: "text-secondary",
                                        borderColor: "border-secondary/20",
                                        input: "Raw JD",
                                        output: "Rubric",
                                    },
                                    {
                                        icon: Search,
                                        name: "Resume Screener",
                                        color: "bg-primary/100",
                                        lightColor: "bg-primary/10",
                                        textColor: "text-primary",
                                        borderColor: "border-primary/20",
                                        input: "Rubric + Resumes",
                                        output: "Scores",
                                    },
                                    {
                                        icon: MessageSquare,
                                        name: "Interview Planner",
                                        color: "bg-accent",
                                        lightColor: "bg-accent/10",
                                        textColor: "text-accent",
                                        borderColor: "border-accent/20",
                                        input: "Scores + Gaps",
                                        output: "Questions",
                                    },
                                    {
                                        icon: ClipboardCheck,
                                        name: "Decision Summarizer",
                                        color: "bg-muted",
                                        lightColor: "bg-muted/50",
                                        textColor: "text-foreground",
                                        borderColor: "border-border",
                                        input: "All Data",
                                        output: "Report",
                                    },
                                ].map((agent, i) => (
                                    <div key={i} className="relative">
                                        <div className={`rounded-xl border ${agent.borderColor} ${agent.lightColor} p-4 text-center`}>
                                            <div className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${agent.color} text-white`}>
                                                <agent.icon className="h-5 w-5" />
                                            </div>
                                            <h4 className={`text-sm font-bold ${agent.textColor}`}>{agent.name}</h4>
                                            <div className="mt-2 space-y-1">
                                                <Badge variant="outline" className="text-[10px]">{agent.input}</Badge>
                                                <div className="flex justify-center">
                                                    <ArrowDown className="h-3 w-3 text-muted-foreground" />
                                                </div>
                                                <Badge className={`text-[10px] ${agent.color} text-white border-0`}>{agent.output}</Badge>
                                            </div>
                                        </div>
                                        {i < 3 && (
                                            <div className="hidden md:absolute md:right-0 md:top-1/2 md:block md:-translate-y-1/2 md:translate-x-1/2 md:z-10">
                                                <ArrowRight className="h-5 w-5 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-6">
                                <ArrowDown className="h-6 w-6 text-muted-foreground" />
                            </div>

                            {/* Output */}
                            <div className="mt-6 text-center">
                                <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-6 py-4 shadow-sm">
                                    <ClipboardCheck className="h-5 w-5 text-foreground" />
                                    <span className="text-sm font-bold text-foreground">Final Hiring Report + Audit Trail</span>
                                </div>
                            </div>

                            {/* Tech Stack Row */}
                            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-border pt-6">
                                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Powered by</span>
                                {["Band", "LangGraph", "Python", "Claude Sonnet", "Recharts"].map((tech) => (
                                    <Badge key={tech} variant="secondary" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}