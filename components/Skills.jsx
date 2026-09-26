'use client';

import { motion } from 'framer-motion';
import { Smartphone, Server, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { RevealGroup, revealChild } from './Reveal';
import { skillGroups } from '@/lib/data';

const groupIcons = [Smartphone, Server, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-page">
        <SectionHeading
          eyebrow="05 — Skills"
          title="Tooling I reach for"
          description="The stack behind the work above, grouped by where it sits in the product."
          align="center"
        />

        <RevealGroup className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[gi] ?? Wrench;

            return (
              <motion.div
                key={group.title}
                variants={revealChild}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="glass glass-hover group relative overflow-hidden p-6 sm:p-7"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${group.accent} opacity-60`}
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <h3 className="text-base font-semibold sm:text-lg">{group.title}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.045 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        className="badge cursor-default hover:border-accent/35 hover:bg-accent/[0.08] hover:text-accent-soft"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
