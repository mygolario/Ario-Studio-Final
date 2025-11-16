import Link from "next/link";
import { Linkedin, Github, Instagram } from "lucide-react";
import { mainNav } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-heading font-bold gradient-text">
                Ario Studio
              </span>
            </Link>
            <p className="text-white/50 text-sm max-w-md leading-relaxed">
              Ultra-luxury AI web experiences for founders and modern brands. Led by Ario Kaveh – web, AI product, and MVP design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Ario Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted by Ario Kaveh</p>
        </div>
      </div>
    </footer>
  );
}
