import React, { useState } from 'react';
import { Leaf, Droplets, Flame, DollarSign, Calculator, CheckCircle2 } from 'lucide-react';

export const SustainabilityCalculator: React.FC = () => {
  const [vCpuCount, setVCpuCount] = useState<number>(5000);
  const [selectedRegion, setSelectedRegion] = useState<string>('zurich');

  const regions: Record<
    string,
    { name: string; energyMix: string; carbonPerKwh: number; heatReclaimRate: number }
  > = {
    zurich: {
      name: 'Zurich Alpine Hydro Pod',
      energyMix: '100% High-Head Run-of-River Hydro',
      carbonPerKwh: 0.004,
      heatReclaimRate: 0.94,
    },
    reykjavik: {
      name: 'Reykjavik Geothermal Core',
      energyMix: '100% Volcanic High-Enthalpy Geothermal',
      carbonPerKwh: 0.001,
      heatReclaimRate: 0.98,
    },
    pnw: {
      name: 'Pacific Northwest Columbia Basin',
      energyMix: '96% Hydroelectric + Wind Turbines',
      carbonPerKwh: 0.012,
      heatReclaimRate: 0.88,
    },
    singapore: {
      name: 'Singapore Ocean Thermal Array',
      energyMix: '92% Deep Seawater Heat Sink + Solar',
      carbonPerKwh: 0.018,
      heatReclaimRate: 0.85,
    },
  };

  const currentRegion = regions[selectedRegion];

  // Mathematical calculations:
  // Avg vCPU draws ~25W continuously = 0.025 kW
  // Annual kWh per vCPU = 0.025 * 8760 = 219 kWh/year compute
  // Standard datacenter PUE 1.58 -> Total energy = 219 * 1.58 = 346 kWh
  // Standard grid carbon intensity avg = 0.380 kg CO2/kWh
  // Legacy carbon = (vCpuCount * 346 * 0.380) / 1000 metric tons
  // Nexus Cloud PUE 1.042 -> Total energy = 219 * 1.042 = 228 kWh
  // Nexus carbon = (vCpuCount * 228 * currentRegion.carbonPerKwh) / 1000 metric tons
  const legacyPueKwh = vCpuCount * 0.025 * 8760 * 1.58;
  const nexusPueKwh = vCpuCount * 0.025 * 8760 * 1.042;
  const legacyCarbonTons = (legacyPueKwh * 0.385) / 1000;
  const nexusCarbonTons = (nexusPueKwh * currentRegion.carbonPerKwh) / 1000;
  const carbonSavedTons = Math.max(0, legacyCarbonTons - nexusCarbonTons);

  // Water saved: Standard evaporative tower uses 1.8 liters per kWh
  const waterSavedLiters = Math.round(legacyPueKwh * 1.65);

  // Municipal thermal heat recaptured MWh
  const heatRecapturedMwh = Math.round((nexusPueKwh * currentRegion.heatReclaimRate * 0.82) / 1000);

  // Homes heated estimate (avg apartment uses ~8 MWh heat / year)
  const homesHeated = Math.round(heatRecapturedMwh / 8);

  // Cost saved estimated ($0.11 per kWh diff + cooling reduction)
  const costSavingsUsd = Math.round((legacyPueKwh - nexusPueKwh) * 0.12 + vCpuCount * 14);

  return (
    <section className="py-20 bg-[#040715] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3 uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>Environmental Impact Modeler</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real-World Physics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Zero-Carbon City Impact
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Compare standard air-cooled legacy cloud infrastructure (PUE 1.58) against Nexus Cloud closed-loop dielectric immersion (PUE 1.042).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <div className="lg:col-span-5 bg-[#030919] border border-cyan-500/20 rounded-2xl p-6 sm:p-7 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono text-slate-300 uppercase">
                  Workload Scale (vCPUs)
                </label>
                <span className="text-sm font-bold font-mono text-cyan-300 tabular-nums">
                  {vCpuCount.toLocaleString()} cores
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={vCpuCount}
                onChange={(e) => setVCpuCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>500 vCPU</span>
                <span>25,000 vCPU</span>
                <span>50,000 vCPU</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-300 uppercase block mb-2">
                Target Zero-Carbon Region Pod
              </label>
              <div className="space-y-2">
                {Object.entries(regions).map(([key, reg]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedRegion(key)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${
                      selectedRegion === key
                        ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-sm'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-white">{reg.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{reg.energyMix}</div>
                    </div>
                    {selectedRegion === key && (
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-400">
              <span className="font-mono text-cyan-400 font-semibold">Substrate Guarantee:</span> 100% of municipal district heat is piped via certified zero-loss thermal conduits into city heating grids.
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900/90 border border-emerald-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2">
                <Leaf className="w-4 h-4" />
                <span>Annual Carbon Avoided</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-300 tabular-nums">
                {Math.round(carbonSavedTons).toLocaleString()}
                <span className="text-base font-normal text-slate-400 ml-1">MT CO₂e</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Equivalent to removing {Math.round(carbonSavedTons / 4.6).toLocaleString()} combustion vehicles from city roads each year.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-950/40 to-slate-900/90 border border-amber-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-2">
                <Flame className="w-4 h-4" />
                <span>District Thermal Heat Donated</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-300 tabular-nums">
                {heatRecapturedMwh.toLocaleString()}
                <span className="text-base font-normal text-slate-400 ml-1">MWh</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Heats approximately {homesHeated.toLocaleString()} civic residential apartments through regional closed-loop loops.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900/90 border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                <Droplets className="w-4 h-4" />
                <span>Evaporative Water Saved</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-300 tabular-nums">
                {(waterSavedLiters / 1000000).toFixed(1)}
                <span className="text-base font-normal text-slate-400 ml-1">Million Liters</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Dielectric liquid immersion consumes 0.00 liters of potable urban municipal water.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-950/40 to-slate-900/90 border border-sky-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-2">
                <DollarSign className="w-4 h-4" />
                <span>Annual Power Cost Saved</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-sky-300 tabular-nums">
                ${costSavingsUsd.toLocaleString()}
                <span className="text-base font-normal text-slate-400 ml-1">USD</span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Derived directly from eliminating air chiller cooling overhead with PUE 1.042.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
