import { Event, MediaPhoto } from "./mediaData";

export interface TimelineItem {
  id: string;
  year: string;
  period: string;
  type: "career" | "education" | "award" | "event" | "initiative" | "milestone";
  title: string;
  subtitle?: string;
  organization?: string;
  location?: string;
  description: string;
  significance?: string;
  current?: boolean;
  photos?: MediaPhoto[];
  event?: Event;
  icon?: string;
}

// Unified chronological timeline merging biography and media content
export const lifeTimeline: TimelineItem[] = [
  // Education Era (1970-1983)
  {
    id: "education-bsc",
    year: "1970",
    period: "1970",
    type: "education",
    title: "BSc in Biology & Chemistry",
    organization: "Osmania University, Hyderabad",
    location: "Hyderabad, India",
    description:
      "Completed undergraduate studies in Biology and Chemistry, laying the foundation for a distinguished academic career.",
    icon: "graduation",
  },
  {
    id: "education-mls",
    year: "1975",
    period: "1975",
    type: "education",
    title: "Master of Library Science (MLS)",
    organization: "Emporia State University",
    location: "Kansas, USA",
    description:
      "Advanced degree in Library Science, beginning the journey in information management and academic research.",
    icon: "graduation",
  },
  {
    id: "career-kfu",
    year: "1976",
    period: "1976 – 1983",
    type: "career",
    title: "Director of Library",
    organization: "King Faisal University",
    location: "Saudi Arabia",
    description:
      "Pioneered development of modern university libraries in the Gulf region.",
    significance:
      "Established foundational systems for academic information management in Saudi Arabia.",
    icon: "briefcase",
  },
  {
    id: "education-phd",
    year: "1983",
    period: "1983",
    type: "education",
    title: "Ph.D. in Information Sciences",
    organization: "University of Strathclyde",
    location: "Glasgow, Scotland",
    description:
      "Earned doctorate in Information Sciences, becoming a leading expert in academic information systems.",
    significance:
      "This advanced qualification positioned Dr. Ali for leadership roles in research and education.",
    icon: "graduation",
  },

  // University of Bahrain Era (1984-1994)
  {
    id: "career-bahrain",
    year: "1984",
    period: "1984 – 1994",
    type: "career",
    title: "Head of Research & Information Services",
    organization: "University of Bahrain",
    location: "Bahrain",
    description:
      "Modernized academic information systems and research infrastructure at a leading Gulf university.",
    significance:
      "Transformed research capabilities and information management systems.",
    icon: "briefcase",
  },

  // Harvard Era Begins (1995-2014)
  {
    id: "career-harvard",
    year: "1995",
    period: "1995 – 2014",
    type: "career",
    title: "Director, Islamic Finance Program",
    organization: "Harvard University",
    location: "Cambridge, Massachusetts",
    description:
      "Founded and directed the groundbreaking Islamic Finance Program at Harvard Law School, establishing Harvard as a global leader in Islamic finance education.",
    significance:
      "This 20-year tenure transformed Islamic finance from a niche topic to a mainstream academic discipline at one of the world's most prestigious universities.",
    current: false,
    icon: "briefcase",
  },
  {
    id: "initiative-databank",
    year: "1995",
    period: "Since 1995",
    type: "initiative",
    title: "Islamic Finance Databank",
    organization: "Harvard University",
    description:
      "Founded one of the world's first comprehensive digital repositories for Islamic finance research, serving thousands of researchers globally.",
    significance:
      "Pioneered digital knowledge management in Islamic finance, creating an essential resource for academics and practitioners worldwide.",
    icon: "database",
  },
  {
    id: "event-first-forum-1997",
    year: "1997",
    period: "May 1997",
    type: "event",
    title: "First Harvard University Forum on Islamic Finance",
    organization: "Harvard University",
    location: "Cambridge, Massachusetts",
    description:
      "Launched the inaugural Harvard Forum on Islamic Finance with HRH Prince Amr Bin Faisal Al Saud as keynote speaker.",
    significance:
      "This groundbreaking forum was the first of its kind at a major Western university, establishing a tradition that continues for 27+ years.",
    icon: "users",
  },
  {
    id: "initiative-harvard-forum",
    year: "1997",
    period: "27+ years",
    type: "initiative",
    title: "Harvard University Forum on Islamic Finance",
    organization: "Harvard University",
    description:
      "Founded the world's longest-running academic forum on Islamic finance, bringing together scholars, practitioners, and policymakers annually.",
    significance:
      "The Harvard Forum became the premier global gathering for Islamic finance professionals and academics.",
    icon: "award",
  },

  // Early 2000s - Government Collaboration
  {
    id: "event-treasury-2002",
    year: "2002",
    period: "May 2, 2002",
    type: "event",
    title: "U.S. Treasury Seminar: Islamic Finance 101",
    organization: "U.S. Department of Treasury",
    location: "Washington, DC",
    description:
      "Conducted groundbreaking educational seminar for U.S. Treasury officials on Islamic finance principles and practices.",
    significance:
      "This seminar helped shape U.S. policy understanding of Islamic finance, bridging academic research with government policy.",
    icon: "landmark",
  },
  {
    id: "initiative-lse-soas",
    year: "2004",
    period: "20+ years",
    type: "initiative",
    title: "LSE-SOAS Workshop Series",
    organization: "London School of Economics & SOAS",
    location: "London, UK",
    description:
      "Co-founded the LSE-SOAS Workshop Series on Islamic finance, creating a transatlantic academic partnership.",
    significance:
      "Established enduring collaboration between leading UK and US institutions in Islamic finance research.",
    icon: "globe",
  },
  {
    id: "publication-legal-regulatory",
    year: "2005",
    period: "2005",
    type: "milestone",
    title: "Islamic Finance: Current Legal and Regulatory Issues",
    organization: "Harvard Law School, Islamic Finance Project",
    description:
      "Edited seminal publication addressing complex regulatory frameworks governing Islamic finance.",
    significance:
      "This comprehensive work became essential reading for regulators and policymakers worldwide, providing frameworks for harmonizing Shariah compliance with international banking regulations.",
    icon: "book",
  },

  // Mid-2000s - International Expansion
  {
    id: "event-saudi-visit-2012",
    year: "2012",
    period: "2012",
    type: "event",
    title: "Meeting with Future King Salman",
    organization: "Saudi Chairs Program",
    location: "Riyadh, Saudi Arabia",
    description:
      "Historic meeting with HRH King Salman (then Crown Prince) to discuss academic partnerships and Islamic finance education.",
    significance:
      "Strengthened ties between Harvard and Saudi institutions, advancing Islamic finance education globally.",
    icon: "handshake",
  },
  {
    id: "publication-building-bridges",
    year: "2012",
    period: "2012",
    type: "milestone",
    title: "Building Bridges Across Financial Communities",
    organization: "Harvard Law School, Islamic Finance Project",
    description:
      "Edited comprehensive analysis of how Islamic finance principles can complement the global financial system post-2008 crisis.",
    significance:
      "Examined successful integration models and proposed frameworks for cooperation between conventional and Islamic financial institutions.",
    icon: "book",
  },

  // Awards Era
  {
    id: "award-euromoney",
    year: "2014",
    period: "2014",
    type: "award",
    title: "Euromoney Outstanding Contribution Award",
    organization: "Euromoney",
    description:
      "Recognized for leadership in developing Islamic finance frameworks in international markets.",
    icon: "trophy",
  },
  {
    id: "event-harvard-farewell",
    year: "2014",
    period: "June 18, 2014",
    type: "event",
    title: "Harvard Law School Farewell Reception",
    organization: "Harvard Law School",
    location: "Cambridge, Massachusetts",
    description:
      "Prestigious farewell reception honoring Dr. Ali's transformative 20-year tenure at Harvard University.",
    significance:
      "Attended by leading academics, government officials, and industry leaders, marking the culmination of pioneering work in establishing Islamic finance as a legitimate field of study.",
    icon: "heart",
  },

  // HBKU Era (2014-2025)
  {
    id: "career-hbku",
    year: "2014",
    period: "2014 – 2025",
    type: "career",
    title: "Director, Research Division & CIEF",
    organization: "HBKU, Qatar Foundation",
    location: "Doha, Qatar",
    description:
      "Established ICIF conference (8 years) and CEOs Roundtable (10 years). Served as Acting Dean 2017-2022.",
    significance:
      "Led major research initiatives and academic programs in the Gulf region, continuing to shape Islamic finance education.",
    icon: "briefcase",
  },
  {
    id: "initiative-ceo-roundtable",
    year: "2014",
    period: "10 years",
    type: "initiative",
    title: "CEOs & Islamic Finance Roundtable",
    organization: "HBKU, Qatar Foundation",
    location: "Doha, Qatar",
    description:
      "Founded executive roundtable bringing together regional banking and finance leaders.",
    significance:
      "Created a platform for industry leaders to discuss Islamic finance innovation and implementation.",
    icon: "users",
  },
  {
    id: "initiative-icif",
    year: "2016",
    period: "8 years",
    type: "initiative",
    title: "International Conference on Islamic Finance (ICIF)",
    organization: "HBKU, Qatar Foundation",
    location: "Doha, Qatar",
    description:
      "Founded major international conference on Islamic finance, attracting global participants.",
    significance:
      "Established Qatar as a hub for Islamic finance academic discourse.",
    icon: "presentation",
  },
  {
    id: "award-royal-malaysia",
    year: "2017",
    period: "2017",
    type: "award",
    title: "Royal Award for Islamic Finance",
    organization: "Kingdom of Malaysia",
    description:
      "Presented by the King of Malaysia for contributions to global Islamic financial systems.",
    icon: "trophy",
  },
  {
    id: "award-leadership",
    year: "2019",
    period: "2019",
    type: "award",
    title: "Islamic Finance Leadership Award",
    organization: "Global Islamic Finance Awards",
    description:
      "Awarded for pioneering research and thought leadership in Islamic finance.",
    icon: "trophy",
  },
  {
    id: "award-harvard-alumni",
    year: "2022",
    period: "2022",
    type: "award",
    title: "Harvard University Muslim Alumni Foundation Award",
    organization: "Harvard University",
    description:
      "Recognized for outstanding contributions to Islamic finance education and research.",
    significance:
      "Honored by Harvard alumni for transformative impact on the field.",
    icon: "trophy",
  },

  // Current Era (2025-Present)
  {
    id: "career-soas",
    year: "2025",
    period: "2025 – Present",
    type: "career",
    title: "Professorial Research Associate",
    organization: "SOAS University of London",
    location: "London, United Kingdom",
    description:
      "Continuing global leadership in Islamic finance research and education at one of the world's leading institutions for Middle Eastern and Asian studies.",
    significance:
      "Bringing decades of experience to shape the next generation of Islamic finance scholarship.",
    current: true,
    icon: "briefcase",
  },
];

// Group timeline items by decade for visual organization
export const getTimelineByDecade = () => {
  const decades: { [key: string]: TimelineItem[] } = {};

  lifeTimeline.forEach((item) => {
    const year = parseInt(item.year);
    const decade = Math.floor(year / 10) * 10;
    const decadeKey = `${decade}s`;

    if (!decades[decadeKey]) {
      decades[decadeKey] = [];
    }
    decades[decadeKey].push(item);
  });

  return decades;
};

// Get timeline items by type
export const getTimelineByType = (type: TimelineItem["type"]) => {
  return lifeTimeline.filter((item) => item.type === type);
};

// Get current position
export const getCurrentPosition = () => {
  return lifeTimeline.find((item) => item.current);
};
