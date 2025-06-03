// src/pages/AboutUs.jsx
import React from 'react';
import HeroBanner   from './HeroBanner';
import MissionCards from './MissionCards';
import TeamGrid     from './TeamGrid';
import Timeline     from './Timeline';
import QuoteSlider  from './QuoteSlider';

/* --- sample data quick-stub --- */
import { ShieldCheck, Target, Users } from 'lucide-react';
const missionData = [
  { icon: ShieldCheck, title: 'Integrity', text: 'Operate with absolute discretion and honour every contract.' },
  { icon: Target,      title: 'Precision', text: 'One shot, one outcome. Zero collateral.' },
  { icon: Users,       title: 'Client First', text: 'Your agenda is our only priority.' },
];

const teamData = [
  { name: 'Silver Bald', role: 'Lead Operative', img: 'https://picsum.photos/seed/47/160', bio: '26y experience. 100+ missions completed.' },
  { name: 'Red Fox',     role: 'Toxin Expert',   img: 'https://picsum.photos/seed/13/160', bio: 'Biochem PhD. Specialist in stealth kills.' },
  // …
];

const timelineData = [
  { year: 2003, label: 'Agency founded', desc: 'A small circle of professionals decide to go independent.' },
  { year: 2012, label: '100th mission',  desc: 'Hit the milestone with a flawless record.' },
  { year: 2024, label: 'Global network', desc: 'Assets in 50+ countries, ready on-demand.' },
];

const quotes = [
  { text: 'They solved the impossible for us – discreetly and cleanly.', author: 'C-level client', role: 'Fortune 500' },
  { text: 'Professionalism unmatched. Worth every penny.', author: 'Anonymous official', role: 'Diplomatic Corps' },
];

const AboutUs = () => (
  <div>
    <HeroBanner />

    <MissionCards items={missionData} />

    <TeamGrid members={teamData} />

    <Timeline events={timelineData} />

    <QuoteSlider quotes={quotes} />
  </div>
);

export default AboutUs;
