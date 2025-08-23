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
      title: "27th Harvard University Forum on Islamic Finance",
      date: "April 2025",
      location: "Harvard University, Cambridge, MA",
      description: "Founder and Director of this flagship forum, now in its 27th year, bringing together global leaders in Islamic finance",
      type: "Conferences",
      period: "Upcoming",
      institution: "Harvard University"
    },
    {
      title: "8th International Conference on Islamic Finance (ICIF)",
      date: "March 2025",
      location: "Hamad Bin Khalifa University, Doha, Qatar",
      description: "Founder and Director of HBKU's flagship conference on Islamic finance and economics",
      type: "Conferences",
      period: "Upcoming",
      institution: "HBKU College of Islamic Studies"
    },
    {
      title: "20th SOAS-LSE Annual Islamic Finance Workshop",
      date: "September 2025",
      location: "SOAS University of London, UK",
      description: "Co-Chair of the Steering Committee for this collaborative workshop series, now in its 20th year",
      type: "Workshops",
      period: "Upcoming",
      institution: "SOAS University of London"
    },
    {
      title: "10th CEOs and Islamic Finance Roundtable",
      date: "October 2025",
      location: "Doha, Qatar",
      description: "Founder and Director of this executive-level roundtable bringing together industry leaders",
      type: "Panels",
      period: "Upcoming",
      institution: "HBKU College of Islamic Studies"
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
            Prof. Ali is a globally recognized thought leader who has founded and continues to direct major 
            international conferences including the Harvard University Forum on Islamic Finance (27+ years), 
            the HBKU International Conference on Islamic Finance, and collaborative workshops with LSE and SOAS. 
            He averages around ten conferences, seminars, and workshops per year across the globe.
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