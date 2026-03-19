import React from "react";
import { motion } from "motion/react";
import {
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineCloud,
  AiOutlineLayout,
} from "react-icons/ai";
import { presets, viewport } from "../utils/motion";

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <AiOutlineLayout className="text-white text-lg" />,
      gradient: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/20",
      accent: "blue",
      skills: [
        { name: "React", exp: "3+ yrs" },
        { name: "NextJS", exp: "2+ yrs" },
        { name: "React Native", exp: "0.5 yr" },
        { name: "TypeScript", exp: "3+ yrs" },
        { name: "Tailwind CSS", exp: "3+ yrs" },
        { name: "Ant Design", exp: "2 yrs" },
        { name: "Material UI", exp: "1.5 yrs" },
        { name: "shadcn/ui", exp: "1 yr" },
      ],
    },
    {
      title: "Backend",
      icon: <AiOutlineCode className="text-white text-lg" />,
      gradient: "from-emerald-500 to-cyan-500",
      shadow: "shadow-emerald-500/20",
      accent: "emerald",
      skills: [
        { name: "Node.js", exp: "2 yrs" },
        { name: "NestJS", exp: "2 yrs" },
        { name: "REST APIs", exp: "3+ yrs" },
        { name: "GraphQL", exp: "1 yr" },
        { name: "SSE / WebSockets", exp: "1 yr" },
      ],
    },
    {
      title: "Database",
      icon: <AiOutlineDatabase className="text-white text-lg" />,
      gradient: "from-violet-500 to-pink-500",
      shadow: "shadow-violet-500/20",
      accent: "violet",
      skills: [
        { name: "PostgreSQL", exp: "2 yrs" },
        { name: "MySQL", exp: "2 yrs" },
        { name: "MongoDB", exp: "1 yr" },
        { name: "TimescaleDB", exp: "1 yr" },
        { name: "Redis", exp: "1.5 yrs" },
      ],
    },
    {
      title: "Infra & Services",
      icon: <AiOutlineCloud className="text-white text-lg" />,
      gradient: "from-amber-500 to-red-500",
      shadow: "shadow-amber-500/20",
      accent: "amber",
      skills: [
        { name: "Docker", exp: "1.5 yrs" },
        { name: "Git", exp: "3 yrs" },
        { name: "Stripe", exp: "1.5 yrs" },
        { name: "OpenAI Whisper", exp: "1 yr" },
        { name: "Jira", exp: "3+ yrs" },
      ],
    },
  ];

  return (
    <section id="skills" className="section bg-[#0a0a0f] relative">
      <div className="noise-overlay" />
      <div className="glow-orb w-[300px] h-[300px] top-1/3 -left-24 bg-cyan-500" />

      <div className="section-inner">
        <motion.div
          {...presets.fadeUp()}
          whileInView={presets.fadeUp().animate}
          viewport={viewport}
          className="mb-12"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="section-label">Expertise</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              {...presets.fadeUp(index * 0.08)}
              whileInView={presets.fadeUp(index * 0.08).animate}
              viewport={{ once: true, margin: "-30px" }}
              className="glass-card gradient-border !p-0 overflow-visible group relative"
              style={{ willChange: "transform, opacity" }}
            >
              {/* ⚡ Subtle gradient overlay on hover (Dark Grid pattern) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent" />
              </div>

              {/* ⚡ Corner accent squares on hover (Dark Grid pattern) */}
              <div className="pointer-events-none absolute inset-0 hidden group-hover:block z-[2]">
                <div className="absolute -left-1.5 -top-1.5 h-2.5 w-2.5 rounded-sm bg-blue-400/80" />
                <div className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-sm bg-violet-400/80" />
                <div className="absolute -left-1.5 -bottom-1.5 h-2.5 w-2.5 rounded-sm bg-cyan-400/80" />
                <div className="absolute -right-1.5 -bottom-1.5 h-2.5 w-2.5 rounded-sm bg-emerald-400/80" />
              </div>

              <div className={`bg-gradient-to-r ${cat.gradient} px-5 py-4 flex items-center gap-3 relative overflow-hidden rounded-t-2xl`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className={`w-10 h-10 bg-white/20 rounded-[10px] flex items-center justify-center backdrop-blur-sm shadow-lg ${cat.shadow}`}>
                  {cat.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-base font-bold text-white">{cat.title}</div>
                  <div className="text-xs text-white/65">{cat.skills.length} technologies</div>
                </div>
              </div>

              <div className="p-4 relative z-10">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-all duration-200 group/skill cursor-default"
                  >
                    <span className="text-sm font-medium text-[#e0e0e8] group-hover/skill:text-[#f0f0f5] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-[#5a5a6e] font-medium px-2.5 py-0.5 bg-white/[0.03] rounded-md border border-white/[0.04] group-hover/skill:border-white/[0.1] group-hover/skill:text-[#8b8b9e] transition-all duration-200">
                      {skill.exp}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
