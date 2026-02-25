import React, { useEffect, useRef } from "react";
import { BookOutlined } from "@ant-design/icons";

const useScrollReveal = (ref: React.RefObject<HTMLElement | null>) => {
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
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-[#111118] relative"
    >
      <div className="noise-overlay" />
      <div className="section-inner">
        {/* Header */}
        <div className="fade-up mb-12">
          <div className="section-label">About</div>
          <h2 className="section-title">Profile</h2>
        </div>

        {/* Profile Content */}
        <div className="fade-up stagger-1 glass-card gradient-border p-8 mb-6">
          <div className="flex flex-col gap-5">
            <p className="text-[17px] text-[#8b8b9e] leading-[1.8]">
              Full-stack Developer with 3+ years of experience building web
              applications using ReactJS, NextJS, NodeJS and NestJS. Acted as
              team lead for a 4-member team on the two most recent projects,
              focusing on third-party API integrations, data-heavy features, and
              subscription workflows using Stripe and bank transfers.
            </p>
            <p className="text-[17px] text-[#8b8b9e] leading-[1.8]">
              Hands-on contributor with strong end-to-end ownership and a focus
              on clean, maintainable code. Experienced in IoT device
              integration, AI-powered transcription systems, real-time data
              streaming, and building pixel-accurate UIs from design specs.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="fade-up stagger-2 glass-card gradient-border p-6">
          <h3 className="text-lg font-bold text-[#f0f0f5] mb-4 flex items-center gap-2">
            <BookOutlined className="text-blue-400" />
            Education
          </h3>

          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
              <span className="text-white text-lg">🎓</span>
            </div>
            <div className="flex-1">
              <div className="text-base font-semibold text-[#f0f0f5]">
                Bachelor of Software Engineering
              </div>
              <div className="text-sm text-[#8b8b9e] mt-0.5">
                Posts and Telecommunications Institute of Technology
              </div>
              <div className="text-xs text-[#5a5a6e] mt-1">2018 — 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
