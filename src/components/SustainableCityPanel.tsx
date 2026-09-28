import React, { useState, useEffect } from 'react';
import { Layers, Activity, Zap, Droplets, ShieldCheck, Thermometer, Radio } from 'lucide-react';

export const SustainableCityPanel: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'stack' | 'cooling' | 'ebpf'>('stack');
  const [activeHotspot, setActiveHotspot] = useState<string | null>('pod-cooling');
  const [pueMetric, setPueMetric] = useState(1.042);
  const [heatRecycled, setHeatRecycled] = useState(14.8);
  const [packetCount, setPacketCount] = useState(1284000);

  useEffect(() => {
    const interval = setInterval(() => {
      setPueMetric((prev) => +(1.041 + Math.sin(Date.now() / 2000) * 0.003).toFixed(3));
      setHeatRecycled((prev) => +(14.6 + Math.cos(Date.now() / 3000) * 0.4).toFixed(1));
      setPacketCount((prev) => prev + Math.floor(Math.random() * 300) - 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const hotspots = {
    'solar-tower': {
      title: 'Kinetic Solar Facade & Edge Node',
      desc: 'Transparent bifacial photovoltaic arrays generate 4.2 MW local power directly powering on-prem edge micro-nodes with zero grid transmission loss.',
      stat: '4.2 MW Clean Yield',
      tag: 'Surface Power',
    },
    'ebpf-grid': {
      title: 'Sub-Millisecond Civic eBPF Mesh',
      desc: 'Hardware-accelerated Linux kernel eBPF packet routing interconnecting autonomous city mobility, municipal power distribution, and telemetry.',
      stat: '< 0.8ms Civic Mesh RTT',
      tag: 'Packet Routing',
    },
    'pod-cooling': {
      title: 'Subterranean Immersion Pod #04',
      desc: 'Deep bedrock dual-phase dielectric liquid cooling with closed-loop fluid recycling. Zero evaporative water waste with high thermal recapture.',
      stat: 'PUE 1.042 · Closed Loop',
      tag: 'Liquid Cooling',
    },
    'district-thermal': {
      title: 'Thermal District Energy Exchanger',
      desc: '100% of subterranean compute waste heat is pumped directly into the municipal district water network, heating 12,000 city apartments in winter.',
      stat: '14.8 MW Thermal Recapture',
      tag: 'Heat Recovery',
    },
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#030712] border border-cyan-500/25 p-4 sm:p-6 overflow-hidden shadow-[0_0_50px_rgba(2,132,199,0.15)]">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-cyan-500/10 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/5 blur-[80px] pointer-events-none" />

      {/* Header bar of the panel */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>TOPOLOGY TELEMETRY · LIVE STREAM</span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400">100% RENEWABLE POWER</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white mt-1">
            Urban Eco-Compute Substrate
          </h3>
        </div>

        {/* Layer Selector */}
        <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs">
          <button
            onClick={() => setActiveLayer('stack')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
              activeLayer === 'stack'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Full Urban Stack
          </button>
          <button
            onClick={() => setActiveLayer('cooling')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
              activeLayer === 'cooling'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Subterranean Cooling
          </button>
          <button
            onClick={() => setActiveLayer('ebpf')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer ${
              activeLayer === 'ebpf'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            eBPF Mesh Flows
          </button>
        </div>
      </div>

      {/* Main Visual SVG: Multi-layered architectural city & subterranean nodes */}
      <div className="relative mt-4 aspect-[16/9] min-h-[320px] sm:min-h-[420px] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#020b18] via-[#04142b] to-[#020713] border border-cyan-900/30">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <svg
          viewBox="0 0 960 540"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#030c1d" />
              <stop offset="60%" stopColor="#082346" />
              <stop offset="100%" stopColor="#0b2c56" />
            </linearGradient>

            <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f2647" />
              <stop offset="30%" stopColor="#07152b" />
              <stop offset="100%" stopColor="#020610" />
            </linearGradient>

            <linearGradient id="towerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient id="towerGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="coolingGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="amberThermal" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>

            <filter id="cityGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Sky background */}
          <rect x="0" y="0" width="960" height="310" fill="url(#skyGrad)" />

          {/* Distant City Skyline Silhouette */}
          <path
            d="M 0,310 L 0,220 L 40,220 L 40,240 L 70,240 L 70,210 L 110,210 L 110,250 L 160,250 L 160,190 L 190,190 L 210,160 L 230,190 L 260,190 L 260,240 L 310,240 L 310,200 L 350,200 L 370,170 L 390,200 L 420,200 L 420,260 L 480,260 L 480,210 L 530,210 L 550,180 L 580,210 L 630,210 L 630,250 L 680,250 L 680,180 L 720,180 L 720,230 L 780,230 L 780,190 L 820,190 L 840,160 L 860,190 L 900,190 L 900,240 L 960,240 L 960,310 Z"
            fill="#05162e"
            opacity="0.8"
          />

          {/* High-Rise Sustainable Glass Towers with Photovoltaic Facades */}
          {/* Tower 1 (Left Timber Tower) */}
          <g opacity={activeLayer === 'cooling' ? '0.35' : '1'} className="transition-opacity duration-300">
            <rect x="90" y="110" width="80" height="200" fill="url(#towerGrad1)" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Green Terraces */}
            <rect x="85" y="140" width="90" height="6" fill="#10b981" opacity="0.8" />
            <rect x="85" y="190" width="90" height="6" fill="#10b981" opacity="0.8" />
            <rect x="85" y="240" width="90" height="6" fill="#10b981" opacity="0.8" />
            {/* Window Glow Lines */}
            <line x1="105" y1="120" x2="105" y2="300" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
            <line x1="130" y1="120" x2="130" y2="300" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
            <line x1="155" y1="120" x2="155" y2="300" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
          </g>

          {/* Tower 2 (Marquee Center Solar Tower) */}
          <g
            className="cursor-pointer transition-opacity duration-300"
            opacity={activeLayer === 'cooling' ? '0.4' : '1'}
            onClick={() => setActiveHotspot('solar-tower')}
          >
            <polygon points="430,70 510,70 530,310 410,310" fill="url(#towerGrad2)" stroke="#0ea5e9" strokeWidth="2" />
            {/* Rooftop Clean Energy Spire */}
            <line x1="470" y1="25" x2="470" y2="70" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="470" cy="25" r="4" fill="#38bdf8" filter="url(#cityGlow)" />
            {/* Honeycomb Solar Grid on Tower */}
            <path
              d="M440,100 L500,100 M435,130 L505,130 M430,160 L510,160 M425,200 L515,200 M420,240 L520,240 M415,280 L525,280"
              stroke="#67e8f9"
              strokeWidth="1"
              strokeDasharray="4 3"
              opacity="0.8"
            />
            {/* Interactive Pulse Hotspot */}
            <circle cx="470" cy="110" r="14" fill="#38bdf8" fillOpacity="0.2" className="animate-ping" />
            <circle cx="470" cy="110" r="6" fill="#38bdf8" />
          </g>

          {/* Tower 3 (Right Twin Curved Towers) */}
          <g opacity={activeLayer === 'cooling' ? '0.35' : '1'} className="transition-opacity duration-300">
            <path d="M720,130 C760,150 780,210 770,310 L680,310 C670,220 690,160 720,130 Z" fill="url(#towerGrad1)" stroke="#38bdf8" strokeWidth="1.5" />
            {/* Skybridge */}
            <rect x="525" y="170" width="160" height="10" fill="#0369a1" stroke="#38bdf8" strokeWidth="1" opacity="0.8" />
            <line x1="530" y1="175" x2="680" y2="175" stroke="#67e8f9" strokeWidth="1.5" strokeDasharray="6 4" className="animate-stream" />
          </g>

          {/* Ground Division Line (Surface vs Subterranean) */}
          <rect x="0" y="310" width="960" height="230" fill="url(#groundGrad)" />
          <line x1="0" y1="310" x2="960" y2="310" stroke="#0284c7" strokeWidth="3" />

          {/* Surface Transit & eBPF Circuit Traces */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveHotspot('ebpf-grid')}
            opacity={activeLayer === 'cooling' ? '0.3' : '1'}
          >
            {/* Main civic highway circuit lines */}
            <path
              d="M 40,310 L 220,310 L 280,325 L 440,325 L 470,310 L 640,310 L 710,325 L 920,325"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
              filter="url(#cityGlow)"
            />
            {/* Pulsing data packets running along roads */}
            <circle cx="280" cy="325" r="4" fill="#f59e0b" className="animate-pulse" />
            <circle cx="640" cy="310" r="4" fill="#38bdf8" className="animate-pulse" />

            {/* Micro grid intersection nodes */}
            <circle cx="220" cy="310" r="5" fill="#38bdf8" />
            <circle cx="470" cy="310" r="7" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
            <circle cx="710" cy="325" r="5" fill="#38bdf8" />
          </g>

          {/* Subterranean Level (-100m to -250m) */}
          {/* Geological Bedrock Layers */}
          <path
            d="M0,360 Q 240,350 480,365 T 960,355"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            fill="none"
          />
          <path
            d="M0,430 Q 300,440 600,425 T 960,435"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            fill="none"
          />

          {/* Subterranean Data Pods (Liquid Immersion Halls) */}
          {/* Pod #01 */}
          <g opacity={activeLayer === 'ebpf' ? '0.3' : '1'}>
            <rect x="120" y="380" width="130" height="90" rx="8" fill="#041a35" stroke="#0284c7" strokeWidth="1.5" />
            {/* Liquid tank fill */}
            <rect x="128" y="390" width="114" height="72" rx="4" fill="url(#coolingGlow)" />
            {/* Server Blades inside tank */}
            <line x1="140" y1="400" x2="140" y2="450" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="155" y1="400" x2="155" y2="450" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="170" y1="400" x2="170" y2="450" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="185" y1="400" x2="185" y2="450" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="200" y1="400" x2="200" y2="450" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="215" y1="400" x2="215" y2="450" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="3 3" />
            <text x="185" y="475" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              POD 01 · 800kW
            </text>
          </g>

          {/* Pod #04 - Marquee Subterranean Pod */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveHotspot('pod-cooling')}
            opacity={activeLayer === 'ebpf' ? '0.4' : '1'}
          >
            <rect
              x="390"
              y="370"
              width="180"
              height="115"
              rx="10"
              fill="#061e3d"
              stroke={activeHotspot === 'pod-cooling' ? '#38bdf8' : '#0369a1'}
              strokeWidth="2.5"
            />
            {/* Liquid coolant chamber */}
            <rect x="400" y="380" width="160" height="95" rx="6" fill="#082b52" />
            {/* Immersion Fluid Glow */}
            <rect x="404" y="410" width="152" height="60" rx="4" fill="url(#coolingGlow)" />
            {/* Blades array */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <line
                key={i}
                x1={415 + i * 18}
                y1="395"
                x2={415 + i * 18}
                y2="460"
                stroke={i % 2 === 0 ? '#38bdf8' : '#67e8f9'}
                strokeWidth="3"
                strokeLinecap="round"
              />
            ))}
            {/* Central Hexagon Core Watermark inside Subterranean Pod */}
            <polygon
              points="480,410 495,419 495,437 480,446 465,437 465,419"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.8"
            />
            <circle cx="480" cy="428" r="3" fill="#38bdf8" />
            {/* Hotspot indicator ring */}
            <circle cx="480" cy="428" r="22" fill="#0284c7" fillOpacity="0.25" className="animate-ping" />
            <text x="480" y="497" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="600" fontFamily="monospace">
              POD 04 · DIELECTRIC IMMERSION (PUE 1.04)
            </text>
          </g>

          {/* District Thermal Energy Heat Exchanger (Right) */}
          <g
            className="cursor-pointer"
            onClick={() => setActiveHotspot('district-thermal')}
            opacity={activeLayer === 'ebpf' ? '0.3' : '1'}
          >
            <rect x="710" y="380" width="150" height="95" rx="8" fill="#1b1510" stroke="#f59e0b" strokeWidth="2" />
            {/* Geothermal Heat Recapture Coil */}
            <path
              d="M 725,400 Q 755,420 785,400 T 845,400 M 725,425 Q 755,445 785,425 T 845,425 M 725,450 Q 755,470 785,450 T 845,450"
              fill="none"
              stroke="url(#amberThermal)"
              strokeWidth="2.5"
            />
            {/* Heat pipe going up to city */}
            <path
              d="M 800,380 L 800,310 L 760,250"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              className="animate-stream"
            />
            <circle cx="800" cy="425" r="5" fill="#f59e0b" />
            <text x="785" y="490" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace">
              DISTRICT HEAT EXCHANGER · 14.8 MW
            </text>
          </g>

          {/* Coolant and Optical Fiber Links connecting Pods */}
          <path
            d="M 250,425 L 390,425 M 570,425 L 710,425"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeDasharray="8 6"
            className="animate-stream"
          />

          {/* Optical Feed from Core to Surface */}
          <path
            d="M 480,370 L 480,310"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
          />
        </svg>

        {/* Live Floating Hotspot Card */}
        {activeHotspot && hotspots[activeHotspot as keyof typeof hotspots] && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md bg-[#040e21]/95 backdrop-blur-md border border-cyan-500/40 rounded-xl p-3 sm:p-4 shadow-2xl transition-all animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-mono font-medium text-cyan-400">
                {hotspots[activeHotspot as keyof typeof hotspots].tag}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 font-mono tabular-nums">
                {hotspots[activeHotspot as keyof typeof hotspots].stat}
              </span>
            </div>
            <h4 className="text-sm font-bold text-white mb-1">
              {hotspots[activeHotspot as keyof typeof hotspots].title}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {hotspots[activeHotspot as keyof typeof hotspots].desc}
            </p>
          </div>
        )}
      </div>

      {/* Real-time Telemetry Grid below the city diagram */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 pt-4 border-t border-slate-800/80 text-xs">
        <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Power Usage (PUE)</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300 tabular-nums">
            {pueMetric}
          </div>
          <div className="text-[11px] text-emerald-400 mt-0.5">
            Industry avg 1.58 · 94% lower overhead
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Droplets className="w-3.5 h-3.5 text-amber-400" />
            <span>Civic Heat Recycled</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-amber-300 tabular-nums">
            {heatRecycled} <span className="text-xs font-normal text-slate-400">MWth</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            12,400 homes heated annually
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Carbon Intensity</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-emerald-300 tabular-nums">
            0.00 <span className="text-xs font-normal text-slate-400">gCO₂/kWh</span>
          </div>
          <div className="text-[11px] text-emerald-400 mt-0.5">
            Hydro, Geothermal & Micro-Solar
          </div>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/90 rounded-xl p-3">
          <div className="flex items-center gap-1.5 text-slate-400 mb-1">
            <Activity className="w-3.5 h-3.5 text-sky-400" />
            <span>eBPF Event Ingress</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-mono text-sky-300 tabular-nums">
            {(packetCount / 1000000).toFixed(2)}M <span className="text-xs font-normal text-slate-400">pkt/s</span>
          </div>
          <div className="text-[11px] text-cyan-400 mt-0.5">
            Kernel bypass · 0.2ms transit
          </div>
        </div>
      </div>
    </div>
  );
};
