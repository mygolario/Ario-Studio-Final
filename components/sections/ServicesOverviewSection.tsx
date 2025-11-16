"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Globe, Sparkles, Palette, Code } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  globe: Globe,
  sparkles: Sparkles,
  palette: Palette,
  code: Code,
};

export default function ServicesOverviewSection() {
  return (
    <Section id="services" className="relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Signature <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Four core pillars to take your vision from concept to launch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon || "globe"];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/services#${service.slug}`}>
                  <Card hover className="h-full flex flex-col">
                    <div className="mb-4">
                      {Icon && (
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-white/70 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

