import { useState } from 'react';
import { Clock, MapPin, Flag, Calendar, Filter } from 'lucide-react';
import { SCHEDULE_ITEMS } from '../data/eventsData';

export default function ScheduleSection() {
  const [filterType, setFilterType] = useState<string>('All');

  const filteredSchedule = SCHEDULE_ITEMS.filter(item => {
    if (filterType === 'All') return true;
    if (filterType === 'Events') return item.type === 'Event' || item.type === 'Flagship';
    if (filterType === 'Ceremonies') return item.type === 'Ceremony' || item.type === 'Administrative';
    return true;
  });

  return (
    <section id="schedule" className="py-16 sm:py-20 bg-[#07090e] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              <span className="text-[#fcd500]">TIMETABLE</span>
              <span aria-hidden="true">·</span>
              <span>RACE DAY TIMELINE</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#e10600]">14TH OCTOBER 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-racing tracking-tight uppercase">
              Circuit Schedule
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
              Chronological schedule of events, qualifiers, pitstops, and podium presentations.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
            {['All', 'Events', 'Ceremonies'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterType(tab)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                  filterType === tab
                    ? 'bg-neutral-100 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Sequence */}
        <div className="mt-10 relative">
          {/* Vertical Track Line */}
          <div className="hidden md:block absolute left-28 top-4 bottom-4 w-0.5 bg-neutral-800" />

          <div className="space-y-4">
            {filteredSchedule.map((item, idx) => {
              const isFlagship = item.type === 'Flagship';
              const isBreak = item.type === 'Break';
              const isCeremony = item.type === 'Ceremony';

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border transition-all ${
                    isFlagship
                      ? 'border-[#e10600]/80 bg-red-950/20'
                      : isCeremony
                      ? 'border-[#fcd500]/70 bg-yellow-950/20'
                      : isBreak
                      ? 'border-neutral-800/80 bg-neutral-950/50 opacity-80'
                      : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700'
                  }`}
                >
                  {/* Time Badge (Desktop aligns left) */}
                  <div className="md:w-28 shrink-0 flex items-center gap-2">
                    <Clock className={`w-3.5 h-3.5 ${isFlagship ? 'text-[#e10600]' : isCeremony ? 'text-[#fcd500]' : 'text-neutral-400'}`} />
                    <span className="font-mono text-xs font-bold text-white tracking-tight">
                      {item.time}
                    </span>
                  </div>

                  {/* Marker Dot for vertical line */}
                  <div className="hidden md:flex items-center justify-center -ml-[23px] mr-2">
                    <div className={`w-3.5 h-3.5 rounded-full border-2 ${
                      isFlagship 
                        ? 'bg-[#e10600] border-red-300' 
                        : isCeremony 
                        ? 'bg-[#fcd500] border-yellow-200' 
                        : 'bg-neutral-900 border-neutral-700'
                    }`} />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white font-racing uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.venue}</span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${
                        isFlagship
                          ? 'text-[#e10600] border-red-900 bg-red-950/60'
                          : isCeremony
                          ? 'text-[#fcd500] border-yellow-900 bg-yellow-950/60'
                          : 'text-neutral-400 border-neutral-800 bg-neutral-900'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
