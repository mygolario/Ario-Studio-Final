"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sparkles, Palette, Code, Briefcase, ArrowRight } from "lucide-react";
import { mainNav, megaMenuItems } from "@/data/nav";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong py-3"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.span
              className="text-2xl font-heading font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Ario Studio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white/80 hover:text-white transition-colors duration-200 group"
                onMouseEnter={() => item.label === "Services" && setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="sm">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              className="hidden md:block absolute top-full left-0 right-0 mt-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-strong rounded-2xl p-8 mt-4">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {megaMenuItems.map((item, index) => {
                      const Icon = iconMap[item.icon || "globe"];
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="group block p-4 rounded-lg hover:bg-white/5 transition-colors"
                            onClick={() => setIsMegaMenuOpen(false)}
                          >
                            <div className="flex items-start space-x-3">
                              {Icon && (
                                <Icon className="w-5 h-5 text-purple-400 mt-1 group-hover:text-purple-300 transition-colors" />
                              )}
                              <div>
                                <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-sm text-white/60 mt-1">
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
              className="md:hidden fixed inset-0 top-[73px] glass-strong"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-4">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-xl text-white/80 hover:text-white py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Button href="/contact" variant="primary" size="md" className="w-full">
                      Start a Project
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

// Import Button component
import Button from "@/components/ui/Button";

