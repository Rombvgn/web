import React from 'react';
import { NexusEmblem } from './NexusEmblem';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02040c] border-t border-slate-800/80 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800/60">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <NexusEmblem size={32} />
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Nexus Cloud
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Cloud-native infrastructure engineered for sustainable cities. Zero-carbon workloads, closed-loop dielectric immersion cooling, and autonomous eBPF mesh orchestration.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-slate-500">
              <span>ISO 14001 Certified</span>
              <span aria-hidden="true">·</span>
              <span>Net-Zero 2026</span>
              <span aria-hidden="true">·</span>
              <span>PUE 1.042</span>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              Solutions
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">
                  Urban Mesh Grids
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">
                  Dielectric Liquid Pods
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">
                  District Heat Recapture
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-cyan-400 transition-colors">
                  eBPF Packet Routing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              Platform
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#platform" className="hover:text-cyan-400 transition-colors">
                  Circuit Cloud Core
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-cyan-400 transition-colors">
                  Consensus Clustering
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-cyan-400 transition-colors">
                  Dynamic Builder Arc
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-cyan-400 transition-colors">
                  Neural AI Mesh
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Governance */}
          <div className="space-y-2.5">
            <div className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              Resources
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#resources" className="hover:text-cyan-400 transition-colors">
                  Architecture RFCs
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-cyan-400 transition-colors">
                  Thermodynamic Audits
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-cyan-400 transition-colors">
                  MicroVM Benchmarks
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Cluster Dispatch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Nexus Cloud Substrate Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Notice
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Infrastructure
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Security Attestation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
