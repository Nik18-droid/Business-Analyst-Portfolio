import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactView: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
       <div className="bg-[#171717] border border-[#333] rounded-xl p-8 md:p-12 bento-card text-center">
          <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#333]">
             <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-white mb-4">Ready to build?</h2>
          <p className="text-lg text-[#A1A1AA] mb-8 leading-relaxed max-w-lg mx-auto">
            I am currently open to <span className="text-white font-medium">Business Analyst</span> and <span className="text-white font-medium">Operations Strategy</span> roles.
          </p>
          
          <div className="flex flex-col gap-4 max-w-md mx-auto">
             {/* Primary Email */}
             <a href="mailto:nikhil.sharma369@outlook.com" 
                className="flex items-center justify-center gap-3 bg-[#111] border border-[#333] text-white font-semibold py-4 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                <Mail className="w-5 h-5" />
                nikhil.sharma369@outlook.com
             </a>

             {/* Secondary Email */}
             <a href="mailto:nikhil_sharma1998@outlook.com" 
                className="flex items-center justify-center gap-3 bg-[#111] border border-[#333] text-white font-semibold py-4 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                <Mail className="w-5 h-5" />
                nikhil_sharma1998@outlook.com
             </a>
             
             <div className="grid grid-cols-2 gap-4">
               <a href="https://linkedin.com/in/nikhilsharma8215" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#111] border border-[#333] text-white py-3 rounded-lg hover:bg-[#222] transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
               </a>
               <a href="https://github.com/Nik18-droid" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#111] border border-[#333] text-white py-3 rounded-lg hover:bg-[#222] transition-colors">
                  <Github className="w-4 h-4" /> GitHub
               </a>
             </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[#333] inline-flex items-center gap-2 text-sm text-[#666] font-mono bg-[#0f0f0f] px-4 py-2 rounded-full border border-[#222]">
             <MapPin className="w-4 h-4" /> Global Mobility: UK Visa / India Resident
          </div>
       </div>
    </div>
  );
};

export default ContactView;