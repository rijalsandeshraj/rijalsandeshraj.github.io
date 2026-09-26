'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { profile, stats } from '@/lib/data';

const socials = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Ambient backdrop: faint grid + accent bloom */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-b absolute inset-0 h-[70%]" />
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[46rem] -translate-x-1/2 rounded-full bg-accent/[0.09] blur-[130px]" />
        <div className="absolute right-[-8rem] top-32 h-72 w-72 rounded-full bg-blue-500/[0.07] blur-[110px]" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* ---- Copy ---- */}
          <div>
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0}>
              <span className="badge badge-accent gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available for senior & lead roles
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="mt-6 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.6rem]"
            >
              <span className="text-gradient">Senior Flutter &amp; .NET</span>
              <br />
              <span className="text-white">Developer</span>
              <span className="text-slate-600"> | </span>
              <span className="text-accent">Technical Lead</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="mt-5 flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin size={15} className="text-accent/70" />
              {profile.location}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-obsidian-950 transition-all duration-300 hover:bg-accent-soft hover:shadow-glow-lg"
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.07]"
              >
                Get In Touch
              </a>

              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-accent sm:hidden"
              >
                <Download size={15} />
                CV
              </a>

              <div className="ml-1 flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-glow"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ---- Photo ---- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem] lg:max-w-none"
          >
            <div className="relative animate-float">
              {/* rotating conic ring */}
              <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#3b82f6,#a855f7,#22d3ee)] opacity-80 blur-[2px] animate-spin-slow" />
              {/* soft outer bloom */}
              <div className="absolute -inset-8 animate-pulse-glow rounded-full bg-accent/20 blur-[60px]" />

              <div className="group relative aspect-square overflow-hidden rounded-full border border-white/10 bg-obsidian-850">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} — ${profile.title}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 21rem, 26rem"
                  /* Slight desaturation settles the daylight background into the dark
                     theme; full colour returns on hover. */
                  className="object-cover saturate-[0.8] contrast-[1.05] brightness-[0.95] transition-all duration-700 group-hover:scale-[1.03] group-hover:saturate-100 group-hover:brightness-100"
                />
                {/* cool tint + vignette, both easing off on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-accent/[0.07] mix-blend-overlay transition-opacity duration-700 group-hover:opacity-0" />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-obsidian-950/70 via-obsidian-950/10 to-transparent transition-opacity duration-700 group-hover:opacity-70" />
                <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_60px_20px_rgba(5,7,10,0.55)]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---- Stat strip ---- */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="glass mt-20 grid grid-cols-2 divide-white/[0.06] sm:mt-24 md:grid-cols-4 md:divide-x"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <div className="font-mono text-2xl font-bold text-accent sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-wider text-slate-500 sm:text-[0.78rem]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
