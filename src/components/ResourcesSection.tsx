import React, { useState } from 'react';
import { BookOpen, FileText, Download, ExternalLink, Cpu, ShieldCheck, X } from 'lucide-react';

interface ResourceDoc {
  id: string;
  category: string;
  title: string;
  readTime: string;
  description: string;
  fullContent: string;
  metrics: string;
}

const RESOURCES: ResourceDoc[] = [
  {
    id: 'ebpf-whitepaper',
    category: 'Architecture RFC',
    title: 'Hardware-Accelerated eBPF Packet Filtering in Municipal Mesh Networks',
    readTime: '8 min read',
    description:
      'Technical specification on eliminating Linux network stack overhead using XDP offload drivers on FPGA NICs for ultra-low latency civic edge nodes.',
    metrics: '0.12ms RTT · 0% CPU Overhead',
    fullContent: `RFC-2026-NXS-01: eBPF XDP Hardware Offloading in Smart City Grids
Authors: Nexus Systems Engineering & Distributed Systems Architecture Group
Status: Standards Track (Final)

1. Executive Summary
Traditional container networking stacks introduce context switching, netfilter conntrack overhead, and interrupt latency exceeding 2.4ms under high fan-out loads. Nexus Cloud deploys kernel-bypass eBPF bytecode verified at ingress to route packets directly in NIC memory rings.

2. Benchmark Results
- 10M pkt/s benchmark on 100GbE Mellanox ConnectX-6 Dx:
  - Standard iptables: 3.2ms latency, 42% CPU utilization.
  - Nexus eBPF XDP: 0.14ms latency, 1.8% CPU utilization.
- Zero dropped packets under synthetic 1.2M req/sec DDoS flood.

3. Mutual TLS Enforcement
Hardware-backed SPIFFE identities are validated inside the XDP packet path prior to socket buffer allocation, isolating unverified traffic before host kernel memory traversal.`,
  },
  {
    id: 'cooling-audit',
    category: 'Sustainability Audit',
    title: 'Closed-Loop Dielectric Immersion vs. Evaporative Cooling Towers',
    readTime: '12 min read',
    description:
      'Third-party thermodynamic audit demonstrating 94% lower cooling overhead and complete elimination of evaporative drinking water consumption.',
    metrics: 'PUE 1.042 Certified · 0L Water',
    fullContent: `Technical Audit Report: Dielectric Subterranean Immersion Efficiency
Certifying Agency: European Institute for Sustainable Compute Infrastructures
Testing Facility: Zurich Pod #04 Subterranean Chamber (-45m depth)

1. Power Usage Effectiveness (PUE)
- Ambient Temperature range: -5°C (Winter) to +34°C (Summer)
- Measured annual average PUE: 1.042 ± 0.003
- Comparison: Standard ASHRAE Class A1 air-cooled facility: 1.58 PUE

2. Water Consumption Effectiveness (WUE)
- Evaporative cooling towers consumed in standard facilities: ~1.8 L / kWh
- Nexus closed-loop immersion: 0.000 L / kWh (100% closed hermetic loop)

3. Heat Export to Municipal District Heating
- Recovered temperature: 58°C supply loop
- Total thermal energy exported: 14.8 MWth continuous
- Direct offset: 4,800 tons coal/gas civic heating baseline equivalent.`,
  },
  {
    id: 'serverless-microvm',
    category: 'Performance Benchmark',
    title: 'Sub-10ms MicroVM Sandboxing for Ultra-Low Latency Civic Workloads',
    readTime: '6 min read',
    description:
      'Comparative benchmarking of Firecracker microVMs versus standard Docker containers across 500,000 cold invocations.',
    metrics: '< 9.4ms Cold Start · 32MB Overhead',
    fullContent: `Performance Benchmark: Firecracker MicroVM Isolation in Dense Clusters
Test Environment: 64-core AMD EPYC 9654, 768GB DDR5, Linux Kernel 6.12

1. Cold Start Distribution (500,000 invocations)
- p50 Cold Start: 6.8ms
- p90 Cold Start: 8.4ms
- p99 Cold Start: 9.38ms (Guaranteed < 9.4ms SLA)

2. Memory Deduplication (KSM)
- 10,000 concurrent idle Python/Node.js runtime instances:
  - Docker container baseline: 240 GB RAM consumed
  - Nexus MicroVM deduplicated baseline: 34 GB RAM consumed
  - Memory efficiency gain: 7.05x higher density per server blade.`,
  },
];

export const ResourcesSection: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<ResourceDoc | null>(null);

  return (
    <section id="resources" className="py-20 bg-[#02050f] border-t border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Engineering Standards</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Peer-Reviewed Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Resources & Architecture RFCs
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Read our verified thermodynamic audits, eBPF microsecond kernel benchmarks, and zero-carbon substrate RFCs.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESOURCES.map((doc) => (
            <div
              key={doc.id}
              className="bg-[#040919] border border-cyan-500/20 hover:border-cyan-400/50 rounded-2xl p-6 flex flex-col justify-between transition-all group shadow-lg"
            >
              <div>
                {/* Quiet unboxed metadata */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
                  <span className="text-cyan-400 font-semibold">{doc.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{doc.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400">
                  {doc.metrics}
                </span>

                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>Read Paper</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Document Reader Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#040a1c] border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#06102b] border-b border-cyan-900/40">
                <div>
                  <div className="text-xs font-mono text-cyan-400">
                    {selectedDoc.category} · {selectedDoc.readTime}
                  </div>
                  <h3 className="text-base font-bold text-white mt-0.5">
                    {selectedDoc.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs text-slate-300 leading-relaxed bg-[#020612]">
                <pre className="whitespace-pre-wrap font-sans text-sm text-slate-200">
                  {selectedDoc.fullContent}
                </pre>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-3.5 bg-[#050e26] border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400">
                  Key Metric: {selectedDoc.metrics}
                </span>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="px-4 py-1.5 text-xs font-semibold bg-cyan-400 text-slate-950 rounded-lg cursor-pointer"
                >
                  Close Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
