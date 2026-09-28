import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Rocket,
  Infinity as InfinityIcon,
  Network,
  Activity,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  Zap,
} from 'lucide-react';
import { NexusEmblem } from './NexusEmblem';

interface TopologyNode {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  protocol: string;
  metrics: {
    label: string;
    value: string;
    sub: string;
  }[];
  actionLabel: string;
  actionSuccessMsg: string;
}

const TOPOLOGY_NODES: Record<string, TopologyNode> = {
  core: {
    id: 'core',
    name: 'Circuit Cloud Core',
    subtitle: 'Central Routing Intelligence & Cluster Ingress Telemetry',
    category: 'Central Telemetry Engine',
    description:
      'Hardware-accelerated ingress matrix coordinating packet distribution, zero-trust cryptographic mutual TLS authentication, and autonomous edge traffic failover across distributed urban data center pods.',
    protocol: 'eBPF XDP Ingress · mTLS v1.3',
    metrics: [
      { label: 'Throughput', value: '4.8 Tbps', sub: 'Sub-nanosecond routing' },
      { label: 'Failover Window', value: '< 180ms', sub: 'Autonomous reroute' },
      { label: 'Zero-Trust Verification', value: '100%', sub: 'Hardware TPM Enclave' },
    ],
    actionLabel: 'Test Ingress Health Check',
    actionSuccessMsg: 'Ingress pulse broadcasted across all 5 satellite nodes. 0 packets dropped; latency verified at 0.12ms.',
  },
  hexagon: {
    id: 'hexagon',
    name: 'Geometric Hexagon Node',
    subtitle: 'Connected Systems. Infinite Possibilities.',
    category: 'Consensus Clustering',
    description:
      'Rigid fault-tolerant consensus clustering built on asynchronous state replication. Guarantees deterministic state integrity across multi-pod city grids even during intermittent fiber disconnection.',
    protocol: 'Raft Byzantine-Resistant State Fabric',
    metrics: [
      { label: 'Cluster Quorum', value: '5 / 5 Healthy', sub: 'Zero split-brain' },
      { label: 'State Commit Latency', value: '1.4ms', sub: 'Durable NVMe write' },
      { label: 'Availability', value: '99.999%', sub: 'Multi-Region Mesh' },
    ],
    actionLabel: 'Trigger Quorum Verification',
    actionSuccessMsg: 'Consensus quorum verified across 5 cluster peers. State integrity 100% synchronized.',
  },
  builder: {
    id: 'builder',
    name: 'Dynamic Builder Arc',
    subtitle: 'Build Faster. Scale Higher.',
    category: 'Velocity Delivery Pipeline',
    description:
      'High-velocity delivery engine linking developer commits to microVM instances in seconds. Features hermetic container compilation, zero-overhead artifact caching, and edge-native hot reloading.',
    protocol: 'Hermetic OCI BuildKit · Edge Push',
    metrics: [
      { label: 'Build-to-Edge', value: '4.2s', sub: 'Cryptographically signed' },
      { label: 'Artifact Re-use', value: '96.8%', sub: 'Content-addressed store' },
      { label: 'Canary Gate Latency', value: '< 10ms', sub: 'Automated rollback' },
    ],
    actionLabel: 'Simulate MicroVM Spinup',
    actionSuccessMsg: 'Test container microVM booted in 8.7ms. Cold-start threshold satisfied (< 9.4ms target).',
  },
  infinity: {
    id: 'infinity',
    name: 'Infinity Code Loop',
    subtitle: 'Continuous Integration. Endless Innovation.',
    category: 'Continuous Deployment Loop',
    description:
      'Zero-downtime CI/CD deployment loop with cryptographic provenance. Every deployment is validated through immutable eBPF safety checks, automated security scanning, and instant blue/green traffic slicing.',
    protocol: 'GitOps Continuous Sync · Cosign Ed25519',
    metrics: [
      { label: 'Downtime on Release', value: '0.00s', sub: 'Zero dropped connections' },
      { label: 'Canary Step', value: '1% -> 100%', sub: 'Statistical anomaly abort' },
      { label: 'Vulnerability Window', value: '0-Day Active', sub: 'Automated patch injection' },
    ],
    actionLabel: 'Execute Blue/Green Canary Audit',
    actionSuccessMsg: 'Canary split tested at 5% traffic. Health index 100%. Instant seamless switchover verified.',
  },
  neural: {
    id: 'neural',
    name: 'Neural Network Mesh',
    subtitle: 'Smarter Data. Better Decisions.',
    category: 'Heuristic AI & Traffic Rebalancing',
    description:
      'Predictive machine intelligence substrate optimizing packet routes, predicting thermal hotspots in data pods, and dynamically rerouting compute workloads to zones with lowest instantaneous carbon intensity.',
    protocol: 'Hardware Tensor Substrate · Real-Time Inference',
    metrics: [
      { label: 'Tensor Compute', value: '120 TFLOPS', sub: 'Embedded inference' },
      { label: 'Vector Index Latency', value: '< 2.1ms', sub: 'HNSW Graph lookup' },
      { label: 'Carbon Optimization', value: '+34% Savings', sub: 'Heuristic load shifting' },
    ],
    actionLabel: 'Run Carbon-Aware Reroute Test',
    actionSuccessMsg: 'Workload shifted 4,000 microVMs to Reykjavik geothermal pod. Carbon footprint reduced by 41%.',
  },
};

