import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage";
import ResearchPage from "./pages/ResearchPage";
import HarvardArchivesPage from "./pages/HarvardArchivesPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import LifeJourneyPage from "./pages/LifeJourneyPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="life-journey" element={<LifeJourneyPage />} />
          <Route path="biography" element={<BiographyPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="harvard-archives" element={<HarvardArchivesPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
