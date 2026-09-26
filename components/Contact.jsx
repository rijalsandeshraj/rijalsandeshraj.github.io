'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { profile, formspreeEndpoint } from '@/lib/data';

// Submissions go to Formspree; see lib/data.js. If the endpoint is ever blanked out,
// the handler below falls back to opening the visitor's mail client.
const FORMSPREE = formspreeEndpoint;

const contactDetails = [
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
];

const socials = [
  { icon: Github, label: 'GitHub', href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.linkedin },
];

const emptyForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.';
    if (!form.subject.trim()) next.subject = 'Please add a subject.';
    if (form.message.trim().length < 10) next.message = 'A little more detail, please.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // No backend configured: hand off to the visitor's mail client.
    if (!FORMSPREE) {
      const body = `${form.message}\n\n— ${form.name} (${form.email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      setForm(emptyForm);
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          // `_subject` sets the subject line of the notification email Formspree sends,
          // so enquiries are scannable in the inbox instead of all reading the same.
          _subject: `Portfolio enquiry — ${form.subject}`,
        }),
      });

      if (!res.ok) {
        // Formspree reports problems as { errors: [{ message }] }
        const detail = await res.json().catch(() => null);
        throw new Error(detail?.errors?.[0]?.message || `HTTP ${res.status}`);
      }

      setStatus('sent');
      setForm(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-200 focus:bg-white/[0.05]';

  const fieldClass = (field) =>
    `${inputBase} ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500/70'
        : 'border-white/[0.08] focus:border-accent/50 focus:shadow-glow'
    }`;

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />

      <div className="container-page">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something"
          description="Open to senior and technical lead roles, and to interesting contract work. I usually reply within a day."
          align="center"
        />

        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Direct contact details */}
          <Reveal>
            <div className="glass flex h-full flex-col p-6 sm:p-7">
              <h3 className="text-base font-semibold">Direct</h3>

              <ul className="mt-6 space-y-3">
                {contactDetails.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent transition-all duration-300 group-hover:border-accent/45 group-hover:bg-accent/15">
                        <Icon size={17} strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.7rem] uppercase tracking-wider text-slate-500">
                          {label}
                        </span>
                        <span className="block truncate text-sm text-slate-200">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          className="group flex items-center gap-4 rounded-xl border border-transparent p-2 transition-colors duration-200 hover:border-white/[0.07] hover:bg-white/[0.03]"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="group flex items-center gap-4 p-2">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-auto pt-8">
                <div className="rule mb-6" />
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-glow"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="glass p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-slate-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                    className={fieldClass('name')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    className={fieldClass('email')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-xs text-slate-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={update('subject')}
                  placeholder="Senior Flutter role / project enquiry"
                  className={fieldClass('subject')}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-xs text-slate-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell me about the product, the team, and the timeline."
                  className={`${fieldClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-obsidian-950 transition-all duration-300 hover:bg-accent-soft hover:shadow-glow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  )}
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <AnimatePresence mode="wait">
                  {status === 'sent' && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-sm text-emerald-400"
                    >
                      <CheckCircle2 size={16} />
                      Thanks — message on its way.
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span
                      key="error"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2 text-sm text-red-400"
                    >
                      <AlertCircle size={16} />
                      Something went wrong — email me directly.
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
