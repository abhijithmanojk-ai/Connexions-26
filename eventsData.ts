export interface EventDetail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Title Event' | 'Media & Broadcasting' | 'Trivia & Intel' | 'Literary & Debate' | 'Theatrics & Roleplay' | 'Analytical & Forensics' | 'Design & Creative' | 'Visual Arts';
  teamSize: string;
  duration: string;
  venue: string;
  reportingTime: string;
  ferrariOrRedBull: 'Ferrari' | 'RedBull' | 'Dual';
  googleFormUrl: string;
  tagline: string;
  overview: string;
  rounds: {
    name: string;
    description: string;
    duration?: string;
  }[];
  rules: string[];
  judgingCriteria: string[];
  coordinators: {
    name: string;
    role: string;
    phone: string;
  }[];
  points: {
    first: number;
    second: number;
    third: number;
  };
}

export const INITIAL_EVENTS: EventDetail[] = [
  {
    id: 'pole-position',
    number: '01',
    title: 'Pole Position',
    subtitle: 'Title Event Championship Quiz',
    category: 'Title Event',
    teamSize: '2 Members per team',
    duration: '2 Hours (2 Rounds)',
    venue: 'Main Auditorium / Paddock Stage',
    reportingTime: '09:00 AM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc_PolePosition_Connexions26/viewform',
    tagline: 'Lock in the front row. Only the fastest brains clinch the pole.',
    overview: 'The flagship centerpiece of Connexions \'26! A battle testing business finance acumen, accounting fundamentals, global commerce, and motorsports strategy. Top qualifiers battle in a high-tension buzzer playoff.',
    rounds: [
      {
        name: 'Q1 & Q2: The Flying Lap (Preliminary Qualifier)',
        description: '25 high-intensity multiple-choice and visual connect questions covering market trends, balance sheet paradoxes, and Formula 1 financial caps.',
        duration: '40 mins'
      },
      {
        name: 'Q3: The Top-8 Shootout (Live Buzzer Grid)',
        description: 'High-speed buzzer rounds with negative point penalties for jump starts. Includes "Telemetry Analysis" and "Pitwall Dilemma" audio-visual challenges.',
        duration: '50 mins'
      }
    ],
    rules: [
      'Teams must consist of exactly 2 members from the Department of B.Com (A&F).',
      'Use of mobile phones, smartwatches, or external references is strictly forbidden and results in immediate Black Flag (disqualification).',
      'Negative marking (-5 pts) applies in the buzzer round for incorrect answers before the question concludes.',
      'The Quizmaster and Race Stewards hold supreme authority on all answer disputes.'
    ],
    judgingCriteria: [
      'Accuracy & Speed of response',
      'Strategic risk management on buzzer questions',
      'Depth of domain knowledge across Accounting, Finance, & Commercial Racing'
    ],
    coordinators: [
      { name: 'Adithya R.', role: 'Student Head - Quiz', phone: '+91 98401 23456' },
      { name: 'Kavya S.', role: 'Event Coordinator', phone: '+91 97910 87654' }
    ],
    points: { first: 35, second: 25, third: 18 }
  },
  {
    id: 'paddock-tv',
    number: '02',
    title: 'Paddock TV',
    subtitle: 'Green Screen Broadcasting & Reporting',
    category: 'Media & Broadcasting',
    teamSize: '2 - 3 Members',
    duration: '1.5 Hours',
    venue: 'Seminar Hall 2 (Studio Setup)',
    reportingTime: '10:00 AM',
    ferrariOrRedBull: 'RedBull',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd_PaddockTV_Connexions26/viewform',
    tagline: 'Live from the pitlane. The camera never blinks.',
    overview: 'Step into the shoes of Martin Brundle or Will Buxton. Teams are given dynamic green-screen backdrops (crashed cars, chaotic rain pitstops, volatile market announcements) and must deliver high-voltage live broadcast reporting.',
    rounds: [
      {
        name: 'Round 1: Breaking Paddock Bulletin',
        description: 'Teams draw a flash scenario (e.g., Ferrari double DNF financial disaster or sudden crash in crypto sponsorship) and have 5 minutes preparation before live broadcast.',
        duration: '3 mins live on-camera'
      },
      {
        name: 'Round 2: Grid Walk Confrontation',
        description: 'Spontaneous interview round facing a tough host acting as an irate Team Principal or SEC regulator.',
        duration: '2 mins'
      }
    ],
    rules: [
      'Costumes, microphones, and creative props are encouraged.',
      'Scripts cannot be read off phones; brief paper cue cards are permitted.',
      'Obscenity, unparliamentary language, or defamatory remarks will lead to instant disqualification.',
      'Green screen keys will be projected live on stage monitors.'
    ],
    judgingCriteria: [
      'Presence of mind & spontaneity',
      'Fluency, energy, and broadcast delivery',
      'Humour, creativity, and adaptation to unexpected background cues'
    ],
    coordinators: [
      { name: 'Rohit Balaji', role: 'Head Coordinator', phone: '+91 98840 55441' },
      { name: 'Pooja M.', role: 'Broadcast Coordinator', phone: '+91 94441 98712' }
    ],
    points: { first: 25, second: 18, third: 12 }
  },
  {
    id: 'grid-quiz',
    number: '03',
    title: 'Grid Quiz',
    subtitle: 'High-Octane General & Business Quiz',
    category: 'Trivia & Intel',
    teamSize: '2 Members per team',
    duration: '1 Hour 15 mins',
    venue: 'LH-14 (Lecture Hall Complex)',
    reportingTime: '11:15 AM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe_GridQuiz_Connexions26/viewform',
    tagline: 'Rapid RPM trivia. Zero warm-up laps.',
    overview: 'A rapid-fire general knowledge and commerce battleground testing everything from pop culture and sports heritage to corporate mergers, fiscal budgets, and international motorsport.',
    rounds: [
      {
        name: 'The Installation Lap',
        description: 'Written preliminary sheet with 20 cryptic questions, visual connect puzzles, and anagrams.',
        duration: '25 mins'
      },
      {
        name: 'The DRS Sprint Final',
        description: 'Top 6 teams advance to oral round featuring themed tyre choices (Soft, Medium, Hard) reflecting difficulty and point multipliers.',
        duration: '40 mins'
      }
    ],
    rules: [
      '2 participants per squad; inter-year pairings within B.Com A&F allowed.',
      'Tie-breakers will be resolved via sudden death time-stamped written questions.',
      'Decisions made by the quiz master are non-negotiable.'
    ],
    judgingCriteria: [
      'Correct answers & sprint speed',
      'Strategic difficulty wager (tyre choice mechanics)',
      'Cross-domain knowledge synthesis'
    ],
    coordinators: [
      { name: 'Sanjay Kumar', role: 'Quiz Master', phone: '+91 90030 11223' },
      { name: 'Deepa V.', role: 'Event In-Charge', phone: '+91 91760 33445' }
    ],
    points: { first: 25, second: 18, third: 12 }
  },
  {
    id: 'driver-duel',
    number: '04',
    title: 'Driver Duel',
    subtitle: 'High-Stakes 1v1 Debate',
    category: 'Literary & Debate',
    teamSize: '2 Members (1 For & 1 Against dynamic, or squad duel)',
    duration: '1.5 Hours',
    venue: 'Smart Classroom 3',
    reportingTime: '11:30 AM',
    ferrariOrRedBull: 'RedBull',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf_DriverDuel_Connexions26/viewform',
    tagline: 'Wheel-to-wheel verbal warfare. No stewards can save you.',
    overview: 'An intense Parliamentary / Oxford style verbal duel where participants debate high-impact motions surrounding artificial intelligence in auditing, ESG mandates vs corporate profit, luxury marketing, and motorsport cost caps.',
    rounds: [
      {
        name: 'Sprint Qualifying',
        description: 'Constructive opening arguments (2.5 minutes per speaker) followed by targeted cross-examinations.',
        duration: '6 mins per match'
      },
      {
        name: 'DRS Overtake Finale',
        description: 'Top 4 finalists engage in sudden-motion switch debates where sides flip mid-argument upon the ring of the steward bell.',
        duration: '8 mins per clash'
      }
    ],
    rules: [
      'Strict adherence to time limits; warning bell sounds at 2 minutes.',
      'Ad-hominem insults or personal remarks result in an immediate penalty point or disqualification.',
      'Debaters must back assertions with facts, case studies, or economic theories.'
    ],
    judgingCriteria: [
      'Clarity of argument and logical cohesion',
      'Effective rebuttal & poise under cross-fire',
      'Relevance of financial/commercial examples'
    ],
    coordinators: [
      { name: 'Harish V.', role: 'Debate Moderator', phone: '+91 98412 88990' },
      { name: 'Sneha R.', role: 'Event Coordinator', phone: '+91 95001 22334' }
    ],
    points: { first: 25, second: 18, third: 12 }
  },
  {
    id: 'the-last-lap',
    number: '05',
    title: 'The Last Lap',
    subtitle: 'Shipwreck Crisis Survival Pitch',
    category: 'Theatrics & Roleplay',
    teamSize: 'Individual (Solo Driver)',
    duration: '1.5 Hours',
    venue: 'Seminar Hall 1',
    reportingTime: '01:00 PM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSg_TheLastLap_Connexions26/viewform',
    tagline: 'Fuel is out, tires are blown, one seat left. Convince the captain.',
    overview: 'The classic Shipwreck reimagined! You are stranded in a catastrophic pit wall crisis or planetary ejection capsule. Given a famous corporate tycoon, historical figure, or eccentric motorsport legend, convince the ruthless jury why YOU deserve the solitary life vest.',
    rounds: [
      {
        name: 'The Cockpit Pitch',
        description: '90 seconds to inhabit your allotted persona (e.g. Enzo Ferrari, Warren Buffett, Christian Horner, Elon Musk, or a panicked Tax Auditor) and plead your survival case.',
        duration: '90 secs'
      },
      {
        name: 'Interrogation by the Stewards',
        description: 'Jury and co-survivors cross-question why other personalities should be dumped over the side instead.',
        duration: '60 secs'
      }
    ],
    rules: [
      'Characters will be assigned 10 minutes prior on the spot via lucky draw.',
      'Participants must stay in character throughout their turn.',
      'Humorous exaggeration, wit, and sharp comebacks are heavily rewarded.'
    ],
    judgingCriteria: [
      'Character immersion and portrayal',
      'Spontaneity, wit, and humor',
      'Persuasive power and resilience under questioning'
    ],
    coordinators: [
      { name: 'Karthik N.', role: 'Stage Marshall', phone: '+91 98409 66778' },
      { name: 'Swetha P.', role: 'Event In-Charge', phone: '+91 97890 44556' }
    ],
    points: { first: 20, second: 15, third: 10 }
  },
  {
    id: 'race-investigation',
    number: '06',
    title: 'Race Investigation',
    subtitle: 'Corporate Crime & Telemetry Analysis',
    category: 'Analytical & Forensics',
    teamSize: '2 - 3 Members',
    duration: '1.5 Hours',
    venue: 'Accounting Lab 1',
    reportingTime: '01:30 PM',
    ferrariOrRedBull: 'RedBull',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSh_RaceInvestigation_Connexions26/viewform',
    tagline: 'Sabotage in the telemetry. Trace the ledger. Unmask the culprit.',
    overview: 'A high-stakes corporate crime & forensics case study. An F1 racing conglomerate has suffered a suspicious telemetry wipe and millions in unaccounted offshore transfers. Teams receive dossiers, ledger fragments, and witness statements to solve the whodunit mystery.',
    rounds: [
      {
        name: 'Evidence Dossier Unlocking',
        description: 'Teams dissect encrypted balance sheets, WhatsApp chat leak exhibits, and pit telemetry logs to identify 3 primary suspects.',
        duration: '45 mins'
      },
      {
        name: 'Steward Hearing Presentation',
        description: 'Present your definitive case to the jury detailing motive, method, forensic financial trail, and culprit identity.',
        duration: '5 mins per team'
      }
    ],
    rules: [
      'Laptops are allowed strictly for reading provided PDF case dossiers.',
      'Internet access for external search is permitted, but AI-generated case solutions will be strictly checked and penalized.',
      'Evidence tampering or collusion between syndicates results in immediate disqualification.'
    ],
    judgingCriteria: [
      'Logical deduction and financial forensic accuracy',
      'Attention to cryptic ledger anomalies',
      'Compelling courtroom presentation of evidence'
    ],
    coordinators: [
      { name: 'Vigneshwaran K.', role: 'Chief Investigator', phone: '+91 99620 77889' },
      { name: 'Ananya S.', role: 'Event Coordinator', phone: '+91 98845 11228' }
    ],
    points: { first: 25, second: 18, third: 12 }
  },
  {
    id: 'livery',
    number: '07',
    title: 'Livery',
    subtitle: 'Digital Poster & Brand Identity Design',
    category: 'Design & Creative',
    teamSize: '1 - 2 Members',
    duration: '1 Hour 30 mins',
    venue: 'Computer Science Lab 2',
    reportingTime: '02:00 PM',
    ferrariOrRedBull: 'Ferrari',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSi_Livery_Connexions26/viewform',
    tagline: 'Aerodynamics meets aesthetics. Craft the ultimate racing livery.',
    overview: 'Design a cutting-edge racing car livery or launch poster blending high-speed Formula 1 aesthetics with real corporate sponsors (Fintech giants, sustainable energy, or banking conglomerates).',
    rounds: [
      {
        name: 'The Design Shootout',
        description: 'Create an original digital poster on software like Photoshop, Illustrator, Figma, or Canva using the provided mock design brief and assets.',
        duration: '75 mins'
      },
      {
        name: 'Creative Brief Pitch',
        description: 'Explain color theory, brand synergy, sponsor placement ergonomics, and thematic concept to the design jury.',
        duration: '2 mins'
      }
    ],
    rules: [
      'Submissions must be original. Pre-made templates or unedited stock posters will be disqualified.',
      'Designs must be exported in high-res PNG / PDF and uploaded before the timer expires.',
      'Participants may bring their own laptops with their preferred design software installed.'
    ],
    judgingCriteria: [
      'Visual impact, composition, and aesthetic balance',
      'Clever sponsor integration and brand typography',
      'Originality and technical execution'
    ],
    coordinators: [
      { name: 'Naveen Prasath', role: 'Design Lead', phone: '+91 97908 44332' },
      { name: 'Janani B.', role: 'Event Coordinator', phone: '+91 99401 55667' }
    ],
    points: { first: 20, second: 15, third: 10 }
  },
  {
    id: 'gridshots',
    number: '08',
    title: 'Gridshots',
    subtitle: 'High-Shutter Photography Challenge',
    category: 'Visual Arts',
    teamSize: 'Individual (Solo Photographer)',
    duration: 'Full Day (Submissions by 02:30 PM)',
    venue: 'College Campus & Event Arenas',
    reportingTime: '09:00 AM (Briefing)',
    ferrariOrRedBull: 'RedBull',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSj_Gridshots_Connexions26/viewform',
    tagline: 'Catch the speed of Connexions. Freeze 1/8000th of a second.',
    overview: 'Roam the vibrant campus and event venues of DG Vaishnav College during Connexions \'26. Capture the tension in the paddocks, emotions of victory, motion blurs, and motorsport vibes.',
    rounds: [
      {
        name: 'On-Track Photo Hunt',
        description: 'Participants are provided 2 distinct themes in the morning briefing (e.g. "Velocity & Shadows" and "Paddock Emotion").',
        duration: 'Until 02:30 PM'
      },
      {
        name: 'Portfolio Submission & Critique',
        description: 'Submit top 2 unedited/mildly graded RAW/JPEG photographs with EXIF data intact.',
        duration: '15 mins review'
      }
    ],
    rules: [
      'DSLRs, Mirrorless cameras, and premium Smartphones are permitted (categorized fairly).',
      'Heavy AI generative infills or photo manipulation are strictly disallowed; basic color grading, contrast, and cropping are allowed.',
      'All photos must be captured on campus on the event day (14th October 2026).'
    ],
    judgingCriteria: [
      'Framing, composition, and lighting balance',
      'Thematic relevance and emotional storytelling',
      'Technical proficiency (focus, shutter speed, exposure)'
    ],
    coordinators: [
      { name: 'Pravin Kumar', role: 'Photography Lead', phone: '+91 98402 33119' },
      { name: 'Meghana T.', role: 'Event Coordinator', phone: '+91 91766 88991' }
    ],
    points: { first: 20, second: 15, third: 10 }
  }
];

