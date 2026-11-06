import React, { useState, useMemo } from 'react';
import {
  Calculator,
  ArrowRight,
  Info,
  Check,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Calendar,
  Percent,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export interface SimulationData {
  productType: string;
  amount: number;
  termMonths: number;
  currency: string;
  monthlyPayment: number;
  annualRate: number;
  totalInterest: number;
  totalPayment: number;
}

interface CreditSimulatorProps {
  onApplyWithSimulation: (data: SimulationData) => void;
}

interface ProductPreset {
  id: string;
  name: string;
  defaultAmount: number;
  minAmount: number;
  maxAmount: number;
  stepAmount: number;
  defaultTerm: number;
  minTerm: number;
  maxTerm: number;
  stepTerm: number;
  annualRate: number; // TEA %
  description: string;
}

const PRODUCTS: ProductPreset[] = [
  {
    id: 'personal',
    name: 'Crédito Personal & Consumo',
    defaultAmount: 8000,
    minAmount: 1000,
    maxAmount: 35000,
    stepAmount: 500,
    defaultTerm: 24,
    minTerm: 6,
    maxTerm: 48,
    stepTerm: 6,
    annualRate: 14.5,
    description: 'Aprobación express para libre disponibilidad o proyectos personales.',
  },
  {
    id: 'pyme',
    name: 'Crédito Vehicular',
    defaultAmount: 45000,
    minAmount: 5000,
    maxAmount: 250000,
    stepAmount: 2500,
    defaultTerm: 36,
    minTerm: 12,
    maxTerm: 60,
    stepTerm: 6,
    annualRate: 11.8,
    description: 'Inversión en maquinaria, inventario y expansión comercial.',
  },
  {
    id: 'hipotecario',
    name: 'Crédito Hipotecario / Vehicular',
    defaultAmount: 120000,
    minAmount: 20000,
    maxAmount: 600000,
    stepAmount: 5000,
    defaultTerm: 72,
    minTerm: 24,
    maxTerm: 180,
    stepTerm: 12,
    annualRate: 9.2,
    description: 'Soluciones de crédito para avanzar, crecer y construir tu futuro.',
  },
];

export const CreditSimulator: React.FC<CreditSimulatorProps> = ({ onApplyWithSimulation }) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('personal');
  const [currency, setCurrency] = useState<string>('USD');
  const [showAmortization, setShowAmortization] = useState<boolean>(false);

  const activeProduct = useMemo(
    () => PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0],
    [selectedProductId]
  );

  const [amount, setAmount] = useState<number>(PRODUCTS[0].defaultAmount);
  const [term, setTerm] = useState<number>(PRODUCTS[0].defaultTerm);

  // Switch product and reset boundaries smoothly
  const handleProductChange = (prodId: string) => {
    setSelectedProductId(prodId);
    const prod = PRODUCTS.find((p) => p.id === prodId) || PRODUCTS[0];
    setAmount(prod.defaultAmount);
    setTerm(prod.defaultTerm);
  };

  // Financial Calculations (French Amortization System)
  const calculation = useMemo(() => {
    const tea = activeProduct.annualRate / 100;
    // Monthly effective interest rate: i = (1 + TEA)^(1/12) - 1
    const monthlyRate = Math.pow(1 + tea, 1 / 12) - 1;

    // Monthly insurance & admin fee (~0.04% monthly desgravamen)
    const insuranceRate = 0.00045;

    // Standard French Amortization formula: PMT = P * [ r*(1+r)^n / ((1+r)^n - 1) ]
    let baseMonthlyPayment = 0;
    if (monthlyRate > 0 && term > 0) {
      baseMonthlyPayment =
        (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
        (Math.pow(1 + monthlyRate, term) - 1);
    } else {
      baseMonthlyPayment = amount / (term || 1);
    }

    const monthlyInsurance = amount * insuranceRate;
    const totalMonthlyPayment = Math.round((baseMonthlyPayment + monthlyInsurance) * 100) / 100;
    const totalPayment = Math.round(totalMonthlyPayment * term * 100) / 100;
    const totalInterest = Math.round((totalPayment - amount) * 100) / 100;

    // Generate first 6 months schedule for transparency
    const schedule = [];
    let balance = amount;
    for (let month = 1; month <= Math.min(term, 12); month++) {
      const monthInterest = balance * monthlyRate;
      const principal = baseMonthlyPayment - monthInterest;
      balance = Math.max(0, balance - principal);
      schedule.push({
        month,
        payment: totalMonthlyPayment,
        principal: Math.round(principal * 100) / 100,
        interest: Math.round(monthInterest * 100) / 100,
        balance: Math.round(balance * 100) / 100,
      });
    }

    return {
      monthlyPayment: totalMonthlyPayment,
      baseMonthlyPayment: Math.round(baseMonthlyPayment * 100) / 100,
      monthlyInsurance: Math.round(monthlyInsurance * 100) / 100,
      totalPayment,
      totalInterest,
      annualRate: activeProduct.annualRate,
      monthlyRatePercent: (monthlyRate * 100).toFixed(2),
      schedule,
    };
  }, [amount, term, activeProduct]);

  const currencySymbol = currency === 'USD' ? '$' : currency === 'PEN' ? 'S/' : '€';

  const formatMoney = (val: number) => {
    return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleStartApplication = () => {
    onApplyWithSimulation({
      productType: activeProduct.name,
      amount,
      termMonths: term,
      currency,
      monthlyPayment: calculation.monthlyPayment,
      annualRate: calculation.annualRate,
      totalInterest: calculation.totalInterest,
      totalPayment: calculation.totalPayment,
    });
  };

  return (
    <section id="simulador" className="py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
            <span>Simulador Financiero en Tiempo Real</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Cálculo Transparente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0B192C] tracking-tight">
            Calcula tu cuota mensual sin compromisos
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Ajusta el monto, plazo y tipo de financiamiento. Nuestra calculadora aplica la tasa preferencial oficial para entregarte una estimación exacta y sin sorpresas.
          </p>
        </div>

        {/* Product Type Selector Tabs (Interactive Filter Controls: Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PRODUCTS.map((prod) => {
            const isSelected = selectedProductId === prod.id;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => handleProductChange(prod.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${isSelected
                  ? 'bg-[#0B192C] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
              >
                {prod.name}
              </button>
            );
          })}
        </div>

        {/* Simulator Grid (Controls Left, Results Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Controls Box (Col 1-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">

            {/* Currency Selector & Product Description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Modalidad seleccionada</span>
                <span className="text-sm font-bold text-[#0B192C]">{activeProduct.name}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">Moneda:</span>
                <div className="flex p-0.5 bg-slate-100 rounded-lg border border-slate-200">
                  {['USD'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors ${currency === curr
                        ? 'bg-white text-[#0B192C] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider 1: Monto a Solicitar */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="credit-amount" className="text-sm font-semibold text-[#0B192C] block">
                    Monto del Crédito
                  </label>
                  <span className="text-xs text-slate-500">¿Cuánto capital necesitas?</span>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                    {currencySymbol}
                  </span>
                  <input
                    type="number"
                    id="credit-amount"
                    min={activeProduct.minAmount}
                    max={activeProduct.maxAmount}
                    step={activeProduct.stepAmount}
                    value={amount}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setAmount(val);
                    }}
                    className="w-36 sm:w-44 pl-7 pr-3 py-2 text-right font-mono font-bold text-base text-[#0B192C] bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Range Input Slider */}
              <div className="space-y-2">
                <input
                  type="range"
                  min={activeProduct.minAmount}
                  max={activeProduct.maxAmount}
                  step={activeProduct.stepAmount}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B192C]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>Mín: {currencySymbol}{activeProduct.minAmount.toLocaleString()}</span>
                  <span>Máx: {currencySymbol}{activeProduct.maxAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[5000, 15000, 30000, 75000].map((preset) => {
                  if (preset >= activeProduct.minAmount && preset <= activeProduct.maxAmount) {
                    return (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(preset)}
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                      >
                        +{currencySymbol}{preset.toLocaleString()}
                      </button>
                    );
                  }
                  return null;
                })}
                <button
                  type="button"
                  onClick={() => setAmount(activeProduct.maxAmount)}
                  className="px-2.5 py-1 text-xs font-semibold text-[#1E3A8A] bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
                >
                  Monto Máximo
                </button>
              </div>
            </div>

            {/* Slider 2: Plazo de Pago */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="credit-term" className="text-sm font-semibold text-[#0B192C] block">
                    Plazo de Financiamiento
                  </label>
                  <span className="text-xs text-slate-500">Número de cuotas mensuales</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono">
                  <input
                    type="number"
                    id="credit-term"
                    min={activeProduct.minTerm}
                    max={activeProduct.maxTerm}
                    step={activeProduct.stepTerm}
                    value={term}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (!isNaN(val)) setTerm(val);
                    }}
                    className="w-20 px-2 py-2 text-center font-mono font-bold text-base text-[#0B192C] bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
                  />
                  <span className="text-sm font-medium text-slate-600">meses</span>
                </div>
              </div>

              {/* Range Input Slider for Term */}
              <div className="space-y-2">
                <input
                  type="range"
                  min={activeProduct.minTerm}
                  max={activeProduct.maxTerm}
                  step={activeProduct.stepTerm}
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0B192C]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>{activeProduct.minTerm} meses</span>
                  <span>{activeProduct.maxTerm} meses ({Math.round(activeProduct.maxTerm / 12)} años)</span>
                </div>
              </div>

              {/* Preset terms */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[12, 24, 36, 48, 60, 120].map((t) => {
                  if (t >= activeProduct.minTerm && t <= activeProduct.maxTerm) {
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTerm(t)}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${term === t
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                      >
                        {t} meses
                      </button>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs text-slate-600">
              <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>
                Cálculo referencial bajo sistema de amortización constante (francés). Las condiciones definitivas se confirman tras la evaluación de solvencia crediticia.
              </span>
            </div>

          </div>

          {/* Results Summary Box (Col 8-12) */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">

            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#C5A059]">Resumen de Simulación</span>
              <span className="text-xs text-slate-400 font-mono">{term} cuotas iguales</span>
            </div>

            {/* Estimated Monthly Payment Highlight */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800/90 border border-slate-700/80 space-y-1">
              <span className="text-xs text-slate-400 block font-medium">Cuota Mensual Estimada</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#C5A059] font-mono tabular-nums">
                  {currencySymbol}{formatMoney(calculation.monthlyPayment)}
                </span>
                <span className="text-xs text-slate-400">/ mes</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1">
                Incluye amortización de capital, intereses y seguro de desgravamen.
              </p>
            </div>

            {/* Rate & Detail Metrics */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Tasa Anual Referencial (TEA)</span>
                <span className="font-mono font-semibold text-white tabular-nums">
                  {calculation.annualRate.toFixed(2)}%
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Tasa Mensual Efectiva (TEM)</span>
                <span className="font-mono font-semibold text-white tabular-nums">
                  {calculation.monthlyRatePercent}%
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Monto del Préstamo Solicitado</span>
                <span className="font-mono font-semibold text-white tabular-nums">
                  {currencySymbol}{amount.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Intereses Totales Estimados</span>
                <span className="font-mono font-semibold text-slate-200 tabular-nums">
                  {currencySymbol}{formatMoney(calculation.totalInterest)}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-slate-300 font-medium">Total Estimado a Pagar</span>
                <span className="font-mono font-bold text-lg text-white tabular-nums">
                  {currencySymbol}{formatMoney(calculation.totalPayment)}
                </span>
              </div>
            </div>

            {/* CTA Button: Iniciar Solicitud */}
            <div className="pt-2 space-y-3">
              <button
                onClick={handleStartApplication}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-5 text-sm sm:text-base font-bold text-[#0B192C] bg-gradient-to-r from-[#C5A059] via-[#E2C98A] to-[#C5A059] hover:from-[#D4AF37] hover:to-[#B38F3A] rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                <span>Iniciar Solicitud con este Monto</span>
                <ArrowRight className="w-5 h-5 text-[#0B192C]" />
              </button>

              {/* Toggle Amortization Schedule */}
              <button
                type="button"
                onClick={() => setShowAmortization(!showAmortization)}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>{showAmortization ? 'Ocultar cronograma preliminar' : 'Ver cronograma de primeros meses'}</span>
                {showAmortization ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Amortization Schedule Accordion */}
            {showAmortization && (
              <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs font-medium text-slate-300 block">
                  Desglose cuotas 1 a {calculation.schedule.length} (Amortización Francesa):
                </span>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[11px] font-mono">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-800">
                        <th className="py-1">Mes</th>
                        <th className="py-1">Cuota</th>
                        <th className="py-1">Capital</th>
                        <th className="py-1">Interés</th>
                        <th className="py-1 text-right">Saldo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {calculation.schedule.map((row) => (
                        <tr key={row.month} className="hover:bg-slate-800/40">
                          <td className="py-1.5">{row.month}</td>
                          <td className="py-1.5">{currencySymbol}{row.payment}</td>
                          <td className="py-1.5">{currencySymbol}{row.principal}</td>
                          <td className="py-1.5 text-slate-400">{currencySymbol}{row.interest}</td>
                          <td className="py-1.5 text-right font-semibold">{currencySymbol}{row.balance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
