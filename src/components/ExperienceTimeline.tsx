
import React, { useEffect, useRef, useState } from 'react';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  logo: string;
  side: 'left' | 'right';
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: "Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented microservices architecture that improved system performance by 40%.",
    logo: "🚀",
    side: "right"
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Developed and maintained multiple client projects using modern JavaScript frameworks. Built RESTful APIs and integrated third-party services, serving 10k+ daily active users.",
    logo: "💡",
    side: "left"
  },
  {
    id: 3,
    company: "Digital Agency",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: "Created responsive web applications and landing pages for various clients. Specialized in React, TypeScript, and modern CSS frameworks with focus on performance optimization.",
    logo: "🎨",
    side: "right"
  },
  {
    id: 4,
    company: "Freelance",
    position: "Web Developer",
    duration: "2018 - 2019",
    description: "Built custom websites and web applications for small businesses. Gained experience in full project lifecycle from requirements gathering to deployment and maintenance.",
    logo: "💻",
    side: "left"
  }
];

const ExperienceTimeline = () => {
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.getAttribute('data-experience-id') || '0');
          setVisibleExperiences(prev => [...new Set([...prev, id])]);
        }
      });
    }, observerOptions);

    const experienceElements = document.querySelectorAll('[data-experience-id]');
    experienceElements.forEach(el => observer.observe(el));

    // Timeline height animation based on scroll
    const handleScroll = () => {
      if (!sectionRef.current || !timelineRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)));
      setTimelineHeight(scrollProgress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-20">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full">
            <div 
              ref={timelineRef}
              className="w-full bg-gradient-to-b from-cyan-400 to-purple-500 transition-all duration-300 ease-out"
              style={{ height: `${timelineHeight}%` }}
            ></div>
          </div>

          {/* Experience Items */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-experience-id={exp.id}
                className={`relative flex items-center ${
                  exp.side === 'left' ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Circle */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ${
                  visibleExperiences.includes(exp.id) 
                    ? 'scale-100 opacity-100' 
                    : 'scale-50 opacity-0'
                }`}>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-2xl ${
                    visibleExperiences.includes(exp.id) ? 'shadow-2xl shadow-cyan-500/50' : ''
                  }`}>
                    {exp.logo}
                  </div>
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-1/2 ${exp.side === 'left' ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 transition-all duration-700 transform ${
                    visibleExperiences.includes(exp.id)
                      ? 'translate-x-0 opacity-100'
                      : exp.side === 'left' 
                        ? 'translate-x-16 opacity-0' 
                        : '-translate-x-16 opacity-0'
                  }`}>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                    <h4 className="text-cyan-400 font-semibold mb-2">{exp.position}</h4>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
