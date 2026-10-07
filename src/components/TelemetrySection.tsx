import { useState } from 'react';
import { Trophy, Calculator, Award, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { INITIAL_EVENTS } from '../data/eventsData';

export default function TelemetrySection() {
  // Interactive Points Simulator
  const [selectedFinishes, setSelectedFinishes] = useState<Record<string, number>>({});

  const toggleFinish = (eventId: string, positionPoints: number) => {
    setSelectedFinishes(prev => {
      const current = prev[eventId];
      if (current === positionPoints) {
        // Toggle off
        const next = { ...prev };
        delete next[eventId];
        return next;
      }
      return { ...prev, [eventId]: positionPoints };
    });
  };

  const simulatedTotal = Object.values(selectedFinishes).reduce((sum, val) => sum + val, 0);

  return (
    <section id="telemetry" className="py-16 sm:py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pb-8 border-b border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
            <span className="text-[#fcd500]">STANDINGS & STRATEGY</span>
            <span aria-hidden="true">·</span>
            <span>CONSTRUCTORS' CALCULATOR</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#e10600]">PIT WALL TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-racing tracking-tight uppercase">
            Constructors' Standings
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
            Model your section's championship race. Select projected podium finishes across the 8 events to calculate your total points.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Points Calculator (8 cols) */}
          <div className="lg:col-span-8 p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#fcd500]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white font-racing">
                  Interactive Section Points Calculator
                </h3>
              </div>
              <button
                onClick={() => setSelectedFinishes({})}
                className="text-xs text-neutral-400 hover:text-white underline cursor-pointer"
              >
                Clear Selections
              </button>
            </div>

            <p className="text-xs text-neutral-400 mb-4">
              Tap P1 (Winner), P2 (Runner-up), or P3 for your section in each event below:
            </p>

            {/* List of 8 events with finish selectors */}
            <div className="space-y-2.5">
              {INITIAL_EVENTS.map((evt) => {
                const currentVal = selectedFinishes[evt.id] || 0;
                const p1Pts = evt.points.first;
                const p2Pts = evt.points.second;
                const p3Pts = evt.points.third;

                return (
                  <div 
                    key={evt.id}
                    className="p-3 rounded-lg bg-neutral-950 border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-neutral-400">#{evt.number}</span>
                      <span className="text-xs font-bold text-white font-racing uppercase">
                        {evt.title}
                      </span>
                      <span className="text-[10px] text-neutral-500 hidden sm:inline">
                        ({evt.category})
                      </span>
                    </div>

                    {/* Finish buttons */}
                    <div className="flex items-center gap-1.5 self-end sm:self-auto">
                      <button
                        onClick={() => toggleFinish(evt.id, p1Pts)}
                        className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-colors cursor-pointer ${
                          currentVal === p1Pts
                            ? 'bg-[#fcd500] text-black shadow-sm'
                            : 'bg-neutral-900 hover:bg-neutral-800 text-yellow-400/80 border border-neutral-800'
                        }`}
                      >
                        P1 ({p1Pts} pts)
                      </button>

                      <button
                        onClick={() => toggleFinish(evt.id, p2Pts)}
                        className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-colors cursor-pointer ${
                          currentVal === p2Pts
                            ? 'bg-slate-200 text-black shadow-sm'
                            : 'bg-neutral-900 hover:bg-neutral-800 text-slate-300 border border-neutral-800'
                        }`}
                      >
                        P2 ({p2Pts} pts)
                      </button>

                      <button
                        onClick={() => toggleFinish(evt.id, p3Pts)}
                        className={`px-2.5 py-1 text-xs font-mono font-bold rounded transition-colors cursor-pointer ${
                          currentVal === p3Pts
                            ? 'bg-amber-600 text-white shadow-sm'
                            : 'bg-neutral-900 hover:bg-neutral-800 text-amber-500 border border-neutral-800'
                        }`}
                      >
                        P3 ({p3Pts} pts)
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Standings Summary & Championship Trophy Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live calculation score card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#0c1017] to-[#121824] border border-neutral-800 text-center">
              <Trophy className="w-10 h-10 text-[#fcd500] mx-auto mb-3" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Your Projected Constructors' Total
              </span>
              <div className="mt-2 text-5xl font-black font-mono-numbers text-white tracking-tight">
                {simulatedTotal} <span className="text-lg font-racing text-[#fcd500]">PTS</span>
              </div>
              <p className="text-xs text-neutral-400 mt-2">
                {simulatedTotal >= 140 
                  ? '🏆 Dominant Constructors\' Champion Pace!' 
                  : simulatedTotal >= 80 
                  ? '🥈 Strong Podium Contender Pace' 
                  : '🏁 Every point scored helps your section lift the cup!'}
              </p>

              <div className="mt-5 pt-4 border-t border-neutral-800 text-[11px] text-neutral-400">
                <span>Maximum Possible Points: </span>
                <span className="text-white font-mono font-bold">195 PTS</span>
              </div>
            </div>

            {/* Department Paddock Desk Contacts */}
            <div id="contact" className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-racing mb-3 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#e10600]" />
                Paddock Help Desk & Coordinators
              </h4>

              <div className="space-y-3 text-xs text-neutral-300">
                <div>
                  <span className="font-semibold text-white block">Student Overall Coordinator:</span>
                  <div className="flex items-center justify-between text-neutral-400 mt-0.5">
                    <span>Adithya R. (Final Year A&F)</span>
                    <a href="tel:+919840123456" className="text-[#fcd500] hover:underline font-mono">
                      +91 98401 23456
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-white block">Registrations & Google Forms Lead:</span>
                  <div className="flex items-center justify-between text-neutral-400 mt-0.5">
                    <span>Rohit Balaji (B.Com A&F)</span>
                    <a href="tel:+919884055441" className="text-[#fcd500] hover:underline font-mono">
                      +91 98840 55441
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-semibold text-white block">Faculty In-Charge:</span>
                  <div className="text-neutral-400 mt-0.5">
                    <span>Department of B.Com (Accounting & Finance)</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                  <span>Room 204, B.Com A&F Staff Room, DG Vaishnav College</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
