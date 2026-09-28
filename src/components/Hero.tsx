import React from 'react';
import { Terminal, Cpu, ArrowDown, Shield, Leaf, Activity } from 'lucide-react';
import { SustainableCityPanel } from './SustainableCityPanel';

interface HeroProps {
  onOpenDeploy: () => void;
  onScrollToTopology: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDeploy, onScrollToTopology }) => {
  return (
    <section className="relative pt-10 sm:pt-16 pb-20 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-amber-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header & Value Proposition */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Quiet Unboxed Metadata Discipline */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 tracking-wide uppercase">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Leaf className="w-3.5 h-3.5" />
              <span>Zero-Carbon Infrastructure</span>
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Closed-Loop Dielectric Pods</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Autonomous eBPF Fabric</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase text-balance leading-[1.08]">
            Building Cloud-Native: <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
              Sustainable Cities
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed text-balance">
            Scalable. Smart. Resilient. Engineered for zero-carbon workloads, closed-loop cooling, and autonomous cloud infrastructure.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDeploy}
              className="flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-slate-950" />
              <span>Deploy Cluster Console</span>
            </button>

            <button
              onClick={onScrollToTopology}
              className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all whitespace-nowrap cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Interactive Node Topology</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Central Visual Panel */}
        <div className="mt-12 sm:mt-16">
          <SustainableCityPanel />
        </div>
      </div>
    </section>
  );
};
