import React, { useState, useMemo } from "react";
import SectionHeading from "../components/SectionHeading";

interface HarvardArchive {
  id: number;
  title: string;
  type: "Proceedings" | "Report" | "Program" | "Speech" | "Publication";
  year: string;
  publisher: string;
  description: string;
  link: string;
}

const HarvardArchivesPage: React.FC = () => {
  const [activeType, setActiveType] = useState<string>("All");
  const [activeYear, setActiveYear] = useState<string>("All");

  // Harvard Archives Data
  const harvardArchives: HarvardArchive[] = [
    // Proceedings
    {
      id: 1,
      title:
        "Proceedings of the Second Harvard University Forum on Islamic Finance",
      type: "Proceedings",
      year: "1999",
      publisher: "Harvard University",
      description:
        "Complete proceedings from the Second Harvard Forum on Islamic Finance, featuring research and discussions on emerging Islamic financial systems.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Proceedings.pdf",
    },
    {
      id: 2,
      title:
        "Proceedings of the Third Harvard University Forum on Islamic Finance",
      type: "Proceedings",
      year: "2000",
      publisher: "Harvard University",
      description:
        "Comprehensive collection of papers and discussions from the Third Harvard Forum on Islamic Finance.",
      link: "/research-books/Proceedings/3rd Harvard Forum Proceedings.pdf",
    },
    {
      id: 3,
      title:
        "Proceedings of the Fourth Harvard University Forum on Islamic Finance",
      type: "Proceedings",
      year: "2002",
      publisher: "Harvard University",
      description:
        "Academic proceedings covering Islamic finance developments and regulatory frameworks.",
      link: "/research-books/Proceedings/4th Harvard Forum Proceedings.pdf",
    },
    {
      id: 4,
      title:
        "Proceedings of the Fifth Harvard University Forum on Islamic Finance",
      type: "Proceedings",
      year: "2003",
      publisher: "Harvard University",
      description:
        "Fifth Forum proceedings exploring Islamic finance innovations and global market integration.",
      link: "/research-books/Proceedings/5th Harvard Forum Proceedings.pdf",
    },
    {
      id: 5,
      title: "Islamic Finance Current Legal and Regulatory Issues",
      type: "Proceedings",
      year: "2004",
      publisher: "Harvard University",
      description:
        "Sixth Harvard University Forum on Islamic Finance publication examining contemporary legal and regulatory challenges.",
      link: "/research-books/6thForumBook/151171 complete.pdf",
    },
    {
      id: 6,
      title:
        "Integrating Islamic Finance into the Mainstream - Seventh Harvard Forum",
      type: "Proceedings",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Proceedings from the Seventh Harvard Forum, focusing on the integration of Islamic finance into global financial systems.",
      link: "/research-books/7thForumBook/7th Harvard Forum Publicattion_2006.pdf",
    },
    {
      id: 7,
      title: "Eighth Harvard University Forum on Islamic Finance",
      type: "Proceedings",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Collection of papers from the Eighth Harvard Forum, discussing advancements and challenges in Islamic finance.",
      link: "/research-books/8thForumBook/8th Harvard Forum Publication_2008.pdf",
    },
    {
      id: 8,
      title:
        "Building Bridges Across Financial Communities - Ninth Harvard Forum",
      type: "Proceedings",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Proceedings of the Ninth Harvard Forum, emphasizing collaboration and connectivity within the financial sector.",
      link: "/research-books/9thForumBook/9th Harvard Forum Publication_2010.pdf",
    },
    {
      id: 9,
      title: "Tenth Harvard University Forum on Islamic Finance",
      type: "Proceedings",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Papers from the Tenth Harvard Forum, exploring new frontiers and developments in Islamic finance.",
      link: "/research-books/10thForumBook/10th Harvard Forum Publication_2012.pdf",
    },
    {
      id: 10,
      title:
        "Twelfth Harvard University Forum on Islamic Finance: Principles of Engagement",
      type: "Proceedings",
      year: "2016",
      publisher: "Harvard University",
      description:
        "Selected papers from the Twelfth Harvard Forum, focusing on ethical and practical engagement principles in Islamic finance.",
      link: "/research-books/12thForumBook/12th Harvard Forum Publication_2016.pdf",
    },
    {
      id: 11,
      title:
        "Thirteenth Harvard University Forum on Islamic Finance: Principles of Engagement",
      type: "Proceedings",
      year: "2018",
      publisher: "Harvard University",
      description:
        "Key contributions from the Thirteenth Harvard Forum, continuing the discussion on engagement principles in the evolving landscape of Islamic finance.",
      link: "/research-books/13thForumBook/13th Harvard Forum Publication_2018.pdf",
    },
    {
      id: 12,
      title: "Fourteenth Harvard University Forum on Islamic Finance",
      type: "Proceedings",
      year: "2022",
      publisher: "Harvard University",
      description:
        "Proceedings of the Fourteenth Harvard Forum, covering contemporary issues and future directions in Islamic finance.",
      link: "/research-books/14thForumBook/14th Harvard Forum Publication_2022.pdf",
    },

    // Reports
    {
      id: 13,
      title: "1st Harvard Forum Short Report",
      type: "Report",
      year: "1997",
      publisher: "Harvard University",
      description:
        "Executive summary and key outcomes from the inaugural Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/1st Harvard Forum Short Report-1997.pdf",
    },
    {
      id: 14,
      title: "2nd Harvard Forum Short Report",
      type: "Report",
      year: "1998",
      publisher: "Harvard University",
      description:
        "Summary of key insights and discussions from the Second Harvard Forum.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Short Report_1998.pdf",
    },
    {
      id: 15,
      title: "3rd Harvard Forum Short Report",
      type: "Report",
      year: "1999",
      publisher: "Harvard University",
      description:
        "Concise report on the Third Harvard Forum proceedings and outcomes.",
      link: "/conference-archives/HIFC Archives/3rd Harvard Forum Short Report_1999.pdf",
    },
    {
      id: 16,
      title: "4th Harvard Forum Short Report",
      type: "Report",
      year: "2000",
      publisher: "Harvard University",
      description:
        "Brief overview of the Fourth Harvard Forum discussions and conclusions.",
      link: "/conference-archives/HIFC Archives/4th Harvard Forum Shhort Report_2000.pdf",
    },
    {
      id: 17,
      title: "5th Harvard Forum Short Report",
      type: "Report",
      year: "2002",
      publisher: "Harvard University",
      description:
        "Summary of key insights and discussions from the Fifth Harvard Forum.",
      link: "/conference-archives/HIFC Archives/5th Harvard Forum Short Report_2002.pdf",
    },
    {
      id: 18,
      title: "6th Harvard Forum Short Report",
      type: "Report",
      year: "2004",
      publisher: "Harvard University",
      description:
        "Executive summary of the Sixth Harvard Forum on current legal and regulatory issues.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Short Report_2004.pdf",
    },
    {
      id: 19,
      title: "7th Harvard Forum Short Report",
      type: "Report",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Brief report from the Seventh Harvard Forum on integrating Islamic finance into mainstream.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum _ Short-Report_2006.pdf",
    },
    {
      id: 20,
      title: "8th Harvard Forum Report",
      type: "Report",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Comprehensive report from the Eighth Harvard Forum proceedings and findings.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Report_2008.pdf",
    },
    {
      id: 21,
      title: "9th Harvard Forum Short Report",
      type: "Report",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Executive summary of the Ninth Harvard Forum proceedings and outcomes.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Short Report_2010.pdf",
    },
    {
      id: 22,
      title: "10th Harvard Forum Report",
      type: "Report",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Comprehensive report from the Tenth Harvard Forum proceedings.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Report_2012.pdf",
    },

    // Programs
    {
      id: 23,
      title: "1st Harvard Forum Program",
      type: "Program",
      year: "1997",
      publisher: "Harvard University",
      description:
        "Complete program schedule and participant information for the inaugural Harvard Forum.",
      link: "/conference-archives/HIFC Archives/1st Harvard Forum Program_1997.pdf",
    },
    {
      id: 24,
      title: "2nd Harvard Forum Program",
      type: "Program",
      year: "1998",
      publisher: "Harvard University",
      description:
        "Conference program for the Second Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Pogram_1998.pdf",
    },
    {
      id: 25,
      title: "3rd Harvard Forum Program",
      type: "Program",
      year: "1999",
      publisher: "Harvard University",
      description:
        "Program schedule and session details for the Third Harvard Forum.",
      link: "/conference-archives/HIFC Archives/3rd Harvard Forum Program_1999.pdf",
    },
    {
      id: 26,
      title: "4th Harvard Forum Program",
      type: "Program",
      year: "2000",
      publisher: "Harvard University",
      description:
        "Complete program guide for the Fourth Harvard University Forum.",
      link: "/conference-archives/HIFC Archives/4th Harvard Forum Program_2000.pdf",
    },
    {
      id: 27,
      title: "5th Harvard Forum Program",
      type: "Program",
      year: "2002",
      publisher: "Harvard University",
      description:
        "Conference program for the Fifth Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/5th Harvard Forum Program_2002.pdf",
    },
    {
      id: 28,
      title: "6th Harvard Forum Program",
      type: "Program",
      year: "2004",
      publisher: "Harvard University",
      description:
        "Conference program for the Sixth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Pogram_2004.pdf",
    },
    {
      id: 29,
      title: "7th Harvard Forum Program",
      type: "Program",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Program schedule for the Seventh Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum Program_2006.pdf",
    },
    {
      id: 30,
      title: "8th Harvard Forum Program",
      type: "Program",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Complete program for the Eighth Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Program_2008.pdf",
    },
    {
      id: 31,
      title: "9th Harvard Forum Program",
      type: "Program",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Program schedule for the Ninth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Program_2010.pdf",
    },
    {
      id: 32,
      title: "10th Harvard Forum Program",
      type: "Program",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Program schedule for the Tenth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Program_2012.pdf",
    },
    {
      id: 33,
      title: "11th Harvard Forum Program",
      type: "Program",
      year: "2014",
      publisher: "Harvard University",
      description:
        "Program schedule for the Eleventh Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/11th Harvard Forum Program _2014.pdf",
    },

    // Special Documents
    {
      id: 34,
      title: "8th Harvard Forum Pre-Forum Report",
      type: "Report",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Pre-forum report and background materials for the 8th Harvard Forum.",
      link: "/conference-archives/HIFC Archives/8th Harvard Pre-Forum-Report_2008.pdf",
    },
    {
      id: 35,
      title: "8th Harvard Forum Keynote Speech",
      type: "Speech",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Keynote speech delivered at the 8th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Keynote-Speech_2008.pdf",
    },
    {
      id: 36,
      title: "8th Harvard Forum Speech",
      type: "Speech",
      year: "2008",
      publisher: "Harvard University",
      description: "Special speech from the 8th Harvard Forum proceedings.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum-Speech _2008.pdf",
    },
  ];

  // Get unique years for filter
  const uniqueYears = useMemo(() => {
    const years = Array.from(
      new Set(harvardArchives.map((archive) => archive.year)),
    );
    return years.sort((a, b) => b.localeCompare(a));
  }, []);

  // Filter archives
  const filteredArchives = useMemo(() => {
    let filtered = harvardArchives;

    // Filter by type
    if (activeType !== "All") {
      filtered = filtered.filter((archive) => archive.type === activeType);
    }

    // Filter by year
    if (activeYear !== "All") {
      filtered = filtered.filter((archive) => archive.year === activeYear);
    }

    return filtered.sort((a, b) => b.year.localeCompare(a.year));
  }, [activeType, activeYear]);

  const archiveTypes = ["All", "Proceedings", "Report", "Program", "Speech"];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Proceedings":
        return "bg-crimson-100 text-crimson-800 border-crimson-200";
      case "Report":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Program":
        return "bg-green-100 text-green-800 border-green-200";
      case "Speech":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading title="Harvard Islamic Finance Archives" />

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="bg-gradient-to-r from-crimson-600 to-blue-600 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-serif font-bold mb-4">
              27 Years of Academic Excellence
            </h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              The Harvard University Forum on Islamic Finance, under the
              leadership of Prof. Syed Nazim Ali, has been the premier academic
              platform for Islamic finance research and dialogue since 1997.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">14</div>
                <div className="text-sm">Forums Held</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Academic Papers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm">Global Speakers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 bg-white rounded-xl shadow-lg p-2">
            {archiveTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeType === type
                    ? "bg-gradient-to-r from-crimson-500 to-blue-500 text-white shadow-lg transform -translate-y-1"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Year Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3 bg-white rounded-xl shadow-lg p-4">
            <button
              onClick={() => setActiveYear("All")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeYear === "All"
                  ? "bg-gradient-to-r from-crimson-500 to-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              ALL YEARS
            </button>
            {uniqueYears.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeYear === year
                    ? "bg-gradient-to-r from-crimson-500 to-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Archives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredArchives.map((archive) => (
            <div
              key={archive.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className={`p-4 ${getTypeColor(archive.type)} border-b-2`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-75">
                    {archive.type}
                  </span>
                  <span className="text-sm font-bold">{archive.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold mb-3 text-gray-900 group-hover:text-crimson-600 transition-colors">
                  {archive.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {archive.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {archive.publisher}
                  </span>
                  <a
                    href={archive.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-crimson-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-crimson-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View Document
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center text-gray-900">
            Archive Statistics
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-crimson-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Proceedings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">11</div>
              <div className="text-sm text-gray-600">Reports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">11</div>
              <div className="text-sm text-gray-600">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-sm text-gray-600">Speeches</div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-gray-600 text-sm">
          <p>
            For more information about the Harvard Islamic Finance Project or to
            access specific materials, please contact the{" "}
            <a
              href="mailto:islamicfinance@law.harvard.edu"
              className="text-crimson-600 hover:text-crimson-700 font-medium"
            >
              Harvard Islamic Finance Project
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarvardArchivesPage;
