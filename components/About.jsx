'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="01 — About"
          title="Engineering products that ship, not prototypes"
          description="A short version of six years spent between Flutter clients and the services behind them."
        />

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <div className="space-y-6">
            {profile.about.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-[1.02rem] leading-[1.85] text-slate-400">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Tourism', 'Education', 'Fintech', 'Restaurant Tech', 'Utilities'].map(
                  (sector) => (
                    <span key={sector} className="badge">
                      {sector}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          {/* Pull quote */}
          <Reveal delay={0.15} x={20} y={0}>
            <motion.blockquote
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="glass glass-hover relative h-full p-7"
            >
              <Quote className="mb-5 text-accent/50" size={28} />
              <p className="text-[1.05rem] leading-relaxed text-slate-300">
                Rescued a stalled product, re-architected the codebase, and had it
                launch-ready inside a month — then built the team to keep it moving.
              </p>
              <footer className="mt-6 border-t border-white/[0.07] pt-5">
                <div className="text-sm font-medium text-white">CRAVE</div>
                <div className="mt-0.5 text-xs text-slate-500">
                  Dating &amp; Dining · Crave Global, Dubai
                </div>
              </footer>
            </motion.blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
