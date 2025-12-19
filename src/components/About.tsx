import { personalInfo } from "../data/portfolioData";
import {
  FaGraduationCap,
  FaAward,
  FaCloud,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaDownload,
  FaLinkedin,
} from "react-icons/fa";
import { SiSpringboot, SiReact } from "react-icons/si";
import dinuImage from "../../public/dinushkatharidu_image.png";

const About = () => {
  // Stats Data
  const stats = [
    { number: "04+", label: "Projects Completed" },
    { number: "08+", label: "Certifications" },
    { number: "05+", label: "Tech Stacks" },
    { number: "02+", label: "Years Experience" },
  ];

  // Highlights Data with Professional Icons
  const highlights = [
    {
      icon: <FaGraduationCap className="text-blue-400" />,
      text: "BSc Software Engineering",
    },
    {
      icon: <FaAward className="text-yellow-400" />,
      text: "Neo4j Certified Professional",
    },
    {
      icon: <FaCloud className="text-cyan-400" />,
      text: "AWS Cloud 101 Certified",
    },
    {
      icon: <FaCode className="text-green-400" />,
      text: "Full Stack Developer",
    },
    {
      icon: <SiSpringboot className="text-green-500" />,
      text: "Spring Boot & React Expert",
    },
    {
      icon: <FaRocket className="text-orange-400" />,
      text: "Open for Internships",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366f1] rounded-full blur-[128px] opacity-10 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#8b5cf6] rounded-full blur-[128px] opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A closer look at my journey, skills, and what drives me.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Profile Card */}
          <div className="relative group w-full max-w-sm mx-auto">
            {/* Animated Border Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#ec4899] rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            {/* Main Card */}
            <div className="relative p-10 glass rounded-[2rem] border border-white/10 bg-[#12121a]/80 backdrop-blur-xl">
              <div className="relative">
                {/* Image Container - Using aspect-[4/5] for a taller frame */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800 relative mb-10 group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60 z-10"></div>

                  {/* Profile Image - object-top ensures the head area is visible */}
                  <img
                    src={dinuImage}
                    alt="Dinushka Tharidu"
                    className="w-full h-full object-cover object-top absolute inset-0 z-0"
                  />

                  {/* Floating Tech Badges */}
                  <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    <span className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-cyan-400 text-xl">
                      <SiReact />
                    </span>
                    <span className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-orange-400 text-xl">
                      <FaCode />
                    </span>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-[#6366f1] font-medium">
                    {personalInfo.title}
                  </p>
                </div>

                {/* Status Indicator */}
                <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span className="w-3 h-3 bg-green-500 rounded-full block"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full block absolute inset-0 animate-ping"></span>
                    </div>
                    <span className="text-gray-300 text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                  <span className="text-2xl">🇱🇰</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <FaLaptopCode className="text-[#6366f1]" />
                <span className="text-gray-200">
                  Software Engineering Student
                </span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-[#6366f1]/30 pl-4">
                {personalInfo.bio}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#6366f1]/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-[#6366f1]/10 text-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-xl font-semibold shadow-lg shadow-[#6366f1]/20 hover:shadow-[#6366f1]/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FaDownload className="animate-bounce" />
                Download CV
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-[#0077b5]/50 hover:text-[#0077b5] transition-all duration-300"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Stats Strip - Floating Bottom Section */}
        <div className="mt-20 p-8 rounded-3xl bg-[#12121a] border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent opacity-50"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 group">
                <h4 className="text-4xl md:text-5xl font-bold text-white group-hover:text-[#6366f1] transition-colors duration-300">
                  {stat.number}
                </h4>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
