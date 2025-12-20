import React from 'react';
import { Card, Typography } from 'antd';
import { UserOutlined, CalendarOutlined, EnvironmentFilled, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Fullstack Developer",
      company: "Bravesoft Vietnam",
      period: "Apr 2023 — Present",
      description: "Full-stack developer working on various web applications. Acted as technical lead for 4-member teams on recent projects, focusing on third-party API integrations, data-heavy features, and subscription workflows.",
      achievements: [
        "Led technical implementation for 4-member development teams",
        "Implemented subscription billing workflows with Stripe",
        "Built time-series data ingestion systems using PostgreSQL + TimescaleDB",
        "Integrated IoT devices with scheduled sync and batch processing"
      ],
      technologies: ["React", "TypeScript", "NestJS", "Node.js", "PostgreSQL", "TimescaleDB", "Redis", "Stripe"],
      color: "from-blue-500 to-purple-600",
      icon: <ThunderboltOutlined />,
      current: true
    },
    {
      title: "Frontend Developer", 
      company: "Skydev",
      period: "Apr 2022 — Mar 2023",
      description: "Frontend developer working on web applications using React.js and modern frontend technologies.",
      achievements: [
        "Developed responsive web applications",
        "Implemented modern UI components",
        "Collaborated with backend teams on API integration"
      ],
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      color: "from-emerald-500 to-teal-600",
      icon: <UserOutlined />,
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-4">
            <UserOutlined className="mr-2" />
            Career Path
          </div>
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-slate-800 !mb-6" ellipsis={false}>
            Professional 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </Title>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto" ellipsis={false}>
            A journey of continuous learning and delivering impactful solutions across diverse projects
          </Paragraph>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 to-purple-200 hidden sm:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline Dot */}
                <div className={`absolute left-2 sm:left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg z-10 group-hover:scale-125 transition-transform duration-300`}></div>
                
                {/* Experience Card */}
                <div className="ml-12 sm:ml-20 flex-1">
                  <Card 
                    className="shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 rounded-3xl overflow-hidden group/card"
                    bodyStyle={{ padding: 0 }}
                  >
                    {/* Card Header with Gradient */}
                    <div className={`bg-gradient-to-r ${exp.color} p-4 sm:p-6 lg:p-8 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/20 transition-colors duration-300"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4 sm:mb-6">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 sm:mb-0 sm:mr-4 backdrop-blur-sm flex-shrink-0">
                                <div className="text-white text-lg sm:text-xl">{exp.icon}</div>
                              </div>
                              <div>
                                <Title level={3} className="!text-white !mb-1 !text-lg sm:!text-xl lg:!text-2xl !font-bold" ellipsis={false}>
                                  {exp.title}
                                </Title>
                                <div className="flex items-center text-white/90 flex-wrap">
                                  <EnvironmentFilled className="mr-2" />
                                  <span className="text-base sm:text-lg font-semibold">{exp.company}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center text-white/80 mb-4 gap-2">
                              <div className="flex items-center">
                                <CalendarOutlined className="mr-2" />
                                <span className="text-sm sm:text-base">{exp.period}</span>
                              </div>
                              {exp.current && (
                                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold animate-pulse backdrop-blur-sm">
                                  Current Position
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-6 lg:p-8">
                      <Paragraph className="!text-gray-700 !text-base sm:!text-lg !leading-relaxed !mb-6 sm:!mb-8" ellipsis={false}>
                        {exp.description}
                      </Paragraph>
                      
                      {/* Key Achievements */}
                      <div>
                        <Title level={5} className="!text-gray-800 !mb-4 !font-semibold" ellipsis={false}>
                          Key Achievements
                        </Title>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2.5 mr-4 flex-shrink-0`}></div>
                              <span className="text-gray-600 leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-0 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
              <div className="text-sm text-gray-500 mt-1">Professional Development</div>
            </div>
          </Card>
          <Card className="text-center bg-gradient-to-r from-purple-50 to-pink-50 border-0 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 font-semibold">Projects Completed</div>
              <div className="text-sm text-gray-500 mt-1">Successfully Delivered</div>
            </div>
          </Card>
          <Card className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border-0 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">8+</div>
              <div className="text-gray-600 font-semibold">Technologies Mastered</div>
              <div className="text-sm text-gray-500 mt-1">Modern Tech Stack</div>
            </div>
          </Card>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;