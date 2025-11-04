import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Braces, FileCode, Cpu, Layers, BadgeCheck, Mail, Phone, MapPin } from 'lucide-react';

const langs = [
  { label: 'Java', icon: Braces, color: 'from-orange-400 to-rose-500' },
  { label: 'Python', icon: Cpu, color: 'from-yellow-300 to-emerald-400' },
  { label: 'C#', icon: Code, color: 'from-indigo-400 to-violet-500' },
  { label: 'SQL Server', icon: Database, color: 'from-sky-400 to-cyan-500' },
  { label: 'HTML', icon: FileCode, color: 'from-red-400 to-orange-500' },
  { label: 'CSS', icon: Layers, color: 'from-sky-400 to-blue-500' },
  { label: 'JavaScript', icon: Code, color: 'from-yellow-400 to-amber-500' },
  { label: 'React', icon: Braces, color: 'from-cyan-400 to-teal-500' },
];

const projects = [
  {
    title: 'AI Based Problem Solver',
    desc: 'Interactive assistant leveraging Gemini API for reasoning and answers.',
    tags: ['AI', 'Gemini API', 'Full Stack'],
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Coaching Management System',
    desc: 'Modern web app to manage batches, students, fees, and schedules.',
    tags: ['Java', 'SQL', 'Web'],
    accent: 'from-emerald-400 to-teal-500',
  },
];

const certs = [
  { title: 'Java Foundations', date: 'Jun 2024' },
  { title: 'Web Development Essentials', date: 'Apr 2024' },
  { title: 'Database Design & SQL', date: 'Jan 2024' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Languages */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Languages & Technologies
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {langs.map((l, i) => {
            const Icon = l.icon;
            return (
              <motion.div
                key={l.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 p-4"
              >
                <div className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr ${l.color} opacity-20`} />
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr ${l.color} text-slate-900`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-medium">{l.label}</div>
                <div className="mt-1 text-xs text-slate-400">Proficiency in syntax & ecosystems</div>
              </motion.div>
            );
          })}
        </div>

        {/* Projects */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center text-3xl font-bold sm:text-4xl"
        >
          Projects & Activities
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 p-6 shadow-lg shadow-black/20"
            >
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr ${p.accent} opacity-10 transition-transform group-hover:scale-110`} />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center text-3xl font-bold sm:text-4xl"
        >
          Certifications
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 p-6"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-tr from-amber-400 to-orange-500 text-slate-900">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div className="text-lg font-semibold">{c.title}</div>
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                className="mt-2 inline-flex rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300"
              >
                {c.date}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-8 text-center shadow-xl backdrop-blur"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s Connect</h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-300">
            Open to collaborations, internships, and full-time opportunities in Full Stack Java development.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
              <Phone className="h-5 w-5 text-cyan-400" />
              <span>+91 00000 00000</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>sankalp.shukla@example.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/50 p-4">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <span>Lucknow, India</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-400">© {new Date().getFullYear()} Sankalp Shukla</p>
        </motion.div>
      </div>
    </section>
  );
}
