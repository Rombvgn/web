import React, { useState } from 'react';
import {
  Server,
  Zap,
  Radio,
  Brain,
  GitBranch,
  CheckCircle,
  Copy,
  Terminal,
  Shield,
  Gauge,
} from 'lucide-react';

interface ArchitectureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  specSnippet: string;
  features: string[];
}

const ARCHITECTURE_PANELS: ArchitectureItem[] = [
  {
    id: 'cloud-native',
    title: 'Cloud-Native Architecture',
    tagline: 'Flexible. Scalable. Future Ready.',
    description:
      'Distributed microservices orchestration across dynamic mesh topologies with hardware-accelerated eBPF packet routing and self-healing clusters.',
    metrics: [
      { label: 'Cluster Availability', value: '99.999%' },
      { label: 'Mesh Topology', value: 'Multi-Cloud Mesh' },
      { label: 'Security Model', value: 'Zero-Trust mTLS' },
    ],
    specSnippet: `apiVersion: nexus.mesh/v1alpha1
kind: EbpfServiceMesh
metadata:
  name: urban-edge-cluster
spec:
  routing:
    driver: xdp-hardware-offload
    crypto: wireguard-kernel
  highAvailability:
    quorumTolerance: byzantine-n3
    activeHeartbeatMs: 25`,
    features: [
      'Kernel-bypass eBPF network acceleration with sub-nanosecond jitter',
      'Dynamic multi-cloud topology failover across edge and core regions',
      'Hardware-enforced zero-trust mutual TLS encryption on every socket',
    ],
  },
  {
    id: 'serverless',
    title: 'Serverless Scalability',
    tagline: 'Auto Scale. Zero Infrastructure Overhead.',
    description:
      'Instant elastic scaling from true zero to millions of concurrent invocations with sub-millisecond cold starts and micro-VM sandboxing.',
    metrics: [
      { label: 'Cold Start Latency', value: '< 9.4ms' },
      { label: 'Failover Recovery', value: '< 180ms' },
      { label: 'Concurrency Peak', value: '1.2M req/sec' },
    ],
    specSnippet: `apiVersion: serverless.nexus/v2
kind: MicroVmPool
metadata:
  name: zero-carbon-lambdas
spec:
  scaling:
    minReplicas: 0
    maxReplicas: 250000
    scaleToZeroDelay: 500ms
  isolation: firecracker-jailer
  memoryFootprintMb: 32`,
    features: [
      'Ultra-compact Linux micro-VM sandboxing with memory deduplication',
      'Predictive pre-warming using local city traffic telemetry',
      'Scale-to-absolute-zero idle state with zero idle energy consumption',
    ],
  },
  {
    id: 'event-driven',
    title: 'Event-Driven Workflows',
    tagline: 'React to Events. Power Real-Time Innovation.',
    description:
      'High-throughput asynchronous event fabrics with ordered state queues, distributed idempotency guarantees, and sub-millisecond event streaming.',
    metrics: [
      { label: 'Stream Fanout', value: '25M events/sec' },
      { label: 'End-to-End Latency', value: '< 3.2ms' },
      { label: 'Fault Isolation', value: 'Automated Dead-Letter' },
    ],
    specSnippet: `{
  "specversion": "1.0",
  "type": "io.nexus.civic.energy.rebalance",
  "source": "/dc/zurich-hydro/pod-04",
  "id": "evt-7729-0091",
  "time": "2026-09-28T08:45:00Z",
  "datacontenttype": "application/json",
  "data": {
    "gridDrawMw": 2.1,
    "thermalRecycledMw": 1.94,
    "pueCurrent": 1.042
  }
}`,
    features: [
      'Sub-millisecond persistent event log with partitioned ordering',
      'Distributed transactional outbox with guaranteed idempotency keys',
      'Automated dead-letter quarantine and circuit-breaking isolation',
    ],
  },
  {
    id: 'generative-ai',
    title: 'Generative Cloud AI',
    tagline: 'Smarter Insights. Better Decisions. Infinite Possibilities.',
    description:
      'Native hardware-accelerated tensor pipelines, managed vector database indexing, and streaming LLM inference gateways embedded directly into the substrate.',
    metrics: [
      { label: 'Tensor Compute', value: '120 TFLOPS' },
      { label: 'Vector Indexing', value: '< 2.1ms' },
      { label: 'Context Length', value: '1M Context Window' },
    ],
    specSnippet: `POST /api/v1/inference/tensor-stream HTTP/2
Host: gateway.nexus.cloud
Authorization: Bearer nxs_live_tensor_99
Content-Type: application/json

{
  "model": "nexus-quantum-flash-v3",
  "routingPolicy": "lowest-carbon-first",
  "vectorIndex": "urban-telemetry-hnsw",
  "maxTokens": 8192,
  "stream": true
}`,
    features: [
      'In-substrate model checkpoint streaming for instantaneous model loading',
      'Hardware-accelerated SIMD cosine similarity vector clustering',
      'Dynamic carbon-aware inference routing to lowest carbon-intensity pods',
    ],
  },
  {
    id: 'devops-cicd',
    title: 'DevOps & CI/CD Pipelines',
    tagline: 'Automate. Integrate. Deliver Faster.',
    description:
      'Declarative GitOps engine with automated artifact scanning, canary deployment gates, instant zero-downtime blue/green rollouts, and cryptographic provenance.',
    metrics: [
      { label: 'Build-to-Edge', value: '4.2s' },
      { label: 'Rollback Window', value: 'Instant Rollback' },
      { label: 'Security Verification', value: 'Continuous Scanning' },
    ],
    specSnippet: `apiVersion: gitops.nexus/v1
kind: DeliveryPipeline
metadata:
  name: civic-telemetry-engine
spec:
  strategy:
    type: BlueGreenCanary
    steps:
      - trafficPercent: 5
        pauseSeconds: 60
      - trafficPercent: 50
        pauseSeconds: 120
  provenance:
    requireSigstore: true`,
    features: [
      'Immutable cryptographic build provenance and SBOM attestation',
      'Autonomous canary rollback triggered by eBPF latency anomalies',
      'Zero-downtime connection-draining blue/green traffic cutovers',
    ],
  },
];

