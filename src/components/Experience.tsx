import React, { useEffect, useRef } from "react";
import {
  AiOutlineThunderbolt,
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineEnvironment,
} from "react-icons/ai";

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Bravesoft Vietnam",
      period: "Apr 2023 — Present",
      current: true,
      achievements: [
        "Team lead for 4-member development teams",
        "Implemented subscription billing workflows with Stripe (plans, invoices, webhooks, bank transfers)",
        "Built time-series data ingestion systems using PostgreSQL + TimescaleDB",
        "Integrated IoT devices (SwitchBot) with scheduled sync and batch processing",
        "Built AI-powered transcription system using OpenAI Whisper with SSE streaming",
      ],
      technologies: [
        "React",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "TimescaleDB",
        "Redis",
        "Stripe",
        "OpenAI",
      ],
      icon: <AiOutlineThunderbolt className="text-white text-base" />,
      gradient: "from-blue-500 to-violet-500",
      shadow: "shadow-blue-500/25",
    },
    {
      title: "Frontend Developer",
      company: "Skydev",
      period: "Apr 2022 — Mar 2023",
      current: false,
      achievements: [
        "Developed responsive web applications with React.js",
        "Implemented modern UI components and design systems",
        "Collaborated with backend teams on API integration",
      ],
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      icon: <AiOutlineUser className="text-white text-base" />,
      gradient: "from-emerald-500 to-cyan-500",
      shadow: "shadow-emerald-500/25",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section bg-[#0a0a0f] relative"
    >
      <div className="noise-overlay" />
      {/* Subtle glow */}
      <div className="glow-orb w-[400px] h-[400px] -top-48 -left-32 bg-blue-500" />

      <div className="section-inner">
        {/* Header */}
        <div className="fade-up mb-12">
          <div className="section-label">Career</div>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-14">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`fade-up stagger-${index + 1} relative ${index < experiences.length - 1 ? "mb-12" : ""}`}
            >
              {/* Timeline Dot */}
              <div
                className={`timeline-dot absolute -left-14 top-0 bg-gradient-to-br ${exp.gradient} ${exp.shadow} shadow-lg`}
              >
                {exp.icon}
              </div>

              {/* Card */}
              <div className="glass-card gradient-border !p-0 overflow-hidden">
                {/* Header */}
                <div className="px-7 py-6 border-b border-white/[0.06]">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#f0f0f5] mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1.5 text-[#8b8b9e] text-sm">
                          <AiOutlineEnvironment />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#5a5a6e] text-sm">
                          <AiOutlineCalendar />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-400 text-xs font-semibold shrink-0 animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="px-7 py-6">
                  <div className="mb-5">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 mb-3 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:scale-150 transition-transform duration-200" />
                        <span className="text-[15px] text-[#8b8b9e] leading-relaxed group-hover:text-[#b0b0c0] transition-colors duration-200">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
