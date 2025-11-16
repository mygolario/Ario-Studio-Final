"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import AiGalaxyBackground from "@/components/ui/AiGalaxyBackground";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Galaxy Background */}
      <AiGalaxyBackground />

      {/* Content Container with Glass Panel */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Glass Panel for Hero Content */}
          <div className="glass-premium rounded-3xl p-12 md:p-16 lg:p-20 glow-soft">
            <motion.div
              variants={itemVariants}
              className="text-center space-y-8"
            >
              {/* Brand Title */}
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight"
              >
                <span className="gradient-text">Ario Studio</span>
              </motion.h1>

              {/* Positioning Line */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto"
              >
                Ultra-luxury AI web experiences for founders.
              </motion.p>

              {/* Supporting Line */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-white/60 max-w-2xl mx-auto"
              >
                Led by Ario Kaveh – web, AI product, and MVP design.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <Button href="/contact" variant="primary" size="lg">
                  Start a Project
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-4 bg-white/40 rounded-full mt-2"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
