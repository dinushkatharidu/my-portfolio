import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolioData";
import myLogo from "../../public/dinushkatharidu.dev.jpg"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle Scroll Visibility for "Back to Top"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] pt-20 pb-10 overflow-hidden">
      {/* 1. Advanced Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent"></div>

      {/* 2. Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#6366f1]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Branding & Status */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <img
                src={myLogo}
                alt="logo"
                className="w-10 h-10 rounded-full object-cover transition-all duration-300 ease-in-out group-hover:w-20 group-hover:h-20"
              />
              <span className="text-2xl font-bold text-white tracking-tight">
                DinushkaTharidu<span className="text-[#6366f1]">.dev</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed mx-auto md:mx-0">
              Undergraduate Software Engineer focused on building scalable Java,
              SpringBoot, MERN stack applications and mastering modern system
              architectures.
            </p>

            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Available for Internships
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Grid */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-[#6366f1] transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                Connect
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  className="text-gray-500 hover:text-[#0077b5] transition-colors text-sm flex items-center gap-2"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-500 hover:text-[#EA4335] transition-colors text-sm flex items-center gap-2"
                >
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter/CTA */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">
              Interested in working?
            </h4>
            <p className="text-gray-400 text-sm">
              Open to discussing new projects or internship roles.
            </p>
            <a
              href="#contact"
              className="inline-flex px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm font-semibold hover:bg-[#6366f1] hover:border-[#6366f1] transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* 3. Technology Stack Credits Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-xs border border-white/5">
              <FaReact className="text-[#61DAFB]" /> React
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-xs border border-white/5">
              <SiTypescript className="text-[#3178C6]" /> TypeScript
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-xs border border-white/5">
              <SiTailwindcss className="text-[#38BDF8]" /> Tailwind
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-xs">
              © {currentYear}{" "}
              <span className="text-white font-medium">Dinushka Tharidu</span>.
              Built with precision in{" "}
              <span className="text-white">Sri Lanka 🇱🇰</span>
            </p>
          </div>
        </div>
      </div>

      {/* 4. Professional Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-[#6366f1]/40 transition-all duration-500 z-50 hover:-translate-y-2 group ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <FaArrowUp className="text-xl group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </button>
    </footer>
  );
};

export default Footer;
