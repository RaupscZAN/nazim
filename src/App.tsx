import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BiographyPage from './pages/BiographyPage';
import ResearchPage from './pages/ResearchPage';
import SpeakingPage from './pages/SpeakingPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="biography" element={<BiographyPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="speaking" element={<SpeakingPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;