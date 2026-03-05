export interface HarvardArchive {
    id: number;
    year: string;
    title: string;
    subTitle?: string;
    description?: string; // For accessibility or if we want to show it
    links: {
        label: string;
        url: string;
    }[];
}

export const harvardArchives: HarvardArchive[] = [
    {
        id: 1,
        year: "1997",
        title: "ISLAMIC FINANCE IN THE GLOBAL MARKET",
        links: [
            { label: "Program", url: "/conference-archives/HIFC Archives/1st Harvard Forum Program_1997.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/1st Harvard Forum Short Report-1997.pdf" }
        ]
    },
    {
        id: 2,
        year: "1998",
        title: "ISLAMIC FINANCE INTO THE 21ST CENTURY",
        links: [
            { label: "Book", url: "/conference-archives/HIFC Archives/2nd Harvard Forum Proceedings.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/2nd Harvard Forum Pogram_1998.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/2nd Harvard Forum Short Report_1998.pdf" }
        ]
    },
    {
        id: 3,
        year: "1999",
        title: "ISLAMIC FINANCE: LOCAL CHALLENGES, GLOBAL OPPORTUNITIES",
        links: [
            { label: "Book", url: "/conference-archives/HIFC Archives/3rd Harvard Forum Proceedings.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/3rd Harvard Forum Program_1999.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/3rd Harvard Forum Short Report_1999.pdf" }
        ]
    },
    {
        id: 4,
        year: "2000",
        title: "ISLAMIC FINANCE: THE TASK AHEAD",
        links: [
            { label: "Book", url: "/research-books/Proceedings/4th Harvard Forum Proceedings.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/4th Harvard Forum Program_2000.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/4th Harvard Forum Shhort Report_2000.pdf" }
        ]
    },
    {
        id: 5,
        year: "2002",
        title: "ISLAMIC FINANCE: DYNAMICS AND DEVELOPMENT",
        links: [
            { label: "Book", url: "/research-books/Proceedings/5th Harvard Forum Proceedings.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/5th Harvard Forum Program_2002.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/5th Harvard Forum Short Report_2002.pdf" }
        ]
    },
    {
        id: 6,
        year: "2004",
        title: "ISLAMIC FINANCE CURRENT LEGAL AND REGULATORY ISSUES",
        links: [
            { label: "Book", url: "/research-books/6thForumBook/151171 Text.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/6th Harvard Forum Pogram_2004.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/6th Harvard Forum Short Report_2004.pdf" }
        ]
    },
    {
        id: 7,
        year: "2006",
        title: "INTEGRATING ISLAMIC FINANCE INTO THE MAINSTREAM",
        links: [
            { label: "Book", url: "/research-books/7thForumBook/180061 Text.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/7th Harvard Forum  Program_2006.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/7th Harvard Forum _ Short-Report_2006.pdf" }
        ]
    },
    {
        id: 8,
        year: "2008",
        title: "ISLAMIC FINANCE: INNOVATION AND AUTHENTICITY",
        links: [
            { label: "Book", url: "/research-books/8th Forum Book/8th Harvard Forum Publication 2008.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/8th Harvard Forum Program_2008.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/8th Harvard Forum Report_2008.pdf" }
        ]
    },
    {
        id: 9,
        year: "2010",
        title: "BUILDING BRIDGES ACROSS FINANCIAL COMMUNITIES",
        links: [
            { label: "Book", url: "/research-books/9thForumBook/Building Bridges Across Financial Communities.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/9th Harvard Forum Program_2010.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/9th Harvard Forum Short Report_2010.pdf" }
        ]
    },
    {
        id: 10,
        year: "2012",
        title: "ISLAMIC FINANCE AND DEVELOPMENT",
        links: [
            { label: "Book", url: "/research-books/10th Forum Book/10th Harvard Forum Publication 2012.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/10th Harvard Forum Program_2012.pdf" },
            { label: "Report", url: "/conference-archives/HIFC Archives/10th Harvard Forum Report_2012.pdf" }
        ]
    },
    {
        id: 11,
        year: "2014",
        title: "TAKAFUL AND ALTERNATIVE COOPERATIVE FINANCE: CHALLENGES AND OPPORTUNITIES",
        links: [
            { label: "Book", url: "/ifc harvard/2014-Harvard-Forum-Publication.pdf" },
            { label: "Program", url: "/conference-archives/HIFC Archives/11th Harvard Forum Program _2014.pdf" }
        ]
    },
    {
        id: 12,
        year: "2016",
        title: "SUSTAINABLE DEVELOPMENT GOALS: WHAT ROLE FOR ISLAMIC FINANCE?",
        links: [
            { label: "Program", url: "/ifc harvard/2016-HIF-Forum.pdf" }
        ]
    },
    {
        id: 13,
        year: "2018",
        title: "ISLAMIC FINANCE AND BUSINESS: CAPITAL, COMMERCE AND CAREERS",
        links: [
            { label: "Program", url: "/ifc harvard/2018-HIF-Forum.pdf" }
        ]
    },
    // Note: 2020 Canceled due to Covid-19? Often skipped or noted.
    {
        id: 99,
        year: "2020",
        title: "CONFERENCE CANCELED DUE TO COVID-19",
        links: [],
        description: "THE 14TH FORUM WAS CANCELED DUE TO COVID-19" // Special case styling likely needed
    },
    {
        id: 14,
        year: "2022",
        title: "WAQF AND PHILANTHROPIC FOUNDATIONS: SHARED VALUES FOR SOCIO-ECONOMIC DEVELOPMENT",
        links: [
            { label: "Book", url: "/research-books/14th Forum Book/14th Harvard Forum Publication 2022.pdf" },
            { label: "Program", url: "/ifc harvard/2022-HIF-Forum.pdf" },
            { label: "Report", url: "/ifc harvard/2022-HUMA-Report.pdf" }
        ]
    },
    {
        id: 15,
        year: "2024",
        title: "VALUES IN VALUE CREATION: REVISITING THE RULES OF GLOBAL BUSINESS",
        links: [
            { label: "Brochure", url: "/ifc harvard/2024-HUMA-Conf-Brochure.pdf" },
            { label: "Flyer", url: "/ifc harvard/2024-HUMA-Conf-Flyer.pdf" }
        ]
    }
];
