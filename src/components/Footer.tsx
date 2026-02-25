import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      href: "https://github.com/dovannamdev",
      label: "GitHub",
    },
    {
      icon: <LinkedinOutlined />,
      href: "https://www.linkedin.com/in/do-nam-5a7a25231/",
      label: "LinkedIn",
    },
    {
      icon: <MailOutlined />,
      href: "mailto:dovannam.dev@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Copyright */}
        <div className="text-sm text-[#5a5a6e]">
          © 2025 <span className="gradient-text font-medium">Đỗ Văn Nam</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              title={link.label}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/[0.06] text-[#5a5a6e] text-base no-underline hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/[0.06] hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-lg text-[#5a5a6e] text-[13px] font-medium cursor-pointer hover:border-white/[0.12] hover:text-[#f0f0f5] hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300 font-[inherit]"
        >
          <ArrowUpOutlined />
          Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
