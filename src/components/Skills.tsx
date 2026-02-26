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
        <motion.div {...presets.fadeUp()} viewport={viewport} className="mb-12">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              {...presets.rotateY(index * 0.08)}
              viewport={{ once: true, margin: "-30px" }}
              className="glass-card gradient-border !p-0 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${cat.gradient} px-5 py-4 flex items-center gap-3 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
                <div className={`w-10 h-10 bg-white/20 rounded-[10px] flex items-center justify-center backdrop-blur-sm shadow-lg ${cat.shadow}`}>
                  {cat.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-base font-bold text-white">{cat.title}</div>
                  <div className="text-xs text-white/65">{cat.skills.length} technologies</div>
                </div>
              </div>

              <div className="p-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.08 + i * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/[0.03] transition-all duration-200 group/skill cursor-default"
                  >
                    <span className="text-sm font-medium text-[#e0e0e8] group-hover/skill:text-[#f0f0f5] transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-[#5a5a6e] font-medium px-2.5 py-0.5 bg-white/[0.03] rounded-md border border-white/[0.04] group-hover/skill:border-white/[0.1] transition-colors">
                      {skill.exp}
                    </span>
                  </motion.div>
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
