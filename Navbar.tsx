import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Flag, ExternalLink } from 'lucide-react';
import { f1Audio } from '../utils/f1Audio';

interface NavbarProps {
  onOpenRuleBook: () => void;
  onOpenConfig: () => void;
}

export default function Navbar({ onOpenRuleBook, onOpenConfig }: NavbarProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    f1Audio.setMuted(nextState);
    if (!nextState) {
      f1Audio.playRevClick();
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
      scrolled 
        ? 'bg-[#07090e]/95 backdrop-blur-md border-neutral-800 shadow-xl' 
        : 'bg-[#07090e] border-neutral-800/80'
    }`}>
      {/* Curb racing top accent line */}
      <div className="h-1 w-full curb-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#hero" 
            onClick={() => f1Audio.playRevClick()}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#e10600] group-hover:scale-125 transition-transform" />
            <span className="font-racing text-xl sm:text-2xl font-bold tracking-wider text-white uppercase flex items-center gap-1">
              CONNEXIONS <span className="text-[#e10600]">'26</span>
            </span>
          </a>

          {/* Zone 2: Clean 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a 
              href="#events" 
              className="hover:text-white transition-colors"
            >
              8 Events
            </a>
            <button 
              onClick={onOpenRuleBook}
              className="hover:text-white transition-colors text-left cursor-pointer"
            >
              Rule Book
            </button>
            <a 
              href="#schedule" 
              className="hover:text-white transition-colors"
            >
              Race Schedule
            </a>
            <a 
              href="#telemetry" 
              className="hover:text-white transition-colors"
            >
              Constructors
            </a>
            <a 
              href="#contact" 
              className="hover:text-white transition-colors"
            >
              Paddock Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              title={isMuted ? 'Unmute race audio' : 'Mute race audio'}
              className="p-2 text-neutral-400 hover:text-white rounded-md border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 transition-colors cursor-pointer"
              aria-label="Toggle F1 Audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-neutral-500" /> : <Volume2 className="w-4 h-4 text-[#fcd500]" />}
            </button>

            <a
              href="#events"
              onClick={() => f1Audio.playRevClick()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e10600] hover:bg-[#c00000] active:scale-95 rounded-md transition-all whitespace-nowrap shadow-sm shadow-red-950"
            >
              <Flag className="w-3.5 h-3.5" />
              Register on Forms
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-md border border-neutral-800"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#0a0d14] px-4 py-4 space-y-3">
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            🏁 All 8 Championship Events
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRuleBook();
            }}
            className="block w-full text-left py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            📋 Official Rule Book (Regulations)
          </button>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            ⏱️ Race Day Schedule
          </a>
          <a
            href="#telemetry"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            🏆 Constructors' Points & Standings
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-200 hover:text-[#e10600]"
          >
            📞 Help Desk Coordinators
          </a>

          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConfig();
              }}
              className="text-xs text-neutral-400 hover:text-neutral-200 flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Manage Google Form Links
            </button>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 text-xs font-semibold uppercase text-white bg-[#e10600] rounded"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
