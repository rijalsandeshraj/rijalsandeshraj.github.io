import {
  Smartphone,
  Server,
  GitBranch,
  BrainCircuit,
} from 'lucide-react';

export const profile = {
  name: 'Sandesh Rijal',
  title: 'Senior Flutter & .NET Developer | Technical Lead',
  location: 'Dubai, UAE',
  email: 'rijalsandeshraj@gmail.com',
  phone: '+971 50 911 2393',
  phoneHref: '+971509112393',
  linkedin: 'https://linkedin.com/in/rijalsandeshraj',
  github: 'https://github.com/rijalsandeshraj',
  // Drop Sandesh_Rijal_CV.pdf into /public for the download buttons to resolve.
  // To swap the headshot, replace /public/profile.jpg with a square image.
  resume: '/Sandesh_Rijal_CV.pdf',
  photo: '/profile.jpg',
  tagline:
    '6+ years of experience engineering high-performance cross-platform mobile apps, robust backends, and offline-first solutions. Pursuing MSc in Data Science & AI.',
  about: [
    'I build cross-platform products that ship. Over the past six years I have taken apps from an empty repo to the App Store and Play Store across tourism, education, fintech, and restaurant tech — including a stalled product I inherited mid-crisis and re-architected into a launch-ready application inside a month.',
    'My work sits on both sides of the stack: Flutter for iOS, Android and TV on the front, .NET, Node.js and Python on the back, with offline-first storage and synchronisation stitching the two together when connectivity cannot be assumed. Alongside delivery I am pursuing an MSc in Data Science & AI at Middlesex University Dubai.',
  ],
};

/**
 * Formspree receives the contact form. This endpoint is public by design — it ends up
 * in the client bundle either way, so there is nothing gained by hiding it in a secret.
 * An env var still wins if set, which is handy for pointing at a test form.
 */
export const formspreeEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xvkgwvkr';

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '6+', label: 'Years building' },
  { value: '15+', label: 'Apps shipped' },
  { value: '5', label: 'Published packages & bricks' },
  { value: '80%', label: 'Less manual deployment' },
];

