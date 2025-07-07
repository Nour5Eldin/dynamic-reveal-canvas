
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns.",
    techStack: ["React", "TypeScript", "Firebase", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 3,
    title: "AI Chat Application",
    description: "Real-time chat application with AI integration, featuring natural language processing, message encryption, and responsive design across all devices.",
    techStack: ["React", "WebSocket", "OpenAI API", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Comprehensive data visualization dashboard with interactive charts, real-time metrics, and customizable reporting for business intelligence.",
    techStack: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    demoUrl: "#",
    codeUrl: "#"
  }
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-gray-300 text-center text-lg mb-16 max-w-2xl mx-auto">
          A collection of projects that showcase my expertise in full-stack development, 
          user experience design, and modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50"
                />
                
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoUrl}
                    className="px-6 py-2 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-400 transition-colors flex items-center gap-2"
                  >
                    Live Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={project.codeUrl}
                    className="px-6 py-2 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
