import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] px-6 h-16 flex items-center justify-between transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/6 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="bg-transparent border-none text-lg font-extrabold cursor-pointer tracking-tight"
        >
          <span className="gradient-text">DVN</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`border-none text-sm font-medium cursor-pointer px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-blue-500/10 text-blue-500"
                  : "bg-transparent text-[#8b8b9e] hover:text-[#f0f0f5]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-transparent border-none text-[#f0f0f5] text-2xl cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Menu - outside header to avoid stacking issues */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9998] bg-[#0a0a0f]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`bg-transparent border-none text-2xl font-semibold cursor-pointer px-8 py-4 transition-all duration-200 ${
                activeSection === item.id
                  ? "text-blue-500 scale-110"
                  : "text-[#8b8b9e] hover:text-[#f0f0f5]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
