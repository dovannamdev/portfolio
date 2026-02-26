import React from "react";
import { motion } from "motion/react";
import { AiOutlineBook } from "react-icons/ai";
import { presets, viewport } from "../utils/motion";

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-[#111118] relative">
      <div className="noise-overlay" />
      <div className="glow-orb w-[400px] h-[400px] -top-32 -left-32 bg-blue-500" />
      <div className="glow-orb w-[300px] h-[300px] bottom-0 right-0 bg-violet-500" />

      <div className="section-inner">
        {/* Header */}
        <motion.div {...presets.slideLeft()} viewport={viewport} className="mb-12">
          <div className="section-label">About</div>
          <h2 className="section-title">Profile</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Summary — spans 2 cols */}
          <motion.div
            {...presets.fadeUp()}
            viewport={viewport}
            className="lg:col-span-2 glass-card gradient-border p-8 relative overflow-hidden"
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-[80px]" />

            <div className="relative z-10">
              <h3 className="text-lg font-bold text-[#f0f0f5] mb-5 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm">
                  💼
                </span>
                Professional Summary
              </h3>

              <div className="space-y-4">
                <p className="text-[16px] text-[#8b8b9e] leading-[1.85]">
                  Full-stack Developer with{" "}
                  <span className="text-[#f0f0f5] font-medium">3+ years</span>{" "}
                  of experience building web applications using{" "}
                  <span className="text-blue-400/90">ReactJS</span>,{" "}
                  <span className="text-blue-400/90">NextJS</span>,{" "}
                  <span className="text-emerald-400/90">NodeJS</span> and{" "}
                  <span className="text-emerald-400/90">NestJS</span>.
                  Collaborated in a 4-member team on the two most recent projects,
                  focusing on third-party API integrations, data-heavy features,
                  and subscription workflows using Stripe and bank transfers.
                </p>
                <p className="text-[16px] text-[#8b8b9e] leading-[1.85]">
                  Hands-on contributor with strong end-to-end ownership and a
                  focus on clean, maintainable code. Experienced in IoT device
                  integration, AI-powered transcription systems, real-time data
                  streaming, and building pixel-accurate UIs from design specs.
                </p>
              </div>

              {/* Quick highlight tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/[0.06]">
                {[
                  "React / Next.js",
                  "NestJS / Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "REST APIs",
                  "Stripe Integration",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-blue-500/[0.06] border border-blue-500/15 rounded-lg text-blue-400/80 text-xs font-medium hover:bg-blue-500/10 hover:border-blue-500/25 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — Education + Stats */}
          <div className="flex flex-col gap-6">
            {/* Education Card */}
            <motion.div
              {...presets.rotateX(0.1)}
              viewport={viewport}
              className="glass-card gradient-border p-6 relative overflow-hidden flex-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />

              <h3 className="text-lg font-bold text-[#f0f0f5] mb-5 flex items-center gap-2 pt-1">
                <AiOutlineBook className="text-blue-400" />
                Education
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#f0f0f5] leading-snug">
                    Bachelor of Software Engineering
                  </div>
                  <div className="text-sm text-[#8b8b9e] mt-1.5 leading-relaxed">
                    Posts and Telecommunications Institute of Technology
                  </div>
                  <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-medium">
                    📅 2018 — 2022
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Card */}
            <motion.div
              {...presets.springPop(0.2)}
              viewport={viewport}
              className="glass-card gradient-border p-6"
            >
              <h3 className="text-sm font-semibold text-[#5a5a6e] uppercase tracking-wider mb-4">
                Highlights
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "3+", label: "Years Exp.", color: "from-blue-500 to-cyan-500" },
                  { value: "10+", label: "Projects", color: "from-emerald-500 to-teal-500" },
                  { value: "E2E", label: "Ownership", color: "from-violet-500 to-pink-500" },
                  { value: "JP", label: "Clients", color: "from-amber-500 to-orange-500" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center py-3 px-2 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-200 cursor-default group"
                  >
                    <div className={`text-xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200`}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[#5a5a6e] font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
