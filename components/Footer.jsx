'use client';

import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/data';

const socials = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="text-sm font-semibold text-white">{profile.name}</div>
          <div className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} · Built with Next.js, Tailwind &amp; Framer Motion
          </div>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer noopener"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-accent/40 hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}

          <a
            href="#top"
            aria-label="Back to top"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
