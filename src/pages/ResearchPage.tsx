import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

type PublicationType =
  | "All"
  | "Books"
  | "Harvard"
  | "SOAS"
  | "LSE"
  | "Articles"
  | "Book Chapters"
  | "Media";

const ResearchPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get initial type from URL query parameter
  const getInitialType = (): PublicationType => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (
      type &&
      [
        "All",
        "Books",
        "Harvard",
        "SOAS",
        "LSE",
        "Articles",
        "Book Chapters",
        "Media",
      ].includes(type)
    ) {
      return type as PublicationType;
    }
    return "All";
  };

  const [activeType, setActiveType] =
    useState<PublicationType>(getInitialType());
  const [activeYear, setActiveYear] = useState<string>("All");

  // Update URL when type changes
  const handleTypeChange = (type: PublicationType) => {
    setActiveType(type);
    if (type === "All") {
      navigate("/research");
    } else {
      navigate(`/research?type=${type}`);
    }
  };

  // Scroll to top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update state when URL changes (e.g., from homepage links)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (
      type &&
      ["All", "Books", "Harvard", "SOAS", "LSE", "Articles"].includes(type)
    ) {
      setActiveType(type as PublicationType);
    }
    // Scroll to top when filter changes via URL
    window.scrollTo(0, 0);
  }, [location.search]);

  const researchBooks = [
    // Recent Books from CV
    {
      id: 90,
      title: "Islamic Finance and the Pursuit of Sustainable Prosperity",
      type: "Publication",
      year: "2025",
      publisher: "Edward Elgar Publishing",
      category: "Publication",
      description:
        "Co-edited with Umar A. Oseni and Zul Hakim Jumat. Comprehensive exploration of how Islamic finance principles contribute to sustainable economic prosperity.",
      link: "https://www.e-elgar.com/shop/usd/islamic-finance-and-the-pursuit-of-sustainable-prosperity-9781035349678.html?srsltid=AfmBOor7JeADJSMY9OFLqXg6IkJEwFP1akHXKBCJ9aY2PLmZ1BXYOXSi",
    },
    {
      id: 91,
      title: "Islamic Finance in the Digital Age",
      type: "Publication",
      year: "2024",
      publisher: "Edward Elgar Publishing",
      category: "Publication",
      description:
        "Co-edited with Zul Hakim Jumat. Examines the transformation of Islamic finance through digital technologies and innovation.",
      link: "https://www.e-elgar.com/shop/usd/islamic-finance-in-the-digital-age-9781035322947.html?srsltid=AfmBOor7JeADJSMY9OFLqXg6IkJEwFP1akHXKBCJ9aY2PLmZ1BXYOXSi",
    },
    {
      id: 92,
      title: "Islamic Finance, FinTech, and the Road to Sustainability",
      type: "Publication",
      year: "2023",
      publisher: "Palgrave Macmillan",
      category: "Publication",
      description:
        "Co-edited with Zul Hakim Jumat and Saqib H. Khateeb. Explores the intersection of financial technology and sustainable development in Islamic finance.",
      link: "https://link.springer.com/book/10.1007/978-3-031-13302-2",
    },
    {
      id: 94,
      title:
        "Waqf Development and Innovations: Socio-Economic and Legal Perspectives",
      type: "Publication",
      year: "2021",
      publisher: "Routledge",
      category: "Publication",
      description:
        "Co-edited with Umar A. Oseni. Comprehensive analysis of contemporary waqf management and its role in socio-economic development.",
      link: "https://www.routledge.com/Waqf-Development-and-Innovation-Socio-Economic-and-Legal-Perspectives/Ali-Oseni/p/book/9780367744779",
    },
    {
      id: 93,
      title:
        "Islamic Finance and Circular Economy: Connecting Impact and Value Creation",
      type: "Publication",
      year: "2021",
      publisher: "Springer-Nature",
      category: "Publication",
      description:
        "Co-edited with Zul Hakim Jumat. Investigates how Islamic finance principles align with circular economy models for sustainable value creation.",
      link: "https://link.springer.com/book/10.1007/978-981-16-6061-0",
    },
    {
      id: 95,
      title: "Islamic Finance and Social Welfare, Vol. 4",
      type: "Publication",
      year: "2021",
      publisher: "HBKU Press",
      category: "Publication",
      description:
        "Comprehensive analysis of Islamic finance's role in social welfare and community development.",
      link: "#",
    },
    {
      id: 96,
      title:
        "Fintech, Digital Currency and the Future of Islamic Finance in the GCC",
      type: "Publication",
      year: "2021",
      publisher: "Palgrave Macmillan",
      category: "Publication",
      description:
        "Co-edited with Nafees Alam. Examines the impact of digital currencies and fintech on Islamic finance in the Gulf Cooperation Council region.",
      link: "https://link.springer.com/book/10.1007/978-3-030-49248-9",
    },
    {
      id: 97,
      title:
        "The Edinburgh Companion to Shari'ah Governance in Islamic Finance",
      type: "Publication",
      year: "2020",
      publisher: "Edinburgh University Press",
      category: "Publication",
      description:
        "Co-edited with Wijdan Tariq and B.A. Al Quradaghi. Essential reference work on Shariah governance frameworks in Islamic financial institutions.",
      link: "https://edinburghuniversitypress.com/book-the-edinburgh-companion-to-shari-ah-governance-in-islamic-finance.html",
    },
    {
      id: 98,
      title: "Fintech in Islamic Finance: Theory and Practice",
      type: "Publication",
      year: "2019",
      publisher: "Taylor & Francis",
      category: "Publication",
      description:
        "Co-edited with Umar A. Oseni. Pioneering work on the application of financial technology in Islamic finance.",
      link: "https://www.routledge.com/Fintech-in-Islamic-Finance-Theory-and-Practice-1st-Edition/Oseni-Ali/p/book/9781351025584",
    },
    {
      id: 99,
      title:
        "Takaful and Islamic Cooperative Finance: Challenges and Opportunities",
      type: "Publication",
      year: "2016",
      publisher: "Edward Elgar",
      category: "Publication",
      description:
        "Co-edited with Shariq Nisar. Examines the principles and practices of Islamic insurance and cooperative finance models.",
      link: "https://www.e-elgar.com/shop/usd/takaful-and-islamic-cooperative-finance-9781785363351.html?srsltid=AfmBOor7JeADJSMY9OFLqXg6IkJEwFP1akHXKBCJ9aY2PLmZ1BXYOXSi",
    },
    {
      id: 100,
      title: "Islamic Finance and Development",
      type: "Publication",
      year: "2014",
      publisher: "Harvard Law School",
      category: "Publication",
      description:
        "Analysis of Islamic finance's role in economic development and poverty alleviation.",
      link: "#",
    },
    {
      id: 101,
      title:
        "Building Bridges across Financial Communities: The Global Financial Crisis, Social Responsibility, and Faith-Based Finance",
      type: "Publication",
      year: "2012",
      publisher: "Harvard Law School",
      category: "Publication",
      description:
        "Proceedings from the Ninth Harvard Forum on Islamic Finance, addressing the global financial crisis and the role of faith-based finance in social responsibility.",
      link: "#",
    },
    {
      id: 102,
      title: "Shari'a-Compliant Microfinance",
      type: "Publication",
      year: "2011",
      publisher: "Routledge",
      category: "Publication",
      description:
        "Edited volume exploring Islamic microfinance models for poverty alleviation and financial inclusion.",
      link: "https://www.routledge.com/Shari'a-Compliant-Microfinance/Ali/p/book/9781138789388",
    },
    {
      id: 103,
      title: "Islamic Finance: Innovation and Authenticity",
      type: "Publication",
      year: "2010",
      publisher: "Harvard Law School",
      category: "Publication",
      description:
        "Critical analysis of innovation while maintaining authenticity in Islamic financial products and services.",
      link: "#",
    },
    {
      id: 104,
      title: "Integrating Islamic Finance into the Mainstream",
      type: "Publication",
      year: "2007",
      publisher: "Harvard Law School",
      category: "Publication",
      description:
        "Proceedings from the Seventh Harvard Forum, focusing on the integration of Islamic finance into global financial systems.",
      link: "#",
    },
    {
      id: 105,
      title: "Islamic Finance: Current Legal and Regulatory Issues",
      type: "Publication",
      year: "2005",
      publisher: "Harvard Law School",
      category: "Publication",
      description:
        "Sixth Harvard University Forum on Islamic Finance publication examining contemporary legal and regulatory challenges.",
      link: "#",
    },
    {
      id: 106,
      title: "Information Sources on Islamic Banking and Economics 1980-90",
      type: "Publication",
      year: "1994",
      publisher: "Routledge",
      category: "Publication",
      description:
        "Co-authored with Naseem N. Ali. Comprehensive bibliography and guide to Islamic finance literature.",
      link: "#",
    },
    {
      id: 107,
      title: "Acquisition of Scientific Literature in Developing Countries",
      year: "1989",
      publisher: "Mansell Publishing",
      category: "Publication",
      description:
        "Analysis of scientific literature acquisition in developing countries.",
      link: "https://elmi.hbku.edu.qa/en/publications/acquisition-of-scientific-literature-in-developing-countries-5-ar/",
    },
    // Harvard Forum Books
    {
      id: 115,
      title: "Building Bridges Across Financial Communities",
      type: "Conference",
      year: "2010",
      publisher: "Harvard University",
      category: "Conference",
      description:
        "Exploring connections and collaborations between Islamic and conventional financial institutions.",
      link: "/research-books/9thForumBook/Building Bridges Across Financial Communities.pdf",
    },
    {
      id: 116,
      title: "Fintech and Islamic Finance Book Cover",
      type: "Publication",
      year: "2021",
      publisher: "Palgrave Macmillan",
      description:
        "Cover and additional materials for the Fintech and Islamic Finance publication.",
      link: "/research-books/Fintech Book Cover ISBN 978-3-030-49247-2.pdf",
    },
    // Cover and Text Materials
    {
      id: 117,
      title: "Sixth Harvard Forum - Complete Text",
      type: "Conference",
      year: "2004",
      publisher: "Harvard University",
      category: "Conference",
      description:
        "Full text content from the Sixth Harvard Forum on Islamic Finance.",
      link: "/research-books/6thForumBook/151171 Text.pdf",
    },
    {
      id: 118,
      title: "Sixth Harvard Forum - Cover Materials",
      type: "Conference",
      year: "2004",
      publisher: "Harvard University",
      category: "Conference",
      description:
        "Cover and design materials for the Sixth Harvard Forum publication.",
      link: "/research-books/6thForumBook/151171 Cover cropped.pdf",
    },
    {
      id: 119,
      title: "Seventh Harvard Forum - Text Content",
      type: "Conference",
      year: "2006",
      publisher: "Harvard University",
      category: "Conference",
      description:
        "Complete text materials from the Seventh Harvard Forum on Islamic Finance.",
      link: "/research-books/7thForumBook/180061 Text.pdf",
    },
    {
      id: 120,
      title: "Seventh Harvard Forum - Cover Design",
      type: "Conference",
      year: "2006",
      publisher: "Harvard University",
      category: "Conference",
      description:
        "Cover design and layout for the Seventh Harvard Forum publication.",
      link: "/research-books/7thForumBook/180061 Cover cropped.pdf",
    },
    {
      id: 121,
      title: "Ninth Harvard Forum - Text Materials",
      type: "Conference",
      year: "2010",
      publisher: "Harvard University",
      category: "Conference",
      description:
        "Text content and chapters from the Ninth Harvard Forum on Islamic Finance.",
      link: "/research-books/9thForumBook/213495 Text.pdf",
    },
    {
      id: 122,
      title: "Ninth Harvard Forum - Cover Materials",
      type: "Conference",
      year: "2010",
      publisher: "Harvard University",
      category: "Conference",
      description:
        "Cover design elements for the Ninth Harvard Forum publication.",
      link: "/research-books/9thForumBook/213495 cover cropped.pdf",
    },
  ];

  const researchPapers = [
    {
      id: 200,
      title:
        "Scientific Discourse Amongst the Scholars of the Oxford Journal of Islamic Studies: A bibliometric Study",
      type: "Publication",
      year: "2025",
      publisher: "Journal of Islamic Thoughts and Civilization",
      description:
        "Bibliometric and geopolitical analysis of scholarly discourse in Islamic studies.",
      link: "/research-papers/Scientific Discourse Islamic Studies.pdf",
    },
    {
      id: 201,
      title:
        "A Bibliometric Overview of Scopus-Indexed Journals in Islamic Finance and Economy",
      type: "Publication",
      year: "2023",
      publisher: "COLLNET Journal of Scientometrics and Information Management",
      description:
        "Research productivity and influence analysis of Islamic finance journals.",
      link: "/research-papers/Bibliometric Overview Scopus Journals.pdf",
    },
    {
      id: 202,
      title: "Judicial Support for the Islamic Financial Services Industry",
      type: "Publication",
      year: "2020",
      publisher: "Arab Law Quarterly",
      description:
        "Reform-oriented interpretive approaches to judicial support frameworks.",
      link: "/research-papers/Judicial Support Islamic Finance.pdf",
    },
    {
      id: 203,
      title:
        "The Potential of Islamic Finance in Reinforcing Economic Stability in Qatar",
      type: "Publication",
      year: "2020",
      publisher: "Journal of Economic Cooperation & Development",
      description:
        "Analysis of Islamic finance's role in Qatar's economic development.",
      link: "/research-papers/Islamic Finance Qatar.pdf",
    },
    {
      id: 204,
      title: "The Expanding Scope and Scale of Ḥalāl Market",
      type: "Publication",
      year: "2020",
      publisher: "Journal of King Abdulaziz University: Islamic Economics",
      description: "Analysis of halal market expansion and growth trends.",
      link: "/research-papers/Halal Market Expansion.pdf",
    },
    {
      id: 205,
      title: "Big Data, Islamic Finance, and Sustainable Development Goals",
      type: "Publication",
      year: "2020",
      publisher: "Journal of King Abdulaziz University: Islamic Economics",
      description:
        "Intersection of big data analytics with Islamic finance principles and SDGs.",
      link: "/research-papers/Big Data Islamic Finance SDG.pdf",
    },
    {
      id: 206,
      title:
        "Publishing Islamic Economics and Finance Research: Polemics, Perceptions and Prospects",
      type: "Publication",
      year: "2019",
      publisher:
        "International Journal of Islamic and Middle Eastern Finance and Management",
      description:
        "Analysis of publishing trends in Islamic economics and finance.",
      link: "/research-papers/Publishing Islamic Economics Finance.pdf",
    },
    {
      id: 207,
      title: "Building Trust in Islamic Finance Products and Services",
      type: "Publication",
      year: "2017",
      publisher: "Society and Business Review",
      description:
        "Trust mechanisms and their impact on Islamic banking relationships.",
      link: "/research-papers/Building Trust Islamic Finance.pdf",
    },
    {
      id: 208,
      title: "Moving Towards Community Driven Islamic Finance",
      type: "Publication",
      year: "2017",
      publisher: "Journal of Islamic Business and Management",
      description: "Community-based Islamic finance models and development.",
      link: "/research-papers/Community Driven Islamic Finance.pdf",
    },
    {
      id: 209,
      title: "Islamic Economics and Finance Education: Consensus on Reform",
      type: "Publication",
      year: "2016",
      publisher: "Journal of Islamic Economics, Banking and Finance",
      description:
        "Educational approaches and curriculum reform in Islamic finance.",
      link: "/research-papers/Islamic Finance Education Reform.pdf",
    },
    {
      id: 210,
      title:
        "The Significance of Faith-based Ethical Principles in Responding to Financial Crises",
      type: "Publication",
      year: "2016",
      publisher: "Journal of Islamic Banking and Finance",
      description:
        "Role of faith-based ethics in Islamic finance crisis response.",
      link: "/research-papers/Faith-based Ethical Principles.pdf",
    },
    {
      id: 211,
      title:
        "Financing Sovereign Developmental Activities Through Non-Interest Bearing Instruments",
      type: "Publication",
      year: "2016",
      publisher: "Journal of Islamic Finance",
      description:
        "Islamic finance instruments for sovereign development funding.",
      link: "/research-papers/Financing Sovereign Development.pdf",
    },
    {
      id: 212,
      title: "The Use and Abuse of Limited Liabilities",
      type: "Publication",
      year: "2014",
      publisher: "New Horizon",
      description:
        "Legal analysis of limited liability structures in Islamic finance.",
      link: "/research-papers/Limited Liabilities Islamic Finance.pdf",
    },
    {
      id: 213,
      title: "Islamic Finance at Harvard",
      type: "Publication",
      year: "2014",
      publisher: "Economic Cooperation and Development Review",
      description: "Overview of Islamic Finance Program at Harvard University.",
      link: "/research-papers/Islamic Finance Harvard.pdf",
    },
    {
      id: 214,
      title:
        "Perceptions Surrounding the Contemporary Practice of Islamic Finance",
      type: "Publication",
      year: "2013",
      publisher: "New Horizon",
      description:
        "Analysis of contemporary Islamic finance practices and perceptions.",
      link: "/research-papers/Perceptions Islamic Finance.pdf",
    },
    {
      id: 215,
      title: "Post-9/11 Perceptions of Islamic Finance",
      type: "Publication",
      year: "2010",
      publisher: "International Research Journal of Finance and Economics",
      description:
        "Islamic finance perception in post-9/11 geopolitical environment.",
      link: "/research-papers/Post-9-11 Islamic Finance.pdf",
    },
    {
      id: 216,
      title: "Islamic Finance: The New Global Player",
      type: "Publication",
      year: "2008",
      publisher: "Harvard Business Review",
      description:
        "Islamic finance's emerging role in global financial markets.",
      link: "/research-papers/Islamic Finance Global Player.pdf",
    },
    {
      id: 217,
      title:
        "Islamic Finance and Economics as Reflected in Research and Publications",
      type: "Publication",
      year: "2008",
      publisher: "Review of Islamic Economics",
      description:
        "Comprehensive analysis of Islamic finance literature and research trends.",
      link: "/research-papers/Islamic Finance Economics Research.pdf",
    },
    {
      id: 218,
      title: "Innovation and Authenticity",
      type: "Publication",
      year: "2008",
      publisher: "New Horizon",
      description:
        "Balancing innovation with Shariah authenticity in Islamic finance.",
      link: "/research-papers/Innovation Authenticity.pdf",
    },
    {
      id: 219,
      title: "Financing the Poor: Towards Islamic Microfinance",
      type: "Publication",
      year: "2007",
      publisher: "New Horizon",
      description: "Islamic microfinance approaches for poverty alleviation.",
      link: "/research-papers/Microfinance Poor.pdf",
    },
    {
      id: 220,
      title:
        "Determining the Quality of Publications and Research for Tenure or Promotion Decisions",
      type: "Publication",
      year: "1996",
      publisher: "Library Review",
      description:
        "Preliminary checklist for assessing publication quality in academic careers.",
      link: "/research-papers/Quality Publications Research.pdf",
    },
    {
      id: 221,
      title: "Searching CD-ROM Databases for Non-English Speaking Users",
      type: "Publication",
      year: "1995",
      publisher: "New Library World",
      description: "CD-ROM database accessibility for multilingual users.",
      link: "/research-papers/CDROM Databases Non-English.pdf",
    },
    {
      id: 222,
      title:
        "Subject Relationship Between Articles Determined by Co-occurrence of Keywords",
      type: "Publication",
      year: "1993",
      publisher: "Journal of Information Science",
      description:
        "Keyword co-occurrence analysis for subject relationship determination.",
      link: "/research-papers/Subject Relationship Keywords.pdf",
    },
    {
      id: 223,
      title:
        "Information on Islamic Banking and Economics as Represented by Selected Databases",
      type: "Publication",
      year: "1993",
      publisher: "International Journal of Information Management",
      description:
        "Analysis of Islamic finance information representation in databases.",
      link: "/research-papers/Islamic Banking Databases.pdf",
    },
    {
      id: 224,
      title:
        "Information Access Through CD-ROM and its Impact Upon Faculty Research Output",
      type: "Publication",
      year: "1992",
      publisher: "Microcomputers for Information Management",
      description:
        "CD-ROM access impact on research productivity in developing countries.",
      link: "/research-papers/CDROM Faculty Research.pdf",
    },
    {
      id: 225,
      title:
        "The Gulf War and its Effect on Information and Library Services in the Arabian Gulf",
      type: "Publication",
      year: "1992",
      publisher: "Journal of Information Science",
      description:
        "Geopolitical impact on library and information services in the Gulf region.",
      link: "/research-papers/Gulf War Libraries.pdf",
    },
    {
      id: 226,
      title:
        "Postdoctoral Research in Library and Information Science: Is There a Need?",
      type: "Publication",
      year: "1991",
      publisher: "Journal of Education for Library and Information Science",
      description:
        "Analysis of postdoctoral research opportunities in library science.",
      link: "/research-papers/Postdoctoral Library Science.pdf",
    },
    {
      id: 227,
      title:
        "Database on Optical Discs and Their Potential in Developing Countries",
      type: "Publication",
      year: "1990",
      publisher: "Journal of the American Society for Information Science",
      description: "Optical disc technology adoption in developing nations.",
      link: "/research-papers/Optical Discs Developing.pdf",
    },
    {
      id: 228,
      title:
        "Science and Technology Information Transfer in Developing Countries",
      type: "Publication",
      year: "1990",
      publisher: "Journal of Information Science",
      description: "Problems and solutions in S&T information dissemination.",
      link: "/research-papers/Science Technology Information Transfer.pdf",
    },
    {
      id: 229,
      title: "Serials Management in Developing Countries",
      type: "Publication",
      year: "1990",
      publisher: "The Serials Librarian",
      description:
        "Serial publications management strategies for developing regions.",
      link: "/research-papers/Serials Management Developing.pdf",
    },
    {
      id: 230,
      title:
        "Science and Technology Information Transfer in Developing Countries (continued)",
      type: "Publication",
      year: "1990",
      publisher: "Journal of Information Science",
      description: "Extended analysis of S&T information transfer challenges.",
      link: "/research-papers/Science Technology Information Transfer II.pdf",
    },
    {
      id: 231,
      title:
        "Information on CD-ROM: A Directory - Factual Databanks and Full-Text Files",
      type: "Publication",
      year: "1989",
      publisher: "Information Management",
      description: "Comprehensive directory of CD-ROM information resources.",
      link: "/research-papers/CDROM Directory Databanks.pdf",
    },
    {
      id: 232,
      title:
        "Acquisition of Scientific Literature in Developing Countries - 5: Arab Gulf Countries",
      type: "Publication",
      year: "1989",
      publisher: "Information Management",
      description:
        "Scientific literature acquisition strategies for Gulf region.",
      link: "/research-papers/Scientific Literature Gulf.pdf",
    },
    {
      id: 233,
      title: "CD-ROM Databases as Alternative Means to Online Information",
      type: "Publication",
      year: "1989",
      publisher: "Microcomputers for Information Management",
      description:
        "CD-ROM technology as cost-effective alternative to online databases.",
      link: "/research-papers/CDROM Alternative Online.pdf",
    },
    {
      id: 234,
      title:
        "Information on CD-ROM: A Directory - Factual Databanks (Continued)",
      type: "Publication",
      year: "1989",
      publisher: "Information Management",
      description: "Extended CD-ROM directory of factual information sources.",
      link: "/research-papers/CDROM Directory Factual II.pdf",
    },
    {
      id: 235,
      title:
        "Acquisition of Scientific Literature - Arab Gulf Countries (Continued)",
      type: "Publication",
      year: "1989",
      publisher: "Information Management",
      description:
        "Continued analysis of literature acquisition in Gulf nations.",
      link: "/research-papers/Scientific Literature Gulf II.pdf",
    },
    {
      id: 236,
      title:
        "CD-ROM Databases as Alternative Means - University Library Experience",
      type: "Publication",
      year: "1989",
      publisher: "Microcomputers for Information Management",
      description:
        "Case study of CD-ROM adoption in developing country university.",
      link: "/research-papers/CDROM University Experience.pdf",
    },
    {
      id: 237,
      title: "Attitudes and Preferences of Library Practitioners in Illinois",
      type: "Publication",
      year: "1986",
      publisher: "College & Research Libraries",
      description:
        "Research on library practitioners' preferences for information dissemination.",
      link: "/research-papers/Library Practitioners Illinois.pdf",
    },
    {
      id: 238,
      title: "Library and Information Science Literature: Research Results",
      type: "Publication",
      year: "1985",
      publisher: "International Library Review",
      description:
        "Analysis of research results in library and information science.",
      link: "/research-papers/LIS Literature Research Results.pdf",
    },
    {
      id: 239,
      title: "Library Science Research: Dissemination and Utilization",
      type: "Publication",
      year: "1985",
      publisher: "Libri",
      description:
        "Research on effective dissemination and utilization of library science findings.",
      link: "/research-papers/Library Science Dissemination.pdf",
    },
    {
      id: 240,
      title: "Information Seeking-Behavior of Scotland's Library Practitioners",
      type: "Publication",
      year: "1984",
      publisher: "Library Review",
      description:
        "Study of information seeking patterns among Scottish library professionals.",
      link: "/research-papers/Information Seeking Scotland.pdf",
    },
    {
      id: 241,
      title: "Saudi Arabia University Libraries",
      type: "Publication",
      year: "1984",
      publisher: "International Leads",
      description:
        "Overview and analysis of university library systems in Saudi Arabia.",
      link: "/research-papers/Saudi Arabia University Libraries.pdf",
    },
    {
      id: 242,
      title: "Food Science and Technology Literature: A Bibliometric Study",
      type: "Publication",
      year: "1983",
      publisher: "SRELS Journal of Information Management",
      description:
        "Bibliometric analysis of food science and technology research literature.",
      link: "/research-papers/Food Science Technology Bibliometric.pdf",
    },
  ];

  const mediaPublications = [
    // Media Files and Documentation
    {
      id: 600,
      title: "DVD Cover - Islamic Finance Collection",
      type: "Media",
      year: "2020",
      publisher: "Media Archives",
      description:
        "DVD cover design for Islamic finance educational collection.",
      link: "/Media/DVD Cover.pdf",
    },
    {
      id: 601,
      title: "Newspaper Coverage - Article 001",
      type: "Media",
      year: "2019",
      publisher: "Print Media",
      description:
        "Newspaper article featuring Islamic finance developments and expert commentary.",
      link: "/Media/Newspaper-001.pdf",
    },

    {
      id: 603,
      title: "HIFIP DataBank CD-ROM Cover",
      type: "Media",
      year: "2010",
      publisher: "Harvard Islamic Finance Information Program",
      description:
        "CD-ROM cover design for Harvard Islamic Finance Information Program database.",
      link: "/Media/Photos/HIFIP DataBank _CD-ROM Cover.pdf",
    },
    {
      id: 604,
      title: "Harvard University Gazette - Treasury Seminar",
      type: "Media",
      year: "2002",
      publisher: "Harvard University",
      description:
        "Harvard Gazette coverage of U.S. Treasury Seminar on Islamic Finance 101 in Washington DC.",
      link: "/Media/Photos/Harvard University Gazette May 2, 2002_U.S.Treasury Seminar on Islamic Finance 101 in Washington DC.pdf",
    },
    {
      id: 605,
      title: "Heerashah Mian Masjid Historical Document",
      type: "Media",
      year: "1950",
      publisher: "Family Archives",
      description:
        "Historical document about Heerashah Mian Masjid reopened by Dr. Ali's father in early 1950s.",
      link: "/Media/Photos/Heerashah Mian Masjid, New Bus Stand Hanomkonda_My father had reopened this mosque in early 1950s which was abondand for several years.pdf",
    },
    {
      id: 606,
      title: "President Mahathir Lifetime Achievement Award",
      type: "Media",
      year: "2011",
      publisher: "LARIBA",
      description:
        "Documentation of President Mahathir receiving Lifetime Achievement Award from LARIBA in Chicago.",
      link: "/Media/Photos/President Mahathir Honored Lifetime Achievement Award from LARIBA _Ceremony held at Bosnia Center in Chicago, Novemever 2011.pdf",
    },
    {
      id: 607,
      title: "The Middle East at Harvard",
      type: "Media",
      year: "2022",
      publisher: "Harvard University",
      description:
        "Documentation of Middle Eastern studies and Islamic finance programs at Harvard University.",
      link: "/Media/The Middle East at Harvard.pdf",
    },
  ];

  const harvardForumReports = [
    // Harvard Forum Reports and Programs (missing ones)
    {
      id: 700,
      title: "6th Harvard Forum Short Report",
      type: "Harvard Report",
      year: "2004",
      publisher: "Harvard University",
      description:
        "Short report from the 6th Harvard Forum on Islamic Finance covering key outcomes and discussions.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Short Report_2004.pdf",
    },
    {
      id: 701,
      title: "6th Harvard Forum Program",
      type: "Harvard Program",
      year: "2004",
      publisher: "Harvard University",
      description:
        "Complete program schedule and participant information for the 6th Harvard Forum.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Pogram_2004.pdf",
    },
    {
      id: 702,
      title: "7th Harvard Forum Short Report",
      type: "Harvard Report",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Short report from the 7th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum _ Short-Report_2006.pdf",
    },
    {
      id: 703,
      title: "7th Harvard Forum Program",
      type: "Harvard Program",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Program schedule for the 7th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum Program_2006.pdf",
    },
    {
      id: 704,
      title: "8th Harvard Forum Pre-Forum Report",
      type: "Harvard Report",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Pre-forum report and background materials for the 8th Harvard Forum.",
      link: "/conference-archives/HIFC Archives/8th Harvard Pre-Forum-Report_2008.pdf",
    },
    {
      id: 705,
      title: "8th Harvard Forum Keynote Speech",
      type: "Harvard Speech",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Keynote speech delivered at the 8th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Keynote-Speech_2008.pdf",
    },
    {
      id: 706,
      title: "8th Harvard Forum Report",
      type: "Harvard Report",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Comprehensive report from the 8th Harvard Forum proceedings.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Report_2008.pdf",
    },
    {
      id: 707,
      title: "8th Harvard Forum Program",
      type: "Harvard Program",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Complete program for the 8th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Program_2008.pdf",
    },
    {
      id: 708,
      title: "9th Harvard Forum Short Report",
      type: "Harvard Report",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Short report from the 9th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Short Report_2010.pdf",
    },
    {
      id: 709,
      title: "9th Harvard Forum Program",
      type: "Harvard Program",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Program schedule for the 9th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Program_2010.pdf",
    },
    {
      id: 710,
      title: "10th Harvard Forum Report",
      type: "Harvard Report",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Comprehensive report from the 10th Harvard Forum proceedings.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Report_2012.pdf",
    },
    {
      id: 711,
      title: "10th Harvard Forum Program",
      type: "Harvard Program",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Program schedule for the 10th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Program_2012.pdf",
    },
    {
      id: 712,
      title: "11th Harvard Forum Program",
      type: "Harvard Program",
      year: "2014",
      publisher: "Harvard University",
      description:
        "Program schedule for the 11th Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/11th Harvard Forum Program _2014.pdf",
    },
  ];

  const soasPublications = [
    // SOAS Workshop Reports and Proceedings
    {
      id: 300,
      title:
        "A Short History - Harvard-LSE-SOAS Annual Events in Islamic Finance 2006-2025",
      type: "SOAS",
      year: "2025",
      publisher: "SOAS University of London",
      description:
        "Comprehensive history of collaborative Islamic finance events between Harvard, LSE, and SOAS.",
      link: "/soas-lse-events/A Short History -Harvard- LSE- SOAS Annual Events in Islamic Finance 2006-2025.pdf",
    },
    {
      id: 301,
      title: "LSE Reports Series Compilation",
      type: "SOAS",
      year: "2023",
      publisher: "London School of Economics",
      description:
        "Complete compilation of LSE Islamic finance workshop reports and research findings.",
      link: "/soas-lse-events/LSE Reports Series Compilation.pdf",
    },
    // SOAS 2024
    {
      id: 302,
      title: "SOAS 2024 Workshop: Principles of Engagement",
      type: "SOAS",
      year: "2024",
      publisher: "SOAS University of London",
      description:
        "Latest workshop exploring principles of engagement in contemporary Islamic finance.",
      link: "/soas-lse-events/SOAS 2024_Website/SOAS 2024 POE/2024 SoAS Workshop PoE.pdf",
    },
    // SOAS 2023
    {
      id: 303,
      title: "SOAS 2023 Workshop Report",
      type: "SOAS",
      year: "2023",
      publisher: "SOAS University of London",
      description:
        "Annual workshop report on Islamic finance developments and challenges.",
      link: "/soas-lse-events/SOAS 2023_Website/SOAS 2023 Workshop Report/2023 SOAS Workshop Report.pdf",
    },
    {
      id: 304,
      title: "SOAS 2023 Public Lecture on Islamic Finance",
      type: "SOAS",
      year: "2023",
      publisher: "SOAS University of London",
      description:
        "Public lecture addressing contemporary issues in Islamic finance.",
      link: "/soas-lse-events/SOAS 2023_Website/SOAS 2023 Public Lecture/SOAS 2023_Public lecture.pdf",
    },
    // SOAS 2022
    {
      id: 305,
      title: "Cryptos: Distinguishing Hype and Realities in Islamic Finance",
      type: "SOAS",
      year: "2022",
      publisher: "SOAS University of London",
      description:
        "Critical analysis of cryptocurrency adoption in Islamic finance frameworks.",
      link: "/soas-lse-events/SOAS 2022_Website/SOAS 2022 Workshop Report/Cryptos Distinguishing Hype and Realities in Islamic Finance.pdf",
    },
    {
      id: 306,
      title: "SOAS 2022 Workshop Final Report",
      type: "SOAS",
      year: "2022",
      publisher: "SOAS University of London",
      description:
        "Comprehensive report from the 2022 SOAS Islamic Finance Workshop.",
      link: "/soas-lse-events/SOAS 2022_Website/SOAS 2022 Workshop Report/2022 SOAS Workshop Final Report.pdf",
    },
    // SOAS 2020
    {
      id: 307,
      title: "SOAS 2020 Islamic Finance Report",
      type: "SOAS",
      year: "2020",
      publisher: "SOAS University of London",
      description:
        "Workshop report addressing Islamic finance challenges during the pandemic era.",
      link: "/soas-lse-events/SOAS 2020_Website/SOAS 2020 Workshop Report/2020 SOAS IF Report.pdf",
    },
    // SOAS 2019
    {
      id: 308,
      title: "SOAS 2019 Islamic Finance Report",
      type: "SOAS",
      year: "2019",
      publisher: "SOAS University of London",
      description:
        "Annual workshop report on Islamic finance innovations and regulatory developments.",
      link: "/soas-lse-events/SOAS 2019_Website/SOAS 2019 Workshop Report/2019 SOAS IF Report.pdf",
    },
    // SOAS 2018
    {
      id: 309,
      title: "SOAS 2018 Workshop Report",
      type: "SOAS",
      year: "2018",
      publisher: "SOAS University of London",
      description:
        "Workshop proceedings covering Islamic finance education and market development.",
      link: "/soas-lse-events/SOAS 2018_Websiste/2018 Workshop Report/2018 SOAS Workshop Report.pdf",
    },
    // LSE Workshop Series
    {
      id: 310,
      title: "LSE Workshop on Tawarruq",
      type: "SOAS",
      year: "2007",
      publisher: "London School of Economics",
      description:
        "In-depth analysis of Tawarruq structures in Islamic finance.",
      link: "/soas-lse-events/LSE-Harvard 2007Website/LSE-Workshop on Tawarruq.pdf",
    },
    {
      id: 311,
      title: "LSE Workshop on Sukuk",
      type: "SOAS",
      year: "2008",
      publisher: "London School of Economics",
      description:
        "Comprehensive examination of Sukuk structures and market developments.",
      link: "/soas-lse-events/LSE-Harvard 2008Website/LSE-Workshop on Sukuk.pdf",
    },
    {
      id: 312,
      title: "LSE Workshop on Risk Management",
      type: "SOAS",
      year: "2009",
      publisher: "London School of Economics",
      description:
        "Risk management frameworks for Islamic financial institutions.",
      link: "/soas-lse-events/LSE-Harvard 2009Website/LSE-Workshop on Risk Management.pdf",
    },
    {
      id: 313,
      title: "LSE Workshop on Ethics and Governance",
      type: "SOAS",
      year: "2010",
      publisher: "London School of Economics",
      description:
        "Ethical frameworks and governance structures in Islamic banking.",
      link: "/soas-lse-events/LSE-Harvard 2010Website/LSE-Workshop on Ethics and Governance.pdf",
    },
    {
      id: 314,
      title: "LSE Workshop on Reappraising the Islamic Financial Sector",
      type: "SOAS",
      year: "2011",
      publisher: "London School of Economics",
      description:
        "Critical reappraisal of Islamic financial sector post-financial crisis.",
      link: "/soas-lse-events/LSE-Harvard 2011Website/LSE-Workshop on Reappraising the Islamic Financial Sector.pdf",
    },
    {
      id: 315,
      title:
        "LSE Workshop on Insolvency and Debt Restructuring in Islamic Finance",
      type: "SOAS",
      year: "2013",
      publisher: "London School of Economics",
      description:
        "Legal frameworks for insolvency and debt restructuring in Islamic finance.",
      link: "/soas-lse-events/LSE-Harvard 2013Website/LSE-Workshop on Insolvency Debt Restructuring in Islamic Finance.pdf",
    },
  ];

  const conferencePublications = [
    // 1st Harvard Forum
    {
      id: 400,
      title: "1st Harvard Forum Program",
      type: "Conference Papers",
      year: "1997",
      publisher: "Harvard University",
      description:
        "Program outline for the inaugural Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/1st Harvard Forum Program_1997.pdf",
    },
    {
      id: 401,
      title: "1st Harvard Forum Short Report",
      type: "Conference Papers",
      year: "1997",
      publisher: "Harvard University",
      description:
        "Summary report from the first Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/1st Harvard Forum Short Report-1997.pdf",
    },
    // 2nd Harvard Forum
    {
      id: 402,
      title: "2nd Harvard Forum Program",
      type: "Conference Papers",
      year: "1998",
      publisher: "Harvard University",
      description:
        "Conference program for the Second Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Pogram_1998.pdf",
    },
    {
      id: 403,
      title: "2nd Harvard Forum Proceedings",
      type: "Conference Papers",
      year: "1998",
      publisher: "Harvard University",
      description:
        "Complete proceedings from the Second Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Proceedings.pdf",
    },
    {
      id: 404,
      title: "2nd Harvard Forum Short Report",
      type: "Conference Papers",
      year: "1998",
      publisher: "Harvard University",
      description:
        "Executive summary of key discussions and outcomes from the Second Harvard Forum.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Short Report_1998.pdf",
    },
    // 3rd Harvard Forum
    {
      id: 405,
      title: "3rd Harvard Forum Program",
      type: "Conference Papers",
      year: "1999",
      publisher: "Harvard University",
      description:
        "Program schedule for the Third Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/3rd Harvard Forum Program_1999.pdf",
    },
    {
      id: 406,
      title: "3rd Harvard Forum Short Report",
      type: "Conference Papers",
      year: "1999",
      publisher: "Harvard University",
      description:
        "Summary report highlighting key presentations and discussions from the Third Harvard Forum.",
      link: "/conference-archives/HIFC Archives/3rd Harvard Forum Short Report_1999.pdf",
    },
    // 4th Harvard Forum
    {
      id: 407,
      title: "4th Harvard Forum Program",
      type: "Conference Papers",
      year: "2000",
      publisher: "Harvard University",
      description:
        "Conference program for the Fourth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/4th Harvard Forum Program_2000.pdf",
    },
    {
      id: 408,
      title: "4th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2000",
      publisher: "Harvard University",
      description:
        "Concise report on the Fourth Harvard Forum proceedings and outcomes.",
      link: "/conference-archives/HIFC Archives/4th Harvard Forum Shhort Report_2000.pdf",
    },
    // 5th Harvard Forum
    {
      id: 409,
      title: "5th Harvard Forum Program",
      type: "Conference Papers",
      year: "2002",
      publisher: "Harvard University",
      description:
        "Program outline for the Fifth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/5th Harvard Forum Program_2002.pdf",
    },
    {
      id: 410,
      title: "5th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2002",
      publisher: "Harvard University",
      description:
        "Summary of key insights and discussions from the Fifth Harvard Forum.",
      link: "/conference-archives/HIFC Archives/5th Harvard Forum Short Report_2002.pdf",
    },
    // 6th Harvard Forum
    {
      id: 411,
      title: "6th Harvard Forum Program",
      type: "Conference Papers",
      year: "2004",
      publisher: "Harvard University",
      description:
        "Conference program for the Sixth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Pogram_2004.pdf",
    },
    {
      id: 412,
      title: "6th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2004",
      publisher: "Harvard University",
      description:
        "Executive summary of the Sixth Harvard Forum on current legal and regulatory issues.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Short Report_2004.pdf",
    },
    // 7th Harvard Forum
    {
      id: 413,
      title: "7th Harvard Forum Program",
      type: "Conference Papers",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Program schedule for the Seventh Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum Program_2006.pdf",
    },
    {
      id: 414,
      title: "7th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Publication featuring research papers on integrating Islamic finance into the mainstream.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum Publicattion_2006.pdf",
    },
    {
      id: 415,
      title: "7th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2006",
      publisher: "Harvard University",
      description:
        "Summary report from the Seventh Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum _ Short-Report_2006.pdf",
    },
    // 8th Harvard Forum
    {
      id: 416,
      title: "8th Harvard Forum Program",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Conference program for the Eighth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Program_2008.pdf",
    },
    {
      id: 417,
      title: "8th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Research publication from the Eighth Harvard Forum during the global financial crisis.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Publication_2008.pdf",
    },
    {
      id: 418,
      title: "8th Harvard Forum Report",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Comprehensive report on the Eighth Harvard Forum proceedings and findings.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Report_2008.pdf",
    },
    {
      id: 419,
      title: "8th Harvard Forum Keynote Speech",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Keynote address from the Eighth Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Keynote-Speech_2008.pdf",
    },
    {
      id: 420,
      title: "8th Harvard Forum Speech",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Featured speech from the Eighth Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum-Speech _2008.pdf",
    },
    {
      id: 421,
      title: "8th Harvard Pre-Forum Report",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description:
        "Pre-forum analysis and preparation materials for the Eighth Harvard Forum.",
      link: "/conference-archives/HIFC Archives/8th Harvard Pre-Forum-Report_2008.pdf",
    },
    // 9th Harvard Forum
    {
      id: 422,
      title: "9th Harvard Forum Program",
      type: "Conference Papers",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Program outline for the Ninth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Program_2010.pdf",
    },
    {
      id: 423,
      title: "9th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Publication on building bridges across financial communities from the Ninth Harvard Forum.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Publication_2010.pdf",
    },
    {
      id: 424,
      title: "9th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2010",
      publisher: "Harvard University",
      description:
        "Executive summary of the Ninth Harvard Forum proceedings and outcomes.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Short Report_2010.pdf",
    },
    // 10th Harvard Forum
    {
      id: 425,
      title: "10th Harvard Forum Program",
      type: "Conference Papers",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Conference program for the Tenth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Program_2012.pdf",
    },
    {
      id: 426,
      title: "10th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Decade milestone publication featuring comprehensive research on Islamic finance.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Publication_2012.pdf",
    },
    {
      id: 427,
      title: "10th Harvard Forum Report",
      type: "Conference Papers",
      year: "2012",
      publisher: "Harvard University",
      description:
        "Detailed report from the Tenth Harvard Forum marking a decade of Islamic finance forums.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Report_2012.pdf",
    },
    // 11th Harvard Forum
    {
      id: 428,
      title: "11th Harvard Forum Program",
      type: "Conference Papers",
      year: "2014",
      publisher: "Harvard University",
      description:
        "Program schedule for the Eleventh Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/11th Harvard Forum Program _2014.pdf",
    },
  ];

  const publications = [
    {
      id: 1,
      title: "Islamic Finance: Principles and Practice",
      type: "Publication",
      year: "2023",
      publisher: "Oxford University Press",
      category: "Articles",
      description:
        "A comprehensive examination of Islamic financial systems and their application in modern economies.",
      link: "#",
    },
    {
      id: 2,
      title: "Ethical Banking Models: Islamic Perspectives",
      type: "Publication",
      year: "2022",
      publisher: "Journal of Business Ethics",
      category: "Articles",
      description:
        "Analysis of ethical frameworks in Islamic banking with comparative case studies from global institutions.",
      link: "#",
    },
    {
      id: 3,
      title: "Information Systems in Islamic Financial Institutions",
      type: "Conference",
      year: "2021",
      publisher: "Handbook of Islamic Banking",
      category: "Articles",
      description:
        "Explores the intersection of information science and Islamic finance in developing robust financial systems.",
      link: "#",
    },
    {
      id: 4,
      title: "Sukuk Markets: Evolution and Innovation",
      type: "Publication",
      year: "2021",
      publisher: "International Journal of Islamic Finance",
      category: "Articles",
      description:
        "Analysis of innovations in Islamic bond markets and their role in infrastructure development.",
      link: "#",
    },
    {
      id: 5,
      title: "Digital Transformation in Islamic Banking",
      type: "Conference",
      year: "2020",
      publisher: "International Conference on Islamic Economics",
      category: "Articles",
      description:
        "Examination of fintech adoption in Islamic banks and its implications for Shariah compliance.",
      link: "#",
    },
    {
      id: 6,
      title: "Principles of Islamic Finance: Theory and Application",
      type: "Publication",
      year: "2019",
      publisher: "Cambridge University Press",
      category: "Articles",
      description:
        "Foundational textbook on Islamic finance principles, contracts, and modern applications.",
      link: "#",
    },
    {
      id: 7,
      title: "Shariah Governance in Financial Institutions",
      type: "Publication",
      year: "2019",
      publisher: "Corporate Governance: An International Review",
      category: "Articles",
      description:
        "Comparative analysis of Shariah governance frameworks across different jurisdictions.",
      link: "#",
    },
    {
      id: 8,
      title: "Islamic Finance in the Digital Age",
      type: "Conference",
      year: "2018",
      publisher: "Research Handbook on Digital Transformations",
      category: "Articles",
      description:
        "Examination of how digital technologies are reshaping Islamic financial services.",
      link: "#",
    },
    {
      id: 9,
      title: "ESG and Islamic Investment: Convergence and Divergence",
      type: "Publication",
      year: "2018",
      publisher: "Journal of Sustainable Finance & Investment",
      category: "Articles",
      description:
        "Comparative analysis of environmental, social, and governance criteria in Islamic investments.",
      link: "#",
    },
    {
      id: 10,
      title: "Risk Management in Islamic Financial Institutions",
      type: "Conference",
      year: "2017",
      publisher: "World Congress on Risk Management",
      category: "Articles",
    },
  ];

  // Combine all publications
  const allPublications = [
    ...researchBooks,
    ...researchPapers,
    ...mediaPublications,
    ...harvardForumReports,
    ...soasPublications,
    ...conferencePublications,
    ...publications,
  ];

  // Filter publications based on active type
  const typeFilteredPublications = allPublications.filter((pub) => {
    if (activeType === "All") return true;

    // Books - only the 18 books from CV (exclude conference proceedings)
    if (activeType === "Books") {
      return pub.type === "Book" && pub.id >= 90 && pub.id <= 107;
    }

    // Harvard - Harvard forums and publications
    if (activeType === "Harvard") {
      return (
        (pub.publisher && pub.publisher.includes("Harvard")) ||
        pub.type === "Harvard Report" ||
        pub.type === "Harvard Program" ||
        pub.type === "Harvard Speech"
      );
    }

    // SOAS - SOAS specific content
    if (activeType === "SOAS") {
      return (
        (pub.publisher && pub.publisher.includes("SOAS")) || pub.type === "SOAS"
      );
    }

    // LSE - LSE specific content
    if (activeType === "LSE") {
      return (
        pub.publisher &&
        (pub.publisher.includes("London School of Economics") ||
          pub.publisher === "LSE")
      );
    }

    // Articles - research papers and journal articles only (IDs 200-242)
    if (activeType === "Articles") {
      return pub.type === "Publication" && pub.id >= 200 && pub.id <= 242;
    }

    // Book Chapters
    if (activeType === "Book Chapters") {
      return pub.type === "Book Chapter";
    }

    // Media
    if (activeType === "Media") {
      return pub.type === "Media";
    }

    return false;
  });

  // Then filter by year
  const filteredPublications = (
    activeYear === "All"
      ? typeFilteredPublications
      : typeFilteredPublications.filter((pub) => pub.year === activeYear)
  ).sort((a, b) => {
    // Sort by year in descending order (latest first)
    return b.year.localeCompare(a.year);
  });

  const publicationTypes: PublicationType[] = [
    "All",
    "Books",
    "Harvard",
    "SOAS",
    "LSE",
    "Articles",
    "Book Chapters",
    "Media",
  ];

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Research & Publications" />

        {/* Research Focus Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-serif font-bold mb-4 text-navy-800">
            Research Focus
          </h3>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dr. Ali's research spans the intersection of Islamic finance,
            Islamic social finance including microfinance, ethics, and
            information systems. His work has been instrumental in developing
            frameworks for Shariah compliant financial products, analyzing the
            ethical dimensions of Islamic banking, advancing models of Islamic
            social and microfinance, and exploring the application of
            information science to Islamic financial institutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-50 rounded-lg p-6 border border-navy-100">
              <h4 className="text-xl font-serif font-bold mb-3 text-navy-800">
                Primary Research Areas
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Islamic financial education, research, and dissemination
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Ethical dimensions of Islamic banking practices
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Islamic social finance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Information systems for Shariah compliance
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Sustainable and responsible Islamic investment
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gold-50 rounded-lg p-6 border border-gold-100">
              <h4 className="text-xl font-serif font-bold mb-3 text-navy-800">
                Current Projects
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Artificial Intelligence in Scholarly Writings
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Digital transformation of Islamic financial services
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    ESG integration in Islamic investment portfolios
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">
                    Fintech solutions for Islamic microfinance
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-16 border-b border-gray-200 pb-4">
            {publicationTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={`text-sm uppercase tracking-wider transition-all duration-200 ${
                  activeType === type
                    ? "text-gray-900 font-medium border-b-2 border-gray-900 pb-4 -mb-[18px]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Year Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-b border-gray-200 pb-4">
            {[
              "All",
              ...Array.from(
                new Set(allPublications.map((pub) => pub.year)),
              ).sort((a, b) => b.localeCompare(a)),
            ].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`text-sm tracking-wider transition-all duration-200 px-2 py-1 ${
                  activeYear === year
                    ? "text-navy-900 font-bold border-b-2 border-navy-800"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {year === "All" ? "ALL" : year}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List Display */}
        <div className="max-w-5xl mx-auto">
          {/* Section Header Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {activeType === "All"
                ? "All Publications"
                : activeType === "Books"
                  ? "Authored and Co-Authored Books"
                  : activeType === "Harvard"
                    ? "Harvard University Forum on Islamic Finance Series"
                    : activeType === "SOAS"
                      ? "SOAS Islamic Finance Workshop Series"
                      : activeType === "LSE"
                        ? "LSE Workshop Series"
                        : "Research Papers and Journal Articles"}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {activeType === "All"
                ? "Comprehensive collection of research papers, conference proceedings, and publications spanning Islamic finance, ethics, and information systems."
                : activeType === "Books"
                  ? "Dr. Ali has authored and co-authored numerous influential books on Islamic finance, fintech, sustainability, and Shariah governance with leading academic publishers including Edward Elgar, Palgrave Macmillan, Springer-Nature, Edinburgh University Press, and Routledge."
                  : activeType === "Harvard"
                    ? "Dr. Ali has been instrumental in organizing and contributing to the prestigious Harvard University Forums on Islamic Finance. These publications represent over two decades of groundbreaking research and discussions that have shaped the field of Islamic finance globally."
                    : activeType === "SOAS"
                      ? "Key contributions to the SOAS Islamic Finance Workshop Series, advancing Islamic finance research and education through collaborative efforts with SOAS University of London."
                      : activeType === "LSE"
                        ? "Comprehensive workshop reports from the LSE-Harvard collaborative series covering critical topics including Tawarruq, Sukuk, Risk Management, Ethics and Governance, and Insolvency in Islamic Finance."
                        : "Academic publications, research papers, and scholarly articles in peer-reviewed journals covering Islamic finance, fintech, sustainability, and information systems."}
            </p>
          </div>

          {/* Publications List with Scroll - Grouped by Year */}
          <div
            className="border border-gray-200 rounded-lg bg-white"
            style={{ height: "600px" }}
          >
            <div className="overflow-y-auto h-full custom-scrollbar">
              <div className="p-6">
                {filteredPublications.length > 0 ? (
                  // Group publications by year
                  Object.entries(
                    filteredPublications.reduce(
                      (acc, pub) => {
                        const year = pub.year;
                        if (!acc[year]) acc[year] = [];
                        acc[year].push(pub);
                        return acc;
                      },
                      {} as Record<string, typeof filteredPublications>,
                    ),
                  )
                    .sort(([yearA], [yearB]) => yearB.localeCompare(yearA))
                    .map(([year, pubs]) => (
                      <div key={year} className="mb-10">
                        {/* Year Header - Bold Dark Navy Blue */}
                        <h3 className="text-2xl font-bold text-navy-800 mb-6">
                          {year}
                        </h3>

                        {/* Publications for this year */}
                        <div className="space-y-6">
                          {pubs.map((pub) => (
                            <div
                              key={pub.id}
                              className="bg-navy-50 border border-navy-100 rounded-lg p-6 hover:shadow-md transition-shadow"
                            >
                              {/* Type Badge */}
                              <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-navy-700 rounded-full mb-3">
                                {pub.type === "Conference"
                                  ? "Conference"
                                  : "Book"}
                              </span>

                              <h4 className="text-lg font-bold text-navy-900 mb-2">
                                {pub.title}
                              </h4>

                              {pub.publisher && (
                                <p className="text-navy-500 text-sm mb-3">
                                  {pub.publisher}
                                </p>
                              )}

                              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                {pub.description}
                              </p>

                              {/* Action Links */}
                              <div className="flex items-center gap-6 pt-3 border-t border-navy-100">
                                {pub.link && pub.link !== "#" && (
                                  <>
                                    <a
                                      href={pub.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-navy-700 hover:text-navy-900 text-sm font-medium"
                                    >
                                      <svg
                                        className="w-4 h-4 mr-1.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                      </svg>
                                      View
                                    </a>
                                    <a
                                      href={pub.link}
                                      download
                                      className="inline-flex items-center text-navy-600 hover:text-navy-800 text-sm font-medium"
                                    >
                                      <svg
                                        className="w-4 h-4 mr-1.5"
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
                                      Download PDF
                                    </a>
                                  </>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="p-16 text-center text-gray-500">
                    No publications found in this category.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
