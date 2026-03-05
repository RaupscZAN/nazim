import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Award } from "lucide-react";
import { mediaPhotos } from "../data/mediaData";
import TimelineItemWithPhotos from "../components/TimelineItemWithPhotos";
import { fadeInUp, staggerContainer } from "../utils/scrollAnimations";

const LifeJourneyPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Helper function to get photos for a timeline item
  const getPhotosForItem = (
    itemId: string,
    type: string,
    category?: string,
    eventId?: string,
  ) => {
    // 1. Try to match by event ID first (Specific)
    if (eventId) {
      const eventPhotos = mediaPhotos.filter((p) => p.eventId === eventId);
      if (eventPhotos.length > 0) {
        return eventPhotos.map((p) => ({
          path: p.path,
          title: p.title,
          description: p.description,
        }));
      }
    }

    // 2. If no event photos, try category (Semi-specific)
    if (category) {
      const categoryPhotos = mediaPhotos.filter((p) => p.category === category);
      if (categoryPhotos.length > 0) {
        // Return a subset to avoid showing ALL category photos for every item
        // Use itemId to deterministically pick a starting index
        const seed =
          itemId.charCodeAt(itemId.length - 1) + itemId.charCodeAt(0);
        const startIndex = seed % Math.max(1, categoryPhotos.length - 2);
        return categoryPhotos.slice(startIndex, startIndex + 3).map((p) => ({
          path: p.path,
          title: p.title,
          description: p.description,
        }));
      }
    }

    // 3. Fallback based on Type (Generic but varied)
    let fallbackCategory = "academic";
    if (type === "career") fallbackCategory = "harvard"; // Use Harvard photos for career as they are professional
    if (type === "award") fallbackCategory = "international";
    if (type === "event") fallbackCategory = "religious";

    const fallbackPhotos = mediaPhotos.filter(
      (p) => p.category === fallbackCategory,
    );

    if (fallbackPhotos.length > 0) {
      // Pick 1-2 photos deterministically
      const seed = itemId
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const index = seed % fallbackPhotos.length;
      const photo = fallbackPhotos[index];

      return [
        {
          path: photo.path,
          title: photo.title,
          description: photo.description || "A moment from the journey.",
        },
      ];
    }

    // 4. Ultimate Fallback (If nothing else works)
    return [
      {
        path: "https://www.hbku.edu.qa/sites/default/files/staff/dr._syed_nazim_ali.jpg",
        title: "Dr. Syed Nazim Ali",
        description:
          "A life dedicated to Islamic Finance education and research.",
      },
    ];
  };

  // Unified timeline data with photos
  const timelineItems = [
    {
      id: "career-kfu",
      year: "1976",
      period: "1976 – 1983",
      type: "career" as const,
      title: "Director of Libraries",
      organization: "King Faisal University",
      location: "Saudi Arabia",
      description:
        "Pioneered development of modern university libraries in the Gulf region.",
      significance:
        "Established foundational systems for academic information management in Saudi Arabia.",
      photos: [
        {
          path: "/Media/Photos/Saudi ChairsProgram Directos visit to Saudi Arabia in 2012 meeting with HRH King Salman (LtoR Syed Nazim Ali, Sherman Jackson.jpg",
          title: "Meeting with Future King Salman",
          description:
            "Saudi Chairs Program Directors' visit to Saudi Arabia, meeting with HRH King Salman. Dr. Ali's deep roots in the Kingdom date back to his years at King Faisal University.",
        },
      ],
    },
    {
      id: "career-bahrain",
      year: "1984",
      period: "1984 – 1994",
      type: "career" as const,
      title: "Head of Research & Information Services",
      organization: "University of Bahrain",
      location: "Bahrain",
      description:
        "Modernized academic information systems and research infrastructure at a leading Gulf university.",
      significance:
        "Transformed research capabilities and information management systems.",
      photos: [
        {
          path: "/Media/Photos/Prof Samuel Hayes with Central Bank of Lebanon Governor Jachi.jpg",
          title: "International Banking Partnerships",
          description:
            "Prof. Samuel Hayes with Central Bank of Lebanon Governor — reflecting the international banking relationships built during Dr. Ali's Gulf years.",
        },
        {
          path: "/Media/Photos/Eminent Shariah Scholar, Shaykh Nizam Yaquby attending Harvard Forum.jpg",
          title: "Shaykh Nizam Yaqoby",
          description:
            "Eminent Shariah Scholar Shaykh Nizam Yaqoby from Bahrain — a key figure in the Bahraini Islamic finance ecosystem during Dr. Ali's tenure.",
        },
      ],
    },
    {
      id: "career-harvard",
      year: "1995",
      period: "1995 – 2014",
      type: "career" as const,
      title:
        "Director, Islamic Finance Program & Acting Executive Director (2010-2013)",
      organization: "Harvard University & Harvard Law School",
      location: "Cambridge, Massachusetts",
      description:
        "Founded and directed the groundbreaking Islamic Finance Program at Harvard Law School (1995-2014). Additionally served as Acting Executive Director of the Islamic Legal Studies Program (2010-2013), bridging Islamic legal studies with finance. Pioneered engagements with U.S. Treasury, Federal Reserve, central banks, and regulatory authorities.",
      significance:
        "This 20-year tenure transformed Islamic finance from a niche topic to a mainstream academic discipline. Policy leadership fundamentally advanced regulatory understanding of Islamic finance globally, especially post-9/11.",
      photos: [
        {
          path: "/Media/Photos/HRH Prince Amr Bin Faisal Al Saud is speaking at the First Harvard University Forum on Islamic Finance in May 1997.jpg",
          title: "First Harvard Forum on Islamic Finance, 1997",
          description:
            "HRH Prince Amr Bin Faisal Al Saud delivering the keynote at the inaugural Harvard University Forum on Islamic Finance in May 1997.",
        },
        {
          path: "/Media/Photos/Harvard University  Islamic Finance Forum 2004 (My daughters Nargis, Nilufer and Nawal).jpg",
          title: "Harvard Islamic Finance Forum 2004 - Family Moment",
          description:
            "Dr. Ali with his daughters Nargis, Nilufer, and Nawal at the 2004 Harvard University Islamic Finance Forum.",
        },
        {
          path: "/Media/Photos/With U.S. Undersecretary for Treasury at Harvard Forum.jpg",
          title: "U.S. Treasury Partnership at Harvard",
          description:
            "Dr. Ali with the U.S. Undersecretary for Treasury at a Harvard Forum, highlighting collaboration between academia and government on Islamic finance policy.",
        },
        {
          path: "/Media/Photos/Harvard Farewell/Harvard Law School Dean, Martha Minow 2014.jpg",
          title: "With Dean Martha Minow, 2014",
          description:
            "Dr. Ali with Harvard Law School Dean Martha Minow at his farewell reception, celebrating his distinguished 20-year tenure.",
        },
        {
          path: "/Media/Photos/Harvard Farewell/061814_Nazim_Ali_074.jpg",
          title: "Harvard Farewell Reception",
          description:
            "Dr. Ali at his farewell reception hosted by Harvard Law School, June 2014.",
        },
      ],
    },
    {
      id: "career-hbku",
      year: "2014",
      period: "2014 – 2025",
      type: "career" as const,
      title: "Director, Research Division & CIEF",
      organization: "HBKU, Qatar Foundation",
      location: "Doha, Qatar",
      description:
        "Established ICIF conference (8 years) and CEOs Roundtable (10 years). Served as Acting Dean 2017-2022.",
      significance:
        "Led major research initiatives and academic programs in the Gulf region, continuing to shape Islamic finance education.",
      photos: [
        {
          path: "/Media/Photos/CEOs Roundtable H.E. the Governor Abdullah Saif Al Thani and Dr Volker Nienhaus.jpg",
          title: "Qatar CEO Roundtable",
          description:
            "CEO Roundtable featuring H.E. Governor Abdullah Saif Al Thani and Dr. Volker Nienhaus, discussing the future of Islamic banking in Qatar.",
        },
        {
          path: "/conference-archives/2024 Confeence group photo.jpg",
          title: "2024 ICIF Conference Group Photo",
          description:
            "Group photo from the 2024 International Conference on Islamic Finance at HBKU, Qatar Foundation.",
        },
        {
          path: "/conference-archives/2024 Confeence Audience.jpg",
          title: "2024 Conference Audience",
          description:
            "Audience at the 2024 ICIF conference — one of the premier Islamic finance gatherings established by Dr. Ali.",
        },
      ],
    },
    {
      id: "career-soas",
      year: "2025",
      period: "2025 – Present",
      type: "career" as const,
      title: "Professorial Research Associate",
      organization: "SOAS University of London",
      location: "London, United Kingdom",
      description:
        "Continuing global leadership in Islamic finance research and education at one of the world's leading institutions for Middle Eastern and Asian studies.",
      significance:
        "Bringing decades of experience to shape the next generation of Islamic finance scholarship.",
      current: true,
      photos: [
        {
          path: "/soas-lse-events/SOAS 2024_Website/SOAS 2024 Public Lecture/2024 SOAS-QFC Public Lecture on Islamic Finance.JPG",
          title: "SOAS-QFC Public Lecture on Islamic Finance, 2024",
          description:
            "The 2024 SOAS-QFC Public Lecture on Islamic Finance, reflecting Dr. Ali's ongoing engagement with SOAS.",
        },
        {
          path: "/soas-lse-events/SOAS 2024_Website/SOAS 2024 Public Lecture/SOAS Public Lecture_June 5.jpeg",
          title: "SOAS Public Lecture, June 2024",
          description:
            "SOAS Public Lecture event, June 5, 2024 — part of the academic activities at Dr. Ali's current institution.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white min-h-screen">
      {/* Fixed Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-burgundy-500 to-gold-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Intro / First Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-burgundy-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Media/Photos/Harvard Farewell/061814_Nazim_Ali_074.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-gold-500"></span>
              <span className="text-gold-400 uppercase tracking-[0.25em] text-sm font-semibold">
                The Journey
              </span>
              <span className="h-px w-12 bg-gold-500"></span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-8"
            >
              50 Years <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">
                of Impact
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-200 text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-light"
            >
              From the early academic foundations to global leadership at
              Harvard and beyond. A lifetime dedicated to shaping the future of{" "}
              <span className="text-white font-medium">Islamic Finance</span>.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8 w-full"
            >
              <div>
                <div className="text-4xl font-serif font-bold text-white mb-1">
                  20+
                </div>
                <div className="text-sm text-gold-400/80 uppercase tracking-wider">
                  Years at Harvard
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-white mb-1">
                  50+
                </div>
                <div className="text-sm text-gold-400/80 uppercase tracking-wider">
                  Publications
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-white mb-1">
                  27
                </div>
                <div className="text-sm text-gold-400/80 uppercase tracking-wider">
                  Annual Forums
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-white mb-1">
                  Global
                </div>
                <div className="text-sm text-gold-400/80 uppercase tracking-wider">
                  Academic Influence
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
            Explore Timeline
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-gold-500/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
              Overview
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              For more than three decades, Dr. Ali has led impactful and
              interdisciplinary initiatives in Islamic finance, strategic
              research development, and global scholarly engagement,
              consistently bringing together academia, policymakers, and
              industry leaders from across the world.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              His approach is rooted in a personal philosophy of{" "}
              <span className="italic font-medium">
                "building through complementarity rather than competition,"
              </span>{" "}
              which has underpinned his efforts to develop enduring knowledge
              platforms and collaborative frameworks. This vision has been
              instrumental in establishing long-term partnerships across leading
              universities and institutions worldwide.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              During his twenty-year tenure at Harvard University, Dr. Ali
              spearheaded several groundbreaking initiatives while engaging
              directly with global institutions such as the United States
              Department of the Treasury, the Federal Reserve Bank of New York,
              various central banks, and other regulatory authorities. These
              engagements, especially in the aftermath of September 11, were
              instrumental in advancing policy-level understanding of Islamic
              finance.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              As a globally recognized thought leader, Dr. Ali has published
              extensively in Scopus-indexed journals and with renowned
              international academic publishers including Edinburgh University
              Press, Edward Elgar, Palgrave Macmillan, Springer-Nature, and
              Taylor & Francis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              The Journey Through Time
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore the chronological timeline of achievements, milestones,
              and contributions that have shaped the field of Islamic finance
              globally.
            </p>
          </motion.div>

          {/* Timeline Spine */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-burgundy-200 via-gold-300 to-burgundy-200 hidden md:block" />

            {/* Timeline Items */}
            {[...timelineItems].reverse().map((item, index) => (
              <TimelineItemWithPhotos
                key={item.id}
                {...item}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Education */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200"
            >
              Education
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                {
                  degree: "Ph.D.",
                  field: "Information Sciences",
                  school: "University of Strathclyde, Glasgow",
                  year: "1983",
                },
                {
                  degree: "MLS",
                  field: "Library Science",
                  school: "Emporia State University, Kansas",
                  year: "1975",
                },
                {
                  degree: "BSc",
                  field: "Biology & Chemistry",
                  school: "Osmania University, Hyderabad",
                  year: "1970",
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5">
                  <div className="text-gold-600 text-sm font-medium mb-1">
                    {item.year}
                  </div>
                  <div className="font-bold text-slate-900">
                    {item.degree} {item.field}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">
                    {item.school}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Initiatives */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200"
            >
              Initiatives Founded
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              {[
                {
                  name: "Harvard University Forum on Islamic Finance",
                  years: "27+ years",
                  role: "Founder & Director",
                },
                {
                  name: "LSE-SOAS Workshop Series",
                  years: "20+ years",
                  role: "Co-Chair",
                },
                {
                  name: "CEOs & Islamic Finance Roundtable",
                  years: "10 years",
                  role: "Founder",
                },
                {
                  name: "International Conference on Islamic Finance (ICIF)",
                  years: "8 years",
                  role: "Founder",
                },
                {
                  name: "Islamic Finance Databank",
                  years: "Since 1995",
                  role: "Founder",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                >
                  <div>
                    <span className="text-slate-900">{item.name}</span>
                    <span className="text-slate-400 text-sm ml-2">
                      · {item.role}
                    </span>
                  </div>
                  <span className="text-burgundy-800 font-semibold text-sm whitespace-nowrap">
                    {item.years}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Two Column: Affiliations & Expertise */}
          <div className="mb-16 grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                Affiliations
              </h2>
              <ul className="space-y-3">
                {[
                  "SOAS University of London, Co-Chair of SOAS Annual Islamic Finance Events Steering Committee",
                  "University of Bolton, UK, Founding Affiliate of Centre for Islamic Finance",
                  "Harvard Muslim Alumni Association, Academic Advisor",
                  "AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions), Education Board Member",
                  "Saleh Kamel Islamic Economic Award Committee, Jeddah",
                  "Centre for Islamic Finance, University of Bolton, Founding Affiliate",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
                Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Islamic Finance",
                  "Islamic Economics",
                  "Sustainability",
                  "Waqf Development",
                  "Microfinance",
                  "Social and Impact Finance",
                  "Islamic Information Systems",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="bg-burgundy-50 text-burgundy-800 px-3 py-1.5 rounded-lg text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Academic Leadership */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-slate-900 mb-8 pb-2 border-b border-slate-200"
            >
              Academic Leadership
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {[
                {
                  role: "Acting Executive Director",
                  organization:
                    "Islamic Legal Studies Program, Harvard Law School",
                  period: "2010-2013",
                  description:
                    "Led program during critical transition period, overseeing academic initiatives and faculty coordination.",
                },
                {
                  role: "Research Professor & Director",
                  organization:
                    "Research Division, College of Islamic Studies, HBKU",
                  period: "2014-2025",
                  description:
                    "Established research strategy, supervised graduate students, chaired institutional committees.",
                },
                {
                  role: "External Examiner",
                  organization:
                    "Multiple Universities (US, UK, Qatar, Bahrain, Malaysia, Saudi Arabia)",
                  period: "2014-Present",
                  description:
                    "Doctoral dissertation examiner and faculty promotion reviewer for Islamic finance programs.",
                },
              ].map((role, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-slate-200 hover:border-burgundy-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-burgundy-600 font-bold text-sm">
                        {role.period.split("-")[0]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
                        {role.role}
                      </h3>
                      <p className="text-burgundy-800 font-medium mb-2">
                        {role.organization}
                      </p>
                      <p className="text-slate-600 text-sm mb-1">
                        {role.period}
                      </p>
                      <p className="text-slate-600">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visiting Positions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
              Visiting Scholar
            </h2>
            <p className="text-slate-600">
              University of Wisconsin–Madison · University of Pittsburgh · SOAS
              University of London · Dauphine University, Paris
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-gradient-to-br from-burgundy-900 via-slate-900 to-burgundy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-gold-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            A Legacy of Excellence
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            From pioneering academic programs to shaping global policy, Dr. Syed
            Nazim Ali's contributions have left an indelible mark on Islamic
            finance. The journey continues at SOAS University of London, where
            decades of experience guide the next generation of scholars and
            practitioners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LifeJourneyPage;
