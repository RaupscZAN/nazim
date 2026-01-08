import React, { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Award,
  FileText,
  BookOpen,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handlePreRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const affiliations = [
    { name: "SOAS", subtitle: "University of London" },
    { name: "Harvard", subtitle: "University" },
    { name: "HBKU", subtitle: "Qatar Foundation" },
    { name: "Bolton", subtitle: "University, UK" },
    { name: "AAOIFI", subtitle: "Bahrain" },
  ];

  const awards = [
    {
      year: "2022",
      title: "Harvard University Muslim Alumni Foundation Award",
      description: "Outstanding contributions to Islamic finance education",
    },
    {
      year: "2019",
      title: "Islamic Finance Leadership Award",
      description: "Pioneering research in global Islamic finance",
    },
    {
      year: "2017",
      title: "Royal Award for Islamic Finance",
      description: "Presented by the King of Malaysia",
    },
  ];

  const videos = [
    {
      id: "zOkBZUTWQfY",
      title: "Lariba Presentation",
      location: "Pasadena, CA",
    },
    { id: "GKJ4KR-aMP4", title: "Singapore Conference", location: "Singapore" },
  ];

  const featuredPapers = [
    {
      title: "Published Books",
      year: "2011-2025",
      category: "Books",
      link: "/research?type=Books",
    },
    {
      title: "Harvard Forums",
      year: "1997-2022",
      category: "Harvard",
      link: "/research?type=Harvard",
    },
    {
      title: "SOAS Workshops",
      year: "2018-2024",
      category: "SOAS",
      link: "/research?type=SOAS",
    },
    {
      title: "LSE Workshops",
      year: "2007-2017",
      category: "LSE",
      link: "/research?type=LSE",
    },
  ];

  return (
    <div className="bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-bg.png')`,
          }}
        >
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Advancing Islamic Finance
              <span className="block text-gold-400 italic">
                Education & Research
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Dr. Syed Nazim Ali is a globally recognized scholar with over four
              decades of contributions to Islamic economics and finance,
              currently serving as Professorial Research Associate at SOAS
              University of London.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/life-journey" className="btn-gold flex items-center">
                Explore My Journey <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/research"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-medium py-2.5 px-6 rounded-full transition-all duration-300 flex items-center"
              >
                View Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Affiliations */}
      <section className="py-12 bg-white border-b border-cream-300">
        <div className="container-wide">
          <p className="text-center text-sm text-slate-500 uppercase tracking-widest mb-8">
            Academic Affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {affiliations.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl font-bold text-slate-800">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo with decorative elements */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative">
                {/* Decorative frame - burgundy */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-burgundy-800 rounded-2xl"></div>

                {/* Decorative accent - gold corner */}
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gold-500 rounded-full -z-10"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-burgundy-800 rounded-full -z-10"></div>

                {/* Main photo */}
                <img
                  src="https://www.hbku.edu.qa/sites/default/files/staff/dr._syed_nazim_ali.jpg"
                  alt="Dr. Syed Nazim Ali"
                  className="relative z-10 w-72 h-80 object-cover object-top rounded-2xl shadow-2xl"
                />

                {/* Gold line accent */}
                <div className="absolute top-8 -right-8 w-1 h-32 bg-gold-500"></div>
                <div className="absolute -bottom-8 left-8 h-1 w-32 bg-gold-500"></div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-burgundy-800 font-semibold tracking-widest uppercase text-sm mb-4">
                About
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-burgundy-800 mb-8">
                Dr. Syed Nazim Ali
              </h2>
              <p className="text-slate-700 leading-relaxed mb-5 text-base">
                A distinguished scholar and institution-builder who spent two
                decades at Harvard University, where he founded the{" "}
                <span className="text-burgundy-800">
                  Harvard Islamic Finance Program
                </span>
                , established the{" "}
                <span className="text-burgundy-800">
                  Islamic Finance Databank
                </span>
                , and launched the{" "}
                <span className="text-burgundy-800">
                  Harvard University Forum on Islamic Finance
                </span>
                .
              </p>
              <p className="text-slate-500 leading-relaxed mb-10 text-base">
                Previously served as Research Professor and Director of the
                Research Division at the College of Islamic Studies, Hamad Bin
                Khalifa University (HBKU), Qatar Foundation, from 2014 to 2025.
                His work has shaped global discourse on Islamic finance
                education and research.
              </p>

              {/* Stats */}
              <div className="flex gap-4 mb-10">
                <div className="text-center py-4 px-6 bg-cream-50 rounded-lg border border-cream-200 flex-1">
                  <div className="font-serif text-3xl font-bold text-burgundy-800">
                    40<span className="text-gold-500 text-xl align-top">+</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="text-center py-4 px-6 bg-cream-50 rounded-lg border border-cream-200 flex-1">
                  <div className="font-serif text-3xl font-bold text-burgundy-800">
                    50<span className="text-gold-500 text-xl align-top">+</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Publications</p>
                </div>
                <div className="text-center py-4 px-6 bg-cream-50 rounded-lg border border-cream-200 flex-1">
                  <div className="font-serif text-3xl font-bold text-burgundy-800">
                    29
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Years at Harvard
                  </p>
                </div>
              </div>

              <Link
                to="/life-journey"
                className="inline-flex items-center text-burgundy-800 font-semibold hover:text-burgundy-600 transition-colors underline underline-offset-4"
              >
                Read Full Biography <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-cream-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-burgundy-800 font-medium tracking-wider uppercase mb-2">
              Recognition
            </p>
            <h2 className="font-serif text-4xl font-bold text-slate-800">
              Awards & Honors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-l-4 border-gold-500"
              >
                <div className="flex items-center mb-3">
                  <Award className="text-gold-500 mr-2" size={24} />
                  <span className="text-gold-600 font-bold text-lg">
                    {award.year}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-2">
                  {award.title}
                </h3>
                <p className="text-slate-500 text-sm">{award.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/media"
              className="inline-flex items-center text-burgundy-800 hover:text-burgundy-600 font-medium"
            >
              View All Awards <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Research Papers */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-burgundy-800 font-medium tracking-wider uppercase mb-2">
              Research
            </p>
            <h2 className="font-serif text-4xl font-bold text-slate-800">
              Featured Papers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {featuredPapers.map((paper, index) => (
              <Link
                key={index}
                to={paper.link}
                className="bg-cream-50 rounded-2xl p-6 border border-cream-200 hover:shadow-lg transition-all group block"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-burgundy-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors mb-4">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          paper.category === "Harvard"
                            ? "bg-red-100 text-red-700"
                            : paper.category === "SOAS"
                              ? "bg-blue-100 text-blue-700"
                              : paper.category === "LSE"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-gold-100 text-gold-700"
                        }`}
                      >
                        {paper.category}
                      </span>
                      <span className="text-xs font-medium text-slate-600">
                        {paper.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-800 group-hover:text-burgundy-800 transition-colors">
                      {paper.title}
                    </h3>
                    <div className="mt-2 inline-flex items-center text-burgundy-800 group-hover:text-burgundy-600 text-sm font-medium">
                      View Details <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/research"
              className="btn-primary inline-flex items-center"
            >
              Browse All Research <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Presentations */}
      <section className="py-20 bg-slate-900">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-medium tracking-wider uppercase mb-2">
              Media
            </p>
            <h2 className="font-serif text-4xl font-bold text-white">
              Featured Presentations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="group">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-semibold text-lg">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 text-sm flex items-center mt-1">
                    <MapPin size={14} className="mr-1" />
                    {video.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/media"
              className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium"
            >
              View All Videos <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Books Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="bg-gradient-to-r from-burgundy-50 to-gold-50 rounded-2xl p-8 md:p-12 border border-burgundy-100">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="text-burgundy-800 mr-3" size={32} />
              <h2 className="text-3xl font-serif font-bold text-burgundy-800">
                Upcoming Book
              </h2>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-medium text-burgundy-700 mb-4 italic">
                "Curiosity to Calling: My Life in Islamic Finance"
              </h3>
              <p className="text-slate-700 mb-8 leading-relaxed">
                Dr. Syed Nazim Ali is currently writing his autobiography,
                chronicling his pioneering journey in Islamic finance from
                founding the Harvard Islamic Finance Information Program to
                establishing major international conferences and mentoring
                emerging scholars across the globe. This memoir will offer
                unique insights into the development of the global Islamic
                finance industry over the past three decades.
              </p>

              {!isSubscribed ? (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-cream-200">
                  <h4 className="text-lg font-medium text-burgundy-700 mb-4">
                    Be the first to know when it's available
                  </h4>
                  <form
                    onSubmit={handlePreRegistration}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary px-6 py-3 whitespace-nowrap flex items-center justify-center"
                    >
                      <Mail className="mr-2" size={18} />
                      Pre-Register
                    </button>
                  </form>
                  <p className="text-sm text-slate-500 mt-3">
                    You'll receive updates on the book's progress and be
                    notified as soon as it's available.
                  </p>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="text-green-800 text-lg font-medium mb-2">
                    Thank you for your interest!
                  </div>
                  <p className="text-green-700">
                    We'll keep you updated on the book's progress and notify you
                    when it's available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-burgundy-900">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-cream-300 text-lg mb-8 max-w-2xl mx-auto">
            For academic inquiries, speaking engagements, research
            collaborations, or media interviews, I welcome the opportunity to
            connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-burgundy-900 font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Get in Touch <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
