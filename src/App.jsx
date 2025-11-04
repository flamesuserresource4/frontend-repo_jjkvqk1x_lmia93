import React from 'react';
import Hero from './components/Hero.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Showcase from './components/Showcase.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <Hero />
      <main className="relative z-10">
        <Education />
        <Skills />
        <Showcase />
      </main>
    </div>
  );
}