export const GENERAL_REGULATIONS = [
  {
    title: 'Eligibility & Identity',
    rules: [
      'Connexions \'26 is an intra-departmental fest exclusively open to students of B.Com (Accounting & Finance) at DG Vaishnav College (Autonomous).',
      'All participants must carry their official college ID cards at all times throughout the day.',
      'Students may register for multiple events provided there are no direct schedule clashes between venues.'
    ]
  },
  {
    title: 'Paddock Registration & Google Forms',
    rules: [
      'Prior registration through the official Google Forms is strongly recommended to guarantee entry slots.',
      'On-spot registrations will close promptly at 09:15 AM on 14th October at the Paddock Help Desk.',
      'Teams must report to their respective venues 15 minutes before the scheduled flag-off time.'
    ]
  },
  {
    title: 'Code of Conduct & Racing Ethics',
    rules: [
      'Strict adherence to campus discipline and modesty is mandatory.',
      'Unsportsmanlike behavior, rowdyism, or malpractice will invoke an immediate FIA Black Flag (disqualification from all events and department disciplinary notice).',
      'The decisions of the Faculty Coordinators, Judges, and Student Core Committee are final and binding.'
    ]
  },
  {
    title: 'Constructors\' Championship & Scoring',
    rules: [
      'Section / Batch championship points will be awarded based on podium finishes across all 8 events.',
      '1st Place (Winner): 25 Points (35 Points for Pole Position title event).',
      '2nd Place (Runner-up): 18 Points (25 Points for Pole Position).',
      '3rd Place: 12-15 Points.',
      'The Section with the highest aggregate points will be crowned the Connexions \'26 Constructors\' Champions with the Rolling Grand Trophy!'
    ]
  }
];

