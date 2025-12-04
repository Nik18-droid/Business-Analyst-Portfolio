import React from 'react';
import { ArrowUpRight, Briefcase, Brain, Plane, Cpu } from 'lucide-react';
import { Tab } from '../types';

interface HomeViewProps {
  onNavClick: (tab: Tab) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 animate-in fade-in zoom-in duration-500">
       {/* HERO */}
       <div className="col-span-1 md:col-span-12 bg-[#171717] border border-[#333] rounded-xl p-8 md:p-16 flex flex-col items-center justify-center text-center bento-card relative overflow-hidden group min-h-[450px]">
          <div className="absolute inset-0 z-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-grotesk font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Optimizing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">engine</span> of business.
            </h2>
            <p className="text-lg md:text-xl text-[#A1A1AA] font-inter font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              I bridge the gap between operational chaos and data-driven clarity. 
              Translating raw metrics into strategic roadmaps.
              <span className="block mt-4 text-sm font-mono text-[#666]">
                Ex-FNZ &bull; Ex-Adhumour &bull; Strat/Ops Specialist
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://drive.google.com/file/d/1RX9nJkHfILFI4_H1F0rzbitOK76j1W1r/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                View Resume
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button 
                onClick={() => onNavClick('work')}
                className="px-8 py-3 bg-[#111] border border-[#333] text-white font-semibold rounded-lg hover:bg-[#1a1a1a] hover:border-[#555] transition-all flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                View Work
              </button>
            </div>
          </div>
       </div>

       {/* Quick Stats / Teasers */}
       <div 
          onClick={() => onNavClick('work')}
          className="col-span-1 md:col-span-4 bg-[#171717] border border-[#333] rounded-xl p-8 cursor-pointer bento-card glass-panel group relative overflow-hidden h-[280px]"
       >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Brain className="w-24 h-24 text-purple-500" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
               <h3 className="text-sm font-mono uppercase tracking-widest text-[#666] mb-2">Featured Project</h3>
               <div className="text-white font-bold text-2xl">Project Sentinel</div>
            </div>
            <div>
               <div className="text-4xl font-grotesk font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">95%</div>
               <p className="text-sm text-[#888]">Analysis Time Reduced</p>
            </div>
          </div>
       </div>

       <div 
          onClick={() => onNavClick('work')}
          className="col-span-1 md:col-span-4 bg-[#171717] border border-[#333] rounded-xl p-8 cursor-pointer bento-card glass-panel group relative overflow-hidden h-[280px]"
       >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Plane className="w-24 h-24 text-indigo-500" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
               <h3 className="text-sm font-mono uppercase tracking-widest text-[#666] mb-2">Strategic Proposal</h3>
               <div className="text-white font-bold text-2xl">IndiGo Airlines</div>
            </div>
            <div>
               <div className="text-4xl font-grotesk font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">₹875 Cr</div>
               <p className="text-sm text-[#888]">Revenue Opportunity</p>
            </div>
          </div>
       </div>

       <div 
          onClick={() => onNavClick('skills')}
          className="col-span-1 md:col-span-4 bg-[#171717] border border-[#333] rounded-xl p-8 cursor-pointer bento-card glass-panel group relative overflow-hidden h-[280px]"
       >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Cpu className="w-24 h-24 text-blue-500" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
             <div>
               <h3 className="text-sm font-mono uppercase tracking-widest text-[#666] mb-2">Toolkit</h3>
               <div className="text-white font-bold text-2xl">Data & Strategy</div>
             </div>
             <div className="flex flex-wrap gap-2">
                {['SQL', 'Python', 'Power BI', 'Excel'].map(t => (
                   <span key={t} className="text-xs font-mono bg-[#222] border border-[#333] px-2 py-1 rounded text-gray-400">{t}</span>
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default HomeView;