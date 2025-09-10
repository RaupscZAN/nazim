import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Calendar, BookOpen, Mail } from 'lucide-react';

type EventPeriod = 'Past';
type EventType = 'All' | 'Conferences' | 'Lectures' | 'Workshops' | 'Panels';

interface EventProps {
  title: string;
  date: string;
  location: string;
  description: string;
  type: EventType;
  period: 'Past';
  institution?: string;
}

const SpeakingPage: React.FC = () => {
  const activePeriod: EventPeriod = 'Past';
  const [activeType, setActiveType] = useState<EventType>('All');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handlePreRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In a real app, this would send data to a backend
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const events: EventProps[] = [
    {
      title: "World Islamic Banking Conference",
      date: "March 10-12, 2024",
      location: "Bahrain Convention Centre, Manama",
      description: "Featured speaker on 'Sustainable Finance: Islamic Perspectives'",
      type: "Conferences",
      period: "Past",
      institution: "World Islamic Banking Conference"
    },
    {
      title: "Harvard Business School Finance Seminar",
      date: "January 25, 2024",
      location: "Harvard Business School, Boston",
      description: "Guest lecturer on 'Risk Management in Islamic Banks'",
      type: "Lectures",
      period: "Past",
      institution: "Harvard Business School"
    },
    {
      title: "Islamic Finance Leadership Program",
      date: "November 5-7, 2023",
      location: "University of Oxford, UK",
      description: "Workshop facilitator for 'Islamic Finance Innovation and Product Development'",
      type: "Workshops",
      period: "Past",
      institution: "University of Oxford"
    },
    {
      title: "Qatar Financial Centre Policy Dialogue",
      date: "October 15, 2023",
      location: "Doha, Qatar",
      description: "Panel member discussing 'Regulatory Frameworks for Islamic Fintech'",
      type: "Panels",
      period: "Past",
      institution: "Qatar Financial Centre"
    },
    {
      title: "International Islamic Finance Conference",
      date: "June 8-9, 2023",
      location: "Kuala Lumpur, Malaysia",
      description: "Plenary speaker on 'The Role of Islamic Finance in Sustainable Development'",
      type: "Conferences",
      period: "Past",
      institution: "International Centre for Education in Islamic Finance"
    }
  ];
  
  const filteredEvents = events
    .filter(event => activeType === 'All' || event.type === activeType);
  
  const eventTypes: EventType[] = ['All', 'Conferences', 'Lectures', 'Workshops', 'Panels'];
  
  const EventCard: React.FC<EventProps> = ({
    title,
    date,
    location,
    description,
    institution
  }) => {
    return (
      <div className="card hover:border-navy-300 transition-all duration-300">
        <div className="flex items-start gap-3">
          <Calendar className="text-navy-700 flex-shrink-0 mt-1" size={20} />
          <div className="text-gold-600 font-medium">{date}</div>
        </div>
        <h3 className="text-xl font-serif font-bold my-3 text-navy-800">{title}</h3>
        <p className="text-slate-600 mb-1">{location}</p>
        {institution && <p className="text-slate-500 text-sm mb-3">Hosted by {institution}</p>}
        <p className="text-slate-700">{description}</p>
      </div>
    );
  };
  
  return (
    <div className="py-16">
      <div className="container-narrow">
        <SectionHeading title="Activities" />
        
        <div className="mb-10">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Prof. Ali is a globally recognized thought leader who has founded and continues to direct major 
            international conferences including the Harvard University Forum on Islamic Finance (27+ years), 
            the HBKU International Conference on Islamic Finance, and collaborative workshops with LSE and SOAS. 
            He averages around ten conferences, seminars, and workshops per year across the globe.
          </p>
          
          <div className="bg-navy-50 rounded-lg p-6 border border-navy-100">
            <h3 className="text-xl font-serif font-bold mb-4 text-navy-800">Invitation Requests</h3>
            <p className="text-slate-700 mb-4">
              Dr. Ali is available for select activities and engagements on topics related to Islamic 
              finance, ethical banking, and information systems in financial institutions.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Submit Activity Request
            </a>
          </div>
        </div>
        
        {/* Upcoming Books Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-navy-50 to-gold-50 rounded-xl p-8 border border-navy-100">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="text-navy-700 mr-3" size={32} />
              <h2 className="text-3xl font-serif font-bold text-navy-800">Upcoming Books</h2>
            </div>
            
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-medium text-navy-700 mb-4">
                "A Journey Through Islamic Finance: My Autobiography"
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Dr. Syed Nazim Ali is currently writing his autobiography, chronicling his pioneering journey 
                in Islamic finance, from founding the Harvard Islamic Finance Information Program to establishing 
                major international conferences and advising governments worldwide. This memoir will offer unique 
                insights into the development of the global Islamic finance industry over the past three decades.
              </p>
              
              {!isSubscribed ? (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                  <h4 className="text-xl font-medium text-navy-700 mb-4">
                    Be the first to know when it's available
                  </h4>
                  <form onSubmit={handlePreRegistration} className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary px-6 py-3 whitespace-nowrap"
                    >
                      <Mail className="mr-2" size={18} />
                      Pre-Register
                    </button>
                  </form>
                  <p className="text-sm text-slate-600 mt-3">
                    You'll receive updates on the book's progress and be notified as soon as it's available.
                  </p>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="text-green-800 text-lg font-medium mb-2">
                    Thank you for your interest!
                  </div>
                  <p className="text-green-700">
                    We'll keep you updated on the book's progress and notify you when it's available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Past Events Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-6 text-navy-800">Past Activities</h2>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="hidden">
          </div>
          
          <div className="flex flex-wrap gap-2">
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeType === type
                    ? 'bg-gold-500 text-navy-900'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 text-center">
            <p className="text-slate-600">
              No past events found in this category.
            </p>
          </div>
        )}
        </section>
      </div>
    </div>
  );
};

export default SpeakingPage;