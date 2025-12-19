import { certifications } from "../data/portfolioData";

const Certifications = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium text-sm uppercase tracking-widest">
            Credentials
          </span>
          <h2 className="text-4xl md: text-5xl font-bold text-white mt-2">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tier 1 - Must-Have */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🥇</span>
            <h3 className="text-2xl font-bold text-white">
              Must-Have Certifications
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.tier1.map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-transparent border border-yellow-500/20 p-6 hover: border-yellow-400/50 transition-all duration-500 card-hover"
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7. 835 4.697a3. 42 3.42 0 001.946-. 806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00. 806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-. 806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-. 806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-. 806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    {cert.date && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium">
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1. 5 h-1.5 bg-yellow-400 rounded-full"></span>
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 - Supporting */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">🥈</span>
            <h3 className="text-2xl font-bold text-white">
              Supporting Certifications
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-500/50 to-transparent"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.tier2.map((cert, index) => (
              <div
                key={index}
                className="group glass rounded-xl p-5 hover:bg-white/5 transition-all duration-300 card-hover border border-white/5 hover:border-[#6366f1]/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#6366f1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#6366f1] transition-colors">
                  {cert.name}
                </h4>
                <p className="text-gray-500 text-xs">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5. 618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-. 382-3.016z"
              />
            </svg>
            <span className="text-gray-300">
              All certifications are verified and up-to-date
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
