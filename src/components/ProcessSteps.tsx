import React from 'react';
import { 
  Calculator, 
  FileText, 
  ShieldCheck, 
  Banknote, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

interface ProcessStepsProps {
  onSimulateClick: () => void;
  onOpenApplyModal: () => void;
}

const STEPS = [
  {
    number: '01',
    title: 'Simula tu crédito',
    subtitle: 'Elige monto y plazo a tu conveniencia',
    description: 'Utiliza nuestro simulador digital interactivo para calcular tu cuota mensual estimada y conocer la tasa referencial exacta sin compromisos.',
    icon: Calculator,
    duration: '2 minutos',
  },
  {
    number: '02',
    title: 'Completa tu solicitud digital',
    subtitle: '100% en línea desde cualquier dispositivo',
    description: 'Ingresa tus datos personales y laborales básicos mediante nuestro formulario seguro con encriptación bancaria. Cero impresiones o trámites presenciales.',
    icon: FileText,
    duration: '3 minutos',
  },
  {
    number: '03',
    title: 'Validación express',
    subtitle: 'Evaluación algorítmica y confirmación',
    description: 'Nuestro sistema de análisis de riesgo evalúa tu perfil en tiempo real. Un asesor crediticio valida los requisitos y te envía la oferta formal definitiva.',
    icon: ShieldCheck,
    duration: '15 a 60 minutos',
  },
  {
    number: '04',
    title: 'Firma y recibe tu dinero',
    subtitle: 'Acreditación directa en tu cuenta bancaria',
    description: 'Revisa y firma electrónicamente tu contrato con código de seguridad OTP. Los fondos se transfieren directamente a tu cuenta bancaria de elección en menos de 24 horas.',
    icon: Banknote,
    duration: 'Menos de 24 horas',
  },
];

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ 
  onSimulateClick, 
  onOpenApplyModal 
}) => {
  return (
    <section id="proceso" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            <span>Flujo Ágil y 100% Digital</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Paso a Paso</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B192C] tracking-tight">
            Obtener tu crédito con ARVÉNQIA es simple y transparente
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Diseñamos un proceso ágil en cuatro etapas consecutivas para que obtengas liquidez inmediata sin fricciones burocráticas.
          </p>
        </div>

        {/* 4 Steps Grid with Step Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number} 
                className="relative bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-[#C5A059] tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0B192C] text-white flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C5A059]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0B192C] font-serif">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Duration Metadata Tag (Zero-Pill: Clean unboxed text) */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  <span>Tiempo estimado:</span>
                  <span className="font-semibold text-slate-800">{step.duration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button Bar */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onSimulateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#152a47] rounded-xl shadow-sm transition-all"
          >
            <Calculator className="w-4 h-4 text-[#C5A059]" />
            <span>Paso 1: Iniciar Simulación</span>
          </button>

          <button
            onClick={onOpenApplyModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-[#C5A059] hover:bg-[#D4AF37] rounded-xl shadow-sm transition-all"
          >
            <span>Paso 2: Completar Solicitud Directa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
