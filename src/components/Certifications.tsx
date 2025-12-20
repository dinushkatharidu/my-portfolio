import { certifications } from "../data/portfolioData";
import {
  HiOutlineBadgeCheck,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#6366f1]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#6366f1] font-semibold text-sm uppercase tracking-[0.3em] bg-[#6366f1]/10 px-4 py-1.5 rounded-full border border-[#6366f1]/20">
            Professional
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Unified Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Priority (Tier 1) Certifications - Featured Style */}
          {certifications.tier1.map((cert, index) => (
            <div
              key={`tier1-${index}`}
              className="group relative p-8 rounded-3xl border border-white/10 bg-[#12121a]/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#6366f1]/50 shadow-xl"
            >
              {/* Premium Glow for Tier 1 */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6366f1]/10 rounded-full blur-3xl group-hover:bg-[#6366f1]/20 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center text-3xl text-white shadow-lg shadow-[#6366f1]/20">
                      <HiOutlineBadgeCheck />
                    </div>
                    {cert.date && (
                      <span className="px-3 py-1 bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6366f1] transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-1.5 bg-[#6366f1] rounded-full animate-pulse"></span>
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Supporting (Tier 2) Certifications - Clean Glass Style */}
          {certifications.tier2.map((cert, index) => (
            <div
              key={`tier2-${index}`}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl text-gray-400 group-hover:text-[#6366f1] transition-colors">
                  <HiOutlineBadgeCheck />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-white transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-gray-500 text-xs font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Footer / Verification Badge */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-green-500/30 transition-all duration-500">
            <div className="relative">
              <HiOutlineShieldCheck className="text-3xl text-green-400 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-green-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-sm tracking-wide">
                Authenticity Verified
              </p>
              <p className="text-gray-500 text-xs">
                All credentials are current and validated via primary issuers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
