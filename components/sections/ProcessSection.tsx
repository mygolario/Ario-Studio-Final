"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Search, FileText, Lightbulb, Code2, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We learn about your vision, goals, and target audience",
  },
  {
    icon: FileText,
    title: "Brief",
    description: "Define scope, timeline, and deliverables together",
  },
  {
    icon: Lightbulb,
    title: "Concept",
    description: "Design mockups and wireframes for your approval",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Development with regular check-ins and updates",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deployment, testing, and go-live support",
  },
  {
    icon: RefreshCw,
    title: "Iterate",
    description: "Post-launch optimization and feature enhancements",
  },
];

export default function ProcessSection() {
  return (
    <Section id="process" className="relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A streamlined process from concept to launch, designed for founders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

