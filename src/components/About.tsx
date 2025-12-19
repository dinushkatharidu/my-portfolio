import { personalInfo } from "../data/portfolioData";

const About = () => {
  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "10+", label: "Certifications" },
    { number: "4+", label: "Tech Stacks" },
    { number: "2+", label: "Years Learning" },
  ];

  const highlights = [
    { icon: "🎓", text: "BSc Software Engineering Student" },
    { icon: "🏆", text: "Neo4j Certified Professional" },
    { icon: "☁️", text: "AWS Cloud 101 Certified" },
    { icon: "💻", text: "Full Stack Development Focus" },
    { icon: "🤖", text: "Machine Learning Enthusiast" },
    { icon: "🚀", text: "Actively Seeking Internships" },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#6366f1]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium text-sm uppercase tracking-widest">
            Get To Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Card */}
              <div className="glass rounded-3xl p-8 relative z-10">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                      <span className="text-5xl font-bold text-white">DT</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-[#6366f1]">Software Engineer</p>
                    <div className="flex justify-center gap-2 pt-2">
                      <span className="text-2xl">🇱🇰</span>
                      <span className="text-gray-400">Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6366f1]/20 rounded-2xl blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#8b5cf6]/20 rounded-2xl blur-xl"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm also exploring{" "}
              <span className="text-[#0ea5e9] font-medium">
                Machine Learning and AI
              </span>{" "}
              with hands-on projects in Sentiment Analysis, Fake News Detection,
              and Traffic Sign Detection. My goal is to become a well-rounded
              software engineer capable of building impactful solutions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 glass rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-[#6366f1]/10 to-transparent border border-[#6366f1]/20 rounded-xl">
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">
                  {personalInfo.location}
                </p>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl">
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-green-400 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Open to Work
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#6366f1]/30 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 glass rounded-2xl hover:bg-white/5 transition-all duration-300 card-hover"
            >
              <h3 className="text-4xl font-bold text-gradient">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
