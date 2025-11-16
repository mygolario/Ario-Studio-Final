"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sparkles, Palette, Code, Briefcase, ArrowRight } from "lucide-react";
import { mainNav, megaMenuItems } from "@/data/nav";
import Button from "@/components/ui/Button";

const iconMap: Record<string, any> = {
  globe: Globe,
  sparkles: Sparkles,
  palette: Palette,
  code: Code,
  briefcase: Briefcase,
  "arrow-right": ArrowRight,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-premium py-3 shadow-lg"
          : "bg-transparent/50 backdrop-blur-sm py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group z-10">
            <motion.span
              className="text-xl md:text-2xl font-heading font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Ario Studio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.label === "Services" && setIsMegaMenuOpen(true)}
                onMouseLeave={() => item.label === "Services" && setIsMegaMenuOpen(false)}
              >
                <Link
                  href={item.href}
                  className="relative text-white/70 hover:text-white transition-all duration-300 text-sm font-medium group"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-transparent"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            ))}
            <Button href="/contact" variant="primary" size="sm">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2 z-10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Cinematic Mega Menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              className="hidden md:block absolute top-full left-0 right-0 mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-premium rounded-3xl p-10 mt-2 glow-soft border border-white/10">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                    {megaMenuItems.map((item, index) => {
                      const Icon = iconMap[item.icon || "globe"];
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.04, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            className="group block p-5 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <div className="flex items-start space-x-4">
                              {Icon && (
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                                  <Icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                </div>
                              )}
                              <div className="flex-1">
                                <h3 className="font-semibold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-[73px] glass-premium"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-6">
                  {mainNav.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-xl text-white/80 hover:text-white py-3 block transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <Button href="/contact" variant="primary" size="md" className="w-full">
                      Start a Project
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
