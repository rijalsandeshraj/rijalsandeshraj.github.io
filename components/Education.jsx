'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Languages, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal, { RevealGroup, revealChild } from './Reveal';
import { education, languages, interests } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-page">
        <SectionHeading
          eyebrow="06 — Education"
          title="Credentials & languages"
          description="Formal study, currently running alongside full-time engineering leadership."
        />

        <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Degrees */}
          <RevealGroup className="space-y-5">
            {education.map((item) => (
              <motion.div
                key={item.degree}
                variants={revealChild}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="glass glass-hover group relative overflow-hidden p-6 sm:p-7"
              >
                <div className="flex items-start gap-5">
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                      item.current
                        ? 'border-accent/30 bg-accent/10 text-accent'
                        : 'border-white/10 bg-white/[0.04] text-slate-400'
                    }`}
                  >
                    <GraduationCap size={21} strokeWidth={1.75} />
                  </span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-[1.05rem] font-semibold leading-snug sm:text-lg">
                        {item.degree}
                      </h3>
                      {item.current && (
                        <span className="badge badge-accent text-[0.68rem]">
                          In progress
                        </span>
                      )}
                    </div>

                    <p className="mt-1.5 text-sm text-slate-400">{item.school}</p>

                    <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                      {item.period}
                    </p>

                    {item.note && (
                      <p className="mt-3 text-sm text-slate-500">{item.note}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </RevealGroup>

          {/* Languages + interests */}
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="glass glass-hover p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                    <Languages size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-base font-semibold">Languages</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between border-b border-white/[0.05] pb-3 text-sm last:border-0 last:pb-0"
                    >
                      <span className="text-slate-300">{lang.name}</span>
                      <span className="font-mono text-xs text-accent/80">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="glass glass-hover p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                    <Heart size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-base font-semibold">Interests</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span key={i} className="badge">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