export const ArchitecturePanels: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('cloud-native');
  const [copied, setCopied] = useState<boolean>(false);

  const active = ARCHITECTURE_PANELS.find((p) => p.id === selectedId) || ARCHITECTURE_PANELS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(active.specSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="solutions" className="py-24 bg-[#030612] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
            <span>Core Substrate</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Production Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Autonomous Resilience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            The foundational building blocks designed to run zero-carbon mission-critical workloads across modern smart urban centers.
          </p>
        </div>

        {/* Tab / Selector Bar for 5 Architecture Panels */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-800/80 mb-8">
          {ARCHITECTURE_PANELS.map((item) => {
            const isCurrent = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedId(item.id);
                  setCopied(false);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isCurrent
                    ? 'bg-gradient-to-r from-cyan-500/20 to-sky-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Architecture Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description, Features & Key Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-medium text-amber-400 uppercase tracking-wider">
                {active.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {active.title}
              </h3>
              <p className="text-base text-slate-300 mt-4 leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Core Features List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Subsystem Capabilities
              </h4>
              {active.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            {/* Key Metrics Callout as mandated by prompt */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {active.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-900/90 border border-slate-800/90 rounded-xl p-3">
                    <div className="text-[11px] text-slate-400 line-clamp-1">{m.label}</div>
                    <div className="text-base sm:text-lg font-bold font-mono text-cyan-300 mt-1 tabular-nums">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Manifest Inspector */}
          <div className="lg:col-span-6 bg-[#040817] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#060c22] border-b border-cyan-900/30">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  manifest.{active.id === 'event-driven' ? 'json' : 'yaml'}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700 transition-colors cursor-pointer"
              >
                <Copy className="w-3 h-3" />
                <span>{copied ? 'Copied' : 'Copy Spec'}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 overflow-x-auto bg-[#020510]">
              <pre className="text-xs font-mono text-cyan-200/90 leading-relaxed">
                <code>{active.specSnippet}</code>
              </pre>
            </div>

            {/* Terminal Footer status */}
            <div className="px-4 py-2.5 bg-[#050a1d] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                SYNCHRONIZED WITH EDGE KERNEL
              </span>
              <span>eBPF v6.12-rc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
