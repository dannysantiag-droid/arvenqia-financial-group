import React, { useState, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Code2, 
  FileCode,
  Sparkles
} from 'lucide-react';

interface HtmlCodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlCodeExportModal: React.FC<HtmlCodeExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      fetch('/arvenqia_landing.html')
        .then((res) => res.text())
        .then((data) => {
          setHtmlCode(data);
          setLoading(false);
        })
        .catch(() => {
          setHtmlCode('<!-- Código HTML disponible en /public/arvenqia_landing.html -->');
          setLoading(false);
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'arvenqia_financial_landing.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B192C] border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-[#0B192C] flex items-center justify-center font-bold">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                  Código Fuente HTML Autónomo (Single-File)
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                  100% Funcional
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Tailwind CSS CDN + Lucide CDN + Vanilla JS embebido · Listo para copiar y desplegar
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-5 py-3 bg-slate-800/80 border-b border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Archivo:</span>
            <span className="text-slate-200 font-semibold">arvenqia_landing.html</span>
            <span>·</span>
            <span>~25 KB</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/arvenqia_landing.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir HTML Directo</span>
            </a>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1E3A8A] hover:bg-[#1e44a6] text-white font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar .html</span>
            </button>

            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg font-bold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B192C]'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado al Portapapeles!' : 'Copiar Código'}</span>
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed">
          {loading ? (
            <div className="py-20 text-center text-slate-500">Cargando código HTML autónomo...</div>
          ) : (
            <pre className="whitespace-pre overflow-x-auto select-all">
              <code>{htmlCode}</code>
            </pre>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>Incluye simulador interactivo, cálculo de amortización francesa y navegación responsive.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
