import React from 'react';
import { Card, Typography, Timeline } from 'antd';
import { BookOutlined, TrophyOutlined, CalendarOutlined, HomeOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Education: React.FC = () => {
  const education = [
    {
      degree: "Software Engineering",
      school: "Posts and Telecommunications Institute of Technology",
      period: "2018 — 2022",
      description: "Bachelor's degree in Software Engineering with focus on software development, algorithms, database design, and system architecture.",
      achievements: [
        "Software Engineering Specialization",
        "Strong foundation in programming and algorithms",
        "Database design and management",
        "System architecture and design patterns"
      ],
      color: "from-blue-500 to-indigo-600",
      icon: <BookOutlined />
    }
  ];

  const certifications = [
    {
      title: "Fullstack Web Development",
      issuer: "Self-taught & Project Experience",
      year: "2022-Present",
      skills: ["MERN Stack", "LAMP Stack", "Vue.js Ecosystem"]
    },
    {
      title: "Modern JavaScript & TypeScript",
      issuer: "Continuous Learning",
      year: "2021-Present",
      skills: ["ES6+", "TypeScript", "Async Programming"]
    },
    {
      title: "Database Design & Management",
      issuer: "Academic & Professional Experience",
      year: "2020-Present",
      skills: ["SQL", "NoSQL", "Database Optimization"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            <HomeOutlined className="mr-2" />
            Academic Background
          </div>
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-slate-800 !mb-6">
            Education & 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Learning</span>
          </Title>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-6"></div>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto">
            My educational foundation and continuous learning journey in software development
          </Paragraph>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Education */}
          <div>
            <Title level={3} className="!text-2xl !font-bold !text-slate-800 !mb-8 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-4"></div>
              Formal Education
            </Title>
            
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 rounded-3xl overflow-hidden group mb-6"
                bodyStyle={{ padding: 0 }}
              >
                {/* Education Header */}
                <div className={`bg-gradient-to-r ${edu.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6 backdrop-blur-sm flex-shrink-0">
                        <div className="text-white text-2xl">{edu.icon}</div>
                      </div>
                      <div className="flex-1">
                        <Title level={4} className="!text-white !mb-2 !text-xl !font-bold">
                          {edu.degree}
                        </Title>
                        <div className="text-white/90 font-semibold mb-2">{edu.school}</div>
                        <div className="flex items-center text-white/80">
                          <CalendarOutlined className="mr-2" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Content */}
                <div className="p-8">
                  <Paragraph className="!text-gray-700 !text-base !leading-relaxed !mb-6">
                    {edu.description}
                  </Paragraph>
                  
                  <div>
                    <Title level={5} className="!text-gray-800 !mb-4">Key Highlights</Title>
                    <div className="space-y-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center">
                          <CheckCircleOutlined className="text-green-500 mr-3" />
                          <span className="text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications & Skills */}
          <div>
            <Title level={3} className="!text-2xl !font-bold !text-slate-800 !mb-8 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-4"></div>
              Continuous Learning
            </Title>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <TrophyOutlined className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <Title level={5} className="!text-gray-800 !mb-1">{cert.title}</Title>
                      <div className="text-gray-600 text-sm mb-2">{cert.issuer} • {cert.year}</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <Card className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center border-0 shadow-2xl">
          <Title level={3} className="!text-white !text-3xl lg:!text-4xl !mb-6 !font-bold">
            Lifelong Learning Philosophy
          </Title>
          <Paragraph className="!text-indigo-100 !text-xl !mb-8 max-w-3xl mx-auto">
            Education is not just about degrees—it's about continuously adapting, learning new technologies, 
            and applying knowledge to solve real-world problems. Every project teaches something new.
          </Paragraph>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-2">🎓</div>
              <div className="font-semibold">Formal Education</div>
              <div className="text-indigo-200 text-sm">Strong theoretical foundation</div>
            </div>
            <div>
              <div className="text-3xl mb-2">💡</div>
              <div className="font-semibold">Self-Directed Learning</div>
              <div className="text-indigo-200 text-sm">Staying current with tech trends</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <div className="font-semibold">Practical Application</div>
              <div className="text-indigo-200 text-sm">Learning through real projects</div>
            </div>
          </div>
        </Card>
        
      </div>
    </section>
  );
};

export default Education;