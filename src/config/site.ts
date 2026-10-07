// One place for languages, categories, sectors, nav and links (FR-29, FR-30, FR-35).
export const languages = { en: 'English', id: 'Bahasa Indonesia' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const site = {
  author: 'Justin The',
  // Every draft in content.md is published at launch (user decision 2026-10-07). Set true to respect `draft: true`.
  honourDraftFlag: false,
  // Shown for items whose `published` is still null.
  launchDate: new Date('2026-10-07'),
  links: {
    github: 'https://github.com/justinthe',
    linkedin: 'https://www.linkedin.com/in/justin-the',
    email: 'justin.the@gmail.com',
    repo: 'https://github.com/justinthe/geo-dt-site',
  },
  // Giscus: fill in after enabling Discussions on the repo (https://giscus.app). Empty = comments hidden.
  giscus: { repo: 'justinthe/geo-dt-site', repoId: '', category: 'Comments', categoryId: '' },
};

type L = Record<Lang, string>;
// Adding a category = one entry here (FR-29). `nav: false` makes it a tag-style listing only.
export const categories: Record<string, { name: L; description: L; nav: boolean }> = {
  'geospatial-ai': {
    name: { en: 'Geospatial AI', id: 'AI Geospasial' },
    description: {
      en: 'How AI, satellite, drone, and spatial data are used in practice, and where the field is heading in Indonesia.',
      id: 'Bagaimana AI, satelit, drone, dan data spasial dipakai dalam praktik, dan ke mana arah bidang ini di Indonesia.',
    },
    nav: true,
  },
  'digital-transformation': {
    name: { en: 'Digital Transformation', id: 'Transformasi Digital' },
    description: {
      en: 'How to implement systems and drive adoption, spatial or not: change management, data, dashboards, and emerging technology.',
      id: 'Cara menerapkan sistem dan mendorong adopsinya, spasial maupun bukan: manajemen perubahan, data, dasbor, dan teknologi baru.',
    },
    nav: true,
  },
};

// Tags with their own names; other tags are shown from their slug.
export const namedTags: Record<string, L> = {
  perspectives: { en: 'Perspectives', id: 'Perspektif' },
  'lessons-learned': { en: 'Lessons Learned', id: 'Pelajaran' },
};

// Sectors appear only once a case study uses them.
export const sectors: Record<string, L> = {
  'infrastructure-construction': { en: 'Infrastructure & Construction', id: 'Infrastruktur & Konstruksi' },
  'agriculture-food-security': { en: 'Agriculture & Food Security', id: 'Pertanian & Ketahanan Pangan' },
  energy: { en: 'Energy', id: 'Energi' },
  mining: { en: 'Mining', id: 'Pertambangan' },
  'environment-pollution': { en: 'Environment & Pollution', id: 'Lingkungan & Polusi' },
  'forestry-land-governance': { en: 'Forestry & Land Governance', id: 'Kehutanan & Tata Kelola Lahan' },
  'urban-property': { en: 'Urban & Property Development', id: 'Pengembangan Perkotaan & Properti' },
};

export const series: Record<string, L> = {
  'digitalising-construction': { en: 'Digitalising a Construction Company', id: 'Digitalisasi Perusahaan Konstruksi' },
};
