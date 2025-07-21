import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Calendar } from 'lucide-react';

type EventPeriod = 'Upcoming' | 'Past';
type EventType = 'All' | 'Conferences' | 'Lectures' | 'Workshops' | 'Panels';

interface EventProps {
  title: string;
  date: string;
  location: string;
  description: string;
  type: EventType;
  period: EventPeriod;
  institution?: string;
}

const SpeakingPage: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState<EventPeriod>('Upcoming');
  const [activeType, setActiveType] = useState<EventType>('All');
  
  const events: EventProps[] = [
    {
      title: "International Conference on Islamic Economics",
      date: "June 15-16, 2025",
      location: "Harvard University, Cambridge, MA",
      description: "Keynote address on 'The Future of Islamic Finance in a Digital Economy'",
      type: "Conferences",
      period: "Upcoming",
      institution: "Harvard University"
    },
    {
      title: "Global Islamic Finance Forum",
      date: "September 8, 2025",
      location: "London School of Economics, UK",
      description: "Panel discussion on 'Ethical Investment Strategies in Post-Pandemic Markets'",
      type: "Panels",
      period: "Upcoming",
      institution: "London School of Economics"
    },
    {
      title: "Islamic Banking Workshop",
      date: "October 12-14, 2025",
      location: "Islamic Development Bank, Jeddah",
      description: "Three-day workshop on 'Digital Transformation in Islamic Banking'",
      type: "Workshops",
      period: "Upcoming",
      institution: "Islamic Development Bank"
    },
    {
      title: "Distinguished Lecture Series",
      date: "November 5, 2025",
      location: "Georgetown University, Washington DC",
      description: "Lecture on 'Ethics and Governance in Islamic Financial Institutions'",
      type: "Lectures",
      period: "Upcoming",
      institution: "Georgetown University"
    },
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
    .filter(event => event.period === activePeriod)
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
        <SectionHeading title="Speaking Engagements" />
        
        <div className="mb-10">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Dr. Ali regularly shares his expertise at prestigious academic institutions and 
            international forums. His talks focus on Islamic finance, ethical banking, and the 
            integration of modern information systems with traditional Islamic financial principles.
          </p>
          
          <div className="bg-navy-50 rounded-lg p-6 border border-navy-100">
            <h3 className="text-xl font-serif font-bold mb-4 text-navy-800">Invitation Requests</h3>
            <p className="text-slate-700 mb-4">
              Dr. Ali is available for select speaking engagements on topics related to Islamic 
              finance, ethical banking, and information systems in financial institutions.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Submit Speaking Request
            </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setActivePeriod('Upcoming')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activePeriod === 'Upcoming'
                  ? 'bg-navy-700 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActivePeriod('Past')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activePeriod === 'Past'
                  ? 'bg-navy-700 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Past
            </button>
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
              No {activePeriod.toLowerCase()} events found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeakingPage;