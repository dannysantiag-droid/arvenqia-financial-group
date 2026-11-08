import React, { useState } from 'react';
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
  onOpenClaimsModal: () => void;
  onOpenCodeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenClaimsModal,
  onOpenCodeModal,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim().includes('@')) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <footer id="contacto" className="bg-[#0B192C] text-white border-t border-slate-800">

      {/* Top Banner: Quick Contact & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Boletín & Novedades Financieras
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Recibe reportes de tasas y oportunidades de financiamiento
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Análisis mensual del mercado crediticio, alertas de tasas preferenciales y guías patrimoniales directas en tu correo.
            </p>
          </div>

          <div className="lg:col-span-5">
            {newsletterSubmitted ? (
              <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>¡Gracias por suscribirte! Recibirás nuestro próximo informe de tasas.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Tu correo electrónico..."
                  className="flex-1 px-4 py-3 text-sm text-white bg-slate-900 border border-slate-700 rounded-xl focus:border-[#C5A059] focus:outline-none placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 text-sm font-semibold text-[#0B192C] bg-[#C5A059] hover:bg-[#D4AF37] rounded-xl transition-all whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Info (Col 1-2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden shadow-md flex items-center justify-center shrink-0">
                <img
                  src="https://i.ibb.co/8g2s14fs/logo-SIN-TEXTO.png"
                  alt="Arvénqia logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider text-white font-serif uppercase">
                  ARVÉNQIA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C5A059] uppercase font-medium -mt-1">
                  Financial Group
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Entidad de intermediación y asesoría crediticia orientada a la excelencia, solvencia y transparencia. Impulsamos el crecimiento patrimonial de individuos y empresas con financiamiento ágil y estructurado.
            </p>

            {/* Claims Book Banner Trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenClaimsModal}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition-colors"
              >
                <BookOpen className="w-4 h-4 text-[#C5A059]" />
                <span>Libro de Reclamaciones Digital</span>
              </button>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Soluciones Crediticias
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Crédito Personal & Consumo</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Crédito Vehicular</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Crédito Hipotecario & Inmobiliario</a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">Consolidación de Deuda</a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">Simulador de Cuotas</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Legal & Cumplimiento
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/privacidad.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-left">
                  Política de Privacidad y Datos
                </a>
              </li>
              <li>
                <a href="/terminos.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-left">
                  Términos y Condiciones de Servicio
                </a>
              </li>
              <li>
                <a href="/eliminar-datos.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-left">
                  Eliminación de Datos Personales
                </a>
              </li>
              <li>
                <button onClick={onOpenClaimsModal} className="hover:text-white transition-colors text-left">
                  Hoja de Reclamación / Queja
                </button>
              </li>
              <li>
                <button onClick={onOpenCodeModal} className="hover:text-white transition-colors text-left text-[#C5A059]">
                  Código Fuente HTML Autónomo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Canales de Atención
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Av. Teniente Hugo Ortiz y Moro Moro S 26 - 160, Quito - Ecuador</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="font-mono">+593 97 876 8107 / +1 (800) 489-2900</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>arvenquiafinancialgroup@protonmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Lun - Vie: 9:30 AM a 6:30 PM (Sáb: 10 AM - 1 PM)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclosure & Copyright Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            * Información regulatoria: ARVÉNQIA FINANCIAL GROUP opera de conformidad con los marcos legales vigentes de servicios de crédito y microfinanzas. Las tasas de interés (TEA y TCEA) son calculadas de acuerdo a la evaluación de riesgo crediticio individual de cada solicitante. La aprobación final de la operación queda sujeta a la verificación y entrega de documentación formal requerida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span>© 2026 ARVÉNQIA FINANCIAL GROUP. Todos los derechos reservados.</span>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="/privacidad.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacidad</a>
              <span>·</span>
              <a href="/terminos.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Términos</a>
              <span>·</span>
              <a href="/eliminar-datos.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Eliminación de datos</a>
              <span>·</span>
              <button onClick={onOpenClaimsModal} className="hover:text-white transition-colors">Libro de Reclamaciones</button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
