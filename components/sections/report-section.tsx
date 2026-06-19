"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CandidateScorecard } from "@/components/report/candidate-scorecard";
import { InterviewPackViewer } from "@/components/report/interview-pack";
import { DecisionReport } from "@/components/report/decision-report";
import { hireFlowOutput } from "@/data/sample-report";
import { FileText, BarChart3, MessageSquare, ClipboardCheck, Eye, Code } from "lucide-react";
import { useState } from "react";

export function ReportSection() {
    const [showRaw, setShowRaw] = useState(false);

    return (
        <section id="report" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
                        <FileText className="h-4 w-4" />
                        <span>Real Output from Band Pipeline</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        See It In Action
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        This is actual structured output from HireFlow's 4-agent pipeline.
                        Toggle between the formatted view and raw JSON to see the full picture.
                    </p>
                </motion.div>

                {/* Raw/Formatted Toggle */}
                <div className="mb-8 flex justify-center">
                    <button
                        onClick={() => setShowRaw(!showRaw)}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-muted transition-colors"
                    >
                        {showRaw ? <Eye className="h-4 w-4" /> : <Code className="h-4 w-4" />}
                        {showRaw ? "Show Formatted View" : "Show Raw JSON"}
                    </button>
                </div>

                {showRaw ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mx-auto max-w-4xl"
                    >
                        <div className="rounded-xl bg-background p-6 overflow-auto">
                            <pre className="text-xs text-emerald-400 leading-relaxed">
                                {JSON.stringify(hireFlowOutput, null, 2)}
                            </pre>
                        </div>
                    </motion.div>
                ) : (
                    <Tabs defaultValue="scorecards" className="mx-auto max-w-5xl">
                        <TabsList className="mb-8 grid w-full grid-cols-3">
                            <TabsTrigger value="scorecards" className="gap-2">
                                <BarChart3 className="h-4 w-4" />
                                Scorecards
                            </TabsTrigger>
                            <TabsTrigger value="interviews" className="gap-2">
                                <MessageSquare className="h-4 w-4" />
                                Interview Packs
                            </TabsTrigger>
                            <TabsTrigger value="decision" className="gap-2">
                                <ClipboardCheck className="h-4 w-4" />
                                Final Decision
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="scorecards" className="space-y-6">
                            {hireFlowOutput.candidates.map((candidate) => (
                                <motion.div
                                    key={candidate.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <CandidateScorecard
                                        candidate={candidate}
                                        rubric={hireFlowOutput.jobAnalysis.rubric}
                                    />
                                </motion.div>
                            ))}
                        </TabsContent>

                        <TabsContent value="interviews" className="space-y-6">
                            {hireFlowOutput.interviewPacks.map((pack) => (
                                <motion.div
                                    key={pack.candidateId}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <InterviewPackViewer pack={pack} />
                                </motion.div>
                            ))}
                        </TabsContent>

                        <TabsContent value="decision">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <DecisionReport
                                    summary={hireFlowOutput.decisionReport.summary}
                                    topRecommendation={hireFlowOutput.decisionReport.topRecommendation}
                                    comparisonMatrix={hireFlowOutput.decisionReport.comparisonMatrix}
                                    auditTrail={hireFlowOutput.decisionReport.auditTrail}
                                    nextSteps={hireFlowOutput.decisionReport.nextSteps}
                                />
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                )}
            </div>
        </section>
    );
}