import { useState } from 'react';
import { BookOpen, ShieldAlert, Award, Printer, CheckCircle, Scale, Users, Clock } from 'lucide-react';
import { GENERAL_REGULATIONS } from '../data/eventsData';

export default function RuleBookSection() {
  const [activeTab, setActiveTab] = useState<'regulations' | 'scoring' | 'penalties'>('regulations');

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="rulebook" className="py-16 sm:py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              <span className="text-[#e10600]">FIA CODE</span>
              <span aria-hidden="true">·</span>
              <span>OFFICIAL SPORTING REGULATIONS</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#fcd500]">DG VAISHNAV B.COM A&F</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-racing tracking-tight uppercase">
              Official Rule Book
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
              Codified sporting regulations, eligibility guidelines, and constructors' championship point allocations for Connexions '26.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#fcd500]" />
              <span>Print / Save PDF Rulebook</span>
            </button>
          </div>
        </div>

        {/* Tab Controls (Segmented Filter Bar) */}
        <div className="mt-8 flex items-center gap-2 p-1 bg-neutral-900 border border-neutral-800 rounded-lg max-w-md">
          <button
            onClick={() => setActiveTab('regulations')}
            className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              activeTab === 'regulations'
                ? 'bg-[#e10600] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            General Code
          </button>
          <button
            onClick={() => setActiveTab('scoring')}
            className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              activeTab === 'scoring'
                ? 'bg-[#fcd500] text-black font-bold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Points Matrix
          </button>
          <button
            onClick={() => setActiveTab('penalties')}
            className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              activeTab === 'penalties'
                ? 'bg-neutral-100 text-black font-bold shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Penalties & Flags
          </button>
        </div>

        {/* Tab 1: General Code & Regulations */}
        {activeTab === 'regulations' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {GENERAL_REGULATIONS.map((sec, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#e10600] mb-2">
                    SECTION 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white font-racing uppercase mb-4">
                    {sec.title}
                  </h3>
                  <ul className="space-y-3 text-xs text-neutral-300">
                    {sec.rules.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#fcd500] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
                  COMPLIANCE MANDATORY FOR ALL PARTICIPATING SECTIONS
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Points Matrix */}
        {activeTab === 'scoring' && (
          <div className="mt-8 space-y-6">
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#fcd500] mb-2">
                CONSTRUCTORS' CHAMPIONSHIP FORMULA
              </div>
              <h3 className="text-2xl font-bold text-white font-racing uppercase">
                Championship Points Table
              </h3>
              <p className="text-xs text-neutral-400 mt-1 max-w-2xl leading-relaxed">
                Sections accumulate points based on podium and scoring positions. The section with the highest combined total across all 8 events will be awarded the Rolling Connexions '26 Championship Trophy.
              </p>

              {/* Points Grid */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse font-sans">
                  <thead>
                    <tr className="border-b border-neutral-800 bg-neutral-950/80 text-neutral-400 uppercase font-mono">
                      <th className="py-3 px-4">Finish Position</th>
                      <th className="py-3 px-4">Flagship: Pole Position</th>
                      <th className="py-3 px-4">Standard Events (Paddock TV, Driver Duel, etc.)</th>
                      <th className="py-3 px-4">Fastest Lap / Outstanding Bonus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800 font-mono">
                    <tr className="hover:bg-neutral-900/50">
                      <td className="py-3 px-4 font-bold text-yellow-400">P1 (Champion / Winner)</td>
                      <td className="py-3 px-4 font-bold text-white">35 Points</td>
                      <td className="py-3 px-4 font-bold text-white">25 Points</td>
                      <td className="py-3 px-4 text-emerald-400">+2 Bonus Points</td>
                    </tr>
                    <tr className="hover:bg-neutral-900/50">
                      <td className="py-3 px-4 font-bold text-slate-300">P2 (First Runner-up)</td>
                      <td className="py-3 px-4 text-white">25 Points</td>
                      <td className="py-3 px-4 text-white">18 Points</td>
                      <td className="py-3 px-4 text-neutral-400">-</td>
                    </tr>
                    <tr className="hover:bg-neutral-900/50">
                      <td className="py-3 px-4 font-bold text-amber-600">P3 (Second Runner-up)</td>
                      <td className="py-3 px-4 text-white">18 Points</td>
                      <td className="py-3 px-4 text-white">12 Points</td>
                      <td className="py-3 px-4 text-neutral-400">-</td>
                    </tr>
                    <tr className="hover:bg-neutral-900/50">
                      <td className="py-3 px-4 text-neutral-400">P4 (Finalist Qualifier)</td>
                      <td className="py-3 px-4 text-neutral-300">10 Points</td>
                      <td className="py-3 px-4 text-neutral-300">8 Points</td>
                      <td className="py-3 px-4 text-neutral-400">-</td>
                    </tr>
                    <tr className="hover:bg-neutral-900/50">
                      <td className="py-3 px-4 text-neutral-400">P5 to P8 Participation</td>
                      <td className="py-3 px-4 text-neutral-400">4 Points</td>
                      <td className="py-3 px-4 text-neutral-400">3 Points</td>
                      <td className="py-3 px-4 text-neutral-400">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Penalties & Flags */}
        {activeTab === 'penalties' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Yellow Flag */}
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-yellow-800/40">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold mb-4 font-mono">
                ⚠️
              </div>
              <h4 className="text-lg font-bold text-white font-racing uppercase">
                Yellow Flag: Verbal Warning
              </h4>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Issued for exceeding speech limits in Driver Duel, minor late reporting (under 5 minutes), or unapproved slide modifications. 1st warning has no point deduction.
              </p>
            </div>

            {/* Black & White Flag */}
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-orange-800/40">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-4 font-mono">
                🏁
              </div>
              <h4 className="text-lg font-bold text-white font-racing uppercase">
                5-Point Steward Penalty
              </h4>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Awarded for repeated false buzzer starts in Pole Position, uncooperative behavior with room marshalls, or failure to submit unedited EXIF in Gridshots.
              </p>
            </div>

            {/* Black Flag */}
            <div className="p-6 rounded-xl bg-neutral-900/60 border border-red-800/60 bg-red-950/10">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 text-[#e10600] flex items-center justify-center font-bold mb-4 font-mono">
                ⬛
              </div>
              <h4 className="text-lg font-bold text-white font-racing uppercase">
                Black Flag: Disqualification
              </h4>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Zero tolerance policy for mobile phone browsing during closed rounds, identity forgery, plagiarism, or defamatory content. Instant expulsion from fest.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
