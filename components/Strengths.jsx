'use client';

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { RevealGroup, revealChild } from './Reveal';
import { strengths } from '@/lib/data';

export default function Strengths() {
  return (
    <section className="relative py-24 sm:py-28">
      {/* section divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-page">
        <SectionHeading
          eyebrow="02 — Core Strengths"
          title="Four pillars the work stands on"
          description="Where I spend my time, and what I am relied on to own end to end."
          align="center"
        />

        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ icon: Icon, title, blurb, tags }) => (
            <motion.article
              key={title}
              variants={revealChild}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              className="glass glass-hover group relative flex flex-col overflow-hidden p-6"
            >
              {/* hover sweep */}
              <div className="pointer-events-none absolute inset-0 bg-accent-sweep opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent transition-all duration-300 group-hover:border-accent/45 group-hover:bg-accent/15">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">{blurb}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[0.68rem] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
