import React, { useState } from 'react';
import {
  Building2,
  Menu,
  X,
  ArrowRight,
  Code2,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenApplyModal: () => void;
  onOpenCodeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal, onOpenCodeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Productos Crediticios', href: '#productos' },
    { label: 'Simular Crédito', href: '#simulador' },
    { label: '¿Por Qué Arvénqia?', href: '#ventajas' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B192C]/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">

          {/* Zone 1: Single element brand wordmark with elegant emblem */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
            <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md flex items-center justify-center shrink-0">
              <img
                src="https://i.ibb.co/8g2s14fs/logo-SIN-TEXTO.png"
                alt="Arvénqia logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-wider text-white font-serif uppercase">
                ARVÉNQIA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-medium -mt-1">
                Financial Group
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean text with hover line) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C5A059] transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Standalone Code View & Primary CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCodeModal}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
              title="Ver / Copiar código HTML autónomo"
            >
              <Code2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Ver Código HTML</span>
            </button>

            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-semibold text-[#0B192C] bg-gradient-to-r from-[#C5A059] via-[#E2C98A] to-[#C5A059] hover:from-[#D4AF37] hover:to-[#B38F3A] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap font-medium"
            >
              <span>Solicitar Crédito</span>
              <ArrowRight className="w-4 h-4 text-[#0B192C]" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0B192C] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCodeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-slate-800/80 rounded-lg hover:bg-slate-800 border border-slate-700"
            >
              <Code2 className="w-4 h-4 text-[#C5A059]" />
              <span>Ver Código HTML en un solo archivo</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#C5A059] hover:bg-[#D4AF37] rounded-lg"
            >
              <span>Solicitar Crédito Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
