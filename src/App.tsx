import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveNodeTopology } from './components/InteractiveNodeTopology';
import { ArchitecturePanels } from './components/ArchitecturePanels';
import { SustainabilityCalculator } from './components/SustainabilityCalculator';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DeployModal } from './components/DeployModal';

export default function App() {
  const [deployModalOpen, setDeployModalOpen] = useState(false);

  const handleScrollToTopology = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 flex flex-col antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar Navigation */}
      <Navbar onOpenDeploy={() => setDeployModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 2: Hero Section with Central Visual (Sustainable Urban City & Subterranean Nodes) */}
        <Hero
          onOpenDeploy={() => setDeployModalOpen(true)}
          onScrollToTopology={handleScrollToTopology}
        />

        {/* Section 4: Interactive Node Topology (Emblem Alignment with 5 interlocking satellite nodes) */}
        <InteractiveNodeTopology />

        {/* Section 3: Core Architecture Panels (Corrected & Polished Copy) */}
        <ArchitecturePanels />

        {/* Interactive Environmental & Civic District Heat Impact Modeler */}
        <SustainabilityCalculator />

        {/* Section: Resources & Architecture RFCs */}
        <ResourcesSection />

        {/* Section: Contact Us & Sovereign Cluster Dispatch */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Deploy Cluster & Live Telemetry Console Modal */}
      <DeployModal
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
      />
    </div>
  );
}