export const SCHEDULE_ITEMS = [
  { time: '08:30 AM', title: 'Drivers\' Briefing & Paddock Registration Desk Opens', venue: 'College Quadrangle', type: 'Administrative' },
  { time: '09:00 AM', title: 'Grand Flag-Off & Inaugural Ceremony', venue: 'Main Auditorium', type: 'Ceremony' },
  { time: '09:30 AM', title: 'Gridshots Photography Challenge Commences', venue: 'Entire Campus', type: 'All-Day' },
  { time: '10:00 AM', title: 'Pole Position - Round 1 (Qualifying Sheet)', venue: 'Main Auditorium', type: 'Flagship' },
  { time: '10:15 AM', title: 'Paddock TV - Green Screen Broadcast Briefing', venue: 'Seminar Hall 2', type: 'Event' },
  { time: '11:15 AM', title: 'Grid Quiz - Elimination Round', venue: 'Lecture Hall LH-14', type: 'Event' },
  { time: '11:30 AM', title: 'Driver Duel - Round 1 Sprint Debates', venue: 'Smart Classroom 3', type: 'Event' },
  { time: '12:30 PM - 01:15 PM', title: 'Pit Stop Lunch Break & Telemetry Review', venue: 'Food Court & Paddock Lounge', type: 'Break' },
  { time: '01:15 PM', title: 'The Last Lap - Shipwreck Pitch', venue: 'Seminar Hall 1', type: 'Event' },
  { time: '01:30 PM', title: 'Race Investigation - Forensic Case File Open', venue: 'Accounting Lab 1', type: 'Event' },
  { time: '02:00 PM', title: 'Livery - Digital Poster Designing Lab Session', venue: 'Computer Lab 2', type: 'Event' },
  { time: '02:45 PM', title: 'Pole Position - Top 8 Grand Buzzer Finals', venue: 'Main Auditorium Stage', type: 'Flagship' },
  { time: '03:45 PM', title: 'Grand Podium Ceremony & Trophies Presentation', venue: 'Main Auditorium', type: 'Ceremony' }
];
