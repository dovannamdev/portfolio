import React from 'react';
import { Card, Button, Space, Typography, Tag } from 'antd';
import { GithubOutlined, EyeOutlined, CalendarOutlined, ToolOutlined, CheckCircleOutlined, ProjectOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Projects: React.FC = () => {
  const projects = [
    {
      title: "EnvMon - IoT Environmental Monitoring Platform",
      period: "Nov 2025 — Present",
      technologies: ["React", "NestJS", "PostgreSQL", "TimescaleDB", "Redis", "Stripe"],
      description: "IoT environmental monitoring platform for tracking and analyzing sensor data from SwitchBot devices. Features time-series data storage, subscription billing, and real-time monitoring capabilities.",
      features: [
        "Acted as technical lead for a 4-member team, supporting the PM in task breakdown and coordinating implementation and code reviews",
        "Integrated SwitchBot IoT devices with scheduled sync, rate limiting, and batch data processing",
        "Implemented time-series data ingestion and storage using PostgreSQL + TimescaleDB to handle high-volume sensor readings",
        "Implemented subscription billing workflows with Stripe, including plans, invoices, webhooks, and bank transfer support"
      ],
      demoLink: "#",
      githubLink: "#",
      color: "from-emerald-500 to-teal-600",
      status: "Current"
    },
    {
      title: "JIM3 - AI Transcription SaaS Platform",
      period: "Aug 2025 — Present",
      technologies: ["React", "NestJS", "OpenAI Whisper API", "Server-Sent Events (SSE)", "Stripe", "Redis", "MySQL"],
      description: "AI-powered transcription SaaS platform using OpenAI Whisper for audio transcription. Features real-time progress streaming, audio processing workflows, and pixel-accurate UI for waveform visualization.",
      features: [
        "Built an AI-powered transcription system using OpenAI Whisper, supporting audio uploads",
        "Implemented Server-Sent Events (SSE) to stream transcription progress and results with reconnection handling",
        "Designed backend workflows for audio processing and transcription lifecycle management",
        "Built pixel-accurate React UI for audio upload, waveform visualization, and live transcription display"
      ],
      demoLink: "#",
      githubLink: "#",
      color: "from-blue-500 to-indigo-600",
      status: "Current"
    },
    {
      title: "Data Crawling Systems",
      period: "Various",
      technologies: ["Node.js", "Python", "PostgreSQL"],
      description: "Built systems for automated data collection and processing from various sources.",
      features: [
        "Automated data collection",
        "Data processing and storage",
        "Scheduled sync and updates"
      ],
      demoLink: "#",
      githubLink: "#",
      color: "from-purple-500 to-pink-600",
      status: "Completed"
    },
    {
      title: "Realtime Chat Features",
      period: "Various",
      technologies: ["React", "Node.js", "WebSockets"],
      description: "Implemented real-time chat functionality for various applications.",
      features: [
        "Real-time messaging",
        "User presence indicators",
        "Message history"
      ],
      demoLink: "#",
      githubLink: "#",
      color: "from-cyan-500 to-blue-600",
      status: "Completed"
    },
    {
      title: "Digital Signature Workflows",
      period: "Various",
      technologies: ["React", "Node.js", "PostgreSQL"],
      description: "Developed digital signature solutions for secure document signing.",
      features: [
        "Secure signature implementation",
        "Multi-party signing",
        "Document management"
      ],
      demoLink: "#",
      githubLink: "#",
      color: "from-amber-500 to-orange-600",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4">
            <ProjectOutlined className="mr-2" />
            Portfolio
          </div>
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-slate-800 !mb-6" ellipsis={false}>
            Featured 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </Title>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto" ellipsis={false}>
            A collection of projects showcasing my expertise in modern web development
          </Paragraph>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl overflow-hidden"
              bodyStyle={{ padding: 0 }}
            >
              {/* Project Header with Gradient */}
              <div className={`bg-gradient-to-r ${project.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Title level={3} className="!text-white !mb-2 !text-xl lg:!text-2xl !font-bold" ellipsis={false}>
                        {project.title}
                      </Title>
                      <div className="flex items-center text-white/80 mb-4">
                        <CalendarOutlined className="mr-2" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === 'Current' ? 'animate-pulse' : ''
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Tag key={techIndex} className="border-white/30 text-white bg-white/20 backdrop-blur-sm">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <Paragraph className="!text-gray-700 !text-base !leading-relaxed !mb-6" ellipsis={false}>
                  {project.description}
                </Paragraph>
                
                {/* Features */}
                <div className="mb-8">
                  <Title level={5} className="!text-gray-800 !mb-4 flex items-center" ellipsis={false}>
                    <ToolOutlined className="mr-2 text-blue-500" />
                    Key Features
                  </Title>
                  <div className="space-y-3">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    {project.features.length > 3 && (
                      <div className="text-sm text-gray-500 pl-6">
                        +{project.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="primary"
                    icon={<EyeOutlined />}
                    href={project.demoLink}
                    target="_blank"
                    className={`bg-gradient-to-r ${project.color} border-none hover:opacity-90 font-semibold px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1`}
                  >
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </Button>
                  <Button 
                    icon={<GithubOutlined />}
                    href={project.githubLink}
                    target="_blank"
                    className="bg-gray-800 text-white border-none hover:bg-gray-700 font-semibold px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
                  >
                    Source
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-white rounded-3xl p-12 text-center border-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <Title level={3} className="!text-gray-800 !text-3xl lg:!text-4xl !mb-4 !font-bold" ellipsis={false}>
            Interested in My Work?
          </Title>
          <Paragraph className="!text-gray-600 !text-xl !mb-8 max-w-2xl mx-auto !leading-relaxed" ellipsis={false}>
            Let's discuss how I can help bring your next project to life with modern technologies and innovative solutions.
          </Paragraph>
          <Space size="large" wrap className="justify-center">
            <Button 
              size="large"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-2xl font-bold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-none"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="large"
              className="bg-gray-100 border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-2xl font-bold hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </Button>
          </Space>
        </Card>
        
      </div>
    </section>
  );
};

export default Projects;