import React from 'react';
import { 
  FileCheck2, 
  Scale, 
  Zap, 
  UserCheck, 
  ShieldCheck, 
  Lock, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenApplyModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="ventajas" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
            <span>Ventajas Competitivas & Propuesta de Valor</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-slate-400">Por qué ARVÉNQIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            La solidez de la banca tradicional con la agilidad del ecosistema digital
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Eliminamos las fricciones burocráticas del crédito tradicional. Combinamos algoritmos de evaluación de riesgo en tiempo real con asesores patrimoniales dedicados.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1 (Col 1-7): 100% Digital & Paperless with Business Visual */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-800/80 border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-slate-600 transition-all">
            <div className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B192C] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                Procesos 100% digitales y sin papeleo innecesario
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Olvídate de largas colas, impresiones interminables de constancias o firmas notariales presenciales. Completa tu solicitud desde tu teléfono u ordenador en 3 minutos con verificación de identidad biométrica y firma digital certificada.
              </p>
            </div>
            
            <div className="px-8 pb-8 pt-2">
              <div className="relative rounded-xl overflow-hidden h-52 border border-slate-700/60 shadow-lg">
                <img
                  src="/src/assets/images/pyme_credit_business_1793914198001.jpg"
                  alt="Gestión empresarial y crédito ágil"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Firma electrónica con validez legal plena y cifrado de extremo a extremo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (Col 8-12): Asesoría Patrimonial & Personalizada con foto de asesor */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-slate-600 transition-all">
            <div className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B192C] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                Asesoría financiera y patrimonial personalizada
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                No eres un número de ticket. Cada cliente cuenta con un ejecutivo crediticio asignado para asesorarte en la estructuración de tus pagos y proteger tu salud financiera.
              </p>
            </div>

            <div className="px-8 pb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700/60">
                <img
                  src="/src/assets/images/financial_advisor_portrait_1793914198347.jpg"
                  alt="Asesor Senior ARVÉNQIA"
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#C5A059]/40"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-0.5">
                  <span className="text-sm font-bold text-white block">Andrés Morales, CFP</span>
                  <span className="text-xs text-[#C5A059] block">Director de Asesoría Crediticia</span>
                  <p className="text-[11px] text-slate-400">
                    "Estructuramos tu crédito para maximizar tu rentabilidad y tranquilidad."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 (Col 1-6): Tasas Transparentes Sin Letra Chica */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 p-8 space-y-4 hover:border-slate-600 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#0B192C] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Tasas competitivas y transparencia total (Sin letras chicas)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Lo que ves en tu simulación es lo que pagas. Sin comisiones de mantenimiento ocultas, sin cobros por evaluación crediticia y con la libertad de realizar pagos adelantados o amortizaciones a capital en cualquier momento sin penalidad alguna.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="text-emerald-400 font-bold">✓ TCEA transparente</span>
              <span>·</span>
              <span className="text-emerald-400 font-bold">✓ Cero comisión prepago</span>
            </div>
          </div>

          {/* Card 4 (Col 7-12): Desembolso Récord */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 p-8 space-y-4 hover:border-slate-600 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#0B192C] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Respuesta y desembolso en tiempo récord
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Las oportunidades de negocio e inversiones no pueden esperar semanas. Nuestro motor de scoring automatizado emite pre-aprobaciones en minutos y realiza la transferencia bancaria en menos de 24 horas tras la confirmación de la documentación.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="text-[#C5A059] font-bold">✓ Pre-aprobación en 15 min</span>
              <span>·</span>
              <span className="text-[#C5A059] font-bold">✓ Transferencia en &lt; 24h</span>
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1E3A8A] via-[#0B192C] to-[#0B192C] border border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-serif">
              ¿Listo para dar el siguiente paso con tu financiamiento?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Inicia tu evaluación online hoy mismo. No afectará tu historial crediticio la simulación.
            </p>
          </div>
          <button
            onClick={onOpenApplyModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-[#C5A059] hover:bg-[#D4AF37] rounded-xl shadow-md transition-all whitespace-nowrap shrink-0"
          >
            <span>Solicitar Crédito Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
