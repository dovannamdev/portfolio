import React from 'react';
import { Button, Typography, Space, Avatar } from 'antd';
import { DownloadOutlined, ArrowRightOutlined, UserOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-32 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Welcome Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/20">
              <StarOutlined className="mr-2" />
              Welcome to my portfolio
            </div>
            
            {/* Main Title */}
            <Title 
              level={1} 
              className="!text-white !mb-6 !font-bold !text-5xl sm:!text-6xl lg:!text-7xl !leading-tight"
              ellipsis={false}
            >
              ĐỖ VĂN NAM
            </Title>
            
            {/* Subtitle */}
            <div className="mb-8">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-200 mb-4">
                FULL-STACK DEVELOPER
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto lg:mx-0"></div>
            </div>
            
            {/* Description */}
            <Paragraph className="!text-gray-300 !text-lg sm:!text-xl !leading-relaxed !mb-10 max-w-2xl mx-auto lg:mx-0" ellipsis={false}>
              Full-stack Developer with 3+ years of experience building web applications using ReactJS and Node.js. 
              Technical lead for 4-member teams, focusing on third-party API integrations, data-heavy features, and subscription workflows.
            </Paragraph>
            
            {/* CTA Buttons */}
            <Space 
              direction="vertical" 
              size="large" 
              className="sm:!flex-row w-full sm:w-auto"
            >
              <Button 
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 font-semibold px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                size="large"
                icon={<DownloadOutlined />}
                className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 font-semibold px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-xl backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                href="/resume.pdf" 
                target="_blank"
              >
                Download CV
              </Button>
            </Space>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Animated background rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-ping"></div>
              
              {/* Main avatar */}
              <Avatar 
                size={{ xs: 200, sm: 240, md: 280, lg: 320 }}
                icon={<UserOutlined />}
                className="relative bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border-4 border-white/20 shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-8 -right-8 w-16 h-16 bg-blue-400/20 rounded-full backdrop-blur-sm animate-bounce delay-100"></div>
              <div className="absolute bottom-8 -left-8 w-12 h-12 bg-purple-400/20 rounded-full backdrop-blur-sm animate-bounce delay-200"></div>
            </div>
          </div>
          
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/60 text-sm mt-2">Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;