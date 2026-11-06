/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CreditSimulator, SimulationData } from './components/CreditSimulator';
import { CreditProducts } from './components/CreditProducts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSteps } from './components/ProcessSteps';
import { TestimonialsSecurity } from './components/TestimonialsSecurity';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CreditApplicationModal } from './components/CreditApplicationModal';
import { ClaimsBookModal } from './components/ClaimsBookModal';
import { LegalModal } from './components/LegalModal';
import { HtmlCodeExportModal } from './components/HtmlCodeExportModal';

export default function App() {
  // Modal states
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [isClaimsModalOpen, setIsClaimsModalOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({ isOpen: false, type: 'privacy' });

  // Prefilled application data from simulator or products
  const [prefilledSimulation, setPrefilledSimulation] = useState<SimulationData | null>(null);
  const [prefilledProduct, setPrefilledProduct] = useState<string | null>(null);

  // Handlers
  const handleOpenApplyModal = (productName?: string) => {
    setPrefilledSimulation(null);
    setPrefilledProduct(productName || 'Crédito Personal & Consumo');
    setIsApplyModalOpen(true);
  };

  const handleApplyWithSimulation = (data: SimulationData) => {
    setPrefilledSimulation(data);
    setPrefilledProduct(data.productType);
    setIsApplyModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* 1. Top Navigation Bar */}
      <Navbar
        onOpenApplyModal={() => handleOpenApplyModal()}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onSimulateClick={() => scrollToSection('simulador')}
          onExploreProductsClick={() => scrollToSection('productos')}
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* 3. Interactive Credit Simulator */}
        <CreditSimulator
          onApplyWithSimulation={handleApplyWithSimulation}
        />

        {/* 4. Products Portfolio */}
        <CreditProducts
          onSelectProduct={(prodName) => handleOpenApplyModal(prodName)}
        />

        {/* 5. Why Choose ARVÉNQIA */}
        <WhyChooseUs
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* 6. Process Steps 1-2-3-4 */}
        <ProcessSteps
          onSimulateClick={() => scrollToSection('simulador')}
          onOpenApplyModal={() => handleOpenApplyModal()}
        />

        {/* 7. Testimonials & Institutional Trust */}
        <TestimonialsSecurity />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* 8. Institutional Footer */}
      <Footer
        onOpenPrivacyModal={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
        onOpenTermsModal={() => setLegalModalState({ isOpen: true, type: 'terms' })}
        onOpenClaimsModal={() => setIsClaimsModalOpen(true)}
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
      />

      {/* Modals */}
      <CreditApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialData={prefilledSimulation}
        initialProduct={prefilledProduct}
      />

      <ClaimsBookModal
        isOpen={isClaimsModalOpen}
        onClose={() => setIsClaimsModalOpen(false)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
        type={legalModalState.type}
      />

      <HtmlCodeExportModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />

    </div>
  );
}
