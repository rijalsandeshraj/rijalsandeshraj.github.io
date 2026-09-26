'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Briefcase, ChevronDown, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experiences } from '@/lib/data';

export default function Experience() {
  // Most recent role starts open.
  const [openIndex, setOpenIndex] = useState(0);
  const railRef = useRef(null);

  // Rail fills as the timeline scrolls past.
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 65%', 'end 55%'],
  });
  const railScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="03 — Experience"
          title="Where I have built and led"
          description="Click any role to expand the detail behind it."
        />

        <div ref={railRef} className="relative">
          {/* Timeline rail */}
          <div className="absolute left-[1.1rem] top-2 hidden h-full w-px bg-white/[0.07] sm:block">
            <motion.div
              style={{ scaleY: railScale, transformOrigin: 'top' }}
              className="h-full w-full bg-gradient-to-b from-accent via-accent/60 to-transparent"
            />
          </div>

          <div className="space-y-4">
            {experiences.map((exp, i) => {
              const isOpen = openIndex === i;

              return (
                <Reveal key={`${exp.company}-${exp.period}`} delay={i * 0.05}>
                  <div className="relative sm:pl-14">
                    {/* Node */}
                    <div className="absolute left-0 top-6 hidden sm:block">
                      <span
                        className={`relative flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border transition-all duration-300 ${
                          exp.current
                            ? 'border-accent/50 bg-accent/15 text-accent'
                            : 'border-white/10 bg-obsidian-850 text-slate-500'
                        }`}
                      >
                        {exp.current && (
                          <span className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                        )}
                        <Briefcase size={15} strokeWidth={1.9} />
                      </span>
                    </div>

                    <motion.div
                      className={`glass overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? 'border-accent/25 bg-white/[0.045] shadow-glow'
                          : 'hover:border-white/15 hover:bg-white/[0.035]'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start gap-4 p-6 text-left"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="text-[1.05rem] font-semibold sm:text-[1.15rem]">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="badge badge-accent text-[0.68rem]">
                                Current
                              </span>
                            )}
                          </div>

                          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                            <span className="font-medium text-accent">{exp.company}</span>
                            <span className="inline-flex items-center gap-1 text-slate-500">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          </div>

                          <div className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                            {exp.period}
                          </div>

                          {!isOpen && (
                            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-400">
                              {exp.summary}
                            </p>
                          )}
                        </div>

                        <span
                          className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                            isOpen
                              ? 'rotate-180 border-accent/35 bg-accent/10 text-accent'
                              : 'border-white/10 bg-white/[0.03] text-slate-500'
                          }`}
                        >
                          <ChevronDown size={16} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-white/[0.07] px-6 pb-6 pt-5">
                              <ul className="space-y-3">
                                {exp.points.map((point, pi) => (
                                  <motion.li
                                    key={pi}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.06 + pi * 0.05, duration: 0.35 }}
                                    className="flex gap-3 text-sm leading-relaxed text-slate-400"
                                  >
                                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                                    {point}
                                  </motion.li>
                                ))}
                              </ul>

                              <div className="mt-5 flex flex-wrap gap-2">
                                {exp.stack.map((s) => (
                                  <span key={s} className="badge">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
