"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, Shield, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-muted to-white py-20 lg:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                            <Zap className="h-4 w-4" />
                            <span>Built for the Band AI Hackathon 2026</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                    >
                        HireFlow
                        <span className="block text-primary">AI Hiring Intelligence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground"
                    >
                        A multi-agent hiring pipeline powered by{" "}
                        <span className="font-semibold text-foreground">Band</span> and{" "}
                        <span className="font-semibold text-foreground">LangGraph</span>.
                        Four specialized AI agents collaborate to transform hiring from a
                        40-hour manual process into a 4-hour orchestrated workflow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90" asChild>
                            <Link href="https://app.band.ai/chat/7f7e7f2b-f9ce-4f6d-9f2d-b68cef820fc8">
                                Try It on Band
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2" asChild>
                            <a href="#report">
                                See Sample Report
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
                    >
                        {[
                            { icon: Bot, label: "4 AI Agents", desc: "Specialized roles" },
                            { icon: Workflow, label: "Orchestrated", desc: "LangGraph pipeline" },
                            { icon: Shield, label: "Auditable", desc: "Full traceability" },
                            { icon: Zap, label: "10x Faster", desc: "Hours → minutes" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                                <div className="text-xs text-muted-foreground">{item.desc}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}