import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolioData";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Java Developer",
  ];

  useEffect(() => {
    const currentRole = roles[loopNum % roles.length];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const techStack = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-500 to-indigo-500" },
    { name: "Java", color: "from-orange-500 to-red-500" },
    { name: "Python", color: "from-yellow-400 to-green-500" },
    { name: "Spring Boot", color: "from-green-400 to-emerald-500" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-[#0a0a0f] flex items-center"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#6366f1]/20 rounded-full blur-3xl animate-blob"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#8b5cf6]/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWMThoMnY0em0wLTZoLTJ2LTRoMnY0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg: px-8 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">
                Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <p className="text-gray-400 text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-white">
                  {personalInfo.name.split(" ")[0]}
                </span>
                <br />
                <span className="text-gradient">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </h1>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl md:text-2xl text-gray-400">
                  {text}
                  <span className="cursor text-[#6366f1]">|</span>
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-gradient-to-r ${tech.color} bg-opacity-10 rounded-full text-sm font-medium text-white/90 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#6366f1]/30 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Me
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
                </span>
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-[#6366f1]/50 text-white rounded-xl font-semibold hover:bg-[#6366f1]/10 hover:border-[#6366f1] transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover: text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385. 6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015. 555-3.795-. 735-4.035-1.41-. 135-.345-.72-1.41-1.23-1.695-. 42-.225-1.02-.78-. 015-. 795. 945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-. 78.42-1.305.765-1.605-2.67-. 3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-. 12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-. 405s2.04. 135 3 . 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20. 447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h. 046c.477-. 9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138. 92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 . 774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 . 774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300 hover: scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - 3D Avatar */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] blur-2xl opacity-30 animate-pulse"></div>

              {/* Main Avatar Container */}
              <div className="relative w-80 h-80 animate-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#0ea5e9] p-1 animate-gradient">
                  <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
                    <span className="text-8xl font-bold text-gradient">DT</span>
                  </div>
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 glass rounded-2xl flex items-center justify-center text-2xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  ⚛️
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-2xl flex items-center justify-center text-2xl animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  ☕
                </div>
                <div
                  className="absolute top-1/2 -right-8 w-14 h-14 glass rounded-2xl flex items-center justify-center text-xl animate-bounce"
                  style={{ animationDelay: "1.5s" }}
                >
                  🐍
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-[#6366f1] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
