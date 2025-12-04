import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-[#444] font-mono uppercase tracking-wider gap-4 border-t border-[#222] pt-8">
       <div>© 2024 Nikhil Sharma</div>
       <div className="flex gap-6">
          <a href="https://linkedin.com/in/nikhilsharma8215" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            <Linkedin className="w-3 h-3" /> LinkedIn
          </a>
          <a href="https://github.com/Nik18-droid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            <Github className="w-3 h-3" /> GitHub
          </a>
       </div>
    </div>
  );
};

export default Footer;