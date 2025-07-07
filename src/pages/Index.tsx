
import React from 'react';
import HeroSection from '../components/HeroSection';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <HeroSection />
      <ExperienceTimeline />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
