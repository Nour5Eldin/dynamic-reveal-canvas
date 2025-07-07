import React from 'react';
import { ArrowDown } from 'lucide-react';
const HeroSection = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    experienceSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-50 delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main Name with Gradient */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">NOUR ELDIN</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-4">Frontend Developer</p>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with modern technologies. 
          Specialized in React, Node.js, and cloud architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button onClick={scrollToExperience} className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button onClick={scrollToContact} className="group px-8 py-4 border-2 border-purple-500 text-white font-semibold rounded-full transition-all duration-300 hover:bg-purple-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;