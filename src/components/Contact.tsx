import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiOutlineLocationMarker, HiOutlineArrowRight } from "react-icons/hi";
import { FiPhone, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: personalInfo.github,
      hoverClass:
        "hover:text-white hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: personalInfo.linkedin,
      hoverClass:
        "hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:shadow-[0_0_20px_rgba(0,119,181,0.2)]",
    },
  ];

  const contactInfo = [
    {
      icon: SiGmail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "from-[#EA4335]/20 to-[#EA4335]/5",
      iconColor: "text-[#EA4335]",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      color: "from-[#10b981]/20 to-[#10b981]/5",
      iconColor: "text-[#10b981]",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: personalInfo.whatsapp,
      href: `https://wa.me/${personalInfo.whatsapp
        .replace(/\s/g, "")
        .replace("+", "")}`,
      color: "from-[#25D366]/20 to-[#25D366]/5",
      iconColor: "text-[#25D366]",
    },
    {
      icon: HiOutlineLocationMarker,
      label: "Location",
      value: "Kahawatta, Sri Lanka",
      href: "#",
      color: "from-[#3b82f6]/20 to-[#3b82f6]/5",
      iconColor: "text-[#3b82f6]",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation of form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      // Clear success state after 6 seconds
      setTimeout(() => setIsSent(false), 6000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#6366f1]/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#6366f1] font-medium text-sm uppercase tracking-widest">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm actively seeking internship or entry-level software engineering
            opportunities. Let's discuss how I can contribute to your team!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side: Contact Info & Socials */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/10"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-2xl ${info.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">
                      {info.label}
                    </p>
                    <p className="text-white font-bold group-hover:text-[#6366f1] transition-colors uppercase tracking-tight">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#6366f1] rounded-full"></span>
                Connect With Me
              </h3>
              <div className="flex gap-5">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-gray-400 text-2xl transition-all duration-300 hover:-translate-y-2 ${social.hoverClass}`}
                    >
                      <SocialIcon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-2xl mt-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 font-bold uppercase tracking-widest text-xs">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently looking for internship or entry-level software
                engineering roles. Let's discuss potential collaborations!
              </p>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative group h-full">
              {/* Ambient Glow behind the tile */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>

              <div className="relative h-full glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-[#12121a]/70 backdrop-blur-2xl shadow-2xl overflow-hidden">
                {isSent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fadeIn">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-5xl text-emerald-500">
                      <FiCheckCircle />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        Message Received!
                      </h3>
                      <p className="text-gray-400">
                        Thanks for reaching out, Dinushka. I'll get back to you
                        shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Name Input */}
                      <div className="space-y-3">
                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-[#6366f1]/50 focus:ring-2 focus:ring-[#6366f1]/10 outline-none transition-all duration-300"
                          placeholder="Your Name"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-3">
                        <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-[#6366f1]/50 focus:ring-2 focus:ring-[#6366f1]/10 outline-none transition-all duration-300"
                          placeholder="yourname@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-3">
                      <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-[#6366f1]/50 focus:ring-2 focus:ring-[#6366f1]/10 outline-none transition-all duration-300"
                        placeholder="Project Proposal / Inquiry"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-3">
                      <label className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-[#6366f1]/50 focus:ring-2 focus:ring-[#6366f1]/10 outline-none transition-all duration-300 resize-none"
                        placeholder="Briefly describe your project or inquiry..."
                      ></textarea>
                    </div>

                    {/* Purple Action Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          <>
                            Send Message
                            <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
