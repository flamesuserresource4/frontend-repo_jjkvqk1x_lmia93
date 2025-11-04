import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, BookOpen } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  const entries = [
    {
      title: 'Master of Computer Applications (MCA)',
      place: 'Dr. Shakuntala Misra National Rehabilitation University',
      time: 'Present',
      icon: GraduationCap,
      accent: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      place: 'Era University',
      time: 'Completed',
      icon: BookOpen,
      accent: 'from-emerald-400 to-teal-500',
    },
    {
      title: 'Schooling',
      place: 'Siddhartha Public School',
      time: 'Alumni',
      icon: Building2,
      accent: 'from-violet-400 to-fuchsia-500',
    },
  ];

  return (
    <section id="education" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Education
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {entries.map((e, idx) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className="relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 p-6 shadow-lg shadow-black/20 backdrop-blur"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr ${e.accent} text-slate-900`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{e.title}</h3>
                <p className="mt-1 text-slate-300">{e.place}</p>
                <p className="mt-2 inline-flex rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">{e.time}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
