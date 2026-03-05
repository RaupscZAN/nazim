import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  FileText,
  BookOpen,
  Mail,
  X,
  User,
  Building,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [showBookForm, setShowBookForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookForm, setBookForm] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    interest: "",
    message: "",
  });

  const handleBookFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_y9oj9ar",
      "nazimali_book_registration",
      {
        from_name: bookForm.name,
        from_email: bookForm.email,
        organization: bookForm.organization,
        role: bookForm.role,
        interest: bookForm.interest,
        message: bookForm.message,
      },
      "YOUR_PUBLIC_KEY"      // Replace with your EmailJS Public Key
    );

    setFormSubmitted(true);
    setBookForm({ name: "", email: "", organization: "", role: "", interest: "", message: "" });
  };

  const affiliations = [
    { name: "SOAS", subtitle: "University of London" },
    { name: "Harvard", subtitle: "University" },
    { name: "HBKU", subtitle: "Qatar Foundation" },
    { name: "Al-Barakh", subtitle: "Forum, KSA" },
    { name: "AAOIFI", subtitle: "Bahrain" },
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
      year: "2014",
      category: "Book",
      link: "/research?type=Books",
      title: "Islamic Finance: Current Legal & Regulatory Issues",
      description: "A comprehensive volume exploring regulatory frameworks governing Islamic financial institutions globally.",
    },
    {
      year: "2011",
      category: "Harvard",
      link: "/research?type=Harvard",
      title: "Harvard Forum on Islamic Finance: Innovation & Authenticity",
      description: "Proceedings from the Harvard University Forum on Islamic Finance addressing contemporary challenges.",
    },
    {
      year: "2019",
      category: "SOAS & LSE",
      link: "/research?type=SOAS-LSE",
      title: "Islamic Finance in the UK: SOAS Workshop Report",
      description: "Workshop proceedings examining the growth of Islamic finance in European markets.",
    },
    {
      year: "2022",
      category: "Article",
      link: "/research?type=Articles & Chapters",
      title: "Maqasid al-Shariah and the Ethics of Islamic Finance",
      description: "Peer-reviewed journal article examining the objectives of Islamic law in modern finance.",
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


      {/* Featured Research Papers */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-slate-800">
              Featured Publications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPapers.map((paper, index) => (
              <Link
                key={index}
                to={paper.link}
                className="bg-white rounded-xl border border-slate-200 hover:shadow-md hover:border-burgundy-200 transition-all group block overflow-hidden"
              >
                {/* Top color bar */}
                <div className={`h-1 w-full ${
                  paper.category === "Harvard"
                    ? "bg-red-600"
                    : paper.category === "SOAS & LSE"
                      ? "bg-blue-600"
                      : paper.category === "Article"
                        ? "bg-green-600"
                        : "bg-gold-500"
                }`} />
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cream-50 border border-cream-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="text-burgundy-800" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            paper.category === "Harvard"
                              ? "bg-red-100 text-red-700"
                              : paper.category === "SOAS & LSE"
                                ? "bg-blue-100 text-blue-700"
                                : paper.category === "Article"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gold-100 text-gold-700"
                          }`}
                        >
                          {paper.category}
                        </span>
                        <span className="text-xs text-slate-400">{paper.year}</span>
                      </div>
                      <h3 className="font-serif text-base font-semibold text-slate-800 leading-snug mb-2 group-hover:text-burgundy-800 transition-colors">
                        {paper.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3">{paper.description}</p>
                      <span className="inline-flex items-center text-burgundy-800 group-hover:text-burgundy-600 text-xs font-medium">
                        Read More <ChevronRight size={14} className="ml-0.5" />
                      </span>
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

              <button
                onClick={() => { setShowBookForm(true); setFormSubmitted(false); }}
                className="btn-primary px-8 py-4 text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="mr-2" size={20} />
                Pre-Register for This Book
              </button>
              <p className="text-sm text-slate-500 mt-3">
                Be the first to know when it's available
              </p>
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
      {/* Book Pre-Registration Modal */}
      {showBookForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowBookForm(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-burgundy-800 to-burgundy-700 rounded-t-2xl p-6 relative">
              <button
                onClick={() => setShowBookForm(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <BookOpen className="text-gold-400 mb-2" size={28} />
              <h3 className="text-xl font-serif font-bold text-white">Pre-Register for the Book</h3>
              <p className="text-cream-300 text-sm mt-1">"Curiosity to Calling: My Life in Islamic Finance"</p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleBookFormSubmit} className="p-6 space-y-4">
                <div>
                  <label className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <User size={14} className="mr-1.5 text-slate-400" />
                    Full Name <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    value={bookForm.name}
                    onChange={(e) => setBookForm({ ...bookForm, name: e.target.value })}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <Mail size={14} className="mr-1.5 text-slate-400" />
                    Email Address <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    value={bookForm.email}
                    onChange={(e) => setBookForm({ ...bookForm, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <Building size={14} className="mr-1.5 text-slate-400" />
                    Organization / University
                  </label>
                  <input
                    type="text"
                    value={bookForm.organization}
                    onChange={(e) => setBookForm({ ...bookForm, organization: e.target.value })}
                    placeholder="Your institution or organization"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">
                    Your Role
                  </label>
                  <select
                    value={bookForm.role}
                    onChange={(e) => setBookForm({ ...bookForm, role: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select your role</option>
                    <option value="Academic/Researcher">Academic / Researcher</option>
                    <option value="Student">Student</option>
                    <option value="Industry Professional">Industry Professional</option>
                    <option value="Journalist/Media">Journalist / Media</option>
                    <option value="General Reader">General Reader</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">
                    What interests you most about this book?
                  </label>
                  <select
                    value={bookForm.interest}
                    onChange={(e) => setBookForm({ ...bookForm, interest: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="Personal memoir">Personal memoir & journey</option>
                    <option value="Islamic finance history">History of Islamic finance</option>
                    <option value="Harvard experience">Harvard experience</option>
                    <option value="Industry insights">Industry insights & mentorship</option>
                    <option value="All of the above">All of the above</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-slate-700 mb-1">
                    <MessageSquare size={14} className="mr-1.5 text-slate-400" />
                    Message (Optional)
                  </label>
                  <textarea
                    value={bookForm.message}
                    onChange={(e) => setBookForm({ ...bookForm, message: e.target.value })}
                    placeholder="Any questions or comments about the book..."
                    rows={3}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-lg flex items-center justify-center"
                >
                  <Mail className="mr-2" size={18} />
                  Submit Pre-Registration
                </button>
                <p className="text-xs text-slate-400 text-center">
                  You'll receive updates on the book's progress and be notified when it's available.
                </p>
              </form>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-green-600" size={28} />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-800 mb-2">
                  Thank You for Your Interest!
                </h4>
                <p className="text-slate-600 mb-6">
                  We've received your pre-registration. You'll be among the first to know when
                  "Curiosity to Calling" is available.
                </p>
                <button
                  onClick={() => setShowBookForm(false)}
                  className="btn-primary px-6 py-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
