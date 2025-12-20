import React from 'react';
import { Card, Typography, Progress, Row, Col } from 'antd';
import { CodeOutlined, DatabaseOutlined, ToolOutlined, StarOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Skills: React.FC = () => {
  const skillLevels = {
    expert: { label: "Expert", color: "bg-emerald-500", experience: "3+ years" },
    advanced: { label: "Advanced", color: "bg-blue-500", experience: "2+ years" },
    intermediate: { label: "Intermediate", color: "bg-yellow-500", experience: "1+ year" },
    beginner: { label: "Beginner", color: "bg-gray-400", experience: "< 1 year" }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <CodeOutlined />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, levelLabel: "expert", projects: 15, years: 3 },
        { name: "TypeScript", level: 85, levelLabel: "advanced", projects: 12, years: 2.5 },
        { name: "Tailwind CSS", level: 80, levelLabel: "advanced", projects: 10, years: 2 },
        { name: "Ant Design", level: 85, levelLabel: "advanced", projects: 8, years: 2 },
        { name: "Material UI", level: 75, levelLabel: "advanced", projects: 6, years: 1.5 },
        { name: "shadcn/ui", level: 70, levelLabel: "intermediate", projects: 4, years: 1 }
      ]
    },
    {
      title: "Backend",
      icon: <DatabaseOutlined />,
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 85, levelLabel: "advanced", projects: 10, years: 3 },
        { name: "NestJS", level: 80, levelLabel: "advanced", projects: 5, years: 2 },
        { name: "REST APIs", level: 90, levelLabel: "expert", projects: 12, years: 3 },
        { name: "Server-Sent Events (SSE)", level: 75, levelLabel: "advanced", projects: 3, years: 1.5 }
      ]
    },
    {
      title: "Database",
      icon: <DatabaseOutlined />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 80, levelLabel: "advanced", projects: 8, years: 2 },
        { name: "MySQL", level: 75, levelLabel: "advanced", projects: 6, years: 2 },
        { name: "TimescaleDB", level: 70, levelLabel: "intermediate", projects: 2, years: 1 }
      ]
    },
    {
      title: "Infra & Services",
      icon: <ToolOutlined />,
      color: "from-amber-500 to-orange-500",
      skills: [
        { name: "Docker", level: 70, levelLabel: "intermediate", projects: 5, years: 1.5 },
        { name: "Redis", level: 75, levelLabel: "advanced", projects: 4, years: 1.5 },
        { name: "Git", level: 90, levelLabel: "expert", projects: 25, years: 3 },
        { name: "Stripe (Subscriptions, Webhooks)", level: 80, levelLabel: "advanced", projects: 3, years: 1.5 },
        { name: "OpenAI Whisper API", level: 75, levelLabel: "advanced", projects: 2, years: 1 }
      ]
    }
  ];

  const topSkills = [
    { name: "React", level: 90, levelLabel: "expert", color: "bg-blue-500", projects: 15 },
    { name: "TypeScript", level: 85, levelLabel: "advanced", color: "bg-indigo-500", projects: 12 },
    { name: "Node.js", level: 85, levelLabel: "advanced", color: "bg-yellow-500", projects: 10 },
    { name: "NestJS", level: 80, levelLabel: "advanced", color: "bg-red-500", projects: 5 },
    { name: "PostgreSQL", level: 80, levelLabel: "advanced", color: "bg-cyan-500", projects: 8 }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-600 text-sm font-medium mb-4">
            <TrophyOutlined className="mr-2" />
            Technical Expertise
          </div>
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-slate-800 !mb-6" ellipsis={false}>
            Skills & 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Technologies</span>
          </Title>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mb-6"></div>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto" ellipsis={false}>
            A comprehensive overview of my technical skills and proficiency levels across various technologies
          </Paragraph>
        </div>

        {/* Top Skills Overview */}
        <div className="mb-20">
          <Title level={3} className="!text-2xl !font-bold !text-slate-800 !mb-8 text-center" ellipsis={false}>
            Core Expertise
          </Title>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {topSkills.map((skill, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 rounded-3xl">
                <div className="p-3 sm:p-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${skillLevels[skill.levelLabel as keyof typeof skillLevels].color} rounded-full flex flex-col items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}>
                    <span className="text-white font-bold text-sm sm:text-lg">{topSkills.find(s => s.name === skill.name)?.projects || skill.projects}</span>
                    <span className="text-white text-xs hidden sm:block">projects</span>
                  </div>
                  <Title level={5} className="!text-gray-800 !mb-2 !text-sm sm:!text-base" ellipsis={false}>{skill.name}</Title>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {skillLevels[skill.levelLabel as keyof typeof skillLevels].experience}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Skills Categories */}
        <Row gutter={[32, 32]}>
          {skillCategories.map((category, index) => (
            <Col xs={24} lg={12} key={index}>
              <Card 
                className="h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-3xl overflow-hidden group"
                bodyStyle={{ padding: 0 }}
              >
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="relative z-10 flex items-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6 backdrop-blur-sm">
                      <div className="text-white text-2xl">{category.icon}</div>
                    </div>
                    <div>
                      <Title level={3} className="!text-white !mb-0 !text-xl lg:!text-2xl !font-bold" ellipsis={false}>
                        {category.title}
                      </Title>
                      <div className="text-white/80 text-sm mt-1">
                        {category.skills.length} Technologies
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-8">
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                          <div className="flex justify-between items-start mb-2">
                            <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                            <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${skillLevels[skill.levelLabel as keyof typeof skillLevels].color}`}>
                              {skill.years}+ year{skill.years > 1 ? 's' : ''}
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                              {skill.projects} projects
                            </div>
                            <div className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              {skillLevels[skill.levelLabel as keyof typeof skillLevels].experience}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Skills Summary */}
        <Card className="mt-20 bg-white rounded-3xl p-12 text-center border-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <Title level={3} className="!text-gray-800 !text-3xl lg:!text-4xl !mb-6 !font-bold" ellipsis={false}>
            Continuous Learning Journey
          </Title>
          <Paragraph className="!text-gray-600 !text-xl !mb-8 max-w-3xl mx-auto !leading-relaxed" ellipsis={false}>
            I believe in growing with every project and staying curious about new technologies. 
            My approach is to learn by doing and contribute meaningfully to each team I work with.
          </Paragraph>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 rounded-2xl p-6 hover:bg-blue-100 transition-colors duration-300">
              <div className="text-3xl mb-3">🔧</div>
              <div className="font-bold text-gray-800 mb-2">Practical Focus</div>
              <div className="text-gray-600 text-sm">Learning through real-world projects</div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 hover:bg-green-100 transition-colors duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <div className="font-bold text-gray-800 mb-2">Team Player</div>
              <div className="text-gray-600 text-sm">Contributing to collaborative success</div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 hover:bg-purple-100 transition-colors duration-300">
              <div className="text-3xl mb-3">📚</div>
              <div className="font-bold text-gray-800 mb-2">Always Learning</div>
              <div className="text-gray-600 text-sm">Staying updated with best practices</div>
            </div>
          </div>
        </Card>
        
      </div>
    </section>
  );
};

export default Skills;