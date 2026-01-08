import React, { useState } from "react";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

interface Publication {
  id: number;
  title: string;
  type: string;
  year: string;
  publisher?: string;
  category: string;
  description: string;
  link?: string;
  journal?: string;
  volume?: string;
  pages?: string;
}

const researchBooks: Publication[] = [
  // Books
  {
    id: 90,
    title: "Islamic Finance and the Pursuit of Sustainable Prosperity",
    type: "Book",
    year: "2025",
    publisher: "Edward Elgar Publishing",
    category: "Books",
    description:
      "Co-edited with Umar A. Oseni and Zul Hakim Jumat. Comprehensive exploration of how Islamic finance principles contribute to sustainable economic prosperity.",
    link: "#",
  },
  {
    id: 91,
    title: "Islamic Finance in the Digital Age",
    type: "Book",
    year: "2024",
    publisher: "Edward Elgar Publishing",
    category: "Books",
    description:
      "Co-edited with Zul Hakim Jumat. Examines the transformation of Islamic finance through digital technologies and innovation.",
    link: "#",
  },
  {
    id: 92,
    title: "Islamic Finance, FinTech, and the Road to Sustainability",
    type: "Book",
    year: "2023",
    publisher: "Palgrave Macmillan",
    category: "Books",
    description:
      "Co-edited with Zul Hakim Jumat and Saqib H. Khateeb. Explores the intersection of financial technology and sustainable development in Islamic finance.",
    link: "#",
  },
  {
    id: 93,
    title:
      "Islamic Finance and Circular Economy: Connecting Impact and Value Creation",
    type: "Book",
    year: "2021",
    publisher: "Springer-Nature",
    category: "Books",
    description:
      "Co-edited with Zul Hakim Jumat. Investigates how Islamic finance principles align with circular economy models for sustainable value creation.",
    link: "#",
  },
  {
    id: 94,
    title:
      "Waqf Development and Innovations: Socio-Economic and Legal Perspectives",
    type: "Book",
    year: "2021",
    publisher: "Routledge",
    category: "Books",
    description:
      "Co-edited with Umar A. Oseni. Comprehensive analysis of contemporary waqf management and its role in socio-economic development.",
    link: "#",
  },
  {
    id: 95,
    title: "The Edinburgh Companion to Shari'ah Governance in Islamic Finance",
    type: "Book",
    year: "2020",
    publisher: "Edinburgh University Press",
    category: "Books",
    description:
      "Co-edited with Wijdan Tariq and B.A. Al Quradaghi. Essential reference work on Shariah governance frameworks in Islamic financial institutions.",
    link: "#",
  },
  {
    id: 96,
    title: "Fintech in Islamic Finance: Theory and Practice",
    type: "Book",
    year: "2019",
    publisher: "Taylor & Francis",
    category: "Books",
    description:
      "Co-edited with Umar A. Oseni. Pioneering work on the application of financial technology in Islamic finance.",
    link: "#",
  },
  {
    id: 97,
    title:
      "Takaful and Islamic Cooperative Finance: Challenges and Opportunities",
    type: "Book",
    year: "2016",
    publisher: "Edward Elgar",
    category: "Books",
    description:
      "Co-edited with Shariq Nisar. Examines the principles and practices of Islamic insurance and cooperative finance models.",
    link: "#",
  },
  {
    id: 98,
    title: "Shari'a-Compliant Microfinance",
    type: "Book",
    year: "2011",
    publisher: "Routledge",
    category: "Books",
    description:
      "Edited volume exploring Islamic microfinance models for poverty alleviation and financial inclusion.",
    link: "#",
  },
  {
    id: 99,
    title: "Information Sources on Islamic Banking and Economics 1980-90",
    type: "Book",
    year: "1994",
    publisher: "Routledge",
    category: "Books",
    description:
      "Co-authored with Naseem N. Ali. Comprehensive bibliography and guide to Islamic finance literature.",
    link: "#",
  },
  // Harvard Forum Proceedings
  {
    id: 100,
    title:
      "Proceedings of the Second Harvard University Forum on Islamic Finance",
    type: "Conference Proceedings",
    year: "1999",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Complete proceedings from the Second Harvard Forum on Islamic Finance, featuring research and discussions on emerging Islamic financial systems.",
    link: "/research-books/Proceedings/2nd Harvard Forum Proceedings.pdf",
  },
  {
    id: 101,
    title:
      "Proceedings of the Third Harvard University Forum on Islamic Finance",
    type: "Conference Proceedings",
    year: "2000",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Comprehensive collection of papers and discussions from the Third Harvard Forum on Islamic Finance.",
    link: "/research-books/Proceedings/3rd Harvard Forum Proceedings.pdf",
  },
  {
    id: 102,
    title:
      "Proceedings of the Fourth Harvard University Forum on Islamic Finance",
    type: "Conference Proceedings",
    year: "2002",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Academic proceedings covering Islamic finance developments and regulatory frameworks.",
    link: "/research-books/Proceedings/4th Harvard Forum Proceedings.pdf",
  },
  {
    id: 103,
    title:
      "Proceedings of the Fifth Harvard University Forum on Islamic Finance",
    type: "Conference Proceedings",
    year: "2003",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Fifth Forum proceedings exploring Islamic finance innovations and global market integration.",
    link: "/research-books/Proceedings/5th Harvard Forum Proceedings.pdf",
  },
  {
    id: 104,
    title: "Islamic Finance Current Legal and Regulatory Issues",
    type: "Conference Proceedings",
    year: "2004",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Sixth Harvard University Forum on Islamic Finance publication examining contemporary legal and regulatory challenges.",
    link: "/research-books/6thForumBook/151171 complete.pdf",
  },
  {
    id: 105,
    title:
      "Integrating Islamic Finance into the Mainstream - Seventh Harvard Forum",
    type: "Conference Proceedings",
    year: "2006",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Key publication from the Seventh Harvard Forum focusing on mainstream integration of Islamic financial systems.",
    link: "/research-books/7thForumBook/7th Harvard Forum Publicattion 2006.pdf",
  },
  {
    id: 106,
    title: "Eighth Harvard University Forum on Islamic Finance",
    type: "Conference Proceedings",
    year: "2008",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Proceedings from the Eighth Forum, featuring cutting-edge research in Islamic finance.",
    link: "#",
  },
  {
    id: 107,
    title: "Ninth Harvard University Forum on Islamic Finance",
    type: "Conference Proceedings",
    year: "2010",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Comprehensive collection of papers from the Ninth Forum on Islamic Finance.",
    link: "#",
  },
  {
    id: 108,
    title: "Tenth Harvard University Forum on Islamic Finance",
    type: "Conference Proceedings",
    year: "2012",
    publisher: "Harvard University",
    category: "Conference",
    description:
      "Proceedings from the Tenth Forum, marking two decades of Islamic finance scholarship at Harvard.",
    link: "#",
  },
  // Add more publications as needed
];

