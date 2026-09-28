import React, { useState } from 'react';
import { NexusEmblem } from './NexusEmblem';
import { Menu, X, Terminal, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenDeploy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeploy }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#platform' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#040711]/85 border-b border-cyan-900/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark & Emblem */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          aria-label="Nexus Cloud Home"
        >
          <NexusEmblem size={40} className="transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Nexus Cloud
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDeploy}
            className="flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 rounded-lg shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-slate-950" />
            <span>Deploy Cluster</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDeploy}
            className="px-3 py-1.5 text-xs font-medium text-slate-950 bg-cyan-400 rounded-md font-semibold cursor-pointer"
          >
            Deploy
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cyan-900/40 bg-[#060b18]/95 px-5 py-4 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 border-b border-slate-800/50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeploy();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-amber-300 rounded-lg cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Deploy Cluster Console</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
