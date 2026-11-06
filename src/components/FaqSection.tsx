import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Cuáles son los requisitos básicos para solicitar un crédito?',
    answer: 'Para personas naturales: ser mayor de 21 años, contar con documento de identidad vigente, sustento de ingresos (boletas de pago, recibos por honorarios o declaraciones juradas) y contar con una cuenta bancaria a tu nombre. Para empresas: ficha RUC/RFC activa con antigüedad mínima de 12 meses y estados de cuenta bancarios recientes.',
  },
  {
    question: '¿En cuánto tiempo recibo el desembolso de los fondos?',
    answer: 'Tras completar el formulario en línea y cargar tus comprobantes, nuestro sistema de scoring emite una pre-aprobación en menos de 15 minutos. Una vez validada tu identidad y firmado digitalmente el contrato, el desembolso se realiza vía transferencia interbancaria en un plazo máximo de 24 horas hábiles.',
  },
  {
    question: '¿Puedo realizar pagos anticipados o cancelar mi préstamo antes de tiempo?',
    answer: 'Totalmente. En ARVÉNQIA defendemos la transparencia absoluta. Puedes realizar amortizaciones extraordinarias a capital o liquidar el saldo total en cualquier momento sin ninguna penalidad ni comisión de prepago, reduciendo de inmediato el monto de tus intereses futuros.',
  },
  {
    question: '¿Simular mi crédito en la web afecta mi historial crediticio?',
    answer: 'No. El simulador en nuestra plataforma web es 100% referencial e informativo. No realiza ninguna consulta formal ante centrales de riesgo ni altera tu puntaje crediticio.',
  },
  {
    question: '¿Cómo y dónde realizo el pago de mis cuotas mensuales?',
    answer: 'Ofrecemos múltiples canales: débito automático programado desde tu cuenta bancaria, transferencias interbancarias directas, o a través de nuestra pasarela de pagos segura con tarjetas de débito.',
  },
  {
    question: '¿Qué diferencia a ARVÉNQIA de la banca tradicional?',
    answer: 'Eliminamos la burocracia, las largas colas en agencias y los costos ocultos. Ofrecemos asesoría personalizada con un ejecutivo asignado, tiempos de respuesta récord y tasas competitivas sin cobros por estudio de crédito.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolución de Dudas</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Transparencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B192C] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Todo lo que necesitas saber antes de contratar tu crédito con nosotros.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/90 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0B192C] font-serif pr-4">
                    {faq.question}
                  </span>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#C5A059]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-1 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
