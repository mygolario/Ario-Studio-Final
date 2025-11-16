"use client";

import { motion } from "framer-motion";

interface AiGalaxyBackgroundProps {
  className?: string;
}

export default function AiGalaxyBackground({ className = "" }: AiGalaxyBackgroundProps) {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Radial gradients for nebula effect */}
      <div className="absolute inset-0">
        {/* Top-left purple nebula */}
        <motion.div
          className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Top-right blue nebula */}
        <motion.div
          className="absolute w-[600px] h-[600px] -top-[300px] -right-[300px] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bottom-left cyan accent */}
        <motion.div
          className="absolute w-[500px] h-[500px] bottom-0 left-0 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center subtle glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 60%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated orbs for depth */}
      {[...Array(8)].map((_, i) => {
        const size = 100 + (i % 3) * 50;
        const left = (i * 12.5) % 100;
        const top = (i * 15) % 100;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "rgba(168, 85, 247, 0.15)" : "rgba(59, 130, 246, 0.15)"
              } 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        );
      })}

      {/* Noise/grain overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

