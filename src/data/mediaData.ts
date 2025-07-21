export interface MediaPhoto {
  id: string;
  filename: string;
  title: string;
  description: string;
  category: 'harvard' | 'government' | 'academic' | 'international' | 'religious';
  path: string;
  date?: string;
  eventId?: string;
}

export interface MediaDocument {
  id: string;
  filename: string;
  title: string;
  description: string;
  type: 'pdf' | 'docx';
  path: string;
  date?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  significance: string;
  photos: MediaPhoto[];
  category: 'harvard' | 'government' | 'academic' | 'international' | 'religious';
}

export interface NewspaperImage {
  id: string;
  title: string;
  imagePath: string;
  description: string;
  date?: string;
}

// Individual photos with detailed descriptions
export const mediaPhotos: MediaPhoto[] = [
  // Harvard Farewell Event Photos
  {
    id: 'harvard-farewell-1',
    filename: '061814_Nazim_Ali_074.jpg',
    title: 'Harvard Farewell Reception',
    description: 'Dr. Syed Nazim Ali at his farewell reception hosted by Harvard Law School, celebrating his distinguished tenure and contributions to Islamic finance education.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/061814_Nazim_Ali_074.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },
  {
    id: 'harvard-farewell-2',
    filename: '061814_Nazim_Ali_309.jpg',
    title: 'Colleagues and Distinguished Guests',
    description: 'Faculty members and distinguished guests gathering to honor Dr. Ali\'s legacy at Harvard University during the farewell ceremony.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/061814_Nazim_Ali_309.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },
  {
    id: 'harvard-farewell-3',
    filename: '061814_Nazim_Ali_314.jpg',
    title: 'Academic Recognition Ceremony',
    description: 'Presentation of recognition awards acknowledging Dr. Ali\'s pioneering work in establishing Islamic finance programs at Harvard.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/061814_Nazim_Ali_314.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },
  {
    id: 'harvard-farewell-4',
    filename: '061814_Nazim_Ali_333.jpg',
    title: 'Farewell Address',
    description: 'Dr. Ali delivering his farewell address, reflecting on two decades of groundbreaking work in Islamic finance education and research.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/061814_Nazim_Ali_333.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },
  {
    id: 'harvard-farewell-5',
    filename: '061814_Nazim_Ali_345.jpg',
    title: 'Celebratory Gathering',
    description: 'Students, faculty, and industry leaders celebrating Dr. Ali\'s contributions to bridging Islamic finance with Western academia.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/061814_Nazim_Ali_345.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },
  {
    id: 'harvard-farewell-6',
    filename: 'Harvard Law School Dean, Martha Minow 2014.jpg',
    title: 'With Dean Martha Minow',
    description: 'Dr. Ali with Harvard Law School Dean Martha Minow, who praised his visionary leadership in establishing the Islamic Finance Project.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/Harvard Law School Dean, Martha Minow 2014.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },
  {
    id: 'harvard-farewell-7',
    filename: 'Prof Martha Minow and Prof Intisar Rabb.jpg',
    title: 'Harvard Law Faculty Leadership',
    description: 'Dean Martha Minow and Professor Intisar Rabb, key supporters of the Islamic Legal Studies Program, at the farewell reception.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/Prof Martha Minow and Prof Intisar Rabb.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },
  {
    id: 'harvard-farewell-8',
    filename: 'Thomas D Mullins at the Harvard Farewell Dinner.jpg',
    title: 'Thomas Mullins Tribute',
    description: 'Thomas Mullins, former Assistant Secretary of the U.S. Treasury, speaking at the farewell dinner about Dr. Ali\'s impact on U.S.-Islamic finance relations.',
    category: 'harvard',
    path: '/Media/Photos/Harvard Farewell/Thomas D Mullins at the Harvard Farewell Dinner.jpg',
    date: 'June 18, 2014',
    eventId: 'harvard-farewell-2014'
  },

  // Harvard Islamic Finance Forum 2004
  {
    id: 'harvard-forum-2004',
    filename: 'Harvard University  Islamic Finance Forum 2004 (My daughters Nargis, Nilufer and Nawal).jpg',
    title: 'Harvard Islamic Finance Forum 2004 - Family Moment',
    description: 'Dr. Ali with his daughters Nargis, Nilufer, and Nawal at the 2004 Harvard University Islamic Finance Forum, showcasing the personal side of academic leadership.',
    category: 'harvard',
    path: '/Media/Photos/Harvard University  Islamic Finance Forum 2004 (My daughters Nargis, Nilufer and Nawal).jpg',
    date: 'April 2004',
    eventId: 'harvard-forum-2004'
  },

  // Harvard General
  {
    id: 'harvard-graduation',
    filename: 'Harvard University Graduation Scene.jpg',
    title: 'Harvard University Graduation Ceremony',
    description: 'A momentous graduation ceremony at Harvard University, representing the academic excellence and tradition that Dr. Ali contributed to throughout his tenure.',
    category: 'harvard',
    path: '/Media/Photos/Harvard University Graduation Scene.jpg',
    date: '2000s',
    eventId: 'harvard-general'
  },

  // First Harvard Forum 1997
  {
    id: 'first-forum-1997',
    filename: 'HRH Prince Amr Bin Faisal Al Saud is speaking at the First Harvard University Forum on Islamic Finance in May 1997.jpg',
    title: 'First Harvard Islamic Finance Forum - Royal Keynote',
    description: 'HRH Prince Amr Bin Faisal Al Saud delivering the keynote address at the inaugural Harvard University Forum on Islamic Finance in May 1997, marking the beginning of Harvard\'s leadership in Islamic finance education.',
    category: 'international',
    path: '/Media/Photos/HRH Prince Amr Bin Faisal Al Saud is speaking at the First Harvard University Forum on Islamic Finance in May 1997.jpg',
    date: 'May 1997',
    eventId: 'first-harvard-forum-1997'
  },

  // Government Relations
  {
    id: 'dhs-iftar',
    filename: 'Dept Home Security Iftar in Wahsington DC with U.S. Home Land Secretary Janet Napolitano.jpg',
    title: 'Department of Homeland Security Iftar',
    description: 'Dr. Ali attending the Department of Homeland Security Iftar in Washington DC with U.S. Homeland Security Secretary Janet Napolitano, demonstrating high-level government engagement on Islamic affairs.',
    category: 'government',
    path: '/Media/Photos/Dept Home Security Iftar in Wahsington DC with U.S. Home Land Secretary Janet Napolitano.jpg',
    date: '2010s',
    eventId: 'government-engagement'
  },
  {
    id: 'treasury-forum',
    filename: 'With U.S. Undersecretary for Treasury at Harvard Forum.jpg',
    title: 'U.S. Treasury Partnership',
    description: 'Dr. Ali with the U.S. Undersecretary for Treasury at a Harvard Forum, highlighting the collaboration between academia and government on Islamic finance policy.',
    category: 'government',
    path: '/Media/Photos/With U.S. Undersecretary for Treasury at Harvard Forum.jpg',
    date: '2000s',
    eventId: 'treasury-collaboration'
  },
  {
    id: 'mullins-taylor',
    filename: 'Thomas Mullins, U.S. Undersecretary John Taylor.jpg',
    title: 'High-Level Treasury Meeting',
    description: 'Thomas Mullins and U.S. Undersecretary John Taylor at a strategic meeting on Islamic finance integration into the U.S. financial system.',
    category: 'government',
    path: '/Media/Photos/Thomas Mullins, U.S. Undersecretary John Taylor.jpg',
    date: '2000s',
    eventId: 'treasury-collaboration'
  },

  // Saudi Arabia Visit 2012
  {
    id: 'saudi-visit-2012',
    filename: 'Saudi ChairsProgram Directos visit to Saudi Arabia in 2012 meeting with HRH King Salman (LtoR Syed Nazim Ali, Sherman Jackson.jpg',
    title: 'Meeting with Future King Salman',
    description: 'Saudi Chairs Program Directors\' historic visit to Saudi Arabia in 2012, meeting with HRH King Salman (then Crown Prince). From left to right: Dr. Syed Nazim Ali and Sherman Jackson, discussing academic partnerships.',
    category: 'international',
    path: '/Media/Photos/Saudi ChairsProgram Directos visit to Saudi Arabia in 2012 meeting with HRH King Salman (LtoR Syed Nazim Ali, Sherman Jackson.jpg',
    date: '2012',
    eventId: 'saudi-visit-2012'
  },

  // Qatar CEO Roundtable
  {
    id: 'qatar-ceo-roundtable',
    filename: 'CEOs Roundtable H.E. the Governor Abdullah Saif Al Thani and Dr Volker Nienhaus.jpg',
    title: 'Qatar CEO Roundtable on Islamic Finance',
    description: 'High-level CEO Roundtable featuring H.E. Governor Abdullah Saif Al Thani and Dr. Volker Nienhaus, discussing the future of Islamic banking in the Gulf region.',
    category: 'international',
    path: '/Media/Photos/CEOs Roundtable H.E. the Governor Abdullah Saif Al Thani and Dr Volker Nienhaus.jpg',
    date: '2000s',
    eventId: 'qatar-roundtable'
  },

  // Academic Events
  {
    id: 'shariah-scholar',
    filename: 'Eminent Shariah Scholar, Shaykh Nizam Yaquby attending Harvard Forum.jpg',
    title: 'Shaykh Nizam Yaqoby at Harvard',
    description: 'Eminent Shariah Scholar Shaykh Nizam Yaqoby attending Harvard Forum, bridging classical Islamic jurisprudence with modern financial practices.',
    category: 'academic',
    path: '/Media/Photos/Eminent Shariah Scholar, Shaykh Nizam Yaquby attending Harvard Forum.jpg',
    date: '2000s',
    eventId: 'shariah-scholars-forum'
  },
  {
    id: 'lebanon-central-bank',
    filename: 'Prof Samuel Hayes with Central Bank of Lebanon Governor Jachi.jpg',
    title: 'Lebanon Central Bank Partnership',
    description: 'Professor Samuel Hayes with Central Bank of Lebanon Governor, discussing Islamic finance implementation in Lebanese banking system.',
    category: 'international',
    path: '/Media/Photos/Prof Samuel Hayes with Central Bank of Lebanon Governor Jachi.jpg',
    date: '2000s',
    eventId: 'lebanon-partnership'
  }
];

// Organize photos into events
export const events: Event[] = [
  {
    id: 'harvard-farewell-2014',
    title: 'Harvard Law School Farewell Reception',
    date: 'June 18, 2014',
    location: 'Harvard Law School, Cambridge, MA',
    description: 'A prestigious farewell reception honoring Dr. Syed Nazim Ali\'s transformative tenure at Harvard University.',
    significance: 'This event marked the culmination of Dr. Ali\'s pioneering work in establishing Islamic finance as a legitimate field of study at one of the world\'s most prestigious universities. The reception was attended by leading academics, government officials, and industry leaders.',
    photos: mediaPhotos.filter(p => p.eventId === 'harvard-farewell-2014'),
    category: 'harvard'
  },
  {
    id: 'first-harvard-forum-1997',
    title: 'First Harvard University Forum on Islamic Finance',
    date: 'May 1997',
    location: 'Harvard University, Cambridge, MA',
    description: 'The inaugural Harvard Forum on Islamic Finance, establishing Harvard as a global leader in Islamic finance education.',
    significance: 'This groundbreaking forum, organized by Dr. Ali, was the first of its kind at a major Western university. It brought together scholars, practitioners, and policymakers, setting the foundation for decades of academic excellence in Islamic finance.',
    photos: mediaPhotos.filter(p => p.eventId === 'first-harvard-forum-1997'),
    category: 'harvard'
  },
  {
    id: 'harvard-forum-2004',
    title: 'Harvard Islamic Finance Forum 2004',
    date: 'April 2004',
    location: 'Harvard University, Cambridge, MA',
    description: 'The 2004 edition of the Harvard Islamic Finance Forum, continuing the tradition of excellence in Islamic finance discourse.',
    significance: 'By 2004, the Harvard Forum had become the premier global gathering for Islamic finance professionals, demonstrating the sustained impact of Dr. Ali\'s vision.',
    photos: mediaPhotos.filter(p => p.eventId === 'harvard-forum-2004'),
    category: 'harvard'
  },
  {
    id: 'saudi-visit-2012',
    title: 'Saudi Arabia Royal Meeting',
    date: '2012',
    location: 'Riyadh, Saudi Arabia',
    description: 'Historic meeting between Saudi Chairs Program Directors and HRH King Salman (then Crown Prince).',
    significance: 'This high-level meeting strengthened academic partnerships between Harvard and Saudi institutions, advancing Islamic finance education globally.',
    photos: mediaPhotos.filter(p => p.eventId === 'saudi-visit-2012'),
    category: 'international'
  },
  {
    id: 'treasury-collaboration',
    title: 'U.S. Treasury Collaboration',
    date: 'Early 2000s',
    location: 'Washington, DC & Cambridge, MA',
    description: 'Strategic partnerships with U.S. Treasury officials on Islamic finance policy.',
    significance: 'These collaborations helped shape U.S. policy on Islamic finance, demonstrating Dr. Ali\'s influence in bridging academic research with practical policy implementation.',
    photos: mediaPhotos.filter(p => p.eventId === 'treasury-collaboration'),
    category: 'government'
  },
  {
    id: 'government-engagement',
    title: 'U.S. Government Engagement',
    date: '2010s',
    location: 'Washington, DC',
    description: 'High-level engagement with U.S. government officials on Islamic affairs and finance.',
    significance: 'Dr. Ali\'s participation in government events like the DHS Iftar demonstrated his role as a bridge between Islamic communities and U.S. government institutions.',
    photos: mediaPhotos.filter(p => p.eventId === 'government-engagement'),
    category: 'government'
  },
  {
    id: 'qatar-roundtable',
    title: 'Qatar CEO Roundtable',
    date: '2000s',
    location: 'Doha, Qatar',
    description: 'Executive roundtable on Islamic finance innovation in the Gulf region.',
    significance: 'This gathering of regional leaders helped establish Qatar as a major hub for Islamic finance, with Dr. Ali\'s academic insights guiding practical implementation.',
    photos: mediaPhotos.filter(p => p.eventId === 'qatar-roundtable'),
    category: 'international'
  },
  {
    id: 'shariah-scholars-forum',
    title: 'Shariah Scholars Forum',
    date: '2000s',
    location: 'Harvard University, Cambridge, MA',
    description: 'Gathering of leading Shariah scholars to discuss contemporary Islamic finance challenges.',
    significance: 'These forums brought together traditional Islamic scholars with modern finance experts, creating unprecedented dialogue and innovation in Islamic finance.',
    photos: mediaPhotos.filter(p => p.eventId === 'shariah-scholars-forum'),
    category: 'academic'
  },
  {
    id: 'lebanon-partnership',
    title: 'Lebanon Banking Partnership',
    date: '2000s',
    location: 'Beirut, Lebanon & Cambridge, MA',
    description: 'Collaboration with Lebanon\'s Central Bank on Islamic finance implementation.',
    significance: 'This partnership helped Lebanon develop its Islamic banking sector, demonstrating the practical impact of Harvard\'s Islamic finance research.',
    photos: mediaPhotos.filter(p => p.eventId === 'lebanon-partnership'),
    category: 'international'
  }
];

// Updated document data with better descriptions
export const mediaDocuments: MediaDocument[] = [
  {
    id: 'doc-1',
    filename: 'DVD Cover.pdf',
    title: 'Islamic Finance Educational DVD',
    description: 'Cover design for the comprehensive Islamic Finance educational DVD series produced by Harvard\'s Islamic Finance Project.',
    type: 'pdf',
    path: '/Media/DVD Cover.pdf',
    date: '2000s'
  },
  {
    id: 'doc-2',
    filename: 'Newspaper-001.pdf',
    title: 'Major Newspaper Coverage - Part 1',
    description: 'Collection of newspaper articles featuring Dr. Ali\'s work and the Harvard Islamic Finance Project\'s global impact.',
    type: 'pdf',
    path: '/Media/Newspaper-001.pdf'
  },
  {
    id: 'doc-3',
    filename: 'Newspaper-002.pdf',
    title: 'Major Newspaper Coverage - Part 2',
    description: 'Additional press coverage highlighting the growth of Islamic finance education and Dr. Ali\'s thought leadership.',
    type: 'pdf',
    path: '/Media/Newspaper-002.pdf'
  },
  {
    id: 'doc-4',
    filename: 'Print Media Coverage.docx',
    title: 'Comprehensive Print Media Archive',
    description: 'Detailed archive of print media coverage spanning Dr. Ali\'s career, including interviews, op-eds, and feature articles.',
    type: 'docx',
    path: '/Media/Print Media Coverage.docx'
  },
  {
    id: 'doc-5',
    filename: 'The Middle East at Harvard.pdf',
    title: 'The Middle East at Harvard Publication',
    description: 'Official Harvard publication documenting Middle Eastern studies programs, featuring the Islamic Finance Project\'s contributions.',
    type: 'pdf',
    path: '/Media/The Middle East at Harvard.pdf'
  },
  {
    id: 'doc-6',
    filename: 'Youtube.docx',
    title: 'YouTube Video Archive',
    description: 'Comprehensive list of Dr. Ali\'s lectures, interviews, and panel discussions available on YouTube and other video platforms.',
    type: 'docx',
    path: '/Media/Youtube.docx'
  },
  {
    id: 'doc-7',
    filename: 'Harvard University Gazette May 2, 2002_U.S.Treasury Seminar on Islamic Finance 101 in Washington DC.pdf',
    title: 'Harvard Gazette: U.S. Treasury Seminar',
    description: 'Harvard University Gazette coverage of the groundbreaking "Islamic Finance 101" seminar at the U.S. Treasury in Washington DC, May 2, 2002.',
    type: 'pdf',
    path: '/Media/Photos/Harvard University Gazette May 2, 2002_U.S.Treasury Seminar on Islamic Finance 101 in Washington DC.pdf',
    date: 'May 2, 2002'
  },
  {
    id: 'doc-8',
    filename: 'Heerashah Mian Masjid, New Bus Stand Hanomkonda_My father had reopened this mosque in early 1950s which was abondand for several years.pdf',
    title: 'Heerashah Mian Masjid Heritage',
    description: 'Historical documentation of Heerashah Mian Masjid in Hanomkonda, which Dr. Ali\'s father helped reopen in the early 1950s after years of abandonment.',
    type: 'pdf',
    path: '/Media/Photos/Heerashah Mian Masjid, New Bus Stand Hanomkonda_My father had reopened this mosque in early 1950s which was abondand for several years.pdf',
    date: '1950s'
  },
  {
    id: 'doc-9',
    filename: 'HIFIP DataBank _CD-ROM Cover.pdf',
    title: 'HIFIP DataBank CD-ROM',
    description: 'Cover design for the Harvard Islamic Finance Information Program (HIFIP) DataBank CD-ROM, a pioneering digital resource for Islamic finance research.',
    type: 'pdf',
    path: '/Media/Photos/HIFIP DataBank _CD-ROM Cover.pdf'
  },
  {
    id: 'doc-10',
    filename: 'President Mahathir Honored Lifetime Achievement Award from LARIBA _Ceremony held at Bosnia Center in Chicago, Novemever 2011.pdf',
    title: 'President Mahathir Lifetime Achievement Award',
    description: 'Documentation of the ceremony where Malaysian President Mahathir received the Lifetime Achievement Award from LARIBA at the Bosnia Center in Chicago, November 2011.',
    type: 'pdf',
    path: '/Media/Photos/President Mahathir Honored Lifetime Achievement Award from LARIBA _Ceremony held at Bosnia Center in Chicago, Novemever 2011.pdf',
    date: 'November 2011'
  }
];

// Newspaper coverage images
export const newspaperImages: NewspaperImage[] = [
  {
    id: 'newspaper-001',
    title: 'Sharon ADL Inter-Faith Youth Leadership Program',
    imagePath: '/Media/Newspaper-001.jpg',
    description: 'Article featuring the ADL Sharon Interfaith Youth Leadership Program where participants and facilitators, including Imam Masood from the greater Boston area, gather to learn about Ramadan. The program brings together teens from diverse faith backgrounds to deepen understanding and promote interfaith dialogue.',
    date: 'Sharon, MA'
  },
  {
    id: 'newspaper-002',
    title: 'Harvard University Gazette - GSE Aid to Boston Schools',
    imagePath: '/Media/Newspaper-002.jpg',
    description: 'Harvard University Gazette coverage featuring multiple stories including "$7.5 Million Gift from Reffers Will Refurbish Center for Science and International Affairs" and "GSE To Aid Boston Schools Through Gift Partnership". The issue highlights women advisors, educational partnerships, and celebrates achievements in women\'s studies.',
    date: 'Harvard Gazette Issue'
  },
  {
    id: 'newspaper-003',
    title: 'The Middle East at Harvard Newsletter - HIFIP Database Launch',
    imagePath: '/Media/Newspaper-003.jpg',
    description: 'The Center for Middle Eastern Studies newsletter announcing the launch of the Harvard Islamic Finance Information Program (HIFIP) database management system. Features Dr. S. Nazim Ali as Director of Operations for the Islamic Finance Program, working alongside Prof. Thomas D. Mullins, CMES Associate Director, to provide comprehensive Islamic banking and finance information.',
    date: 'Summer 1996'
  }
];

// Helper functions remain the same
export const getAllMedia = () => ({
  photos: mediaPhotos,
  documents: mediaDocuments,
  events: events,
  newspapers: newspaperImages
});

export const getPhotosByCategory = (category: string) => {
  if (category === 'all') return mediaPhotos;
  return mediaPhotos.filter(photo => photo.category === category);
};

export const getEventsByCategory = (category: string) => {
  if (category === 'all') return events;
  return events.filter(event => event.category === category);
};

export const searchMedia = (query: string) => {
  const lowerQuery = query.toLowerCase();
  
  const matchingPhotos = mediaPhotos.filter(photo =>
    photo.title.toLowerCase().includes(lowerQuery) ||
    photo.description.toLowerCase().includes(lowerQuery) ||
    photo.filename.toLowerCase().includes(lowerQuery)
  );
  
  const matchingDocuments = mediaDocuments.filter(doc =>
    doc.title.toLowerCase().includes(lowerQuery) ||
    doc.description.toLowerCase().includes(lowerQuery) ||
    doc.filename.toLowerCase().includes(lowerQuery)
  );

  const matchingEvents = events.filter(event =>
    event.title.toLowerCase().includes(lowerQuery) ||
    event.description.toLowerCase().includes(lowerQuery) ||
    event.significance.toLowerCase().includes(lowerQuery)
  );
  
  return {
    photos: matchingPhotos,
    documents: matchingDocuments,
    events: matchingEvents
  };
};