import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import WorkView from './components/WorkView';
import SkillsView from './components/SkillsView';
import ContactView from './components/ContactView';
import { Tab } from './types';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('home');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNavClick = (tab: Tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-[#A1A1AA] font-sans selection:bg-blue-500/30 selection:text-blue-200 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
        
        <Header activeTab={activeTab} onNavClick={handleNavClick} />

        <div className="min-h-[600px]">
          {activeTab === 'home' && <HomeView onNavClick={handleNavClick} />}
          {activeTab === 'work' && <WorkView />}
          {activeTab === 'skills' && <SkillsView />}
          {activeTab === 'contact' && <ContactView />}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;