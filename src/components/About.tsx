import React from 'react';
import { Card, Statistic, Row, Col, Typography, Button, Space } from 'antd';
import { TrophyOutlined, ProjectOutlined, CalendarOutlined, CodeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const stats = [
    {
      icon: <TrophyOutlined className="text-3xl text-amber-500 mb-4" />,
      title: "Years Experience",
      value: "3+",
      description: "Professional development",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <ProjectOutlined className="text-3xl text-emerald-500 mb-4" />,
      title: "Projects Completed",
      value: "10+",
      description: "Successfully delivered",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <CalendarOutlined className="text-3xl text-purple-500 mb-4" />,
      title: "Age",
      value: 25,
      description: "Years old",
      color: "from-purple-400 to-pink-500"
    }
  ];


  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">
            <CodeOutlined className="mr-2" />
            About Me
          </div>
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-slate-800 !mb-6" ellipsis={false}>
            Profile
          </Title>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto" ellipsis={false}>
            Full-stack Developer with 3+ years of experience building web applications using ReactJS and Node.js
          </Paragraph>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <Row gutter={[32, 32]} className="mb-16">
            {stats.map((stat, index) => (
              <Col xs={24} sm={8} key={index}>
                <Card 
                  className="text-center h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 rounded-3xl overflow-hidden group"
                  bodyStyle={{ padding: '3rem 2rem' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}>
                      <div className="text-white text-2xl">
                        {React.cloneElement(stat.icon, { className: "text-2xl text-white" })}
                      </div>
                    </div>
                    <Statistic 
                      title={
                        <span className="text-gray-600 font-semibold text-base">
                          {stat.title}
                        </span>
                      }
                      value={stat.value}
                      valueStyle={{ 
                        color: '#1f2937', 
                        fontSize: '3rem', 
                        fontWeight: 'bold',
                        lineHeight: '1'
                      }}
                    />
                    <Paragraph className="!text-gray-500 !mb-0 !mt-2" ellipsis={false}>
                      {stat.description}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <Title level={3} className="!text-2xl lg:!text-3xl !font-bold !text-slate-800 !mb-6 flex items-center" ellipsis={false}>
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
              Profile
            </Title>
            <div className="space-y-6">
              <Paragraph className="!text-lg !leading-relaxed !text-gray-700 !mb-0" ellipsis={false}>
                Full-stack Developer with 3+ years of experience building web applications using ReactJS and Node.js.
              </Paragraph>
              <Paragraph className="!text-lg !leading-relaxed !text-gray-700 !mb-0" ellipsis={false}>
                Acted as technical lead for a 4-member team on the two most recent projects, focusing on third-party API integrations, 
                data-heavy features, and subscription workflows using Stripe and bank transfers.
              </Paragraph>
              <Paragraph className="!text-lg !leading-relaxed !text-gray-700 !mb-0" ellipsis={false}>
                Hands-on contributor with strong end-to-end ownership and a focus on clean, maintainable code.
              </Paragraph>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-white rounded-3xl p-12 text-center border-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <Title level={3} className="!text-gray-800 !text-3xl lg:!text-4xl !mb-4 !font-bold" ellipsis={false}>
            Ready to Create Something Amazing?
          </Title>
          <Paragraph className="!text-gray-600 !text-xl !mb-8 max-w-2xl mx-auto !leading-relaxed" ellipsis={false}>
            Let's collaborate and turn your ideas into reality. I'm always excited to work on innovative projects 
            that challenge and inspire.
          </Paragraph>
          <Space size="large" wrap className="justify-center">
            <Button 
              type="primary"
              size="large"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-none"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
            <Button 
              size="large"
              className="bg-gray-100 border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-2xl font-bold hover:bg-gray-200 hover:border-gray-400 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </Space>
        </Card>
        
      </div>
    </section>
  );
};

export default About;