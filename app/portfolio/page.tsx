"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";

const projectTypes = ["All", ...Array.from(new Set(projects.map((p) => p.type)))];

export default function PortfolioPage() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((p) => p.type === selectedType);

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <Section className="relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Selected <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-white/70">
              Explore our portfolio of cinematic web experiences, AI products, and full-stack
              applications.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedType === type
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "glass text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <Card hover className="h-full flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {project.type}
                        </span>
                        <span className="text-xs text-white/50 capitalize">
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">{project.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <span className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
                        View case study →
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

