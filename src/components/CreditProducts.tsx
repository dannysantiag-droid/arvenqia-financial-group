import React from 'react';
import {
  UserCheck,
  Briefcase,
  Home,
  RefreshCw,
  ArrowRight,
  CheckCircle,
  Percent,
  Clock,
  Shield
} from 'lucide-react';

interface CreditProductsProps {
  onSelectProduct: (productName: string) => void;
}

interface ProductCardData {
  id: string;
  name: string;
  tagline: string;
  rateHighlight: string;
  maxAmount: string;
  termRange: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const PRODUCTS_DATA: ProductCardData[] = [
  {
    id: 'personal',
    name: 'Crédito Personal & Consumo',
    tagline: 'Libre disponibilidad para tus metas',
    rateHighlight: 'TEA desde 14.50%',
    maxAmount: 'Hasta $5,000 USD',
    termRange: 'De 6 a 48 meses',
    description: 'Financiamiento directo sin garantías hipotecarias. Ideal para remodelaciones, viajes, emergencias o proyectos individuales.',
    benefits: [
      'Aprobación preliminar en 15 minutos',
      'Desembolso en cuenta bancaria en 24 horas',
      'Sin costos de apertura ni penalidad por prepago',
      'Cuotas fijas mensuales en moneda local o USD',
    ],
    icon: UserCheck,
    accentColor: 'border-[#1E3A8A]',
  },
  {
    id: 'pyme',
    name: 'Crédito Vehicular',
    tagline: 'Impulso estratégico para tu negocio',
    rateHighlight: 'TEA desde 11.80%',
    maxAmount: 'Hasta $10,000 USD',
    termRange: 'De 12 a 60 meses',
    description: 'Diseñado para empresas y personas con negocio que buscan capital de trabajo, compra de inventario, maquinaria o apertura de sedes.',
    benefits: [
      'Periodo de gracia de hasta 6 meses',
      'Evaluación basada en flujo de caja real',
      'Asesor corporativo especializado asignado',
      'Cronogramas adaptados a la estacionalidad de tu rubro',
    ],
    icon: Briefcase,
    accentColor: 'border-[#C5A059]',
  },
  {
    id: 'hipotecario',
    name: 'Crédito Hipotecario & Inmobiliario',
    tagline: 'Adquiere tu hogar o inmueble comercial',
    rateHighlight: 'TEA desde 8.90%',
    maxAmount: 'Hasta $50,000 USD',
    termRange: 'De 24 a 240 meses',
    description: 'Adquisición de viviendas de estreno, segundo uso, terrenos o remodelaciones mayores con el plazo más cómodo del mercado.',
    benefits: [
      'Financiamiento de hasta el 90% del valor del inmueble',
      'Tasas fijas preferenciales garantizadas',
      'Tasación y peritaje legal express',
      'Opción de cuotas dobles en julio y diciembre',
    ],
    icon: Home,
    accentColor: 'border-[#1E3A8A]',
  },
  {
    id: 'consolidacion',
    name: 'Consolidación de Deudas',
    tagline: 'Unifica tus pagos y ahorra mensualmente',
    rateHighlight: 'Ahorro de hasta 35% en cuota',
    maxAmount: 'Hasta $20,000 USD',
    termRange: 'De 12 a 72 meses',
    description: 'Reúne las deudas de múltiples tarjetas o préstamos bancarios en una sola obligación mensual con una tasa sustancialmente menor.',
    benefits: [
      'Una sola fecha de pago y un solo acreedor',
      'Reducción drástica del interés consolidado',
      'Liberación inmediata de capacidad crediticia',
      'Sin trámites burocráticos engorrosos',
    ],
    icon: RefreshCw,
    accentColor: 'border-emerald-600',
  },
];

export const CreditProducts: React.FC<CreditProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              <span>Portafolio de Soluciones Financieras</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-500">Diseñado para cada etapa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B192C] tracking-tight">
              Líneas de crédito transparentes adaptadas a tu realidad
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Sin cláusulas en letra pequeña ni condiciones ambiguas. Selecciona la solución que mejor se adapte a tus objetivos personales o metas corporativas.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200 shrink-0">
            <Shield className="w-4 h-4 text-[#C5A059]" />
            <span>Tasas auditadas y reguladas bajo estándares internacionales</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRODUCTS_DATA.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-slate-50/60 hover:bg-white border border-slate-200/90 hover:border-slate-300 p-6 flex flex-col justify-between transition-all duration-200 shadow-xs hover:shadow-lg"
              >
                <div className="space-y-5">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-[#C5A059] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#1E3A8A] bg-blue-50 px-2.5 py-1 rounded-md">
                      {product.rateHighlight}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0B192C] font-serif group-hover:text-[#1E3A8A] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{product.tagline}</p>
                  </div>

                  {/* Limits Spec Strip */}
                  <div className="py-2.5 px-3 rounded-xl bg-slate-100/80 border border-slate-200/60 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monto:</span>
                      <span className="font-semibold text-slate-800 font-mono">{product.maxAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Plazo:</span>
                      <span className="font-semibold text-slate-800 font-mono">{product.termRange}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Benefits List */}
                  <div className="pt-2 border-t border-slate-200/80 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Beneficios Clave
                    </span>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <button
                    onClick={() => onSelectProduct(product.name)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-semibold text-[#0B192C] bg-white hover:bg-[#0B192C] hover:text-white border border-slate-300 hover:border-[#0B192C] rounded-xl transition-all duration-150"
                  >
                    <span>Solicitar Crédito</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
