import React, { useState } from 'react';
import { X, BookOpen, CheckCircle2, AlertCircle } from 'lucide-react';

interface ClaimsBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimsBookModal: React.FC<ClaimsBookModalProps> = ({ isOpen, onClose }) => {
  const [claimType, setClaimType] = useState<'reclamo' | 'queja'>('reclamo');
  const [fullName, setFullName] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [claimCode, setClaimCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `REC-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setClaimCode(code);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059] text-[#0B192C] flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-serif">Libro de Reclamaciones Digital</h3>
              <p className="text-xs text-slate-400">ARVÉNQIA FINANCIAL GROUP S.A.C.</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold font-serif text-[#0B192C]">
                Registro de Hoja de Reclamación Generado
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Tu solicitud ha sido inscrita bajo el código oficial:
              </p>
              <div className="py-2 px-4 bg-slate-100 rounded-lg font-mono font-bold text-sm text-[#0B192C] inline-block">
                {claimCode}
              </div>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Conforme a la normativa legal vigente, te responderemos formalmente a <strong>{email}</strong> en un plazo máximo no mayor a 15 días hábiles.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0B192C] rounded-xl hover:bg-slate-800"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Reclamo:</strong> Disconformidad relacionada a los productos o servicios contratados. <br />
                  <strong>Queja:</strong> Malestar o descontento respecto a la atención al público.
                </span>
              </div>

              <div className="flex gap-4">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="claimType"
                    checked={claimType === 'reclamo'}
                    onChange={() => setClaimType('reclamo')}
                    className="accent-[#0B192C]"
                  />
                  <span>Reclamo</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="radio"
                    name="claimType"
                    checked={claimType === 'queja'}
                    onChange={() => setClaimType('queja')}
                    className="accent-[#0B192C]"
                  />
                  <span>Queja</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Nombre y Apellidos</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">DNI / Documento</label>
                  <input
                    type="text"
                    required
                    value={docNumber}
                    onChange={(e) => setDocNumber(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Teléfono</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Detalle del reclamo o queja
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe con precisión los hechos ocurridos..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold text-[#0B192C] bg-[#C5A059] hover:bg-[#D4AF37] rounded-xl shadow-xs"
                >
                  Registrar Reclamo
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
