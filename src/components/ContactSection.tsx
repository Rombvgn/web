import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, MapPin, Building2, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    regionPod: 'zurich',
    workloadEstimate: '1000-5000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your name and corporate email address.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid corporate email.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#030614] border-t border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Zero-Carbon Cluster Dispatch</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Enterprise & Sovereign Cities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Deploy to the Sustainable Cloud Substrate
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Connect with our systems architects to reserve dedicated closed-loop dielectric server pods or integrate your municipal power grid.
              </p>
            </div>

            {/* Direct Engineering Contacts */}
            <div className="space-y-4 pt-4 border-t border-slate-800/80 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Subterranean Pod Operations</div>
                  <div className="text-xs text-slate-400">Zurich Limmatquai Chamber Pod 04 & Reykjavik Core</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Direct Engineering Dispatch</div>
                  <div className="text-xs text-slate-400 font-mono">architecture@nexus.cloud</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">99.999% SLA & Zero-Carbon Guarantee</div>
                  <div className="text-xs text-slate-400">Cryptographically audited renewable provenance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#040a1b] border border-cyan-500/25 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Cluster Reservation Dispatched
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-300 font-medium">{formData.name}</span>. An infrastructure solutions engineer has been assigned to your reservation for the{' '}
                  <span className="text-white font-medium capitalize">{formData.regionPod} Pod</span>. You will receive cryptographic tenant onboarding credentials at{' '}
                  <span className="text-cyan-300 font-mono">{formData.email}</span> within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        regionPod: 'zurich',
                        workloadEstimate: '1000-5000',
                        message: '',
                      });
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Elena Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                      Corporate / Gov Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena.vance@smartcity.org"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                      Organization / Agency
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Metropolitan Smart Grid Authority"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                      Preferred Deployment Pod
                    </label>
                    <select
                      value={formData.regionPod}
                      onChange={(e) => setFormData({ ...formData, regionPod: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer font-mono"
                    >
                      <option value="zurich">Zurich Alpine Hydro Pod (PUE 1.042)</option>
                      <option value="reykjavik">Reykjavik Geothermal Core (PUE 1.038)</option>
                      <option value="singapore">Singapore Ocean Heat Sink (PUE 1.055)</option>
                      <option value="pnw">Pacific Northwest Hydro-Wind (PUE 1.048)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5 uppercase">
                    Workload Scale & Latency Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your microservices scale, eBPF packet routing needs, or civic district heat integration..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="text-xs text-rose-400 font-mono">
                    {errorMsg}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 rounded-xl shadow-lg hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Submit Cluster Reservation Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
