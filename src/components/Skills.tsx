import { skills } from "../data/portfolioData";
import { useEffect, useState, useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

const SkillBar = ({
  skill,
  isVisible,
}: {
  skill: Skill;
  isVisible: boolean;
}) => (
  <div className="group">
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </span>
      <span className="text-[#6366f1] font-medium">{skill.level}%</span>
    </div>
    <div className="h-2 bg-[#1a1a24] rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${skill.level}%` : "0%" }}
      ></div>
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: "Programming Languages",
      icon: "💻",
      data: skills.languages,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Frontend Development",
      icon: "🎨",
      data: skills.frontend,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend & Database",
      icon: "🗄️",
      data: skills.backend,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      data: skills.tools,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-[#12121a] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium text-sm uppercase tracking-widest">
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-500 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.data.map((skill, idx) => (
                  <SkillBar key={idx} skill={skill} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Other Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "Docker",
              "Linux",
              "VS Code",
              "IntelliJ",
              "Postman",
              "Figma",
              "Jira",
              "Slack",
              "npm",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 glass rounded-full text-gray-300 hover: text-white hover: bg-white/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
