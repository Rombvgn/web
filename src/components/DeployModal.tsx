import React, { useState, useEffect } from 'react';
import {
  X,
  Terminal,
  CheckCircle2,
  Server,
  Zap,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Layers,
  ArrowRight,
  Globe,
  Radio,
} from 'lucide-react';
import { NexusEmblem } from './NexusEmblem';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  const [clusterName, setClusterName] = useState('zurich-smartcity-pod-01');
  const [region, setRegion] = useState('zurich');
  const [workloadType, setWorkloadType] = useState('microservices');
  const [concurrency, setConcurrency] = useState('500k');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentFinished, setDeploymentFinished] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [bootLatency, setBootLatency] = useState(8.9);

  if (!isOpen) return null;

  const handleStartDeployment = () => {
    setIsDeploying(true);
    setDeploymentFinished(false);
    setLogs([]);

    const sequence = [
      { text: '[0.00ms] Initializing Nexus Mesh control plane on target substrate...', delay: 200 },
      { text: `[1.84ms] Binding region: ${region.toUpperCase()} · 100% renewable grid verified`, delay: 600 },
      { text: '[3.20ms] Provisioning closed-loop dielectric immersion pod telemetry (PUE 1.042)...', delay: 1000 },
      { text: '[5.45ms] Attaching hardware-offloaded eBPF XDP packet routing filters...', delay: 1400 },
      { text: '[7.10ms] Distributing SPIFFE/SPIRE zero-trust cryptographic mTLS identities...', delay: 1800 },
      { text: '[8.82ms] Booting Firecracker microVM sandboxes · Memory deduplicated...', delay: 2200 },
      { text: '[8.90ms] ✓ COLD START BENCHMARK: 8.9ms achieved (< 9.4ms SLA)', delay: 2600 },
      { text: '[9.15ms] Cluster ingress live at https://' + clusterName + '.nexus.mesh', delay: 3000 },
      { text: '[9.20ms] ✓ Cluster deployment verified. Autonomous self-healing enabled.', delay: 3300 },
    ];

    sequence.forEach((item) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, item.text]);
      }, item.delay);
    });

    setTimeout(() => {
      setIsDeploying(false);
      setDeploymentFinished(true);
    }, 3500);
  };

  const handleReset = () => {
    setIsDeploying(false);
    setDeploymentFinished(false);
    setLogs([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#030713] border border-cyan-500/40 rounded-2xl shadow-[0_0_80px_rgba(2,132,199,0.3)] overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#050e24] border-b border-cyan-900/40">
          <div className="flex items-center gap-3">
            <NexusEmblem size={28} />
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Nexus Cluster Orchestration Console</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  v3.4-PROD
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Autonomous Zero-Carbon MicroVM Provisioning
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {!deploymentFinished && !isDeploying && (
            <div className="space-y-6">
              {/* Cluster Config Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                    Cluster Subdomain Identifier
                  </label>
                  <input
                    type="text"
                    value={clusterName}
                    onChange={(e) => setClusterName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    placeholder="my-cluster-node"
                  />
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    Resolves to: .{clusterName}.nexus.mesh
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                    Zero-Carbon Substrate Region
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 cursor-pointer"
                  >
                    <option value="zurich">Zurich Alpine Hydro Pod (PUE 1.042)</option>
                    <option value="reykjavik">Reykjavik Geothermal Core (PUE 1.038)</option>
                    <option value="singapore">Singapore Ocean Heat Sink (PUE 1.055)</option>
                    <option value="pnw">Pacific Northwest Hydro-Wind (PUE 1.048)</option>
                  </select>
                </div>
              </div>

              {/* Workload Archetype */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-2 uppercase">
                  Workload Architecture Archetype
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'microservices',
                      name: 'Cloud-Native Mesh',
                      desc: 'eBPF XDP Routing · mTLS · Self-Healing',
                    },
                    {
                      id: 'serverless',
                      name: 'Serverless Scale',
                      desc: '< 9.4ms Cold Start · Scale-to-Zero',
                    },
                    {
                      id: 'tensor-ai',
                      name: 'Generative AI Pipeline',
                      desc: '120 TFLOPS · 1M Context Streaming',
                    },
                  ].map((w) => (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => setWorkloadType(w.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        workloadType === w.id
                          ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="font-semibold text-xs text-white">{w.name}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{w.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Concurrency */}
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                  Peak Concurrency Envelope
                </label>
                <div className="flex gap-2">
                  {['100k req/s', '500k req/s', '1.2M req/s (Peak SLA)', '5M req/s Ultra'].map(
                    (opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setConcurrency(opt)}
                        className={`flex-1 py-2 px-2 text-center rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer ${
                          concurrency === opt
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                            : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Action launch */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleStartDeployment}
                  className="flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 rounded-xl shadow-lg hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-slate-950" />
                  <span>Launch Cluster Substrate</span>
                </button>
              </div>
            </div>
          )}

          {/* Live Provisioning Stream */}
          {isDeploying && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>PROVISIONING CLUSTER IN REAL-TIME</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Target Region: {region.toUpperCase()}</span>
              </div>

              <div className="p-4 rounded-xl bg-black border border-cyan-900/60 font-mono text-xs text-cyan-300 space-y-1.5 min-h-[220px]">
                {logs.map((log, i) => (
                  <div key={i} className="animate-in fade-in">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deployment Complete Dashboard */}
          {deploymentFinished && (
            <div className="space-y-6 animate-in fade-in">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-200">
                    Cluster Successfully Deployed to Urban Grid
                  </h4>
                  <p className="text-xs text-emerald-300/80 mt-1">
                    Your cluster <code className="text-white font-mono">{clusterName}</code> is running with 100% zero-carbon energy backing and closed-loop dielectric cooling.
                  </p>
                </div>
              </div>

              {/* Live telemetry cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400">Cold Start Latency</div>
                  <div className="text-lg font-bold font-mono text-cyan-300 mt-1 tabular-nums">
                    {bootLatency} ms
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Under 9.4ms SLA</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400">Active PUE</div>
                  <div className="text-lg font-bold font-mono text-cyan-300 mt-1 tabular-nums">
                    1.042
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono mt-0.5">Closed Loop</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400">eBPF Packet Routing</div>
                  <div className="text-lg font-bold font-mono text-sky-300 mt-1 tabular-nums">
                    0.12 ms
                  </div>
                  <div className="text-[10px] text-sky-400 font-mono mt-0.5">Kernel Bypass</div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3">
                  <div className="text-[11px] text-slate-400">Zero-Trust Identity</div>
                  <div className="text-lg font-bold font-mono text-emerald-300 mt-1 tabular-nums">
                    mTLS v1.3
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">SPIFFE Hardware</div>
                </div>
              </div>

              {/* Endpoint Access Box */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="text-slate-400 font-mono">Cluster Ingress URL</div>
                  <div className="font-mono text-cyan-300 font-semibold mt-0.5">
                    https://{clusterName}.mesh.nexus.cloud
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleReset}
                    className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white text-xs font-mono cursor-pointer"
                  >
                    Deploy Another
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-semibold text-xs cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
