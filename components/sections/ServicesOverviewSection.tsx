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
    <Section id="services" className="relative section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Signature <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Four core pillars to take your vision from concept to launch
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon || "globe"];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={`/services#${service.slug}`}>
                  <Card hover className="h-full flex flex-col group">
                    <div className="mb-6">
                      {Icon && (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                          <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors" />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/60 border border-white/10 group-hover:border-purple-500/30 group-hover:text-white/80 transition-all duration-300"
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
