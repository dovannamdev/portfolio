import React from "react";
import { motion } from "motion/react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineGlobal,
} from "react-icons/ai";
import { presets, viewport } from "../utils/motion";

const Contact: React.FC = () => {
  const contactItems = [
    { icon: <AiOutlineMail className="text-xl" />, label: "Email", value: "dovannam.dev@gmail.com", href: "mailto:dovannam.dev@gmail.com", gradient: "from-blue-500 to-cyan-500" },
    { icon: <AiOutlinePhone className="text-xl" />, label: "Phone", value: "0343 181 781", href: "tel:0343181781", gradient: "from-emerald-500 to-cyan-500" },
    { icon: <AiOutlineGithub className="text-xl" />, label: "GitHub", value: "github.com/dovannamdev", href: "https://github.com/dovannamdev", gradient: "from-violet-500 to-pink-500" },
    { icon: <AiOutlineLinkedin className="text-xl" />, label: "LinkedIn", value: "linkedin.com/in/do-nam-5a7a25231", href: "https://www.linkedin.com/in/do-nam-5a7a25231/", gradient: "from-blue-500 to-violet-500" },
    { icon: <AiOutlineGlobal className="text-xl" />, label: "Location", value: "Ho Chi Minh, Viet Nam", href: undefined, gradient: "from-amber-500 to-red-500" },
  ];

  return (
    <section id="contact" className="section bg-[#111118] relative overflow-hidden">
      <div className="noise-overlay" />
      <div className="glow-orb w-[400px] h-[400px] -top-24 -right-24 bg-blue-500" />
      <div className="glow-orb w-[300px] h-[300px] -bottom-12 -left-12 bg-violet-500" />

      <div className="section-inner relative z-10">
        <motion.div {...presets.scalePop()} viewport={viewport} className="mb-12">
          <div className="section-label">Connect</div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to discussing new opportunities, interesting projects, or potential collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactItems.map((item, index) => {
            const Tag = item.href ? "a" : "div";
            return (
              <motion.div
                key={index}
                {...presets.springPop(index * 0.06)}
                whileInView={presets.springPop(index * 0.06).animate}
                viewport={{ once: true, margin: "-30px" }}
              >
                <Tag
                  className="glass-card gradient-border flex items-center gap-4 p-5 no-underline h-full"
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ cursor: item.href ? "pointer" : "default" }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-[#5a5a6e] font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-[15px] text-[#f0f0f5] font-medium">{item.value}</div>
                  </div>
                </Tag>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
