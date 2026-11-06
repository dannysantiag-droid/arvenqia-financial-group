import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059] text-[#0B192C] flex items-center justify-center font-bold">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">
                {isPrivacy ? 'Política de Privacidad y Tratamiento de Datos' : 'Términos y Condiciones Generales'}
              </h3>
              <p className="text-xs text-slate-400">ARVÉNQIA FINANCIAL GROUP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Compromiso de Confidencialidad:</strong> ARVÉNQIA FINANCIAL GROUP garantiza la protección y confidencialidad de los datos personales proporcionados por los usuarios a través de la plataforma web, en estricto cumplimiento con la Ley de Protección de Datos Personales.
              </p>
              <p>
                <strong>2. Finalidad del Tratamiento:</strong> La información recopilada (nombres, documentos de identidad, datos de contacto y datos laborales) será utilizada exclusivamente para la evaluación crediticia, cálculo de capacidad de pago, formalización de contratos de préstamo y emisión de comunicaciones informativas sobre su solicitud.
              </p>
              <p>
                <strong>3. Seguridad de la Información:</strong> Implementamos cifrado TLS 1.3 de grado bancario para la transmisión de información y almacenamiento seguro en centros de datos certificados bajo la norma ISO/IEC 27001. No vendemos ni compartimos sus datos personales con terceros para fines comerciales no autorizados.
              </p>
              <p>
                <strong>4. Derechos ARCO:</strong> El titular de los datos puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y Oposición escribiendo a <em>privacidad@arvenqiafinancial.com</em>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Ámbito de Aplicación:</strong> Los presentes términos regulan el acceso y uso de los servicios crediticios, simuladores financieros y canales digitales provistos por ARVÉNQIA FINANCIAL GROUP.
              </p>
              <p>
                <strong>2. Condiciones del Simulador:</strong> Los cálculos presentados en el simulador digital son de carácter estrictamente referencial y no constituyen una oferta vinculante hasta la aprobación formal y suscripción del contrato de crédito respectivo.
              </p>
              <p>
                <strong>3. Evaluación Crediticia:</strong> El otorgamiento del crédito está condicionado a la validación de la información crediticia, laboral y patrimonial del solicitante según las políticas de riesgo vigentes de la entidad.
              </p>
              <p>
                <strong>4. Política de Pagos Anticipados:</strong> En concordancia con la legislación de protección al consumidor, los clientes tienen derecho a realizar pagos anticipados totales o parciales en cualquier momento con la consiguiente deducción proporcional de intereses y comisiones no devengadas, sin penalidad alguna.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0B192C] hover:bg-slate-800 rounded-xl"
          >
            Cerrar y Aceptar
          </button>
        </div>

      </div>
    </div>
  );
};
