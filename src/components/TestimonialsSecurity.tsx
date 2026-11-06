import React from 'react';
import { 
  Star, 
  ShieldCheck, 
  Lock, 
  Building2, 
  CheckCircle2, 
  Award, 
  FileLock2, 
  BadgeCheck 
} from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  avatarText: string;
  quote: string;
  outcome: string;
  creditType: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana Valenzuela',
    role: 'Fundadora & Directora Ejecutiva',
    organization: 'Textiles V&M Group',
    avatarText: 'MV',
    quote: 'Necesitábamos capital de trabajo urgente para atender una orden de exportación masiva. Los bancos tradicionales nos pedían 4 semanas de papeleo; con ARVÉNQIA recibimos el desembolso de $85,000 en 22 horas con tasas justas.',
    outcome: '+120% en capacidad de exportación durante el último trimestre',
    creditType: 'Crédito PYME',
  },
  {
    name: 'Dr. Roberto Mendoza',
    role: 'Médico Cirujano Especialista',
    organization: 'Clínica San Gabriel',
    avatarText: 'RM',
    quote: 'Consolidé tres tarjetas de crédito con intereses asfixiantes en un solo préstamo personal de ARVÉNQIA. Reduje mi cuota mensual en un 38% y ahora tengo claridad absoluta de cuándo termino de pagar.',
    outcome: 'Ahorro de $740 mensuales en intereses devengados',
    creditType: 'Consolidación de Deuda',
  },
  {
    name: 'Claudia & Javier Arismendi',
    role: 'Compradores de Primera Vivienda',
    organization: 'Familia Arismendi',
    avatarText: 'CA',
    quote: 'El crédito hipotecario de ARVÉNQIA fue la única entidad que nos ofreció una tasa fija garantizada sin condicionarnos a contratar seguros externos abusivos. La asesoría de Andrés fue impecable.',
    outcome: 'Adquisición de departamento propio con financiamiento al 85%',
    creditType: 'Crédito Hipotecario',
  },
];

const SECURITY_BADGES = [
  {
    title: 'Cifrado TLS 1.3 & SSL 256-bit',
    description: 'Protocolos de encriptación grado bancario para la protección de todos tus datos personales y transacciones.',
    icon: Lock,
  },
  {
    title: 'Supervisión & Cumplimiento Normativo',
    description: 'Entidad financiera registrada y auditada periódicamente con apego estricto a las normas de prevención de lavado de activos (AML/KYC).',
    icon: ShieldCheck,
  },
  {
    title: 'Firma Digital Certificada ISO 27001',
    description: 'Contratos electrónicos formalizados con validez jurídica plena y trazabilidad mediante estampado de tiempo oficial.',
    icon: FileLock2,
  },
  {
    title: 'Protección de Datos Personales',
    description: 'Políticas rigurosas de confidencialidad conforme a la legislación vigente de protección de datos.',
    icon: BadgeCheck,
  },
];

export const TestimonialsSecurity: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
            <span>Casos de Éxito & Seguridad Institucional</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Confianza Comprobada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B192C] tracking-tight">
            Respaldando las metas de miles de personas y empresas
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Conoce cómo nuestras soluciones crediticias transparentes han permitido acelerar proyectos y consolidar patrimonios con total seguridad.
          </p>
        </div>

        {/* Testimonials Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Credit Type Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    {t.creditType}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Quantitative Impact Outcome */}
                <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200/60 text-xs font-medium text-emerald-900 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t.outcome}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B192C] text-[#C5A059] flex items-center justify-center font-bold text-xs font-mono shrink-0">
                  {t.avatarText}
                </div>
                <div className="min-w-0">
                  <span className="text-sm font-bold text-[#0B192C] block truncate">
                    {t.name}
                  </span>
                  <span className="text-xs text-slate-500 block truncate">
                    {t.role} · {t.organization}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Regulatory Standards Banner */}
        <div className="rounded-2xl bg-[#0B192C] text-white p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C5A059]">
              Garantía de Confianza & Marco Regulatorio
            </span>
            <h3 className="text-2xl font-bold font-serif text-white">
              Tus finanzas y tu información protegidas bajo los más altos estándares
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Operamos con protocolos de seguridad bancaria auditados de forma independiente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_BADGES.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1E3A8A] text-[#C5A059] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-serif">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
