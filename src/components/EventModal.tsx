import { X, ExternalLink, Award, MapPin, Users, Clock, AlertTriangle, Phone } from 'lucide-react';
import { EventDetail } from '../data/eventsData';

interface EventModalProps {
  event: EventDetail | null;
  onClose: () => void;
  onOpenRegister: (event: EventDetail) => void;
}

export default function EventModal({ event, onClose, onOpenRegister }: EventModalProps) {
  if (!event) return null;

  const isFerrari = event.ferrariOrRedBull === 'Ferrari';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-[#0c1017] border border-neutral-800 rounded-xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl relative my-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Top livery band */}
        <div className={`h-2.5 w-full ${isFerrari ? 'bg-[#e10600]' : 'bg-[#fcd500]'}`} />

        {/* Header */}
        <div className="p-6 border-b border-neutral-800 flex items-start justify-between bg-neutral-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              <span className="font-mono text-white">GRID SLOT #{event.number}</span>
              <span aria-hidden="true">·</span>
              <span className={isFerrari ? 'text-[#e10600]' : 'text-[#fcd500]'}>
                {isFerrari ? 'Scuderia Ferrari Garage' : 'Oracle Red Bull Garage'}
              </span>
              <span aria-hidden="true">·</span>
              <span>{event.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-racing tracking-wide uppercase mt-1">
              {event.title}
            </h2>
            <p className="text-sm text-neutral-300 font-medium mt-1">
              {event.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close Event Dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Tagline & Overview */}
          <div className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800">
            <p className="text-xs font-semibold italic text-[#fcd500] mb-1">
              "{event.tagline}"
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {event.overview}
            </p>
          </div>

          {/* Quick Telemetry Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded">
              <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                <Users className="w-3.5 h-3.5 text-[#e10600]" />
                <span className="uppercase font-semibold">Team Size</span>
              </div>
              <span className="font-medium text-white">{event.teamSize}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded">
              <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-[#fcd500]" />
                <span className="uppercase font-semibold">Timing</span>
              </div>
              <span className="font-medium text-white">{event.reportingTime}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded">
              <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span className="uppercase font-semibold">Venue</span>
              </div>
              <span className="font-medium text-white">{event.venue}</span>
            </div>

            <div className="p-3 bg-neutral-900/40 border border-neutral-800/80 rounded">
              <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span className="uppercase font-semibold">Max Points</span>
              </div>
              <span className="font-bold text-[#fcd500]">{event.points.first} Pts</span>
            </div>
          </div>

          {/* Championship Points Scale */}
          <div className="flex items-center justify-between p-3 bg-neutral-950 rounded border border-neutral-800/80 text-xs">
            <span className="text-neutral-400 font-semibold uppercase">Podium Constructors Points:</span>
            <div className="flex items-center gap-4 font-mono font-bold">
              <span className="text-yellow-400">P1: {event.points.first} pts</span>
              <span className="text-slate-300">P2: {event.points.second} pts</span>
              <span className="text-amber-600">P3: {event.points.third} pts</span>
            </div>
          </div>

          {/* Event Rounds Structure */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-racing mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e10600]" />
              Competition Structure & Race Rounds
            </h4>
            <div className="space-y-3">
              {event.rounds.map((round, idx) => (
                <div key={idx} className="p-3.5 rounded bg-neutral-900/40 border border-neutral-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase font-racing">
                      {round.name}
                    </span>
                    {round.duration && (
                      <span className="text-[11px] font-mono text-[#fcd500] bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                        {round.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                    {round.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Specific Sporting Rules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-racing mb-2.5 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              FIA Sporting Regulations & Rules
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#e10600] font-bold mt-0.5 font-mono">#{idx + 1}</span>
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Judging Criteria */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-racing mb-2 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#fcd500]" />
              Telemetry & Judging Criteria
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {event.judgingCriteria.map((crit, idx) => (
                <div key={idx} className="p-2.5 rounded bg-neutral-900/30 border border-neutral-800/80 text-neutral-300">
                  • {crit}
                </div>
              ))}
            </div>
          </div>

          {/* Coordinators Contact */}
          <div className="pt-2 border-t border-neutral-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-racing mb-2.5">
              Paddock Race Marshalls (Student Coordinators)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {event.coordinators.map((c, idx) => (
                <div key={idx} className="p-2.5 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-white block">{c.name}</span>
                    <span className="text-neutral-500 text-[11px]">{c.role}</span>
                  </div>
                  <a 
                    href={`tel:${c.phone}`}
                    className="flex items-center gap-1 text-[#fcd500] hover:underline font-mono text-[11px]"
                  >
                    <Phone className="w-3 h-3" />
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with primary Register CTA leading to Google Form */}
        <div className="p-5 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            <span>Entry Deadline: </span>
            <span className="text-white font-semibold">14th October 09:15 AM</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold uppercase text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors cursor-pointer"
            >
              Back to Grid
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenRegister(event);
              }}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white rounded transition-all cursor-pointer shadow-md ${
                isFerrari 
                  ? 'bg-[#e10600] hover:bg-[#c00000] shadow-red-950' 
                  : 'bg-[#002f6c] border border-[#fcd500]/50 text-[#fcd500] hover:bg-[#002250] shadow-blue-950'
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Register via Google Form</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
