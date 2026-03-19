import React, { useMemo } from "react";
import { motion } from "motion/react";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { presets } from "../utils/motion";

const Hero: React.FC = () => {
  // ⚡ Reduced from 20 → 12 particles, CSS hides extras on mobile via :nth-child(n+9)
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        animationDuration: `${10 + Math.random() * 12}s`,
        animationDelay: `${Math.random() * 8}s`,
        background: ["#3b82f6", "#06b6d4", "#8b5cf6", "#10b981"][i % 4],
        opacity: 0.3 + Math.random() * 0.4,
        bottom: `-${Math.random() * 20}px`,
      })),
    []
  );

  const badge = presets.scalePop();
  const name = presets.slideLeft(0.05);
  const title = presets.fadeUp(0.1);
  const desc = presets.fadeUp(0.15);
  const metrics = presets.fadeIn(0.2);
  const ctas = presets.springUp(0.35);

  return (
    <section
      id="hero"
      className="gradient-bg min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="noise-overlay" />
      <div className="glow-orb w-[500px] h-[500px] -top-24 -right-24 bg-blue-500" />
      <div className="glow-orb w-[400px] h-[400px] -bottom-12 -left-24 bg-violet-500" />
      <div className="glow-orb w-[300px] h-[300px] top-[40%] left-1/2 bg-cyan-500" />

      {particles.map((p, i) => (
        <div key={i} className="particle" style={p} />
      ))}

      <div className="section-inner pt-28 pb-20 w-full max-md:text-center max-md:flex max-md:flex-col max-md:items-center">
        <motion.div
          {...badge}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-400 text-[13px] font-semibold mb-8 backdrop-blur-sm"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          {...name}
          viewport={{ once: true }}
          className="text-[clamp(3rem,7vw,5rem)] font-black leading-[1.05] tracking-tight mb-4"
          style={{ willChange: "transform, opacity" }}
        >
          <span className="text-[#f0f0f5]">ĐỖ VĂN </span>
          <span className="gradient-text">NAM</span>
          <span className="typing-cursor" />
        </motion.h1>

        <motion.h2
          {...title}
          viewport={{ once: true }}
          className="text-[clamp(1.2rem,3vw,1.6rem)] font-semibold text-[#6b6b80] tracking-[0.2em] uppercase mb-8"
          style={{ willChange: "transform, opacity" }}
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          {...desc}
          viewport={{ once: true }}
          className="text-lg text-[#8b8b9e] leading-relaxed max-w-[620px] mb-10"
          style={{ willChange: "transform, opacity" }}
        >
          3+ years building production web apps with{" "}
          <span className="text-[#f0f0f5] font-medium">ReactJS</span>,{" "}
          <span className="text-[#f0f0f5] font-medium">NextJS</span>,{" "}
          <span className="text-[#f0f0f5] font-medium">NodeJS</span>, and{" "}
          <span className="text-[#f0f0f5] font-medium">NestJS</span>.
          Delivering IoT platforms, AI SaaS, and subscription billing
          systems for Japanese enterprise clients.
        </motion.p>

        <motion.div
          {...metrics}
          viewport={{ once: true }}
          className="flex gap-10 mb-12 flex-wrap max-md:justify-center"
          style={{ willChange: "transform, opacity" }}
        >
          {[
            { value: "3+", label: "Years Exp." },
            { value: "10+", label: "Projects" },
            { value: "20+", label: "Technologies" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              {...presets.scalePop(0.25 + i * 0.06)}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group cursor-default"
              style={{ willChange: "transform, opacity" }}
            >
              <span className="gradient-text text-[32px] font-extrabold leading-none transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </span>
              <span className="text-[13px] text-[#5a5a6e] font-medium mt-1.5">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...ctas}
          viewport={{ once: true }}
          className="flex gap-4 flex-wrap max-md:flex-col max-md:items-center"
          style={{ willChange: "transform, opacity" }}
        >
          <button
            className="btn-primary"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <AiOutlineMail />
            Get In Touch
          </button>
          <a
            className="btn-secondary"
            href="https://drive.google.com/uc?export=download&id=1kZoDwkrc4qzdhxB96B-tn9AwlZ5EUdrY"
            download="Do_Van_Nam_-_Full-Stack_Developer.pdf"
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/15 rounded-xl flex justify-center pt-2">
          <div className="w-[3px] h-2 bg-white/30 rounded-sm" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
