import { education } from "../data/portfolioData";

const Education = () => {
  const getStatusColor = (status: string) => {
    return status === "In Progress"
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      : "bg-green-500/20 text-green-400 border-green-500/30";
  };

  return (
    <section
      id="education"
      className="py-24 bg-[#12121a] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-[#8b5cf6]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium text-sm uppercase tracking-widest">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            <span className="text-gradient">Education</span> & Qualifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-[#0ea5e9]"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <div
                    className={`glass rounded-2xl p-6 hover:bg-white/5 transition-all duration-500 card-hover inline-block ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-4xl">{item.icon}</span>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <h3 className="text-xl font-bold text-white">
                          {item.degree}
                        </h3>
                        <p className="text-[#6366f1]">{item.institution}</p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-3 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-gray-400">{item.period}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] border-4 border-[#12121a] z-10">
                  <div className="absolute inset-0 rounded-full bg-[#6366f1] animate-ping opacity-25"></div>
                </div>

                {/* Empty Space for Alternating Layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
