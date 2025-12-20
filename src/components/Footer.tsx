import React from 'react';
import { Typography, Space, Button, Divider } from 'antd';
import { HeartFilled, ArrowUpOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: <GithubOutlined />, href: 'https://github.com/dovannam', label: 'GitHub' },
    { icon: <LinkedinOutlined />, href: 'https://linkedin.com/in/dovannam', label: 'LinkedIn' },
    { icon: <MailOutlined />, href: 'mailto:dovannam.dev@gmail.com', label: 'Email' }
  ];

  const quickInfo = [
    { label: 'Location', value: 'Vietnam' },
    { label: 'Experience', value: '3+ Years' },
    { label: 'Projects', value: '10+ Completed' },
    { label: 'Availability', value: 'Open to Work' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-32 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-32 right-16 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                ĐỖ VĂN NAM
              </h3>
              <p className="text-xl text-blue-200 font-semibold mb-4">FULL-STACK DEVELOPER</p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Passionate about creating innovative web solutions with modern technologies. 
                Always learning, always growing, always coding with purpose.
              </p>
            </div>
            
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickInfo.map((info, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <div className="text-gray-400 text-sm font-medium">{info.label}</div>
                  <div className="text-white font-semibold">{info.value}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 font-semibold mb-4">Connect with me:</p>
              <Space size="middle">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    type="text"
                    icon={social.icon}
                    href={social.href}
                    target="_blank"
                    className="text-gray-300 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-xl w-12 h-12 transition-all duration-300 transform hover:scale-110"
                    title={social.label}
                  />
                ))}
              </Space>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Navigation</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/5 transform hover:translate-x-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Email</p>
                <a 
                  href="mailto:dovannam.dev@gmail.com" 
                  className="text-blue-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  dovannam.dev@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Phone</p>
                <a 
                  href="tel:0343181781" 
                  className="text-blue-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  0343181781
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium mb-1">Location</p>
                <p className="text-gray-300">Vietnam</p>
              </div>
              <div className="pt-4">
                <p className="text-emerald-400 font-semibold animate-pulse">
                  🟢 Available for new opportunities
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Divider */}
        <Divider className="border-gray-700" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <Text className="!text-gray-300 text-lg" ellipsis={false}>
              &copy; 2024 ĐỖ VĂN NAM. All rights reserved.
            </Text>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <Text className="!text-gray-400" ellipsis={false}>Made with</Text>
              <HeartFilled className="text-red-500 text-sm animate-pulse" />
              <Text className="!text-gray-400" ellipsis={false}>using React, TypeScript & Ant Design</Text>
            </div>
          </div>

          {/* Back to Top Button */}
          <Button 
            onClick={scrollToTop}
            type="primary"
            icon={<ArrowUpOutlined />}
            className="bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 font-semibold px-6 py-2 h-12 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Back to Top
          </Button>
          
        </div>

        {/* Final Message */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <Text className="!text-gray-400 text-lg" ellipsis={false}>
            Thank you for visiting my portfolio! Let's build something amazing together 🚀
          </Text>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;