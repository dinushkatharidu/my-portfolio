import { education } from "../data/portfolioData";
import { FaMapMarkerAlt, FaCalendarAlt, FaAward } from "react-icons/fa";

const Education = () => {
  const getStatusStyle = (status: string) => {
    return status === "In Progress"
      ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
      : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
  };

  return (
    <section
      id="education"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-[0.3em] bg-[#6366f1]/10 px-4 py-1.5 rounded-full border border-[#6366f1]/20">
            Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
            Education{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              &
            </span>{" "}
            Qualifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A chronological overview of my academic foundation and specialized
            training in software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#6366f1]/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {education.map((item, index) => {
              // --- ADDED THIS LINE TO HANDLE DYNAMIC ICONS ---
              const IconComponent = item.icon;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot with Pulse */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-[#6366f1] z-20 -translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2">
                    <div className="absolute inset-0 rounded-full bg-[#6366f1] animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 ml-12 md:ml-0">
                    <div className="group relative p-8 rounded-3xl border border-white/5 bg-[#12121a]/50 backdrop-blur-xl transition-all duration-500 hover:border-[#6366f1]/30 hover:bg-[#12121a]/80 hover:-translate-y-1 shadow-2xl overflow-hidden">
                      {/* Hover Glow Effect */}
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6366f1]/10 rounded-full blur-3xl group-hover:bg-[#6366f1]/20 transition-all duration-500"></div>

                      <div
                        className={`relative z-10 space-y-4 ${
                          index % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {/* Category/Icon Header */}
                        <div
                          className={`flex items-center gap-4 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          {/* --- FIXED ICON CONTAINER --- */}
                          <div className="w-14 h-14 rounded-2xl bg-[#6366f1]/10 flex items-center justify-center text-3xl text-[#6366f1] group-hover:scale-110 transition-transform duration-500">
                            {/* Render the icon dynamically */}
                            {typeof IconComponent === "string" ? (
                              IconComponent
                            ) : (
                              <IconComponent />
                            )}
                          </div>

                          <div>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border mb-2 ${getStatusStyle(
                                item.status
                              )}`}
                            >
                              {item.status}
                            </span>
                            <h3 className="text-2xl font-bold text-white leading-tight">
                              {item.degree}
                            </h3>
                          </div>
                        </div>

                        {/* Institution & Details */}
                        <div className="space-y-2">
                          <p className="text-xl font-medium text-gray-200">
                            {item.institution}
                          </p>

                          {"certification" in item && item.certification && (
                            <div
                              className={`flex items-center gap-2 text-gray-400 text-sm ${
                                index % 2 === 0 ? "md:justify-end" : ""
                              }`}
                            >
                              <FaAward className="text-[#6366f1]" />
                              <span>{item.certification}</span>
                            </div>
                          )}

                          <div
                            className={`flex flex-wrap items-center gap-4 pt-2 text-gray-400 text-sm ${
                              index % 2 === 0 ? "md:justify-end" : ""
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <FaCalendarAlt className="text-[#6366f1]" />
                              <span>{item.period}</span>
                            </div>
                            {"location" in item && item.location && (
                              <div className="flex items-center gap-1.5">
                                <FaMapMarkerAlt className="text-[#6366f1]" />
                                <span>{item.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Invisible spacer for desktop layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
