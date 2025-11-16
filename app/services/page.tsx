"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";
import { Globe, Sparkles, Palette, Code } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const iconMap: Record<string, any> = {
  globe: Globe,
  sparkles: Sparkles,
  palette: Palette,
  code: Code,
};

export default function ServicesPage() {
  return (
    <div className="relative pt-32">
      {/* Hero */}
      <Section className="relative">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-white/70">
              Design and build cinematic, AI-native web products that drive results for your
              business.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Detail */}
      <Section className="relative">
        <Container>
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon || "globe"];
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="scroll-mt-32"
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 0 ? "" : "md:order-2"}>
                      <div className="glass-strong rounded-2xl p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          {Icon && (
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                              <Icon className="w-8 h-8 text-purple-400" />
                            </div>
                          )}
                          <h2 className="text-3xl md:text-4xl font-heading font-bold">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-white/80 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-white mb-3">Deliverables:</h3>
                          <ul className="space-y-2">
                            {service.deliverables.map((item) => (
                              <li key={item} className="flex items-start space-x-2">
                                <span className="text-purple-400 mt-1">•</span>
                                <span className="text-white/70">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={index % 2 === 0 ? "md:order-2" : ""}>
                      <div className="aspect-square glass rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                        <div className="text-center">
                          <p className="text-white/60 text-sm mb-2">Service Visual</p>
                          <p className="text-white/40 text-xs">Placeholder for service image</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="relative">
        <Container>
          <div className="text-center glass-strong rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/70 mb-8">
              Let's discuss your project and see how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Start a Project
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

