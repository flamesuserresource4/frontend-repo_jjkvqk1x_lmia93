import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] w-full overflow-hidden">
      {/* Tech 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8bqk3b8c7n8d3O4U/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-2 text-sm backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span>Professional, youthful, and tech-driven</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Sankalp Shukla
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-lg text-slate-300 sm:text-2xl"
        >
          MCA Student • Aspiring Full Stack Java Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#education"
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            <Rocket className="h-5 w-5" /> Explore Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/70 px-5 py-3 font-medium text-slate-100 backdrop-blur transition hover:border-slate-600"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.a
          href="#education"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-6 inline-flex items-center gap-2 text-slate-300"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}