const ResearchPage: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>("All");

  // Group publications by year
  const groupPublicationsByYear = (publications: Publication[]) => {
    const years = new Set(publications.map((pub) => pub.year));
    return Array.from(years)
      .sort((a, b) => b.localeCompare(a))
      .map((year) => ({
        year,
        publications: publications.filter((pub) => pub.year === year),
      }));
  };

  // Get all unique years for the filter
  const allYears = [
    "All",
    ...new Set(
      researchBooks.map((book) => book.year).sort((a, b) => b.localeCompare(a)),
    ),
  ];

  // Filter publications based on selected year
  const filteredPublications =
    activeYear === "All"
      ? groupPublicationsByYear(researchBooks)
      : groupPublicationsByYear(
          researchBooks.filter((book) => book.year === activeYear),
        );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research & Publications
          </h1>
          <p className="text-lg text-gray-600">
            A collection of academic works and publications
          </p>
        </div>

        {/* Year Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeYear === year
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Publications by Year */}
        <div className="space-y-12">
          {filteredPublications.map(({ year, publications }) => (
            <section key={year} className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                {year}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {publications.map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col"
                  >
                    <div className="flex-grow">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-800 bg-indigo-50 rounded-full mb-3">
                        {pub.type}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {pub.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {pub.journal && `${pub.journal}, `}
                        {pub.volume && `Vol. ${pub.volume}, `}
                        {pub.pages && `pp. ${pub.pages}`}
                        {!pub.journal && pub.publisher && pub.publisher}
                      </p>
                      {pub.description && (
                        <p className="text-gray-700 text-sm mb-4">
                          {pub.description}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          View
                        </a>
                      )}
                      <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800">
                        <FaFilePdf className="mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
