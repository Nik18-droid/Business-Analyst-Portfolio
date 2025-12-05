import React from 'react';
import { NavProps } from '../types';

const Header: React.FC<NavProps> = ({ activeTab, onNavClick }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#171717] border border-[#333] rounded-xl p-4 mb-6 sticky top-4 z-50 shadow-2xl shadow-black/50 backdrop-blur-md bg-opacity-90">
      <div 
         className="flex items-center gap-4 cursor-pointer group"
         onClick={() => onNavClick('home')}
      >
        <div className="h-10 w-10 bg-white text-black rounded-lg flex items-center justify-center font-simple font-bold text-xl group-hover:bg-blue-50 transition-colors">
          N
        </div>
        <div>
          <h1 className="text-white font-simple font-bold text-xl tracking-wide leading-none uppercase">Nikhil Sharma</h1>
          <p className="text-xs uppercase tracking-widest text-[#666] mt-0.5 font-semibold">Technical Business Analyst & Process Optimizer</p>
        </div>
      </div>

      <nav className="flex items-center bg-[#0A0A0A] rounded-full p-1 border border-[#333] mt-4 md:mt-0 overflow-x-auto max-w-full">
        {[
          { id: 'home', label: 'Home' },
          { id: 'work', label: 'Work' },
          { id: 'skills', label: 'Skills' },
          { id: 'contact', label: 'Contact' }
        ].map((item) => (
          <button 
            key={item.id}
            onClick={() => onNavClick(item.id as any)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === item.id 
                ? 'bg-[#222] text-white shadow-lg' 
                : 'text-[#888] hover:text-white hover:bg-[#1f1f1f]'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#111] border border-[#333]">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-medium text-gray-400">Open to Work</span>
        </div>
      </div>
    </div>
  );
};

export default Header;