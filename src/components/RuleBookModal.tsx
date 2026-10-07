import { useState } from 'react';
import { X, Printer, Search, Download, CheckCircle, ShieldCheck } from 'lucide-react';
import { GENERAL_REGULATIONS, INITIAL_EVENTS } from '../data/eventsData';

interface RuleBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RuleBookModal({ isOpen, onClose }: RuleBookModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-[#0b0e14] border border-neutral-800 rounded-xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl relative my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Top racing strip */}
        <div className="h-2 w-full curb-pattern" />

        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-start justify-between bg-neutral-900/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e10600]">
              <span>DG VAISHNAV COLLEGE · B.COM (A&F)</span>
              <span aria-hidden="true" className="text-neutral-500">·</span>
              <span className="text-[#fcd500]">CONNEXIONS '26</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-racing tracking-wide uppercase mt-1">
              Official FIA Sporting Rule Book
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Complete regulations, section eligibility, scoring metrics, and event code of conduct.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Rule Book"
              className="p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#fcd500]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close Rule Book Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar inside Modal */}
        <div className="p-4 border-b border-neutral-800 bg-neutral-950/70">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter regulations by keyword (e.g., eligibility, buzzer, laptop, dress code)..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-md pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#e10600]"
            />
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-8 overflow-y-auto text-neutral-300 text-xs leading-relaxed">
          
          {/* General Department Regulations */}
          <div>
            <h3 className="text-base font-bold text-white font-racing uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-neutral-800 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e10600]" />
              Part I: General Sporting Code
            </h3>

            <div className="space-y-4">
              {GENERAL_REGULATIONS.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/80">
                  <h4 className="font-bold text-white uppercase text-xs mb-2">
                    {idx + 1}. {sec.title}
                  </h4>
                  <ul className="space-y-2">
                    {sec.rules.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#fcd500] shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* All 8 Events Individual Rules Summary */}
          <div>
            <h3 className="text-base font-bold text-white font-racing uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-neutral-800 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fcd500]" />
              Part II: Individual Event Bylaws (8 Grid Events)
            </h3>

            <div className="space-y-4">
              {INITIAL_EVENTS.map((evt) => (
                <div key={evt.id} className="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800/80">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white uppercase font-racing text-sm">
                      #{evt.number} {evt.title} ({evt.subtitle})
                    </span>
                    <span className="font-mono text-[11px] text-[#fcd500]">
                      Max {evt.points.first} Points · {evt.teamSize}
                    </span>
                  </div>

                  <p className="text-neutral-400 mb-3">{evt.overview}</p>

                  <div className="space-y-1.5 pl-3 border-l-2 border-neutral-800">
                    {evt.rules.map((rule, rIdx) => (
                      <div key={rIdx} className="text-neutral-300">
                        • {rule}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-xs">
          <span className="text-neutral-500">
            Promulgated by DG Vaishnav B.Com A&F Core Committee
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase text-black bg-[#fcd500] hover:bg-yellow-400 rounded transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
