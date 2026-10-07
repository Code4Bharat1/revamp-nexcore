export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  subPractices?: string[];
};

export const services: Service[] = [
  {
    id: 'erp-odoo',
    number: '01',
    title: 'Custom ERP & Odoo',
    description: 'Ground-up enterprise systems, never adapted from a generic base.',
    subPractices: [
      'Consulting',
      'Configuration',
      'Customization',
      'Development',
      'Integration',
      'E-Commerce',
      'Support',
      'Offshore Dev',
    ],
  },
  {
    id: 'ai-agentic',
    number: '02',
    title: 'AI & Agentic Systems',
    description: 'Dynamic pricing, predictive analytics, autonomous calling with zero human intervention.',
    subPractices: [
      'Autonomous Agents',
      'Predictive Analytics',
      'Dynamic Pricing',
      'Custom LLMs',
      'Voice Automation',
      'AI Workflows',
    ],
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX & Product Design',
    description: 'Human-centered interfaces, interactive prototypes, design systems, and conversion-focused UX.',
    subPractices: [
      'User Research & Audits',
      'Interactive Wireframing',
      'Design Systems & Tokens',
      'Web & Mobile UI/UX',
      'Micro-Animations',
      'Usability Testing',
    ],
  },
  {
    id: 'web-mobile',
    number: '04',
    title: 'Web & Mobile Apps',
    description: 'Bespoke applications built around how your teams actually operate.',
    subPractices: [
      'UI/UX Integration',
      'Next.js / React',
      'iOS & Android',
      'Full-Stack Platforms',
      'API Infrastructure',
      'High-Scale Cloud',
    ],
  },
  {
    id: 'seo-social',
    number: '05',
    title: 'AIO SEO & Social Media',
    description: 'Organic visibility, lead generation, and platform management.',
    subPractices: [
      'AI Search Engine Ops',
      'Organic Visibility',
      'Platform Growth',
      'Content Automation',
      'Conversion Rate',
    ],
  },
  {
    id: 'consulting',
    number: '06',
    title: 'Business & Tech Consulting',
    description: 'Operational analysis, tech road-mapping, digital transformation advisory.',
    subPractices: [
      'Enterprise Architecture',
      'Tech Roadmapping',
      'Operational Audit',
      'Digital Strategy',
      'Legacy Modernization',
    ],
  },
];
