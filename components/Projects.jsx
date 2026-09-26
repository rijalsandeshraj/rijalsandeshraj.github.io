'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Package,
  Globe,
  Sparkles,
  Apple,
  Play,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { RevealGroup, revealChild } from './Reveal';
import { projects } from '@/lib/data';

const linkIcons = {
  github: Github,
  pub: Package,
  web: Globe,
  apple: Apple,
  play: Play,
};

function ProjectCard({ project }) {
  const { name, role, blurb, tags, highlight, links, featured } = project;

  return (
    <motion.article
      variants={revealChild}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      className={`glass glass-hover group relative flex flex-col overflow-hidden p-6 sm:p-7 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* accent corner bloom on hover */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold leading-snug sm:text-xl">{name}</h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent/80">
              {role}
            </p>
          </div>

          {featured && (
            <span className="badge badge-accent shrink-0 gap-1.5">
              <Sparkles size={12} />
              Featured
            </span>
          )}
        </div>

        <p
          className={`mt-4 text-sm leading-relaxed text-slate-400 ${
            featured ? 'max-w-2xl' : ''
          }`}
        >
          {blurb}
        </p>

        {highlight && (
          <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-accent/20 bg-accent/[0.07] px-3 py-1.5 text-xs font-medium text-accent-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {highlight}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[0.68rem] text-slate-400 transition-colors duration-200 group-hover:border-white/[0.12]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* links pinned to the bottom so cards align in the grid */}
        <div className="mt-auto pt-6">
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {links.map((link) => {
                const Icon = linkIcons[link.type] ?? Globe;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.08] hover:text-accent"
                  >
                    <Icon size={13} />
                    {link.label}
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                );
              })}
            </div>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
              <span className="h-1 w-1 rounded-full bg-slate-700" />
              Private / client project
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-page">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected work"
          description="Products taken from architecture through to the store listing, plus the open-source tooling built along the way."
        />

        <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
