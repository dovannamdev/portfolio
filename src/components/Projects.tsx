import React, { useEffect, useRef, useState } from "react";
import { CalendarOutlined } from "@ant-design/icons";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "EnvMon — IoT Environmental Monitoring",
      period: "Nov 2025 — Present",
      status: "Current",
      company: "Bravesoft Vietnam",
      technologies: [
        "React",
        "NestJS",
        "PostgreSQL",
        "TimescaleDB",
        "Redis",
        "Stripe",
      ],
      description:
        "IoT platform for tracking sensor data from SwitchBot devices with subscription billing.",
      features: [
        "Team lead for 4-member team with PM coordination",
        "Integrated SwitchBot IoT devices with scheduled sync, rate limiting & batch processing",
        "Time-series data ingestion with PostgreSQL + TimescaleDB for high-volume sensor readings",
        "Subscription billing with Stripe: plans, invoices, webhooks, and bank transfers",
        "End-to-end delivery with pixel-accurate UI aligned to design specs",
      ],
      gradient: "from-emerald-500 to-cyan-500",
      shadow: "0 0 40px rgba(16, 185, 129, 0.12)",
      demoUrl:
        "https://drive.google.com/file/d/1nXUqHYIvYoKykcLCtM35XCuvcBeGwybm/view",
    },
    {
      title: "JIM3 — AI Transcription SaaS",
      period: "Aug 2025 — Present",
      status: "Current",
      company: "Bravesoft Vietnam",
      technologies: [
        "React",
        "NestJS",
        "OpenAI Whisper",
        "SSE",
        "Stripe",
        "Redis",
        "MySQL",
      ],
      description:
        "AI-powered transcription platform using OpenAI Whisper with real-time streaming.",
      features: [
        "AI transcription system with OpenAI Whisper API for audio uploads",
        "SSE streaming for real-time progress with reconnection handling",
        "Backend workflows for audio processing & transcription lifecycle",
        "Pixel-accurate React UI for audio upload, waveform visualization & live display",
      ],
      gradient: "from-blue-500 to-violet-500",
      shadow: "0 0 40px rgba(59, 130, 246, 0.12)",
      demoUrl:
        "https://drive.google.com/file/d/1xTW7kXQBMvBagRigcVbQdQlbI0xKPN7w/view",
    },
    {
      title: "Premium Chat — Real Estate Platform",
      period: "2024",
      status: "Completed",
      company: "Bravesoft Vietnam",
      technologies: [
        "NextJS",
        "Material UI",
        "GraphQL",
        "PostgreSQL",
        "Sequelize",
      ],
      description:
        "Real estate platform connecting sellers and buyers with real-time chat communication.",
      features: [
        "UI implementation with Material UI & SCSS",
        "GraphQL API integration for data fetching",
        "Real-time chat with GraphQL Subscriptions",
        "User-to-user direct messaging for property deals",
      ],
      gradient: "from-violet-500 to-pink-500",
      shadow: "0 0 40px rgba(139, 92, 246, 0.12)",
    },
    {
      title: "Fourlist Matching — Real Estate Data Crawling",
      period: "2024",
      status: "Completed",
      company: "Bravesoft Vietnam",
      technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      description:
        "Automated web scraping system crawling from SUUMO, HOME's, Yahoo and other Japanese property platforms to aggregate and match real estate listings.",
      features: [
        "Built crawling pipelines to scrape data from SUUMO, HOME's, Yahoo real estate",
        "Implemented a matching feature to track and watch new listings in real-time",
        "Scheduled cron jobs for periodic data sync and incremental updates",
        "Redis-based queue for rate limiting, retry logic, and deduplication",
        "Data cleaning, normalization, and matching based on user preferences",
      ],
      gradient: "from-indigo-500 to-blue-500",
      shadow: "0 0 40px rgba(99, 102, 241, 0.12)",
    },
    {
      title: "Fourlist — Real Estate Listings",
      period: "2024",
      status: "Completed",
      company: "Bravesoft Vietnam",
      technologies: ["NextJS", "NodeJS", "MongoDB", "Mongoose", "Material UI"],
      description:
        "Real estate introduction and listing website with sales posting and order management.",
      features: [
        "NextJS SSR website with Material UI",
        "API integration with Axios & React Query",
        "Backend built with NodeJS, Mongoose & MongoDB",
        "Real estate listing, posting, and order closing",
      ],
      gradient: "from-teal-500 to-emerald-500",
      shadow: "0 0 40px rgba(20, 184, 166, 0.12)",
    },
    {
      title: "Digital Signature — Contract Signing",
      period: "2023",
      status: "Completed",
      company: "Bravesoft Vietnam",
      technologies: [
        "ReactJS",
        "Material UI",
        "GraphQL",
        "Konva",
        "PostgreSQL",
      ],
      description:
        "Digital contract signing platform for real estate sales with direct drawing on documents.",
      features: [
        "File upload and direct contract signing workflow",
        "Konva library for drawing signatures on images/PDFs",
        "GraphQL API integration with Sequelize ORM",
        "Multi-party signing between buyers and sellers",
      ],
      gradient: "from-red-500 to-orange-500",
      shadow: "0 0 40px rgba(239, 68, 68, 0.12)",
    },
    {
      title: "CafeFinz — Web, CMS & Mobile App",
      period: "2023",
      status: "Completed",
      company: "Skydev",
      technologies: [
        "NextJS",
        "ReactJS",
        "React Native",
        "Ant Design",
        "React Query",
      ],
      description:
        "Social networking platform for cafe lovers. Web, CMS, and mobile app for community groups.",
      features: [
        "NextJS website with SSR for community interactions",
        "CMS with reusable core components & SWR integration",
        "React Native mobile app with stack navigation & TestFlight",
        "Pixel-perfect UI implementation from Figma designs",
      ],
      gradient: "from-amber-500 to-orange-500",
      shadow: "0 0 40px rgba(245, 158, 11, 0.12)",
    },
    {
      title: "Virtual Event — 360° Event Platform",
      period: "2022",
      status: "Completed",
      company: "Skydev",
      technologies: [
        "ReactJS",
        "Ant Design",
        "Zoom SDK",
        "SignalR",
        "React Query",
      ],
      description:
        "360° virtual event hosting platform with Zoom integration & real-time chat.",
      features: [
        "360° immersive event environment",
        "Zoom SDK integration for creating and joining meetings",
        "SignalR real-time chat and interactive games",
        "UI implementation from Figma with Ant Design & LESS",
      ],
      gradient: "from-cyan-500 to-blue-500",
      shadow: "0 0 40px rgba(6, 182, 212, 0.12)",
    },
    {
      title: "NDShop — E-commerce Platform",
      period: "Sep 2022",
      status: "Completed",
      company: "Skydev",
      technologies: ["ReactJS", "NodeJS", "MySQL"],
      description:
        "E-commerce website for purchasing electronics with store owner management dashboard.",
      features: [
        "Built frontend and backend structure from scratch",
        "Database design and API development",
        "Shopping experience with product listing and order management",
        "Store owner dashboard for inventory and sales tracking",
      ],
      gradient: "from-pink-500 to-rose-500",
      shadow: "0 0 40px rgba(236, 72, 153, 0.12)",
    },
  ];

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="section bg-[#111118] relative"
      >
        <div className="noise-overlay" />
        <div className="glow-orb w-[350px] h-[350px] -bottom-24 -right-24 bg-violet-500" />

        <div className="section-inner">
          {/* Header */}
          <div className="fade-up mb-12">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`fade-up stagger-${index + 1} glass-card !p-0 overflow-hidden group flex flex-col`}
                style={
                  { "--hover-shadow": project.shadow } as React.CSSProperties
                }
              >
                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-r ${project.gradient} px-6 py-5 flex items-start justify-between gap-3 relative overflow-hidden`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="relative z-10 flex-1">
                    <h3 className="text-[17px] font-bold text-white mb-1.5 leading-snug">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap text-white/70 text-[13px]">
                      <span className="flex items-center gap-1.5">
                        <CalendarOutlined />
                        {project.period}
                      </span>
                      {project.company && (
                        <span className="px-2 py-0.5 bg-white/15 rounded text-white/80 text-[11px] font-medium">
                          {project.company}
                        </span>
                      )}
                    </div>
                  </div>
                  {project.status === "Current" && (
                    <span className="relative z-10 px-2.5 py-0.5 bg-white/20 rounded-full text-white text-[11px] font-semibold shrink-0 backdrop-blur-sm">
                      Active
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm text-[#8b8b9e] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-5">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 mb-2.5 group/item"
                      >
                        <span className="w-[5px] h-[5px] rounded-full bg-blue-500 mt-[7px] shrink-0 group-hover/item:bg-blue-400 transition-colors" />
                        <span className="text-[13px] text-[#8b8b9e] leading-relaxed group-hover/item:text-[#b0b0c0] transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/[0.03] border border-white/[0.06] rounded-md text-xs text-[#5a5a6e] font-medium hover:border-white/[0.12] hover:text-[#8b8b9e] transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.demoUrl && (
                      <button
                        onClick={() => {
                          const id =
                            project.demoUrl!.match(/\/d\/(.+?)\//)?.[1];
                          if (id)
                            setActiveVideo(
                              `https://drive.google.com/file/d/${id}/preview`,
                            );
                        }}
                        className={`mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200 cursor-pointer border-none`}
                      >
                        <span>▶</span>
                        Watch Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={activeVideo}
              className="w-full h-full border-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center text-lg cursor-pointer border-none transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
