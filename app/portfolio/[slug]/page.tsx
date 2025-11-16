"use client";

import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { use } from "react";

// Note: generateStaticParams is not needed for client components
// Static generation will be handled at build time

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <Section className="relative">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                href="/portfolio"
                className="text-white/60 hover:text-white transition-colors text-sm mb-4 inline-block"
              >
                ← Back to Portfolio
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm">
                {project.type}
              </span>
              <span className="text-sm text-white/50 capitalize">{project.status}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 mb-8">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Content Sections */}
      <Section className="relative">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Problem */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">
                The Problem
              </h2>
              <p className="text-white/80 leading-relaxed">{project.content.problem}</p>
            </div>

            {/* Approach */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">
                Our Approach
              </h2>
              <p className="text-white/80 leading-relaxed">{project.content.approach}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">
                The Solution
              </h2>
              <p className="text-white/80 leading-relaxed">{project.content.solution}</p>
            </div>

            {/* Screenshot Gallery Placeholder */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 text-white">
                Project Screenshots
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i} className="aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white/60 text-sm mb-2">Screenshot {i}</p>
                      <p className="text-white/40 text-xs">Placeholder for project image</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Result */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-white">
                Results & Impact
              </h2>
              <p className="text-white/80 leading-relaxed">{project.content.result}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <Container>
          <div className="text-center glass-strong rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Have a similar project?
            </h2>
            <p className="text-white/70 mb-8">
              Let's discuss how we can bring your vision to life.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}

