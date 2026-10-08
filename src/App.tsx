/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EventsGrid from './components/EventsGrid';
import RuleBookSection from './components/RuleBookSection';
import ScheduleSection from './components/ScheduleSection';
import TelemetrySection from './components/TelemetrySection';
import Footer from './components/Footer';
import EventModal from './components/EventModal';
import RegistrationModal from './components/RegistrationModal';
import RuleBookModal from './components/RuleBookModal';
import ConfigFormsModal from './components/ConfigFormsModal';
import { EventDetail, INITIAL_EVENTS } from './data/eventsData';

const STORAGE_KEY = 'connexions26_events_config';

export default function App() {
  const [events, setEvents] = useState<EventDetail[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_EVENTS;
  });

  const [briefingEvent, setBriefingEvent] = useState<EventDetail | null>(null);
  const [registerEvent, setRegisterEvent] = useState<EventDetail | null>(null);
  const [isRuleBookModalOpen, setIsRuleBookModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [configTargetId, setConfigTargetId] = useState<string | undefined>(undefined);

  // Sync to local storage
  const handleSaveEvents = (updated: EventDetail[]) => {
    setEvents(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleOpenConfigWithTarget = (eventId?: string) => {
    setConfigTargetId(eventId);
    setIsConfigModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-[#e10600] selection:text-white">
      {/* Top Navbar */}
      <Navbar 
        onOpenRuleBook={() => setIsRuleBookModalOpen(true)}
        onOpenConfig={() => handleOpenConfigWithTarget()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with F1 Starting Lights & 14th Oct Countdown */}
        <HeroSection
          onOpenRuleBook={() => setIsRuleBookModalOpen(true)}
        />

        {/* 3. The 8 Clickable Events Leading to Google Forms */}
        <EventsGrid
          events={events}
          onSelectEventForBriefing={(evt) => setBriefingEvent(evt)}
          onSelectEventForRegistration={(evt) => setRegisterEvent(evt)}
          onOpenConfig={() => handleOpenConfigWithTarget()}
        />

        {/* 4. Official Sporting Regulations & Rule Book */}
        <RuleBookSection />

        {/* 5. Race Day Circuit Schedule (14th October 2026) */}
        <ScheduleSection />

        {/* 6. Constructors' Standings Simulator & Paddock Desk */}
        <TelemetrySection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenRuleBook={() => setIsRuleBookModalOpen(true)}
        onOpenConfig={() => handleOpenConfigWithTarget()}
      />

      {/* Modals & Overlays */}
      <EventModal 
        event={briefingEvent}
        onClose={() => setBriefingEvent(null)}
        onOpenRegister={(evt) => setRegisterEvent(evt)}
      />

      <RegistrationModal 
        event={registerEvent}
        onClose={() => setRegisterEvent(null)}
        onOpenConfig={(id) => handleOpenConfigWithTarget(id)}
      />

      <RuleBookModal 
        isOpen={isRuleBookModalOpen}
        onClose={() => setIsRuleBookModalOpen(false)}
      />

      {isConfigModalOpen && (
        <ConfigFormsModal 
          events={events}
          onSave={handleSaveEvents}
          onClose={() => setIsConfigModalOpen(false)}
          selectedEventId={configTargetId}
        />
      )}
    </div>
  );
}
