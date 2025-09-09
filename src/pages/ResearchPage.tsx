import React, { useState, Fragment } from 'react';
import SectionHeading from '../components/SectionHeading';
import PublicationItem from '../components/PublicationItem';

type PublicationType = 'All' | 'Books' | 'Harvard' | 'SOAS' | 'LSE' | 'Articles';

const ResearchPage: React.FC = () => {
  const [activeType, setActiveType] = useState<PublicationType>('All');
  
  const researchBooks = [
    // Recent Books from CV
    {
      id: 90,
      title: "Islamic Finance and the Pursuit of Sustainable Prosperity",
      type: "Publication",
      year: "2025",
      publisher: "Edward Elgar Publishing",
      category: "Publication",
      description: "Co-edited with Umar A. Oseni and Zul Hakim Jumat. Comprehensive exploration of how Islamic finance principles contribute to sustainable economic prosperity.",
      link: "#"
    },
    {
      id: 91,
      title: "Islamic Finance in the Digital Age",
      type: "Publication",
      year: "2024",
      publisher: "Edward Elgar Publishing",
      category: "Publication",
      description: "Co-edited with Zul Hakim Jumat. Examines the transformation of Islamic finance through digital technologies and innovation.",
      link: "#"
    },
    {
      id: 92,
      title: "Islamic Finance, FinTech, and the Road to Sustainability",
      type: "Publication",
      year: "2023",
      publisher: "Palgrave Macmillan",
      category: "Publication",
      description: "Co-edited with Zul Hakim Jumat and Saqib H. Khateeb. Explores the intersection of financial technology and sustainable development in Islamic finance.",
      link: "#"
    },
    {
      id: 93,
      title: "Islamic Finance and Circular Economy: Connecting Impact and Value Creation",
      type: "Publication",
      year: "2021",
      publisher: "Springer-Nature",
      category: "Publication",
      description: "Co-edited with Zul Hakim Jumat. Investigates how Islamic finance principles align with circular economy models for sustainable value creation.",
      link: "#"
    },
    {
      id: 94,
      title: "Waqf Development and Innovations: Socio-Economic and Legal Perspectives",
      type: "Publication",
      year: "2021",
      publisher: "Routledge",
      category: "Publication",
      description: "Co-edited with Umar A. Oseni. Comprehensive analysis of contemporary waqf management and its role in socio-economic development.",
      link: "#"
    },
    {
      id: 95,
      title: "The Edinburgh Companion to Shari'ah Governance in Islamic Finance",
      type: "Publication",
      year: "2020",
      publisher: "Edinburgh University Press",
      category: "Publication",
      description: "Co-edited with Wijdan Tariq and B.A. Al Quradaghi. Essential reference work on Shariah governance frameworks in Islamic financial institutions.",
      link: "#"
    },
    {
      id: 96,
      title: "Fintech in Islamic Finance: Theory and Practice",
      type: "Publication",
      year: "2019",
      publisher: "Taylor & Francis",
      category: "Publication",
      description: "Co-edited with Umar A. Oseni. Pioneering work on the application of financial technology in Islamic finance.",
      link: "#"
    },
    {
      id: 97,
      title: "Takaful and Islamic Cooperative Finance: Challenges and Opportunities",
      type: "Publication",
      year: "2016",
      publisher: "Edward Elgar",
      category: "Publication",
      description: "Co-edited with Shariq Nisar. Examines the principles and practices of Islamic insurance and cooperative finance models.",
      link: "#"
    },
    {
      id: 98,
      title: "Shari'a-Compliant Microfinance",
      type: "Publication",
      year: "2011",
      publisher: "Routledge",
      category: "Publication",
      description: "Edited volume exploring Islamic microfinance models for poverty alleviation and financial inclusion.",
      link: "#"
    },
    {
      id: 99,
      title: "Information Sources on Islamic Banking and Economics 1980-90",
      type: "Publication",
      year: "1994",
      publisher: "Routledge",
      category: "Publication",
      description: "Co-authored with Naseem N. Ali. Comprehensive bibliography and guide to Islamic finance literature.",
      link: "#"
    },
    // Harvard Forum Books
    {
      id: 100,
      title: "Proceedings of the Second Harvard University Forum on Islamic Finance",
      type: "Conference",
      year: "1999",
      publisher: "Harvard University",
      category: "Conference",
      description: "Complete proceedings from the Second Harvard Forum on Islamic Finance, featuring research and discussions on emerging Islamic financial systems.",
      link: "/research-books/Proceedings/2nd Harvard Forum Proceedings.pdf"
    },
    {
      id: 101,
      title: "Proceedings of the Third Harvard University Forum on Islamic Finance",
      type: "Conference",
      year: "2000",
      publisher: "Harvard University",
      category: "Conference",
      description: "Comprehensive collection of papers and discussions from the Third Harvard Forum on Islamic Finance.",
      link: "/research-books/Proceedings/3rd Harvard Forum Proceedings.pdf"
    },
    {
      id: 102,
      title: "Proceedings of the Fourth Harvard University Forum on Islamic Finance",
      type: "Conference",
      year: "2002",
      publisher: "Harvard University",
      category: "Conference",
      description: "Academic proceedings covering Islamic finance developments and regulatory frameworks.",
      link: "/research-books/Proceedings/4th Harvard Forum Proceedings.pdf"
    },
    {
      id: 103,
      title: "Proceedings of the Fifth Harvard University Forum on Islamic Finance",
      type: "Conference",
      year: "2003",
      publisher: "Harvard University",
      category: "Conference",
      description: "Fifth Forum proceedings exploring Islamic finance innovations and global market integration.",
      link: "/research-books/Proceedings/5th Harvard Forum Proceedings.pdf"
    },
    {
      id: 104,
      title: "Islamic Finance Current Legal and Regulatory Issues",
      type: "Conference",
      year: "2004",
      publisher: "Harvard University",
      category: "Conference",
      description: "Sixth Harvard University Forum on Islamic Finance publication examining contemporary legal and regulatory challenges.",
      link: "/research-books/6thForumBook/151171 complete.pdf"
    },
    {
      id: 105,
      title: "Integrating Islamic Finance into the Mainstream - Seventh Harvard Forum",
      type: "Conference",
      year: "2006",
      publisher: "Harvard University",
      category: "Conference",
      description: "Key publication from the Seventh Harvard Forum focusing on mainstream integration of Islamic financial systems.",
      link: "/research-books/7thForumBook/7th Harvard Forum Publicattion 2006.pdf"
    },
    {
      id: 106,
      title: "Eighth Harvard University Forum on Islamic Finance",
      type: "Conference",
      year: "2008",
      publisher: "Harvard University",
      category: "Conference",
      description: "Proceedings and research from the Eighth Harvard Forum examining Islamic finance during global financial changes.",
      link: "/research-books/8th Forum Book/8th Harvard Forum Publication 2008.pdf"
    },
    {
      id: 107,
      title: "Building Bridges Across Financial Communities - Ninth Harvard Forum",
      type: "Conference",
      year: "2010",
      publisher: "Harvard University",
      category: "Conference",
      description: "Ninth Forum publication focusing on bridging conventional and Islamic financial systems.",
      link: "/research-books/9thForumBook/9th Harvard Forum Publication 2010.pdf"
    },
    {
      id: 108,
      title: "Tenth Harvard University Forum on Islamic Finance",
      type: "Conference",
      year: "2012",
      publisher: "Harvard University",
      category: "Conference",
      description: "Decade milestone publication featuring comprehensive research on Islamic finance evolution.",
      link: "/research-books/10th Forum Book/10th Harvard Forum Publication 2012.pdf"
    },
    {
      id: 109,
      title: "Twelfth Harvard University Forum on Islamic Finance: Principles of Engagement",
      type: "Conference",
      year: "2016",
      publisher: "Harvard University",
      category: "Conference",
      description: "Exploring principles of engagement in Islamic finance and their practical applications.",
      link: "/research-books/12th Forum/12th Harvard Forum POE 2016.pdf"
    },
    {
      id: 110,
      title: "Thirteenth Harvard University Forum on Islamic Finance: Principles of Engagement",
      type: "Conference",
      year: "2018",
      publisher: "Harvard University",
      category: "Conference",
      description: "Latest developments in Islamic finance principles and their global implementation.",
      link: "/research-books/13th Forum/13th Harvard Islamic Forum POE 2018.pdf"
    },
    {
      id: 111,
      title: "Fourteenth Harvard University Forum on Islamic Finance",
      type: "Conference",
      year: "2022",
      publisher: "Harvard University",
      category: "Conference",
      description: "Recent forum publication addressing contemporary challenges in Islamic finance.",
      link: "/research-books/14th Forum Book/14th Harvard Forum Publication 2022.pdf"
    },
    // Other Books
    {
      id: 112,
      title: "Fintech and Islamic Finance: Digitalization, Development and Disruption",
      type: "Publication",
      year: "2021",
      publisher: "Palgrave Macmillan",
      description: "Comprehensive analysis of fintech innovations in Islamic finance and their transformative impact on the industry.",
      link: "/research-books/Book _ Fintech Islamic Finance.pdf"
    },
    {
      id: 113,
      title: "Islamic Microfinance",
      type: "Publication",
      year: "2020",
      publisher: "Routledge",
      description: "In-depth examination of Islamic microfinance models and their role in financial inclusion.",
      link: "/research-books/Microfinance/Routledge/Book_Cover.pdf"
    },
    // Additional Forum Materials
    {
      id: 114,
      title: "Integrating Islamic Finance into the Mainstream",
      type: "Conference",
      year: "2006",
      publisher: "Harvard University",
      category: "Conference",
      description: "Comprehensive study on integrating Islamic financial principles into conventional banking systems.",
      link: "/research-books/7thForumBook/Integrating Islamic Finance into the Mainstream.pdf"
    },
    {
      id: 115,
      title: "Building Bridges Across Financial Communities",
      type: "Conference",
      year: "2010",
      publisher: "Harvard University",
      category: "Conference",
      description: "Exploring connections and collaborations between Islamic and conventional financial institutions.",
      link: "/research-books/9thForumBook/Building Bridges Across Financial Communities.pdf"
    },
    {
      id: 116,
      title: "Fintech and Islamic Finance Book Cover",
      type: "Publication",
      year: "2021",
      publisher: "Palgrave Macmillan",
      description: "Cover and additional materials for the Fintech and Islamic Finance publication.",
      link: "/research-books/Fintech Book Cover ISBN 978-3-030-49247-2.pdf"
    },
    // Cover and Text Materials
    {
      id: 117,
      title: "Sixth Harvard Forum - Complete Text",
      type: "Conference",
      year: "2004",
      publisher: "Harvard University",
      category: "Conference",
      description: "Full text content from the Sixth Harvard Forum on Islamic Finance.",
      link: "/research-books/6thForumBook/151171 Text.pdf"
    },
    {
      id: 118,
      title: "Sixth Harvard Forum - Cover Materials",
      type: "Conference",
      year: "2004",
      publisher: "Harvard University",
      category: "Conference",
      description: "Cover and design materials for the Sixth Harvard Forum publication.",
      link: "/research-books/6thForumBook/151171 Cover cropped.pdf"
    },
    {
      id: 119,
      title: "Seventh Harvard Forum - Text Content",
      type: "Conference",
      year: "2006",
      publisher: "Harvard University",
      category: "Conference",
      description: "Complete text materials from the Seventh Harvard Forum on Islamic Finance.",
      link: "/research-books/7thForumBook/180061 Text.pdf"
    },
    {
      id: 120,
      title: "Seventh Harvard Forum - Cover Design",
      type: "Conference",
      year: "2006",
      publisher: "Harvard University",
      category: "Conference",
      description: "Cover design and layout for the Seventh Harvard Forum publication.",
      link: "/research-books/7thForumBook/180061 Cover cropped.pdf"
    },
    {
      id: 121,
      title: "Ninth Harvard Forum - Text Materials",
      type: "Conference",
      year: "2010",
      publisher: "Harvard University",
      category: "Conference",
      description: "Text content and chapters from the Ninth Harvard Forum on Islamic Finance.",
      link: "/research-books/9thForumBook/213495 Text.pdf"
    },
    {
      id: 122,
      title: "Ninth Harvard Forum - Cover Materials",
      type: "Conference",
      year: "2010",
      publisher: "Harvard University",
      category: "Conference",
      description: "Cover design elements for the Ninth Harvard Forum publication.",
      link: "/research-books/9thForumBook/213495 cover cropped.pdf"
    }
  ];

  const researchPapers = [
    {
      id: 200,
      title: "A Roadmap for Making Islamic Finance Sources",
      type: "Publication",
      year: "2023",
      publisher: "Islamic Finance Research Institute",
      description: "Strategic framework for developing and accessing Islamic finance resources and documentation.",
      link: "/research-papers/A Roadmap for making Islamic Finance sources.pdf"
    },
    {
      id: 201,
      title: "An Overview of Current Research and Development",
      type: "Publication",
      year: "2022",
      publisher: "Journal of Islamic Finance Studies",
      description: "Comprehensive review of contemporary research trends and developments in Islamic finance.",
      link: "/research-papers/An Overview of Current Research and Development.pdf"
    },
    {
      id: 202,
      title: "Big Data, Islamic Finance, and Sustainable Development Goals",
      type: "Publication",
      year: "2020",
      publisher: "Journal of King Abdulaziz University: Islamic Economics",
      description: "Exploring the intersection of big data analytics, Islamic finance principles, and SDG achievement. Published in Volume 33, Issue 1.",
      link: "/research-papers/Big Data, Islamic Finance, and Sustainable Development Goals.pdf"
    },
    {
      id: 203,
      title: "Building Trust in Islamic Finance Products and Services",
      type: "Publication",
      year: "2017",
      publisher: "Society and Business Review",
      description: "Analysis of trust-building mechanisms and their impact on Islamic banking relationships. Published in Volume 12, Issue 3.",
      link: "/research-papers/Building Trust.pdf"
    },
    {
      id: 204,
      title: "Scientometric Analysis of Islamic Finance Literature",
      type: "Publication",
      year: "2021",
      publisher: "Journal of Scientometrics",
      description: "Quantitative analysis of Islamic finance research publications and citation patterns.",
      link: "/research-papers/Collinet Jrl of Scientometric paper.pdf"
    },
    {
      id: 205,
      title: "Financing Sovereign Developmental Activities",
      type: "Publication",
      year: "2022",
      publisher: "Islamic Development Bank Review",
      description: "Innovative Islamic finance instruments for funding national development projects.",
      link: "/research-papers/Financing Sovereign Developmental Activities.pdf"
    },
    {
      id: 206,
      title: "Financing the Poor: Islamic Microfinance Models",
      type: "Publication",
      year: "2007",
      publisher: "Journal of Islamic Economics",
      description: "Early research on Islamic microfinance approaches for poverty alleviation.",
      link: "/research-papers/Financing the Poor_2007_Edited.pdf"
    },
    {
      id: 207,
      title: "Islamic Finance Project at Harvard University",
      type: "Publication",
      year: "2020",
      publisher: "Harvard University Press",
      description: "Overview of the Islamic Finance Project's contributions to academic research and industry development.",
      link: "/research-papers/IFP@Harvard.pdf"
    },
    {
      id: 208,
      title: "Industry Building Efforts and Course Development",
      type: "Publication",
      year: "2021",
      publisher: "Journal of Islamic Finance Education",
      description: "Strategies for developing Islamic finance education programs and industry capacity.",
      link: "/research-papers/Industry Building Efforts, Course.pdf"
    },
    {
      id: 209,
      title: "Innovation and Authenticity in Islamic Finance",
      type: "Publication",
      year: "2023",
      publisher: "Islamic Finance Quarterly",
      description: "Balancing financial innovation with Shariah authenticity in product development.",
      link: "/research-papers/Innovation and authenticity.pdf"
    },
    {
      id: 210,
      title: "Contemporary Issues in Islamic Finance Studies",
      type: "Publication",
      year: "2022",
      publisher: "Journal of Islamic Studies",
      description: "Critical analysis of current challenges and opportunities in Islamic finance research.",
      link: "/research-papers/Journal Of Islamic Studies.pdf"
    }
  ];

  const soasPublications = [
    // SOAS Workshop Reports and Proceedings
    {
      id: 300,
      title: "A Short History - Harvard-LSE-SOAS Annual Events in Islamic Finance 2006-2025",
      type: "SOAS",
      year: "2025",
      publisher: "SOAS University of London",
      description: "Comprehensive history of collaborative Islamic finance events between Harvard, LSE, and SOAS.",
      link: "/soas-lse-events/A Short History -Harvard- LSE- SOAS Annual Events in Islamic Finance 2006-2025.pdf"
    },
    {
      id: 301,
      title: "LSE Reports Series Compilation",
      type: "SOAS",
      year: "2023",
      publisher: "London School of Economics",
      description: "Complete compilation of LSE Islamic finance workshop reports and research findings.",
      link: "/soas-lse-events/LSE Reports Series Compilation.pdf"
    },
    // SOAS 2024
    {
      id: 302,
      title: "SOAS 2024 Workshop: Principles of Engagement",
      type: "SOAS",
      year: "2024",
      publisher: "SOAS University of London",
      description: "Latest workshop exploring principles of engagement in contemporary Islamic finance.",
      link: "/soas-lse-events/SOAS 2024_Website/SOAS 2024 POE/2024 SoAS Workshop PoE.pdf"
    },
    // SOAS 2023
    {
      id: 303,
      title: "SOAS 2023 Workshop Report",
      type: "SOAS",
      year: "2023",
      publisher: "SOAS University of London",
      description: "Annual workshop report on Islamic finance developments and challenges.",
      link: "/soas-lse-events/SOAS 2023_Website/SOAS 2023 Workshop Report/2023 SOAS Workshop Report.pdf"
    },
    {
      id: 304,
      title: "SOAS 2023 Public Lecture on Islamic Finance",
      type: "SOAS",
      year: "2023",
      publisher: "SOAS University of London",
      description: "Public lecture addressing contemporary issues in Islamic finance.",
      link: "/soas-lse-events/SOAS 2023_Website/SOAS 2023 Public Lecture/SOAS 2023_Public lecture.pdf"
    },
    // SOAS 2022
    {
      id: 305,
      title: "Cryptos: Distinguishing Hype and Realities in Islamic Finance",
      type: "SOAS",
      year: "2022",
      publisher: "SOAS University of London",
      description: "Critical analysis of cryptocurrency adoption in Islamic finance frameworks.",
      link: "/soas-lse-events/SOAS 2022_Website/SOAS 2022 Workshop Report/Cryptos Distinguishing Hype and Realities in Islamic Finance.pdf"
    },
    {
      id: 306,
      title: "SOAS 2022 Workshop Final Report",
      type: "SOAS",
      year: "2022",
      publisher: "SOAS University of London",
      description: "Comprehensive report from the 2022 SOAS Islamic Finance Workshop.",
      link: "/soas-lse-events/SOAS 2022_Website/SOAS 2022 Workshop Report/2022 SOAS Workshop Final Report.pdf"
    },
    // SOAS 2020
    {
      id: 307,
      title: "SOAS 2020 Islamic Finance Report",
      type: "SOAS",
      year: "2020",
      publisher: "SOAS University of London",
      description: "Workshop report addressing Islamic finance challenges during the pandemic era.",
      link: "/soas-lse-events/SOAS 2020_Website/SOAS 2020 Workshop Report/2020 SOAS IF Report.pdf"
    },
    // SOAS 2019
    {
      id: 308,
      title: "SOAS 2019 Islamic Finance Report",
      type: "SOAS",
      year: "2019",
      publisher: "SOAS University of London",
      description: "Annual workshop report on Islamic finance innovations and regulatory developments.",
      link: "/soas-lse-events/SOAS 2019_Website/SOAS 2019 Workshop Report/2019 SOAS IF Report.pdf"
    },
    // SOAS 2018
    {
      id: 309,
      title: "SOAS 2018 Workshop Report",
      type: "SOAS",
      year: "2018",
      publisher: "SOAS University of London",
      description: "Workshop proceedings covering Islamic finance education and market development.",
      link: "/soas-lse-events/SOAS 2018_Websiste/2018 Workshop Report/2018 SOAS Workshop Report.pdf"
    },
    // LSE Workshop Series
    {
      id: 310,
      title: "LSE Workshop on Tawarruq",
      type: "SOAS",
      year: "2007",
      publisher: "London School of Economics",
      description: "In-depth analysis of Tawarruq structures in Islamic finance.",
      link: "/soas-lse-events/LSE-Harvard 2007Website/LSE-Workshop on Tawarruq.pdf"
    },
    {
      id: 311,
      title: "LSE Workshop on Sukuk",
      type: "SOAS",
      year: "2008",
      publisher: "London School of Economics",
      description: "Comprehensive examination of Sukuk structures and market developments.",
      link: "/soas-lse-events/LSE-Harvard 2008Website/LSE-Workshop on Sukuk.pdf"
    },
    {
      id: 312,
      title: "LSE Workshop on Risk Management",
      type: "SOAS",
      year: "2009",
      publisher: "London School of Economics",
      description: "Risk management frameworks for Islamic financial institutions.",
      link: "/soas-lse-events/LSE-Harvard 2009Website/LSE-Workshop on Risk Management.pdf"
    },
    {
      id: 313,
      title: "LSE Workshop on Ethics and Governance",
      type: "SOAS",
      year: "2010",
      publisher: "London School of Economics",
      description: "Ethical frameworks and governance structures in Islamic banking.",
      link: "/soas-lse-events/LSE-Harvard 2010Website/LSE-Workshop on Ethics and Governance.pdf"
    },
    {
      id: 314,
      title: "LSE Workshop on Reappraising the Islamic Financial Sector",
      type: "SOAS",
      year: "2011",
      publisher: "London School of Economics",
      description: "Critical reappraisal of Islamic financial sector post-financial crisis.",
      link: "/soas-lse-events/LSE-Harvard 2011Website/LSE-Workshop on Reappraising the Islamic Financial Sector.pdf"
    },
    {
      id: 315,
      title: "LSE Workshop on Insolvency and Debt Restructuring in Islamic Finance",
      type: "SOAS",
      year: "2013",
      publisher: "London School of Economics",
      description: "Legal frameworks for insolvency and debt restructuring in Islamic finance.",
      link: "/soas-lse-events/LSE-Harvard 2013Website/LSE-Workshop on Insolvency Debt Restructuring in Islamic Finance.pdf"
    }
  ];

  const conferencePublications = [
    // 1st Harvard Forum
    {
      id: 400,
      title: "1st Harvard Forum Program",
      type: "Conference Papers",
      year: "1997",
      publisher: "Harvard University",
      description: "Program outline for the inaugural Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/1st Harvard Forum Program_1997.pdf"
    },
    {
      id: 401,
      title: "1st Harvard Forum Short Report",
      type: "Conference Papers",
      year: "1997",
      publisher: "Harvard University",
      description: "Summary report from the first Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/1st Harvard Forum Short Report-1997.pdf"
    },
    // 2nd Harvard Forum
    {
      id: 402,
      title: "2nd Harvard Forum Program",
      type: "Conference Papers",
      year: "1998",
      publisher: "Harvard University",
      description: "Conference program for the Second Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Pogram_1998.pdf"
    },
    {
      id: 403,
      title: "2nd Harvard Forum Proceedings",
      type: "Conference Papers",
      year: "1998",
      publisher: "Harvard University",
      description: "Complete proceedings from the Second Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Proceedings.pdf"
    },
    {
      id: 404,
      title: "2nd Harvard Forum Short Report",
      type: "Conference Papers",
      year: "1998",
      publisher: "Harvard University",
      description: "Executive summary of key discussions and outcomes from the Second Harvard Forum.",
      link: "/conference-archives/HIFC Archives/2nd Harvard Forum Short Report_1998.pdf"
    },
    // 3rd Harvard Forum
    {
      id: 405,
      title: "3rd Harvard Forum Program",
      type: "Conference Papers",
      year: "1999",
      publisher: "Harvard University",
      description: "Program schedule for the Third Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/3rd Harvard Forum Program_1999.pdf"
    },
    {
      id: 406,
      title: "3rd Harvard Forum Short Report",
      type: "Conference Papers",
      year: "1999",
      publisher: "Harvard University",
      description: "Summary report highlighting key presentations and discussions from the Third Harvard Forum.",
      link: "/conference-archives/HIFC Archives/3rd Harvard Forum Short Report_1999.pdf"
    },
    // 4th Harvard Forum
    {
      id: 407,
      title: "4th Harvard Forum Program",
      type: "Conference Papers",
      year: "2000",
      publisher: "Harvard University",
      description: "Conference program for the Fourth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/4th Harvard Forum Program_2000.pdf"
    },
    {
      id: 408,
      title: "4th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2000",
      publisher: "Harvard University",
      description: "Concise report on the Fourth Harvard Forum proceedings and outcomes.",
      link: "/conference-archives/HIFC Archives/4th Harvard Forum Shhort Report_2000.pdf"
    },
    // 5th Harvard Forum
    {
      id: 409,
      title: "5th Harvard Forum Program",
      type: "Conference Papers",
      year: "2002",
      publisher: "Harvard University",
      description: "Program outline for the Fifth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/5th Harvard Forum Program_2002.pdf"
    },
    {
      id: 410,
      title: "5th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2002",
      publisher: "Harvard University",
      description: "Summary of key insights and discussions from the Fifth Harvard Forum.",
      link: "/conference-archives/HIFC Archives/5th Harvard Forum Short Report_2002.pdf"
    },
    // 6th Harvard Forum
    {
      id: 411,
      title: "6th Harvard Forum Program",
      type: "Conference Papers",
      year: "2004",
      publisher: "Harvard University",
      description: "Conference program for the Sixth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Pogram_2004.pdf"
    },
    {
      id: 412,
      title: "6th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2004",
      publisher: "Harvard University",
      description: "Executive summary of the Sixth Harvard Forum on current legal and regulatory issues.",
      link: "/conference-archives/HIFC Archives/6th Harvard Forum Short Report_2004.pdf"
    },
    // 7th Harvard Forum
    {
      id: 413,
      title: "7th Harvard Forum Program",
      type: "Conference Papers",
      year: "2006",
      publisher: "Harvard University",
      description: "Program schedule for the Seventh Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum Program_2006.pdf"
    },
    {
      id: 414,
      title: "7th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2006",
      publisher: "Harvard University",
      description: "Publication featuring research papers on integrating Islamic finance into the mainstream.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum Publicattion_2006.pdf"
    },
    {
      id: 415,
      title: "7th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2006",
      publisher: "Harvard University",
      description: "Summary report from the Seventh Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/7th Harvard Forum _ Short-Report_2006.pdf"
    },
    // 8th Harvard Forum
    {
      id: 416,
      title: "8th Harvard Forum Program",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description: "Conference program for the Eighth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Program_2008.pdf"
    },
    {
      id: 417,
      title: "8th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description: "Research publication from the Eighth Harvard Forum during the global financial crisis.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Publication_2008.pdf"
    },
    {
      id: 418,
      title: "8th Harvard Forum Report",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description: "Comprehensive report on the Eighth Harvard Forum proceedings and findings.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Report_2008.pdf"
    },
    {
      id: 419,
      title: "8th Harvard Forum Keynote Speech",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description: "Keynote address from the Eighth Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum Keynote-Speech_2008.pdf"
    },
    {
      id: 420,
      title: "8th Harvard Forum Speech",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description: "Featured speech from the Eighth Harvard Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/8th Harvard Forum-Speech _2008.pdf"
    },
    {
      id: 421,
      title: "8th Harvard Pre-Forum Report",
      type: "Conference Papers",
      year: "2008",
      publisher: "Harvard University",
      description: "Pre-forum analysis and preparation materials for the Eighth Harvard Forum.",
      link: "/conference-archives/HIFC Archives/8th Harvard Pre-Forum-Report_2008.pdf"
    },
    // 9th Harvard Forum
    {
      id: 422,
      title: "9th Harvard Forum Program",
      type: "Conference Papers",
      year: "2010",
      publisher: "Harvard University",
      description: "Program outline for the Ninth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Program_2010.pdf"
    },
    {
      id: 423,
      title: "9th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2010",
      publisher: "Harvard University",
      description: "Publication on building bridges across financial communities from the Ninth Harvard Forum.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Publication_2010.pdf"
    },
    {
      id: 424,
      title: "9th Harvard Forum Short Report",
      type: "Conference Papers",
      year: "2010",
      publisher: "Harvard University",
      description: "Executive summary of the Ninth Harvard Forum proceedings and outcomes.",
      link: "/conference-archives/HIFC Archives/9th Harvard Forum Short Report_2010.pdf"
    },
    // 10th Harvard Forum
    {
      id: 425,
      title: "10th Harvard Forum Program",
      type: "Conference Papers",
      year: "2012",
      publisher: "Harvard University",
      description: "Conference program for the Tenth Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Program_2012.pdf"
    },
    {
      id: 426,
      title: "10th Harvard Forum Publication",
      type: "Conference Papers",
      year: "2012",
      publisher: "Harvard University",
      description: "Decade milestone publication featuring comprehensive research on Islamic finance.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Publication_2012.pdf"
    },
    {
      id: 427,
      title: "10th Harvard Forum Report",
      type: "Conference Papers",
      year: "2012",
      publisher: "Harvard University",
      description: "Detailed report from the Tenth Harvard Forum marking a decade of Islamic finance forums.",
      link: "/conference-archives/HIFC Archives/10th Harvard Forum Report_2012.pdf"
    },
    // 11th Harvard Forum
    {
      id: 428,
      title: "11th Harvard Forum Program",
      type: "Conference Papers",
      year: "2014",
      publisher: "Harvard University",
      description: "Program schedule for the Eleventh Harvard University Forum on Islamic Finance.",
      link: "/conference-archives/HIFC Archives/11th Harvard Forum Program _2014.pdf"
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Islamic Finance: Principles and Practice",
      type: "Publication",
      year: "2023",
      publisher: "Oxford University Press",
      description: "A comprehensive examination of Islamic financial systems and their application in modern economies.",
      link: "#"
    },
    {
      id: 2,
      title: "Ethical Banking Models: Islamic Perspectives",
      type: "Publication",
      year: "2022",
      publisher: "Journal of Business Ethics",
      description: "Analysis of ethical frameworks in Islamic banking with comparative case studies from global institutions.",
      link: "#"
    },
    {
      id: 3,
      title: "Information Systems in Islamic Financial Institutions",
      type: "Conference",
      year: "2021",
      publisher: "Handbook of Islamic Banking",
      description: "Explores the intersection of information science and Islamic finance in developing robust financial systems.",
      link: "#"
    },
    {
      id: 4,
      title: "Sukuk Markets: Evolution and Innovation",
      type: "Publication",
      year: "2021",
      publisher: "International Journal of Islamic Finance",
      description: "Analysis of innovations in Islamic bond markets and their role in infrastructure development.",
      link: "#"
    },
    {
      id: 5,
      title: "Digital Transformation in Islamic Banking",
      type: "Conference",
      year: "2020",
      publisher: "International Conference on Islamic Economics",
      description: "Examination of fintech adoption in Islamic banks and its implications for Shariah compliance.",
      link: "#"
    },
    {
      id: 6,
      title: "Principles of Islamic Finance: Theory and Application",
      type: "Publication",
      year: "2019",
      publisher: "Cambridge University Press",
      description: "Foundational textbook on Islamic finance principles, contracts, and modern applications.",
      link: "#"
    },
    {
      id: 7,
      title: "Shariah Governance in Financial Institutions",
      type: "Publication",
      year: "2019",
      publisher: "Corporate Governance: An International Review",
      description: "Comparative analysis of Shariah governance frameworks across different jurisdictions.",
      link: "#"
    },
    {
      id: 8,
      title: "Islamic Finance in the Digital Age",
      type: "Conference",
      year: "2018",
      publisher: "Research Handbook on Digital Transformations",
      description: "Examination of how digital technologies are reshaping Islamic financial services.",
      link: "#"
    },
    {
      id: 9,
      title: "ESG and Islamic Investment: Convergence and Divergence",
      type: "Publication",
      year: "2018",
      publisher: "Journal of Sustainable Finance & Investment",
      description: "Comparative analysis of environmental, social, and governance criteria in Islamic investments.",
      link: "#"
    },
    {
      id: 10,
      title: "Risk Management in Islamic Financial Institutions",
      type: "Conference",
      year: "2017",
      publisher: "World Congress on Risk Management",
      description: "Frameworks for risk identification and mitigation in Shariah-compliant institutions.",
      link: "#"
    }
  ];
  
  // Combine all publication sources
  const allPublications = [...researchBooks, ...researchPapers, ...soasPublications, ...conferencePublications, ...publications];
  
  const filteredPublications = activeType === 'All' 
    ? allPublications 
    : allPublications.filter(pub => {
        // Books - authored or co-authored books
        if (activeType === 'Books') {
          return pub.type === 'Publication' && (pub.id >= 90 && pub.id <= 99 || pub.id === 112 || pub.id === 113 || pub.id === 116);
        }
        // Harvard - all Harvard Forum related materials
        if (activeType === 'Harvard') {
          return pub.publisher && pub.publisher.includes('Harvard');
        }
        // SOAS - SOAS workshop reports
        if (activeType === 'SOAS') {
          return pub.publisher && pub.publisher.includes('SOAS');
        }
        // LSE - LSE specific content
        if (activeType === 'LSE') {
          return pub.publisher && (pub.publisher.includes('London School of Economics') || pub.publisher === 'LSE');
        }
        // Articles - research papers and journal articles
        if (activeType === 'Articles') {
          return (pub.id >= 200 && pub.id <= 210) || (pub.id >= 1 && pub.id <= 10);
        }
        return false;
      });
  
  const publicationTypes: PublicationType[] = ['All', 'Books', 'Harvard', 'SOAS', 'LSE', 'Articles'];
  
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Research & Publications" />
        
        {/* Research Focus Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-serif font-bold mb-4 text-navy-800">Research Focus</h3>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dr. Ali's research spans the intersection of Islamic finance, ethics, and information systems. 
            His work has been instrumental in developing frameworks for Shariah-compliant financial 
            products, analyzing the ethical dimensions of Islamic banking, and exploring the application 
            of information science to Islamic financial institutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-50 rounded-lg p-6 border border-navy-100">
              <h4 className="text-xl font-serif font-bold mb-3 text-navy-800">Primary Research Areas</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Islamic financial system design and implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Ethical dimensions of Islamic banking practices</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Information systems for Shariah compliance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-navy-700 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Sustainable and responsible Islamic investment</span>
                </li>
              </ul>
            </div>
            <div className="bg-gold-50 rounded-lg p-6 border border-gold-100">
              <h4 className="text-xl font-serif font-bold mb-3 text-navy-800">Current Projects</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Digital transformation of Islamic financial services</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">ESG integration in Islamic investment portfolios</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Fintech solutions for Islamic microfinance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-4 w-4 bg-gold-500 rounded-full mt-1 mr-2 flex-shrink-0"></div>
                  <span className="text-slate-700">Comparative analysis of global Islamic banking regulations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-16 border-b border-gray-200 pb-4">
            {publicationTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-sm uppercase tracking-wider transition-all duration-200 ${
                  activeType === type
                    ? 'text-gray-900 font-medium border-b-2 border-gray-900 pb-4 -mb-[18px]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        {/* Publications List Display */}
        <div className="max-w-5xl mx-auto">
          {/* Section Header Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {activeType === 'All' ? 'All Publications' : 
               activeType === 'Books' ? 'Authored and Co-Authored Books' :
               activeType === 'Harvard' ? 'Harvard University Forum on Islamic Finance Series' :
               activeType === 'SOAS' ? 'SOAS Islamic Finance Workshop Series' :
               activeType === 'LSE' ? 'LSE Workshop Series' :
               'Research Papers and Journal Articles'}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {activeType === 'All' ? 'Comprehensive collection of research papers, conference proceedings, and publications spanning Islamic finance, ethics, and information systems.' :
               activeType === 'Books' ? 'Dr. Ali has authored and co-authored numerous influential books on Islamic finance, fintech, sustainability, and Shariah governance with leading academic publishers including Edward Elgar, Palgrave Macmillan, Springer-Nature, Edinburgh University Press, and Routledge.' :
               activeType === 'Harvard' ? 'Dr. Ali has been instrumental in organizing and contributing to the prestigious Harvard University Forums on Islamic Finance. These publications represent over two decades of groundbreaking research and discussions that have shaped the field of Islamic finance globally.' :
               activeType === 'SOAS' ? 'Key contributions to the SOAS Islamic Finance Workshop Series, advancing Islamic finance research and education through collaborative efforts with SOAS University of London.' :
               activeType === 'LSE' ? 'Comprehensive workshop reports from the LSE-Harvard collaborative series covering critical topics including Tawarruq, Sukuk, Risk Management, Ethics and Governance, and Insolvency in Islamic Finance.' :
               'Academic publications, research papers, and scholarly articles in peer-reviewed journals covering Islamic finance, fintech, sustainability, and information systems.'}
            </p>
          </div>

          {/* Publications List with Scroll */}
          <div className="border border-gray-200 rounded-lg bg-white" style={{ height: '600px' }}>
            <div className="overflow-y-auto h-full custom-scrollbar">
              <div className="space-y-6 p-6">
            {filteredPublications.length > 0 ? (
              filteredPublications.map(pub => (
                <div key={pub.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  {pub.link ? (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block group"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1 pr-8">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {pub.description}
                          </p>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          {pub.year}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {pub.description}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        {pub.year}
                      </div>
                    </div>
                  )}
                  {pub.link && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <a 
                        href={pub.link} 
                        download
                        className="inline-flex items-center text-gray-500 hover:text-gray-700 text-xs font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  )}
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