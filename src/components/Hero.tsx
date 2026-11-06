import React from 'react';
import {
  ArrowRight,
  Calculator,
  ShieldCheck,
  Clock,
  TrendingUp,
  CheckCircle2,
  Award,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onSimulateClick: () => void;
  onExploreProductsClick: () => void;
  onOpenApplyModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSimulateClick,
  onExploreProductsClick,
  onOpenApplyModal
}) => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0B192C] text-white">
      {/* Background Architectural Scrim & Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_financial_group_1793914197550.jpg"
          alt="Sede Central ARVÉNQIA Financial Group"
          className="w-full h-full object-cover object-center opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-[#0B192C]/70" />
        <div className="absolute inset-0 bg-radial-at-t from-[#C5A059]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">

            {/* Elegant Sub-Kicker (Zero-Pill: Clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider text-[#C5A059] uppercase">
              <span>Servicios Crediticios & Soluciones de Liquidez</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300">Respaldo y Confianza.</span>
            </div>

            {/* High Impact Headline (No orphan words, balanced) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.15] font-serif max-w-2xl text-balance">
              Soluciones de crédito para avanzar, crecer y construir tu futuro.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Accede a créditos accesibles y flexibles, pensados para ayudarte a cubrir tus necesidades, impulsar tus
              proyectos y alcanzar tus metas. Disfruta de un proceso de solicitud sencillo, condiciones claras y
              atención personalizada, sin trámites innecesarios.
            </p>

            {/* Call to Actions (Two distinct weight actions) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onSimulateClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[#0B192C] bg-gradient-to-r from-[#C5A059] via-[#E2C98A] to-[#C5A059] hover:from-[#D4AF37] hover:to-[#B38F3A] rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <Calculator className="w-5 h-5 text-[#0B192C]" />
                <span>Simular mi Crédito</span>
              </button>

              <button
                onClick={onExploreProductsClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all active:scale-[0.98] whitespace-nowrap"
              >
                <span>Conocer Productos</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Cero costo de estudio de crédito</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Prepagos sin penalidades</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Supervisión y cumplimiento legal</span>
              </div>
            </div>

          </div>

          {/* Hero Focal Card (Col 8-12): Live Credit Snapshot & Rates */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-6 md:p-8 backdrop-blur-md shadow-2xl space-y-6">

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h2 className="text-base font-semibold text-white">Soluciones de Crédito para Cada Necesidad</h2>

                </div>
                <div className="text-right">

                </div>
              </div>

              {/* Quick Rate Matrix */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-white block">Crédito Personal & Consumo</span>
                    <span className="text-xs text-slate-400">Hasta $5,000 · Plazo 12 - 48 meses</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 rounded">
                    Aprobación 15 min
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-white block">Crédito Vehicular</span>
                    <span className="text-xs text-slate-400">Hasta $10,000 · Con periodo de gracia</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-1 bg-amber-950/80 text-amber-300 border border-amber-800/60 rounded">
                    Tasa Preferencial
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-white block">Crédito Hipotecario & Inmobiliario</span>
                    <span className="text-xs text-slate-400">Hasta $50,000 · Plazos hasta 120 meses</span>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-1 bg-blue-950/80 text-blue-300 border border-blue-800/60 rounded">
                    Mayor Plazo
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-white block">Consolidación de Deudas</span>
                  <span className="text-xs text-slate-400">Hasta $20,000 · Con periodo de gracia</span>
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-1 bg-amber-950/80 text-amber-300 border border-amber-800/60 rounded">
                  Tasa Preferencial
                </span>
              </div>



            </div>
          </div>

        </div>

        {/* 4-Column Proof / KPI Bar Below Hero (Full-width row) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              +$280M
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-300">Capital Financiado</p>
            <p className="text-xs text-slate-500">Colocaciones efectivas en personas y empresas</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#C5A059] font-mono tabular-nums tracking-tight">
              &lt; 24h
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-300">Desembolso Promedio</p>
            <p className="text-xs text-slate-500">Fondos acreditados tras firma digital de contrato</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              99.4%
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-300">Índice de Satisfacción</p>
            <p className="text-xs text-slate-500">Evaluado en más de 14,000 operaciones</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              0%
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-300">Comisiones Ocultas</p>
            <p className="text-xs text-slate-500">Transparencia contractual de extremo a extremo</p>
          </div>

        </div>

      </div>
    </section>
  );
};