export const strengths = [
  {
    icon: Smartphone,
    title: 'Cross-Platform Mobile Engineering',
    blurb:
      'Flutter across iOS, Android and Android TV — state management with BLoC, GetX, Provider and Riverpod, custom widget animation, and offline-first data layers.',
    tags: ['Flutter', 'iOS', 'Android', 'Android TV'],
  },
  {
    icon: Server,
    title: 'Full-Stack & Backend Systems',
    blurb:
      'Production APIs and services in .NET, Node.js and Python/Django, designed around clean REST contracts and the database schemas behind them.',
    tags: ['.NET', 'Node.js', 'Python', 'REST APIs'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD & Automation',
    blurb:
      'Codemagic pipelines giving one-click builds, automated testing and direct publishing to both stores — cutting manual deployment effort by 80%.',
    tags: ['Codemagic', 'Automated releases', 'Git'],
  },
  {
    icon: BrainCircuit,
    title: 'Data Science & AI',
    blurb:
      'MSc candidate at Middlesex University Dubai, working with Python ML libraries and R, and applying AI-assisted workflows to day-to-day engineering.',
    tags: ['Python', 'R', 'ML Libraries'],
  },
];

export const experiences = [
  {
    role: 'Technical Lead & Senior Flutter Engineer',
    company: 'Crave Global',
    location: 'Dubai, UAE',
    period: 'Apr 2026 — Present',
    current: true,
    summary:
      'Took ownership of CRAVE (Dating & Dining) after the original vendor stalled, and rebuilt it into a launch-ready product while standing up the engineering team.',
    points: [
      'Stepped in to rescue a stalled product after the original development vendor missed deadlines by months, negotiating handover of the codebase and taking full ownership of delivery.',
      'Re-architected a poorly structured codebase into a stable, scalable application, fixing core issues and building out the essential features — UGC uploading, a reliable chat system — the product was missing.',
      "Elevated the user experience with polished, reusable UI components, transforming the app's look and feel to a launch-ready standard within a month.",
      'Built out and led the engineering team, recruiting a backend developer to deliver the Node.js and AWS cloud backend, secure multi-provider authentication, and a moderated media pipeline.',
    ],
    stack: ['Flutter', 'Node.js', 'AWS', 'Realtime Chat', 'UGC Pipeline'],
  },
  {
    role: 'Senior Flutter & .NET Developer',
    company: 'Riddhasoft Pvt Ltd',
    location: 'Nepal',
    period: 'Nov 2023 — Nov 2025',
    summary:
      'Led full-stack delivery across POS, EV charging, school management and ticketing products, and automated the release pipeline behind them.',
    points: [
      'Led full-stack development of the Kasthamandap restaurant POS system (Flutter + .NET), delivering the project 15 days ahead of the original deadline.',
      "Built and published the 'EV Fast Charger' app to the Play Store and App Store — real-time, location-based EV charging stations with payment integration — crossing 1,000+ downloads within a month.",
      "Developed and launched 'Gurukul SCMS', an all-in-one school management app for parents, students and teachers with 30+ features, published to both stores.",
      'Engineered an Entrance Management System for Khotang Halesi Temple with a robust offline/online ticketing system, reducing entry wait times by approximately 30%.',
      "Architected the 'Barju Taal' ticketing app with multi-activity support, offline storage and data synchronisation.",
      'Automated CI/CD pipelines with Codemagic for Flutter apps — one-click builds, automated testing and direct store publishing — reducing manual deployment effort by 80%.',
    ],
    stack: ['Flutter', '.NET', 'Codemagic', 'Offline Sync', 'Payments'],
  },
  {
    role: 'Senior Flutter Developer',
    company: 'Podamide Nepal Pvt Ltd',
    location: 'Nepal',
    period: 'Jun 2023 — Sep 2023',
    summary:
      'Feature development and stabilisation for the multinational Piiink utility apps under tight release pressure.',
    points: [
      'Spearheaded feature development and resolved 50+ critical bugs for the multinational utility apps Piiink & Piiink Merchant, exceeding client expectations.',
      'Ensured 100% on-time deployment to the Play Store and App Store within a high-pressure, fast-paced environment.',
    ],
    stack: ['Flutter', 'Bug Triage', 'Store Releases'],
  },
  {
    role: 'Flutter Developer (Remote)',
    company: 'Shrig Solutions Pvt Ltd',
    location: 'Remote',
    period: 'Apr 2023 — May 2023',
    summary:
      'Contract build of a complete social media application, plus open-source tooling that outlived the engagement.',
    points: [
      'Built a complete end-to-end social media application on a contract basis within a 2-month timeframe.',
      'Published custom Mason bricks (provider_template, bloc_template) on brickhub.dev, reducing boilerplate code generation time by 40% for future projects.',
    ],
    stack: ['Flutter', 'Mason Bricks', 'BLoC', 'Provider'],
  },
  {
    role: 'Flutter Developer',
    company: 'Riddhasoft Pvt Ltd',
    location: 'Nepal',
    period: 'Dec 2021 — Apr 2023',
    summary:
      'Fintech, TV and utility app delivery for international clients, alongside three published localisation packages.',
    points: [
      'Contributed to the international fintech app KiiPay, focusing on secure payment solutions.',
      'Contributed to Moneyfex, a globally trusted international money transfer app.',
      'Developed and published Android TV applications for high-profile clients including KFC Nepal and various banking institutions.',
      'Delivered 5+ production-ready apps including Broiler Plus, Hamro Hajiri and Sajha Courier.',
      'Authored and released 3 localisation packages (JSON_CREATOR, JSON_TRANSLATOR, LOCALIZATION_HELPER) on pub.dev to support multi-language app environments.',
    ],
    stack: ['Flutter', 'Android TV', 'Fintech', 'pub.dev'],
  },
  {
    role: 'Python / Django Developer',
    company: 'Aayulogic Pvt Ltd',
    location: 'Nepal',
    period: 'Apr 2019 — Jul 2019',
    summary:
      "First professional engineering role, on the 'Real HR Soft' web application.",
    points: [
      "Worked with the development team of the 'Real HR Soft' web app on bug fixing and new feature development, and was recognised as the most innovative junior developer.",
    ],
    stack: ['Python', 'Django', 'DRF'],
  },
];

// NOTE: the store / pub.dev links below point at search URLs so nothing 404s out of
// the box. Swap each `href` for the exact listing URL from your CV when you have them.
export const projects = [
  {
    name: 'CRAVE — Dating & Dining App',
    role: 'Technical Lead',
    blurb:
      'A stalled product rescued, re-architected and taken to launch-ready in a month: reliable chat, user-generated content uploads with moderation, and a Node.js + AWS backend behind secure multi-provider auth.',
    tags: ['Flutter', 'Node.js', 'AWS', 'Realtime Chat', 'UGC'],
    highlight: 'Product rescue',
    links: [],
    featured: true,
  },
  {
    name: 'EV Fast Charger',
    role: 'Lead Developer',
    blurb:
      'Real-time, location-based EV charging station discovery with integrated payments. Published to both stores and past 1,000+ downloads within its first month.',
    tags: ['Flutter', 'Maps', 'Payments', 'iOS', 'Android'],
    highlight: '1,000+ downloads in month one',
    links: [
      {
        label: 'Play Store',
        href: 'https://play.google.com/store/search?q=EV%20Fast%20Charger&c=apps',
        type: 'play',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/search?term=EV%20Fast%20Charger',
        type: 'apple',
      },
    ],
  },
  {
    name: 'Kasthamandap Restaurant POS',
    role: 'Full-Stack Lead',
    blurb:
      'End-to-end point-of-sale system for restaurant operations — Flutter client against a .NET backend — delivered 15 days ahead of the original deadline.',
    tags: ['Flutter', '.NET', 'Full-Stack', 'POS'],
    highlight: 'Shipped 15 days early',
    links: [],
  },
  {
    name: 'Gurukul SCMS & Temple Ticketing',
    role: 'Architect & Developer',
    blurb:
      'A 30+ feature school management platform for parents, students and teachers, plus the Khotang Halesi entrance system and Barju Taal ticketing app — both built offline-first with reliable synchronisation.',
    tags: ['Flutter', '.NET', 'Offline Sync', 'Ticketing'],
    highlight: '~30% shorter entry wait times',
    links: [],
  },
  {
    name: 'Open-Source Packages & Bricks',
    role: 'Author',
    blurb:
      'Three localisation packages on pub.dev and two Mason bricks on brickhub.dev, cutting boilerplate generation time by 40% and standardising multi-language setups across projects.',
    tags: ['Dart', 'pub.dev', 'Mason', 'Tooling'],
    highlight: '40% less boilerplate',
    links: [
      { label: 'pub.dev', href: 'https://pub.dev/packages?q=localization_helper', type: 'pub' },
      { label: 'brickhub.dev', href: 'https://brickhub.dev/search?q=bloc_template', type: 'web' },
      { label: 'GitHub', href: 'https://github.com/rijalsandeshraj', type: 'github' },
    ],
  },
  {
    name: 'KFC Nepal — Android TV',
    role: 'Developer',
    blurb:
      'Android TV application for a high-profile QSR client, with custom remote-first navigation and a UI built for the ten-foot viewing experience. Part of a wider TV portfolio including banking institutions.',
    tags: ['Flutter TV', 'Android TV', 'Custom UI'],
    highlight: 'Ten-foot UI',
    links: [],
  },
];

export const skillGroups = [
  {
    title: 'Mobile',
    accent: 'from-cyan-400/20 to-cyan-400/0',
    skills: [
      'Flutter (Dart)',
      'BLoC',
      'GetX',
      'Provider',
      'Riverpod',
      'Widget Animations',
      'Offline Storage & Syncing',
      'Android TV',
    ],
  },
  {
    title: 'Backend & Web',
    accent: 'from-blue-400/20 to-blue-400/0',
    skills: [
      '.NET',
      'Node.js',
      'Python',
      'Django',
      'Django REST Framework',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vue.js',
      'Angular',
    ],
  },
  {
    title: 'Tools & DevOps',
    accent: 'from-violet-400/20 to-violet-400/0',
    skills: [
      'Codemagic CI/CD',
      'Git',
      'RESTful APIs',
      'Databases',
      'Mason Bricks',
      'Pub.dev Packages',
      'R',
      'ML Libraries',
      'AI-assisted workflows',
    ],
  },
];

export const education = [
  {
    degree: 'MSc Data Science and Artificial Intelligence',
    school: 'Middlesex University Dubai, UAE',
    period: 'Jan 2026 — Present',
    note: 'Currently enrolled, Year 1 (part time).',
    current: true,
  },
  {
    degree: 'Bachelor of Business Studies (BBS)',
    school: 'Morgan International College, Kathmandu, Nepal',
    period: 'Dec 2014 — Jan 2018',
    note: null,
  },
];

export const languages = [
  { name: 'English', level: 'IELTS 7.5' },
  { name: 'Nepali', level: 'Native' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'Korean', level: 'Basic' },
];

export const interests = ['Bodybuilding', 'Music', 'Meditation'];
