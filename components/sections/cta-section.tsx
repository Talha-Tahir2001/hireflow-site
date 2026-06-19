"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.6 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.1 5.1 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 1.3 5 1.7 5 1.7a5.1 5.1 0 0 0-.1 3.8 5.5 5.5 0 0 0-1.5 3.8c0 4.8 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    </svg>
);

export function CTASection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Ready to Transform Your Hiring?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        HireFlow reduces screening time from 6–8 hours to under 30 minutes,
                        eliminates bias through structured rubrics, and provides full audit trails
                        for compliance.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                            Try It on Band
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2 border-border ">
                            <Github className="h-4 w-4" />
                            View on GitHub
                        </Button>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span>Built with</span>
                        <span className="rounded bg-secondary px-2 py-1 text-muted-foreground">Band</span>
                        <span className="rounded bg-secondary px-2 py-1 text-muted-foreground">LangGraph</span>
                        <span className="rounded bg-secondary px-2 py-1 text-muted-foreground">Next.js</span>
                        <span className="rounded bg-secondary px-2 py-1 text-muted-foreground">shadcn/ui</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}