"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function FeaturedPortfolioSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <Section id="portfolio" className="relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Selected projects showcasing our approach to design and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <Card hover className="h-full flex flex-col group">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1.5 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                        {project.type}
                      </span>
                      <span className="text-xs text-white/40 capitalize">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{project.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <span className="text-sm text-purple-400 group-hover:text-purple-300 transition-colors font-medium">
                      View case study →
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/portfolio" variant="secondary" size="lg">
            View All Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}
