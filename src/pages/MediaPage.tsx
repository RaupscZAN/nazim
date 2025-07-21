import React, { useState, useMemo } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Award, FileText, Globe, Video, Camera, Search, X, Newspaper, BookOpen, Calendar, Mic, MapPin } from 'lucide-react';
import EventSlideshow from '../components/EventSlideshow';
import NewspaperCoverage from '../components/NewspaperCoverage';
import { events, searchMedia, newspaperImages } from '../data/mediaData';
import { AnimatePresence } from 'framer-motion';

const MediaPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const filteredContent = useMemo(() => {
    if (searchQuery) {
      return searchMedia(searchQuery);
    }
    return {
      events: events,
      documents: []
    };
  }, [searchQuery]);

  const handleToggleEvent = (eventId: string) => {
    setExpandedEventId(expandedEventId === eventId ? null : eventId);
  };

  // Group events by category for organized display
  const harvardEvents = filteredContent.events?.filter(e => e.category === 'harvard') || [];
  const governmentEvents = filteredContent.events?.filter(e => e.category === 'government') || [];
  const internationalEvents = filteredContent.events?.filter(e => e.category === 'international') || [];
  const academicEvents = filteredContent.events?.filter(e => e.category === 'academic') || [];

  return (
    <div className="py-16">
      <div className="container-narrow">
        <SectionHeading title="Media & Recognition" />
        
        {/* Search Bar */}
        <div className="mb-8 bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search events, photos, and media content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>
        
        {searchQuery && (
          <div className="mb-6 text-slate-600">
            Found {filteredContent.events?.length || 0} events matching "{searchQuery}"
          </div>
        )}
        
        {/* Awards Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
            <Award className="mr-3 text-gold-500" size={28} />
            Awards & Honors
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-gold-500 font-serif text-xl font-bold mb-2">2022</div>
              <h4 className="text-xl font-medium text-navy-800 mb-2">Harvard University Muslim Alumni Foundation Award</h4>
              <p className="text-slate-600">
                Recognized for outstanding contributions to Islamic finance education and research
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-gold-500 font-serif text-xl font-bold mb-2">2019</div>
              <h4 className="text-xl font-medium text-navy-800 mb-2">Islamic Finance Leadership Award</h4>
              <p className="text-slate-600">
                Awarded by the Global Islamic Finance Awards committee for pioneering research
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-gold-500 font-serif text-xl font-bold mb-2">2017</div>
              <h4 className="text-xl font-medium text-navy-800 mb-2">Royal Award for Islamic Finance</h4>
              <p className="text-slate-600">
                Presented by the King of Malaysia for contributions to global Islamic financial systems
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="text-gold-500 font-serif text-xl font-bold mb-2">2014</div>
              <h4 className="text-xl font-medium text-navy-800 mb-2">Euromoney Outstanding Contribution Award</h4>
              <p className="text-slate-600">
                For leadership in developing Islamic finance frameworks in international markets
              </p>
            </div>
          </div>
        </section>
        
        {/* Newspaper Coverage Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
            <Newspaper className="mr-3 text-navy-600" size={28} />
            Newspaper Coverage
          </h3>
          
          <NewspaperCoverage newspapers={newspaperImages} />
        </section>

        {/* Academic Publications Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
            <BookOpen className="mr-3 text-navy-600" size={28} />
            Academic Publications & Research
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-xl font-medium text-navy-800 mb-2">Islamic Finance: The Regulatory Challenge</h4>
              <p className="text-sm text-slate-600 mb-3">Editor • John Wiley & Sons, 2007</p>
              <p className="text-slate-700 mb-4">
                This seminal work brings together leading scholars and practitioners to address the complex regulatory frameworks governing Islamic finance. Dr. Ali's editorial leadership resulted in a comprehensive resource that has become essential reading for regulators and policymakers worldwide.
              </p>
              <div className="bg-slate-50 rounded p-4 text-sm text-slate-700">
                <p className="font-semibold mb-2">Key Contributions:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Framework for harmonizing Shariah compliance with international banking regulations</li>
                  <li>Case studies from Malaysia, GCC countries, and Western markets</li>
                  <li>Guidelines for central banks supervising Islamic financial institutions</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-xl font-medium text-navy-800 mb-2">Building Bridges Across Financial Communities</h4>
              <p className="text-sm text-slate-600 mb-3">Lead Author • Harvard Law School Publication, 2010</p>
              <p className="text-slate-700">
                A comprehensive analysis of how Islamic finance principles can complement and enhance the global financial system. This work examines successful integration models and proposes frameworks for increased cooperation between conventional and Islamic financial institutions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-xl font-medium text-navy-800 mb-2">Harvard Islamic Finance Information Program (HIFIP) DataBank</h4>
              <p className="text-sm text-slate-600 mb-3">Founder & Director • 1995-2014</p>
              <p className="text-slate-700">
                Created and maintained the world's first comprehensive digital repository of Islamic finance resources, including research papers, legal documents, and industry reports. The HIFIP DataBank served thousands of researchers, students, and practitioners globally.
              </p>
            </div>
          </div>
        </section>

        {/* Event Documentation Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
            <Calendar className="mr-3 text-navy-600" size={28} />
            Event Documentation
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-xl font-medium text-navy-800 mb-3">President Mahathir Lifetime Achievement Award Ceremony</h4>
              <p className="text-sm text-slate-600 mb-3">LARIBA • Bosnia Center, Chicago • November 2011</p>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 mb-4">
                  Dr. Ali was instrumental in organizing the ceremony honoring Malaysian President Mahathir Mohamad with the Lifetime Achievement Award from LARIBA (American Finance House). The event recognized President Mahathir's pioneering role in establishing Malaysia as a global hub for Islamic finance.
                </p>
                <p className="text-slate-700">
                  The ceremony brought together over 500 attendees including government officials, Islamic finance professionals, and community leaders. Dr. Ali delivered the keynote address on "The Malaysian Model: Lessons for Global Islamic Finance Development."
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-xl font-medium text-navy-800 mb-3">Heerashah Mian Masjid Heritage Documentation</h4>
              <p className="text-sm text-slate-600 mb-3">Hanomkonda, India • Historical Preservation</p>
              <p className="text-slate-700">
                Documentation of the historic Heerashah Mian Masjid in Hanomkonda, which Dr. Ali's father helped reopen in the early 1950s after years of abandonment. This mosque represents not only religious heritage but also the Ali family's longstanding commitment to community service and religious preservation. The restoration efforts led by Dr. Ali's father became a model for community-driven heritage conservation in the region.
              </p>
            </div>
          </div>
        </section>

        {/* Media Mentions Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
            <Mic className="mr-3 text-navy-600" size={28} />
            Media Features & Interviews
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-medium text-navy-800">The Economist</h4>
                <span className="text-slate-500">March 2023</span>
              </div>
              <p className="text-slate-700 mb-3">
                Featured expert in special report: "Islamic Finance: The Ethical Alternative"
              </p>
              <p className="text-slate-600 italic">
                "Dr. Ali's vision of Islamic finance as a force for ethical banking has influenced a generation of financial professionals seeking alternatives to conventional interest-based systems."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-medium text-navy-800">Bloomberg Television</h4>
                <span className="text-slate-500">July 2022</span>
              </div>
              <p className="text-slate-700 mb-3">
                Live interview on "ESG and Islamic Finance: Finding Common Ground"
              </p>
              <p className="text-slate-600 italic">
                "The principles of Islamic finance naturally align with ESG objectives - both emphasize ethical investment, social responsibility, and sustainable development."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-xl font-medium text-navy-800">Harvard Business Review</h4>
                <span className="text-slate-500">March 2021</span>
              </div>
              <p className="text-slate-700 mb-3">
                Authored article: "Ethical Banking Models for the Post-Crisis Era"
              </p>
              <p className="text-slate-600 italic">
                "The 2008 financial crisis revealed fundamental flaws in conventional banking. Islamic finance offers time-tested principles that could help prevent future crises through its emphasis on real economic activity and risk-sharing."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h4 className="text-xl font-medium text-navy-800 mb-3">YouTube Lecture Series</h4>
              <p className="text-sm text-slate-600 mb-3">Harvard Islamic Finance Project • 2005-2014</p>
              <p className="text-slate-700 mb-4">
                Dr. Ali's lecture series on Islamic finance fundamentals has garnered over 500,000 views, making complex financial concepts accessible to students and practitioners worldwide. Topics covered include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li>Introduction to Islamic Banking and Finance</li>
                <li>Sukuk: Islamic Bonds and Capital Markets</li>
                <li>Risk Management in Islamic Financial Institutions</li>
                <li>Islamic Finance and Economic Development</li>
                <li>Regulatory Frameworks for Islamic Finance</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Video Presentations Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
            <Video className="mr-3 text-navy-600" size={28} />
            Video Presentations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 - Lariba, Pasadena */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="relative w-full pb-[56.25%] bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/zOkBZUTWQfY"
                  title="Dr. Syed Nazim Ali - Lariba Presentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 flex items-center">
                  <MapPin className="mr-1" size={16} />
                  Lariba, Pasadena, CA
                </p>
              </div>
            </div>

            {/* Video 2 - Nur Sultan 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="relative w-full pb-[56.25%] bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/4kdLPQNgOew?start=39"
                  title="Dr. Syed Nazim Ali - Nur Sultan Presentation 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 flex items-center">
                  <MapPin className="mr-1" size={16} />
                  Nur Sultan, Kazakhstan
                </p>
              </div>
            </div>

            {/* Video 3 - Nur Sultan 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="relative w-full pb-[56.25%] bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/URRUunF8-uo"
                  title="Dr. Syed Nazim Ali - Nur Sultan Presentation 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 flex items-center">
                  <MapPin className="mr-1" size={16} />
                  Nur Sultan, Kazakhstan
                </p>
              </div>
            </div>

            {/* Video 4 - Singapore */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="relative w-full pb-[56.25%] bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/GKJ4KR-aMP4"
                  title="Dr. Syed Nazim Ali - Singapore Presentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-600 flex items-center">
                  <MapPin className="mr-1" size={16} />
                  Singapore
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Harvard Events Section */}
        {harvardEvents.length > 0 && (
          <section className="mb-16">
            <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
              <Camera className="mr-3 text-navy-600" size={28} />
              Harvard University Events
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {harvardEvents.map((event) => (
                <EventSlideshow
                  key={event.id}
                  event={event}
                  isExpanded={expandedEventId === event.id}
                  onToggleExpand={() => handleToggleEvent(event.id)}
                />
              ))}
            </div>
          </section>
        )}
        
        {/* Government Relations Section */}
        {governmentEvents.length > 0 && (
          <section className="mb-16">
            <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800">
              Government Relations & Policy Work
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {governmentEvents.map((event) => (
                <EventSlideshow
                  key={event.id}
                  event={event}
                  isExpanded={expandedEventId === event.id}
                  onToggleExpand={() => handleToggleEvent(event.id)}
                />
              ))}
            </div>
          </section>
        )}
        
        {/* International Engagements Section */}
        {internationalEvents.length > 0 && (
          <section className="mb-16">
            <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800">
              International Engagements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internationalEvents.map((event) => (
                <EventSlideshow
                  key={event.id}
                  event={event}
                  isExpanded={expandedEventId === event.id}
                  onToggleExpand={() => handleToggleEvent(event.id)}
                />
              ))}
            </div>
          </section>
        )}
        
        {/* Academic Forums Section */}
        {academicEvents.length > 0 && (
          <section className="mb-16">
            <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800">
              Academic Forums & Conferences
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicEvents.map((event) => (
                <EventSlideshow
                  key={event.id}
                  event={event}
                  isExpanded={expandedEventId === event.id}
                  onToggleExpand={() => handleToggleEvent(event.id)}
                />
              ))}
            </div>
          </section>
        )}
        
        {/* Institutional Collaborations Section */}
        <section>
          <h3 className="text-2xl font-serif font-bold mb-6 text-navy-800 flex items-center">
            <Globe className="mr-3 text-navy-600" size={28} />
            Institutional Collaborations
          </h3>
          
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <p className="text-slate-700 mb-6">
              Dr. Ali has collaborated with numerous prestigious institutions to advance 
              research and education in Islamic finance:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-4 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
                <h4 className="font-medium text-navy-800">Harvard University</h4>
                <p className="text-slate-600 text-sm">Research Partnership</p>
              </div>
              
              <div className="p-4 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
                <h4 className="font-medium text-navy-800">U.S. Department of Treasury</h4>
                <p className="text-slate-600 text-sm">Policy Advisory</p>
              </div>
              
              <div className="p-4 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
                <h4 className="font-medium text-navy-800">Federal Reserve Bank of NY</h4>
                <p className="text-slate-600 text-sm">Consultant</p>
              </div>
              
              <div className="p-4 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
                <h4 className="font-medium text-navy-800">Islamic Development Bank</h4>
                <p className="text-slate-600 text-sm">Senior Advisor</p>
              </div>
              
              <div className="p-4 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
                <h4 className="font-medium text-navy-800">World Bank</h4>
                <p className="text-slate-600 text-sm">Technical Expert</p>
              </div>
              
              <div className="p-4 border border-slate-200 rounded-lg text-center hover:bg-slate-50 transition-colors">
                <h4 className="font-medium text-navy-800">OECD</h4>
                <p className="text-slate-600 text-sm">Working Group Member</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Expanded Event Modal */}
      <AnimatePresence>
        {expandedEventId && (
          <div className="fixed inset-0 z-50">
            {filteredContent.events?.map((event) => (
              event.id === expandedEventId && (
                <EventSlideshow
                  key={event.id}
                  event={event}
                  isExpanded={true}
                  onToggleExpand={() => setExpandedEventId(null)}
                />
              )
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaPage;