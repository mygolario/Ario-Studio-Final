"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

export default function AboutSection() {
  const highlights = [
    "Web & AI Product Builder",
    "MVP Design for Founders",
    "Next.js / React / TypeScript",
    "WordPress / Headless CMS",
  ];

  return (
    <Section id="about" className="relative">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="gradient-text">Ario Kaveh</span>
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                I'm a business-focused web designer and developer who bridges the gap between
                beautiful design and functional, scalable products. My journey started with a
                passion for creating digital experiences that don't just look good—they drive
                results.
              </p>
              <p>
                After years of building websites, MVPs, and AI-powered tools for founders and
                startups, I launched Ario Studio to offer a complete package: cinematic design
                thinking meets technical execution. Whether you need a portfolio site, an AI
                chatbot, or a full-stack MVP, I bring both the creative vision and the code to
                make it happen.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-lg p-4 text-center"
                >
                  <p className="text-sm font-medium text-white/90">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="aspect-square flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AK</span>
                </div>
                <p className="text-white/60 text-sm">Portrait Photo Placeholder</p>
                <p className="text-white/40 text-xs mt-2">Replace with optimized image</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