export const InteractiveNodeTopology: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('core');
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);
  const [isRunningAction, setIsRunningAction] = useState<boolean>(false);

  const activeNode = TOPOLOGY_NODES[selectedNodeId] || TOPOLOGY_NODES.core;

  const handleRunAction = () => {
    setIsRunningAction(true);
    setActionFeedback(null);
    setTimeout(() => {
      setIsRunningAction(false);
      setActionFeedback(activeNode.actionSuccessMsg);
    }, 600);
  };

  return (
    <section id="platform" className="py-20 bg-[#02050e] border-y border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
            <span>Interlocking Architecture</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>5 Satellite Subsystems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Node Topology
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Aligned directly with the Nexus Cloud emblem. Explore the 5 interlocking satellite nodes powering real-time consensus, zero-carbon routing, and continuous integration.
          </p>
        </div>

        {/* 2-Column Layout: Visual Topology on Left / Interactive Inspector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Visual Interactive Emblem Topology Map */}
          <div className="lg:col-span-7 bg-[#040916] border border-cyan-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Background cyber grid */}
            <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

            <div className="relative aspect-square max-w-[500px] mx-auto flex items-center justify-center">
              {/* Central Core Element */}
              <div
                onClick={() => {
                  setSelectedNodeId('core');
                  setActionFeedback(null);
                }}
                className={`group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
                  selectedNodeId === 'core'
                    ? 'scale-110 shadow-[0_0_40px_rgba(56,189,248,0.5)] border-2 border-cyan-300 bg-cyan-950/70'
                    : 'hover:scale-105 border border-cyan-500/40 bg-[#041329]/80'
                }`}
              >
                <NexusEmblem size={84} />
                <span className="text-[11px] font-mono font-bold tracking-tight text-white mt-1 text-center px-2">
                  CIRCUIT CLOUD CORE
                </span>
                <span className="text-[9px] text-cyan-400 font-mono">
                  {selectedNodeId === 'core' ? '● ACTIVE INSPECT' : 'Click to inspect'}
                </span>
              </div>

              {/* Connecting Traces (SVG lines with animated signals) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="connTrace" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>

                {/* To Geometric Hexagon Node (Top-Left) */}
                <line
                  x1="250"
                  y1="250"
                  x2="90"
                  y2="110"
                  stroke={selectedNodeId === 'hexagon' ? '#38bdf8' : '#0369a1'}
                  strokeWidth={selectedNodeId === 'hexagon' ? '2.5' : '1.5'}
                  strokeDasharray="6 4"
                  className="animate-stream"
                />

                {/* To Dynamic Builder Arc (Top-Right) */}
                <line
                  x1="250"
                  y1="250"
                  x2="410"
                  y2="110"
                  stroke={selectedNodeId === 'builder' ? '#f59e0b' : '#92400e'}
                  strokeWidth={selectedNodeId === 'builder' ? '2.5' : '1.5'}
                  strokeDasharray="6 4"
                  className="animate-stream"
                />

                {/* To Infinity Code Loop (Bottom-Left) */}
                <line
                  x1="250"
                  y1="250"
                  x2="90"
                  y2="390"
                  stroke={selectedNodeId === 'infinity' ? '#38bdf8' : '#0369a1'}
                  strokeWidth={selectedNodeId === 'infinity' ? '2.5' : '1.5'}
                  strokeDasharray="6 4"
                  className="animate-stream"
                />

                {/* To Neural Network Mesh (Bottom-Right) */}
                <line
                  x1="250"
                  y1="250"
                  x2="410"
                  y2="390"
                  stroke={selectedNodeId === 'neural' ? '#38bdf8' : '#0369a1'}
                  strokeWidth={selectedNodeId === 'neural' ? '2.5' : '1.5'}
                  strokeDasharray="6 4"
                  className="animate-stream"
                />
              </svg>

              {/* Satellite Node 1: Geometric Hexagon Node (Top-Left) */}
              <button
                onClick={() => {
                  setSelectedNodeId('hexagon');
                  setActionFeedback(null);
                }}
                className={`absolute top-[40px] left-[30px] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer z-10 ${
                  selectedNodeId === 'hexagon'
                    ? 'bg-cyan-950 border-2 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-105'
                    : 'bg-[#061124] border border-cyan-700/40 hover:border-cyan-400 hover:scale-105'
                }`}
                style={{ width: '130px', height: '110px' }}
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-900/60 flex items-center justify-center border border-cyan-400/40 text-cyan-300">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-white leading-tight text-center">
                  Geometric Hexagon
                </span>
                <span className="text-[9px] text-cyan-400 font-mono">Consensus</span>
              </button>

              {/* Satellite Node 2: Dynamic Builder Arc (Top-Right) */}
              <button
                onClick={() => {
                  setSelectedNodeId('builder');
                  setActionFeedback(null);
                }}
                className={`absolute top-[40px] right-[30px] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer z-10 ${
                  selectedNodeId === 'builder'
                    ? 'bg-amber-950/70 border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.5)] scale-105'
                    : 'bg-[#061124] border border-amber-700/40 hover:border-amber-400 hover:scale-105'
                }`}
                style={{ width: '130px', height: '110px' }}
              >
                <div className="w-9 h-9 rounded-lg bg-amber-900/60 flex items-center justify-center border border-amber-400/40 text-amber-300">
                  <Rocket className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-white leading-tight text-center">
                  Dynamic Builder
                </span>
                <span className="text-[9px] text-amber-400 font-mono">Velocity</span>
              </button>

              {/* Satellite Node 3: Infinity Code Loop (Bottom-Left) */}
              <button
                onClick={() => {
                  setSelectedNodeId('infinity');
                  setActionFeedback(null);
                }}
                className={`absolute bottom-[40px] left-[30px] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer z-10 ${
                  selectedNodeId === 'infinity'
                    ? 'bg-cyan-950 border-2 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-105'
                    : 'bg-[#061124] border border-cyan-700/40 hover:border-cyan-400 hover:scale-105'
                }`}
                style={{ width: '130px', height: '110px' }}
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-900/60 flex items-center justify-center border border-cyan-400/40 text-cyan-300">
                  <InfinityIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-white leading-tight text-center">
                  Infinity Code Loop
                </span>
                <span className="text-[9px] text-cyan-400 font-mono">CI/CD Sync</span>
              </button>

              {/* Satellite Node 4: Neural Network Mesh (Bottom-Right) */}
              <button
                onClick={() => {
                  setSelectedNodeId('neural');
                  setActionFeedback(null);
                }}
                className={`absolute bottom-[40px] right-[30px] p-3.5 rounded-2xl flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer z-10 ${
                  selectedNodeId === 'neural'
                    ? 'bg-cyan-950 border-2 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-105'
                    : 'bg-[#061124] border border-cyan-700/40 hover:border-cyan-400 hover:scale-105'
                }`}
                style={{ width: '130px', height: '110px' }}
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-900/60 flex items-center justify-center border border-cyan-400/40 text-cyan-300">
                  <Network className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-white leading-tight text-center">
                  Neural Mesh
                </span>
                <span className="text-[9px] text-cyan-400 font-mono">AI Routing</span>
              </button>
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs text-slate-400 font-mono">
                Click any satellite or central core to stream telemetry
              </span>
            </div>
          </div>

          {/* Right: Live Interactive Node Inspector */}
          <div className="lg:col-span-5 bg-[#030712] border border-cyan-500/25 rounded-2xl p-6 sm:p-7 shadow-xl">
            {/* Category / Protocol Badges */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-medium text-cyan-400">
                {activeNode.category}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                {activeNode.protocol}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              {activeNode.name}
            </h3>
            <p className="text-sm font-semibold text-amber-300/90 mt-1">
              {activeNode.subtitle}
            </p>

            {/* Description */}
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              {activeNode.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-5 border-t border-slate-800">
              {activeNode.metrics.map((m, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400 mb-1">{m.label}</div>
                  <div className="text-lg font-bold font-mono text-cyan-300 tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Interactive Diagnostic Trigger Button */}
            <div className="space-y-3">
              <button
                onClick={handleRunAction}
                disabled={isRunningAction}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-xl hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
              >
                {isRunningAction ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Executing Protocol Diagnostic...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 text-slate-950" />
                    <span>{activeNode.actionLabel}</span>
                  </>
                )}
              </button>

              {/* Action Result Box */}
              {actionFeedback && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs flex items-start gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{actionFeedback}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
