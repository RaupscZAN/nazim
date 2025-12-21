import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { BookOpen, Mail } from 'lucide-react';

type EventType = 'All' | 'Conferences' | 'Lectures' | 'Workshops' | 'Panels';

const SpeakingPage: React.FC = () => {
  const [activeType, setActiveType] = useState<EventType>('All');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handlePreRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const eventTypes: EventType[] = ['All', 'Conferences', 'Lectures', 'Workshops', 'Panels'];

  return (
    <div className="py-16">
      <div className="container-narrow">
        <SectionHeading title="Activities" />

        <div className="mb-10">
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Dr. Ali has founded and continues to direct major international conferences including the
            Harvard Islamic Finance Conference (29+ years), the HBKU International Conference on Islamic
            Finance, and collaborative workshops and annual Islamic finance events with LSE and SOAS
            University of London.
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
                "Curiosity to Calling: My Life in Islamic Finance"
              </h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Dr. Syed Nazim Ali is currently writing his autobiography, chronicling his pioneering journey
                in Islamic finance from founding the Harvard Islamic Finance Information Program to establishing
                major international conferences and mentoring emerging scholars across the globe. This memoir
                will offer unique insights into the development of the global Islamic finance industry over
                the past three decades.
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

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeType === type
                    ? 'bg-gold-500 text-navy-900'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Conferences Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://ifcharvard.com/home/archives/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:border-navy-300 transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold mb-2 text-navy-800">Harvard University</h3>
              <p className="text-slate-600 mb-3">Harvard Islamic Finance Conference Archives</p>
              <p className="text-slate-700">My tenure at Harvard from 1995 to 2014</p>
              <span className="inline-block mt-4 text-navy-600 font-medium">View Archives →</span>
            </a>

            <a
              href="https://drive.google.com/drive/folders/13dlao_cijyGdCtx-B6AL0NJ2n3u_BRC_"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:border-navy-300 transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold mb-2 text-navy-800">LSE and SOAS Events</h3>
              <p className="text-slate-600 mb-3">Collaborative workshops and events</p>
              <p className="text-slate-700">Joint Islamic finance events with LSE and SOAS University of London</p>
              <span className="inline-block mt-4 text-navy-600 font-medium">View Events →</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpeakingPage;
