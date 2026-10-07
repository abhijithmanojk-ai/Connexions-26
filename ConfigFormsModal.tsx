import { useState } from 'react';
import { X, Save, RotateCcw, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { EventDetail, INITIAL_EVENTS } from '../data/eventsData';

interface ConfigFormsModalProps {
  events: EventDetail[];
  onSave: (updatedEvents: EventDetail[]) => void;
  onClose: () => void;
  selectedEventId?: string;
}

export default function ConfigFormsModal({ events, onSave, onClose, selectedEventId }: ConfigFormsModalProps) {
  const [formUrls, setFormUrls] = useState<Record<string, string>>(() => {
    const map: Record<string, string> = {};
    events.forEach(e => {
      map[e.id] = e.googleFormUrl;
    });
    return map;
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleUrlChange = (id: string, val: string) => {
    setFormUrls(prev => ({ ...prev, [id]: val }));
  };

  const handleSave = () => {
    const updated = events.map(e => ({
      ...e,
      googleFormUrl: formUrls[e.id] || e.googleFormUrl
    }));
    onSave(updated);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefaults = () => {
    const defaultMap: Record<string, string> = {};
    INITIAL_EVENTS.forEach(e => {
      defaultMap[e.id] = e.googleFormUrl;
    });
    setFormUrls(defaultMap);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-[#0c1017] border border-neutral-800 rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl relative my-auto"
        role="dialog"
        aria-modal="true"
      >
        <div className="h-2 w-full bg-gradient-to-r from-[#e10600] via-[#fcd500] to-[#002f6c]" />

        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-start justify-between bg-neutral-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#fcd500]">
              <span>Paddock Coordinator Control Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-racing tracking-wide uppercase mt-1">
              Configure Google Form Links
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Assign or update live Google Forms URLs for all 8 Connexions '26 events.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close Link Config"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body list of all 8 forms */}
        <div className="p-6 space-y-4 overflow-y-auto">
          <div className="bg-neutral-900/60 border border-neutral-800 p-3 rounded-lg text-xs text-neutral-300 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#fcd500] shrink-0 mt-0.5" />
            <p>
              Paste your official Google Form links below (e.g. <span className="font-mono text-neutral-400">https://forms.gle/...</span> or <span className="font-mono text-neutral-400">https://docs.google.com/forms/d/...</span>). Click "Test" to verify each link before saving.
            </p>
          </div>

          <div className="space-y-3">
            {events.map((evt) => {
              const isTarget = selectedEventId === evt.id;
              const isFerrari = evt.ferrariOrRedBull === 'Ferrari';

              return (
                <div 
                  key={evt.id} 
                  className={`p-3 rounded-lg border transition-all ${
                    isTarget 
                      ? 'border-[#fcd500] bg-neutral-900/90 ring-1 ring-[#fcd500]/50' 
                      : 'border-neutral-800 bg-neutral-950/70 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-white">#{evt.number}</span>
                      <span className="text-xs font-bold text-white font-racing uppercase">
                        {evt.title}
                      </span>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded ${
                        isFerrari ? 'text-[#e10600] bg-red-950/60' : 'text-[#fcd500] bg-blue-950/60'
                      }`}>
                        {evt.ferrariOrRedBull}
                      </span>
                    </div>

                    <a
                      href={formUrls[evt.id] || evt.googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-neutral-400 hover:text-white inline-flex items-center gap-1 font-medium"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Test URL
                    </a>
                  </div>

                  <input
                    type="url"
                    value={formUrls[evt.id] || ''}
                    onChange={(e) => handleUrlChange(evt.id, e.target.value)}
                    placeholder="https://docs.google.com/forms/d/..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded px-3 py-1.5 text-xs font-mono text-neutral-200 focus:outline-none focus:border-[#fcd500]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleResetToDefaults}
            className="text-xs text-neutral-400 hover:text-white inline-flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Pre-Configured Links
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium uppercase text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#fcd500] hover:bg-yellow-400 rounded transition-all cursor-pointer shadow-md shadow-yellow-950"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save All Form URLs</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
