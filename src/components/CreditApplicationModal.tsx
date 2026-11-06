import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Calculator,
  User,
  Briefcase,
  Building2,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';
import { SimulationData } from './CreditSimulator';

interface CreditApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: SimulationData | null;
  initialProduct?: string | null;
}

export const CreditApplicationModal: React.FC<CreditApplicationModalProps> = ({
  isOpen,
  onClose,
  initialData,
  initialProduct,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [trackingCode, setTrackingCode] = useState<string>('');

  // Form State
  const [productType, setProductType] = useState<string>('Crédito Personal & Consumo');
  const [amount, setAmount] = useState<number>(15000);
  const [termMonths, setTermMonths] = useState<number>(24);
  const [currency, setCurrency] = useState<string>('USD');

  // Personal Info
  const [fullName, setFullName] = useState<string>('');
  const [docType, setDocType] = useState<string>('DNI');
  const [docNumber, setDocNumber] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('Lima');

  // Employment Info
  const [employmentType, setEmploymentType] = useState<string>('Dependiente (Planilla)');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('2500');
  const [preferredBank, setPreferredBank] = useState<string>('BCP / Interbank');
  const [acceptTerms, setAcceptTerms] = useState<boolean>(true);

  // Sync with initial simulation or product if provided
  useEffect(() => {
    if (initialData) {
      setProductType(initialData.productType);
      setAmount(initialData.amount);
      setTermMonths(initialData.termMonths);
      setCurrency(initialData.currency);
    } else if (initialProduct) {
      setProductType(initialProduct);
    }
  }, [initialData, initialProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `ARV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTrackingCode(code);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-[#C5A059] uppercase tracking-wider block">
              Plataforma de Aprobación en Línea
            </span>
            <h3 className="text-xl font-bold font-serif">
              Solicitud Digital de Crédito ARVÉNQIA
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (if not submitted) */}
        {!submitted && (
          <div className="px-6 pt-4 pb-2 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
              <span className={step >= 1 ? 'text-[#0B192C]' : 'text-slate-400'}>
                1. Condiciones
              </span>
              <span className={step >= 2 ? 'text-[#0B192C]' : 'text-slate-400'}>
                2. Datos Personales
              </span>
              <span className={step >= 3 ? 'text-[#0B192C]' : 'text-slate-400'}>
                3. Perfil Financiero
              </span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#C5A059] transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            /* Success State */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full">
                  Expediente Generado con Éxito
                </span>
                <h4 className="text-2xl font-bold font-serif text-[#0B192C]">
                  ¡Solicitud Recibida Correctamente!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Estimado(a) <strong>{fullName || 'Cliente'}</strong>, tu solicitud para el <strong>{productType}</strong> por <strong>{currency === 'USD' ? '$' : 'S/'}{amount.toLocaleString()}</strong> ha ingresado a evaluación prioritaria.
                </p>
              </div>

              {/* Tracking Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto space-y-1 text-left font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Código de Seguimiento:</span>
                  <span className="font-bold text-[#0B192C]">{trackingCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Plazo solicitado:</span>
                  <span className="font-semibold">{termMonths} meses</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tiempo de contacto:</span>
                  <span className="text-emerald-700 font-semibold">&lt; 15 minutos</span>
                </div>
              </div>

              <div className="text-xs text-slate-500 max-w-md mx-auto">
                Hemos enviado una confirmación formal a <strong>{email || 'tu correo'}</strong> y un asesor crediticio asignado te contactará al teléfono <strong>{phone || 'proporcionado'}</strong> para coordinar la validación y desembolso.
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-slate-800 rounded-xl"
                >
                  Entendido y Finalizar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              {/* STEP 1: CONDICIONES */}
              {step === 1 && (
                <div className="space-y-5">
                  <h4 className="text-base font-bold text-[#0B192C] font-serif">
                    Paso 1: Detalle del Financiamiento
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Línea de Crédito
                      </label>
                      <select
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                      >
                        <option value="Crédito Personal & Consumo">Crédito Personal & Consumo (Libre disponibilidad)</option>
                        <option value="Crédito PYME / Capital de Trabajo">Crédito PYME & Capital de Trabajo</option>
                        <option value="Crédito Hipotecario / Vehicular">Crédito Hipotecario / Vehicular</option>
                        <option value="Consolidación de Deudas">Consolidación de Deudas</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Monto Solicitado
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                            {currency === 'USD' ? '$' : 'S/'}
                          </span>
                          <input
                            type="number"
                            required
                            min={1000}
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full pl-8 pr-3 py-2.5 text-sm font-mono font-bold bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Plazo de Financiamiento
                        </label>
                        <select
                          value={termMonths}
                          onChange={(e) => setTermMonths(Number(e.target.value))}
                          className="w-full px-3.5 py-2.5 text-sm font-mono bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                        >
                          <option value={12}>12 meses (1 año)</option>
                          <option value={24}>24 meses (2 años)</option>
                          <option value={36}>36 meses (3 años)</option>
                          <option value={48}>48 meses (4 años)</option>
                          <option value={60}>60 meses (5 años)</option>
                          <option value={120}>120 meses (10 años)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                      <span>Moneda preferencial:</span>
                      <div className="flex gap-2">
                        {['USD'].map((curr) => (
                          <button
                            type="button"
                            key={curr}
                            onClick={() => setCurrency(curr)}
                            className={`px-3 py-1 rounded text-xs font-bold ${currency === curr ? 'bg-[#0B192C] text-white' : 'bg-slate-200 text-slate-700'
                              }`}
                          >
                            {curr}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#C5A059] hover:bg-[#D4AF37] rounded-xl transition-all"
                    >
                      <span>Continuar: Datos Personales</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: DATOS PERSONALES */}
              {step === 2 && (
                <div className="space-y-5">
                  <h4 className="text-base font-bold text-[#0B192C] font-serif">
                    Paso 2: Información del Solicitante
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Nombres y Apellidos Completos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Eduardo Ramírez Peña"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Tipo Documento
                        </label>
                        <select
                          value={docType}
                          onChange={(e) => setDocType(e.target.value)}
                          className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                        >
                          <option value="DNI">DNI</option>
                          <option value="RUT/RFC">RUT / RFC</option>
                          <option value="CE">Carné Extranjería</option>
                          <option value="Pasaporte">Pasaporte</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Número de Documento *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. 45892019"
                          value={docNumber}
                          onChange={(e) => setDocNumber(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm font-mono bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Teléfono Móvil (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+51 987 654 321"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="ejemplo@correo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Volver</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (!fullName || !docNumber || !phone || !email) {
                          alert('Por favor completa todos los campos requeridos.');
                          return;
                        }
                        setStep(3);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#C5A059] hover:bg-[#D4AF37] rounded-xl transition-all"
                    >
                      <span>Continuar: Situación Laboral</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: SITUACIÓN LABORAL & ENVÍO */}
              {step === 3 && (
                <div className="space-y-5">
                  <h4 className="text-base font-bold text-[#0B192C] font-serif">
                    Paso 3: Perfil Laboral y Confirmación
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Situación Laboral
                      </label>
                      <select
                        value={employmentType}
                        onChange={(e) => setEmploymentType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                      >
                        <option value="Dependiente (Planilla)">Trabajador Dependiente (En planilla formal)</option>
                        <option value="Profesional Independiente">Profesional Independiente (Honorarios / Servicios)</option>
                        <option value="Empresario / PYME">Empresario / Propietario de Negocio (RUC/RFC)</option>
                        <option value="Rentas de Capital">Inversionista / Rentas de Capital</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Ingreso Mensual Neto Aproximado ({currency})
                        </label>
                        <input
                          type="number"
                          required
                          value={monthlyIncome}
                          onChange={(e) => setMonthlyIncome(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm font-mono bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Banco para el Desembolso
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. BCP, BBVA, Interbank, Scotiabank"
                          value={preferredBank}
                          onChange={(e) => setPreferredBank(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:border-[#C5A059] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                        <input
                          type="checkbox"
                          required
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
                          className="mt-0.5 rounded border-slate-300 text-[#0B192C] focus:ring-[#C5A059]"
                        />
                        <span>
                          Autorizo el tratamiento de mis datos personales para la evaluación crediticia y confirmo que los datos consignados son verídicos.
                        </span>
                      </label>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/80 text-xs text-blue-900 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0" />
                      <span>
                        Tu información está protegida bajo estándares bancarios. No cobramos adelantos ni gastos de evaluación.
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Volver</span>
                    </button>

                    <button
                      type="submit"
                      disabled={!acceptTerms}
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-[#0B192C] bg-gradient-to-r from-[#C5A059] to-[#E2C98A] hover:from-[#D4AF37] hover:to-[#B38F3A] disabled:opacity-50 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <span>Enviar Solicitud a Evaluación</span>
                      <CheckCircle2 className="w-4 h-4 text-[#0B192C]" />
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
