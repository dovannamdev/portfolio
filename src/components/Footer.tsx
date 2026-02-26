import React from "react";
import { motion } from "motion/react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <AiOutlineGithub />,
      href: "https://github.com/dovannamdev",
      label: "GitHub",
    },
    {
      icon: <AiOutlineLinkedin />,
      href: "https://www.linkedin.com/in/do-nam-5a7a25231/",
      label: "LinkedIn",
    },
    {
      icon: <AiOutlineMail />,
      href: "mailto:dovannam.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0f] border-t border-white/[0.06] py-8 px-6"
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Copyright */}
        <div className="text-sm text-[#5a5a6e]">
          © 2025 <span className="gradient-text font-medium">Đỗ Văn Nam</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              title={link.label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.06] text-[#5a5a6e] text-base no-underline hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Back to Top */}
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-[#5a5a6e] text-[13px] font-medium cursor-pointer hover:border-white/[0.12] hover:text-[#f0f0f5] hover:bg-white/[0.06] transition-all duration-300 font-[inherit]"
        >
          <AiOutlineArrowUp />
          Top
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default Footer;
