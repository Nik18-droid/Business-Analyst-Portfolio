import React from 'react';
import { Database, Cpu, BarChart3, FileText, User, Layers } from 'lucide-react';

const SkillsView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-right-4 duration-500 h-full">
       
       {/* Column 1: Technical */}
       <div className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card">
          <div className="flex items-center gap-3 mb-8">
             <Database className="w-6 h-6 text-blue-500" />
             <h2 className="text-xl font-grotesk font-bold text-white">Technical & Data Stack</h2>
          </div>

          <div className="space-y-6">
             {[
               { name: 'SQL', desc: 'Analytical Queries & Data Manipulation', icon: <Database className="w-5 h-5" />, color: 'text-blue-400' },
               { name: 'Python', desc: 'Data Analysis, Pandas, API Integration', icon: <Cpu className="w-5 h-5" />, color: 'text-yellow-400' },
               { name: 'Power BI', desc: 'Dashboard Development & Viz', icon: <BarChart3 className="w-5 h-5" />, color: 'text-yellow-500' },
               { name: 'Excel', desc: 'PivotTables, VLOOKUP, Complex Formulas', icon: <FileText className="w-5 h-5" />, color: 'text-green-500' },
               { name: 'HubSpot', desc: 'CRM Management & Analysis', icon: <User className="w-5 h-5" />, color: 'text-orange-500' }
             ].map((skill) => (
                <div key={skill.name} className="flex items-start gap-4 group">
                   <div className={`mt-1 ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`}>{skill.icon}</div>
                   <div>
                      <h3 className="text-white font-bold group-hover:text-white transition-colors">{skill.name}</h3>
                      <p className="text-sm text-[#666] font-mono mt-1">{skill.desc}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>

       {/* Column 2: Strategic */}
       <div className="bg-[#171717] border border-[#333] rounded-xl p-8 bento-card">
          <div className="flex items-center gap-3 mb-8">
             <Layers className="w-6 h-6 text-purple-500" />
             <h2 className="text-xl font-grotesk font-bold text-white">Strategic Core</h2>
          </div>

          <div className="space-y-6">
             {[
               { name: 'Requirements Gathering', desc: 'Translating business needs to specs' },
               { name: 'Process Documentation', desc: 'Standardizing complex workflows' },
               { name: 'Workflow Analysis', desc: 'Identifying bottlenecks & optimization' },
               { name: 'Stakeholder Management', desc: 'Cross-functional collaboration' },
               { name: 'Data-Driven Decision Making', desc: 'Actionable insights from raw data' }
             ].map((skill) => (
                <div key={skill.name} className="flex items-start gap-4 group">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all"></div>
                   <div>
                      <h3 className="text-white font-medium">{skill.name}</h3>
                      <p className="text-sm text-[#666] font-mono mt-1">{skill.desc}</p>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default SkillsView;