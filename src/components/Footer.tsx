import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side - Name and title */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">NOUR ELDIN</h3>
          <p className="text-gray-300 text-lg">Frontend Developer</p>
        </div>

        {/* Right side - Social links */}
        <div className="flex gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border-2 border-gray-600 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500">
            <Linkedin className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
          </a>
          
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full border-2 border-gray-600 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500">
            <Github className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
          </a>
          
          <a href="mailto:alex@example.com" className="group p-3 rounded-full border-2 border-gray-600 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500">
            <Mail className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>;
};
export default Footer;