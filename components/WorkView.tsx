import React from 'react';
import { Brain, Database, ArrowUpRight, Plane, Briefcase } from 'lucide-react';

const WorkView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
       
       {/* SECTION 1: PROJECTS */}
       <div>
         <div className="flex items-center gap-3 mb-6 border-b border-[#333] pb-4">
           <Brain className="w-5 h-5 text-blue-500" />
           <h2 className="text-xl font-grotesk font-bold text-white">Projects</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Sentinel */}
            <a href="https://github.com/Nik18-droid/Project-Sentinel/tree/main" target="_blank" rel="noopener noreferrer" 
               className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card group relative overflow-hidden block">
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Database className="w-32 h-32" />
               </div>
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Project Sentinel</h3>
                      <p className="text-xs font-mono text-purple-400">AI-Augmented Customer Churn Analysis</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#444] group-hover:text-white transition-colors" />
                 </div>
                 <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                   Built an end-to-end churn analysis solution using SQL, Power BI, and Python. Developed a conversational AI interface (OpenAI API) to enable real-time data querying.
                 </p>
                 <div className="grid grid-cols-2 gap-4 border-t border-[#333] pt-4">
                    <div>
                       <div className="text-2xl font-bold text-white">95%</div>
                       <div className="text-xs text-[#666] uppercase tracking-wider">Time Reduced</div>
                    </div>
                    <div>
                       <div className="text-2xl font-bold text-white">₹20.6L</div>
                       <div className="text-xs text-[#666] uppercase tracking-wider">Risk Identified</div>
                    </div>
                 </div>
               </div>
            </a>

            {/* Project IndiGo */}
            <a href="https://github.com/Nik18-droid/IndiGo-Project" target="_blank" rel="noopener noreferrer" 
               className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card group relative overflow-hidden block">
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Plane className="w-32 h-32" />
               </div>
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">Project IndiGo</h3>
                      <p className="text-xs font-mono text-indigo-400">Strategic Proposal & Prototype</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#444] group-hover:text-white transition-colors" />
                 </div>
                 <p className="text-sm text-[#A1A1AA] mb-6 leading-relaxed">
                   Designed "Explore Map" to capture budget-first travelers leaking to aggregators. Built financial models and a functional HTML prototype.
                 </p>
                 <div className="grid grid-cols-2 gap-4 border-t border-[#333] pt-4">
                    <div>
                       <div className="text-2xl font-bold text-white">₹875 Cr</div>
                       <div className="text-xs text-[#666] uppercase tracking-wider">Revenue Opp</div>
                    </div>
                    <div>
                       <div className="text-2xl font-bold text-white">Strat</div>
                       <div className="text-xs text-[#666] uppercase tracking-wider">Proposal</div>
                    </div>
                 </div>
               </div>
            </a>
         </div>
       </div>

       {/* SECTION 2: WORK EXPERIENCE */}
       <div>
         <div className="flex items-center gap-3 mb-6 border-b border-[#333] pb-4 mt-12">
           <Briefcase className="w-5 h-5 text-emerald-500" />
           <h2 className="text-xl font-grotesk font-bold text-white">Work Experience</h2>
         </div>

         <div className="space-y-4">
            {/* FNZ */}
            <div className="bg-[#171717] border border-[#333] rounded-xl p-6 md:p-8 bento-card">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">FNZ Group</h3>
                    <p className="text-sm text-[#666]">Investment Administrator &bull; Process Optimization</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono rounded-full self-start md:self-auto">
                    30% Efficiency Gain
                  </div>
               </div>
               <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                 Addressed a critical knowledge gap in the valuations team causing inefficiencies. Proactively designed and built a centralized Excel-based process documentation system from scratch to standardize complex workflows.
               </p>
               <div className="flex gap-2 text-xs font-mono text-[#666]">
                 <span className="bg-[#222] px-2 py-1 rounded">Process Re-engineering</span>
                 <span className="bg-[#222] px-2 py-1 rounded">Excel</span>
               </div>
            </div>

            {/* Adhumour */}
            <div className="bg-[#171717] border border-[#333] rounded-xl p-6 md:p-8 bento-card">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Adhumour</h3>
                    <p className="text-sm text-[#666]">CRM Data Analyst &bull; Data-Driven Retention</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono rounded-full self-start md:self-auto">
                    25% Retention Uplift
                  </div>
               </div>
               <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                 Analyzed HubSpot data to identify at-risk segments and deployed targeted retention campaigns. Conducted comprehensive data analysis to identify customer behavior patterns.
               </p>
               <div className="flex gap-2 text-xs font-mono text-[#666]">
                 <span className="bg-[#222] px-2 py-1 rounded">HubSpot</span>
                 <span className="bg-[#222] px-2 py-1 rounded">Data Analysis</span>
               </div>
            </div>

            {/* British Council */}
            <div className="bg-[#171717] border border-[#333] rounded-xl p-6 md:p-8 bento-card">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">British Council</h3>
                    <p className="text-sm text-[#666]">Customer Service Executive &bull; Operations</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono rounded-full self-start md:self-auto">
                    96% Resolution Rate
                  </div>
               </div>
               <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4">
                 Analyzed customer complaint data to identify root causes and service gaps. Created data visualizations and reports that led to measurable service improvements and reduced rescheduling costs.
               </p>
               <div className="flex gap-2 text-xs font-mono text-[#666]">
                 <span className="bg-[#222] px-2 py-1 rounded">Ops Efficiency</span>
                 <span className="bg-[#222] px-2 py-1 rounded">Data Viz</span>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default WorkView;