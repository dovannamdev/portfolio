import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { key: 'hero', label: 'Home', onClick: () => scrollToSection('hero') },
    { key: 'about', label: 'About', onClick: () => scrollToSection('about') },
    { key: 'experience', label: 'Experience', onClick: () => scrollToSection('experience') },
    { key: 'projects', label: 'Projects', onClick: () => scrollToSection('projects') },
    { key: 'skills', label: 'Skills', onClick: () => scrollToSection('skills') },
    { key: 'education', label: 'Education', onClick: () => scrollToSection('education') },
    { key: 'contact', label: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  return (
    <AntHeader 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-slate-800/90 backdrop-blur-sm shadow-md'
      } px-0`}
    >
      <div className=" mx-auto px-6 flex justify-between items-center h-full w-full">
        <div className="text-white text-2xl font-bold tracking-tight">
          ĐỖ VĂN NAM
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={item.onClick}
              className="text-white hover:text-blue-400 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          type="text"
          icon={<MenuOutlined className="text-xl" />}
          className="lg:hidden bg-white text-gray-800 hover:text-blue-600 border border-gray-200 shadow-md"
          onClick={() => setIsMenuOpen(true)}
          size="large"
          style={{ backgroundColor: 'white' }}
        />
        
        {/* Mobile Drawer */}
        <Drawer
          title={<span className="text-xl font-bold">Navigation</span>}
          placement="right"
          onClose={() => setIsMenuOpen(false)}
          open={isMenuOpen}
          className="lg:hidden"
          width={280}
        >
          <Menu
            mode="vertical"
            items={menuItems}
            className="border-none text-base"
            style={{ backgroundColor: 'transparent' }}
          />
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;