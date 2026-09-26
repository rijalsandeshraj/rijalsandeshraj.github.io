'use client';

import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center';

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-400 ${
              centered ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}

      <Reveal delay={0.18}>
        <div className={`rule mt-8 ${centered ? 'mx-auto max-w-sm' : ''}`} />
      </Reveal>
    </div>
  );
}
