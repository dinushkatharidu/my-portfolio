import { skills } from "../data/portfolioData";
import { useEffect, useState, useRef } from "react";
import {
  HiOutlineCode,
  HiOutlineDesktopComputer,
  HiOutlineDatabase,
  HiOutlineServer,
  HiOutlineLightBulb,
  HiOutlineCog,
} from "react-icons/hi";

interface Skill {
  name: string;
  level: number;
}

// Sub-component for individual skill bars
const SkillBar = ({
  skill,
  isVisible,
  color,
}: {
  skill: Skill;
  isVisible: boolean;
  color: string;
}) => (
  <div className="group">
    <div className="flex justify-between mb-2 px-1">
      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
        {skill.name}
      </span>
      <span
        className={`font-mono font-bold text-sm bg-gradient-to-r ${color} bg-clip-text text-transparent`}
      >
        {skill.level}%
      </span>
    </div>
    <div className="h-2.5 bg-[#1a1a24] rounded-full overflow-hidden border border-white/5 p-[1px]">
      <div
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative`}
        style={{ width: isVisible ? `${skill.level}%` : "0%" }}
      >
        {/* Glowing tip of the progress bar */}
        <div className="absolute right-0 top-0 h-full w-2 bg-white/30 blur-[2px]"></div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Programming",
      icon: <HiOutlineCode />,
      data: skills.languages,
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-500/5",
    },
    {
      title: "Frontend",
      icon: <HiOutlineDesktopComputer />,
      data: skills.frontend,
      color: "from-cyan-500 to-blue-500",
      bgLight: "bg-cyan-500/5",
    },
    {
      title: "Backend",
      icon: <HiOutlineServer />,
      data: skills.backend,
      color: "from-green-500 to-emerald-500",
      bgLight: "bg-green-500/5",
    },
    {
      title: "Databases",
      icon: <HiOutlineDatabase />,
      data: skills.databases,
      color: "from-orange-500 to-red-500",
      bgLight: "bg-orange-500/5",
    },
    {
      title: "Tools & DevOps",
      icon: <HiOutlineCog />,
      data: skills.tools,
      color: "from-indigo-500 to-purple-500",
      bgLight: "bg-indigo-500/5",
    },
    {
      title: "Core Concepts",
      icon: <HiOutlineLightBulb />,
      data: skills.core,
      color: "from-teal-500 to-cyan-500",
      bgLight: "bg-teal-500/5",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#6366f1]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-[0.3em] bg-[#6366f1]/10 px-4 py-1.5 rounded-full border border-[#6366f1]/20">
            Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of my technical proficiency and specialized
            knowledge in modern software engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-3xl border border-white/5 bg-[#12121a]/50 backdrop-blur-xl transition-all duration-500 hover:border-[#6366f1]/30 hover:bg-[#12121a]/80 hover:-translate-y-2`}
            >
              {/* Subtle category glow */}
              <div
                className={`absolute inset-0 rounded-3xl ${category.bgLight} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl text-white shadow-lg shadow-black/20`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#6366f1] transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6 relative z-10">
                {category.data.map((skill, idx) => (
                  <SkillBar
                    key={idx}
                    skill={skill}
                    isVisible={isVisible}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-24 text-center">
          <div className="inline-block p-[1px] rounded-3xl bg-gradient-to-r from-[#6366f1]/20 via-[#a855f7]/20 to-[#6366f1]/20">
            <div className="bg-[#0a0a0f] rounded-3xl px-10 py-12 border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
                <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#6366f1]"></span>
                Soft Skills
                <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#6366f1]"></span>
              </h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:text-[#6366f1] hover:bg-[#6366f1]/10 hover:border-[#6366f1]/30 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
