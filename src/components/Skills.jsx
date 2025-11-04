import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Puzzle, Clock, Palette, Layout, Star } from 'lucide-react';

const skills = [
  { name: 'Leadership', icon: Star, color: 'from-amber-400 to-orange-500' },
  { name: 'Problem Solving', icon: Puzzle, color: 'from-emerald-400 to-teal-500' },
  { name: 'Time Management', icon: Clock, color: 'from-sky-400 to-cyan-500' },
  { name: 'Creativity', icon: Palette, color: 'from-fuchsia-400 to-pink-500' },
  { name: 'Web Design', icon: Layout, color: 'from-indigo-400 to-violet-500' },
  { name: 'Innovation', icon: Lightbulb, color: 'from-lime-400 to-green-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Skills
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 p-6 shadow-lg shadow-black/20 backdrop-blur"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr ${s.color} text-slate-900 transition-transform group-hover:scale-110`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {s.name === 'Web Design'
                    ? 'Clean layouts, responsive UI, and delightful interactions.'
                    : s.name === 'Problem Solving'
                    ? 'Analytical thinking applied to real-world development challenges.'
                    : s.name === 'Leadership'
                    ? 'Ownership mindset with collaborative team energy.'
                    : s.name === 'Time Management'
                    ? 'Prioritization, focus, and consistent delivery.'
                    : s.name === 'Creativity'
                    ? 'Fresh ideas with a user-first approach.'
                    : 'Curiosity and forward-thinking experimentation.'}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
