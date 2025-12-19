import { projects } from "../data/portfolioData";
import { personalInfo } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#12121a] rounded-2xl overflow-hidden card-hover border border-white/5 hover:border-[#6366f1]/50"
            >
              {/* Project Header with Gradient */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-6xl mb-3 transform group-hover:scale-125 transition-transform duration-500">
                    {project.icon}
                  </span>
                  {/* Status Badge */}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Ongoing"
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        : "bg-green-500/20 text-green-300 border border-green-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#6366f1] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#6366f1] text-sm mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm font-medium">
                    Key Features:
                  </p>
                  <ul className="grid grid-cols-1 gap-1. 5">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-400 text-xs"
                      >
                        <span className="text-[#6366f1] mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-medium hover:bg-[#6366f1]/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Team Badge (if applicable) */}
                {"team" in project && project.team && (
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-gray-400 text-xs">👥</span>
                    <span className="text-gray-400 text-xs">
                      {project.team}
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 py-2.5 glass rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385. 6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015. 555-3.795-. 735-4.035-1.41-. 135-.345-.72-1.41-1.23-1.695-. 42-.225-1.02-.78-. 015-. 795. 945-.015 1.62. 87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-. 78. 42-1.305.765-1.605-2.67-. 3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-. 12-.3-.54-1.53. 12-3.18 0 0 1.005-.315 3.3 1.23. 96-.27 1.98-.405 3-. 405s2.04.135 3 . 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65. 24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 . 315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View Code
                  </button>
                  <button className="flex-1 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all duration-300 flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 group"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-. 57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-. 345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-. 3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-. 3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-. 405 3-.405s2.04.135 3 . 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View More on GitHub
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
