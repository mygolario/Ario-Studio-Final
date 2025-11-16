"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto glass-premium rounded-3xl p-16 glow-soft"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Ready to build your <span className="gradient-text">next chapter?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed">
            Let's turn your vision into a cinematic web experience that converts visitors into
            customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              View Our Work
            </Button>
          </div>
          <p className="text-sm text-white/40 mt-8">
            Typical response time: 24-48 hours • Free initial consultation
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
