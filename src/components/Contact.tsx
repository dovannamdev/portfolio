import React from 'react';
import { Form, Input, Button, Card, Row, Col, Typography, message, Space } from 'antd';
import { PhoneOutlined, GlobalOutlined, LinkedinOutlined, GithubOutlined, MailOutlined, SendOutlined, MessageOutlined, HeartOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: ContactFormValues) => {
    console.log('Form submitted:', values);
    message.success('Thank you for your message! I will get back to you soon.');
    form.resetFields();
  };

  const contactInfo = [
    { icon: <PhoneOutlined />, label: "Phone", value: "0343181781" },
    { icon: <MailOutlined />, label: "Email", value: "dovannam.dev@gmail.com" },
    { icon: <GlobalOutlined />, label: "Location", value: "Vietnam" }
  ];

  const socialLinks = [
    { icon: <LinkedinOutlined />, label: "LinkedIn", href: "https://linkedin.com/in/dovannam" },
    { icon: <GithubOutlined />, label: "GitHub", href: "https://github.com/dovannam" },
    { icon: <MailOutlined />, label: "Email", href: "mailto:dovannam.dev@gmail.com" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-16 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-32 left-1/2 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/20">
            <MessageOutlined className="mr-2" />
            Let's Connect
          </div>
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-white !mb-6" ellipsis={false}>
            Get In 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </Title>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6"></div>
          <Paragraph className="!text-xl !text-gray-200 max-w-3xl mx-auto !leading-relaxed" ellipsis={false}>
            Ready to bring your ideas to life? Let's discuss your next project or explore potential opportunities together.
          </Paragraph>
        </div>
        
        <Row gutter={[48, 48]} align="middle">
          
          {/* Contact Info */}
          <Col xs={24} lg={10}>
            <div className="space-y-12">
              
              <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <HeartOutlined className="text-white text-xl" />
                  </div>
                  <Title level={3} className="!text-white !text-2xl lg:!text-3xl !mb-0" ellipsis={false}>
                    Let's Connect
                  </Title>
                </div>
                <Paragraph className="!text-gray-200 !text-lg !leading-relaxed !mb-6" ellipsis={false}>
                  I'm always open to discussing new opportunities and interesting projects. 
                  Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you!
                </Paragraph>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400 mb-1">24h</div>
                    <div className="text-blue-200 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                    <div className="text-blue-200 text-sm">Commitment</div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <Title level={4} className="!text-white !text-xl !mb-6" ellipsis={false}>
                  Contact Information
                </Title>
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-center gap-4 p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white text-xl">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider">{info.label}</div>
                      <div className="text-white text-lg font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div>
                <Title level={4} className="!text-white !text-xl !mb-6" ellipsis={false}>
                  Find Me Online
                </Title>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      type="text"
                      icon={link.icon}
                      size="large"
                      className="group text-white hover:text-blue-300 hover:bg-white/10 border border-white/20 hover:border-white/30 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg p-4 h-auto"
                      href={link.href}
                      target="_blank"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px' }}
                    >
                      <div className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
              
            </div>
          </Col>
          
          {/* Contact Form */}
          <Col xs={24} lg={14}>
            <Card 
              className="bg-white/10 backdrop-blur-lg border-white/20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group [&_.ant-card-body]:!p-4 sm:[&_.ant-card-body]:!p-6 lg:[&_.ant-card-body]:!p-12"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SendOutlined className="text-white text-2xl" />
                </div>
                <Title level={3} className="!text-white !text-2xl !mb-2" ellipsis={false}>
                  Send Me a Message
                </Title>
                <Paragraph className="!text-blue-200 !mb-0" ellipsis={false}>
                  I'll get back to you within 24 hours
                </Paragraph>
              </div>
              
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
                className="space-y-6"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="name"
                      rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                      <Input 
                        placeholder="Your Name"
                        className="bg-white/90 border-white/30 hover:border-white/50 focus:border-blue-400 rounded-xl h-12"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: 'Please enter your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                      ]}
                    >
                      <Input 
                        placeholder="Your Email"
                        className="bg-white/90 border-white/30 hover:border-white/50 focus:border-blue-400 rounded-xl h-12"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                
                <Form.Item
                  name="message"
                  rules={[{ required: true, message: 'Please enter your message!' }]}
                >
                  <TextArea 
                    rows={6} 
                    placeholder="Your Message"
                    className="bg-white/90 border-white/30 hover:border-white/50 focus:border-blue-400 rounded-xl"
                  />
                </Form.Item>
                
                <Form.Item className="mb-0">
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    icon={<SendOutlined />}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 font-bold h-12 sm:h-16 text-base sm:text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <span className="group-hover:mr-2 transition-all duration-300">Send Message</span>
                  </Button>
                </Form.Item>
                
                <div className="text-center mt-6">
                  <Paragraph className="!text-blue-200 !text-sm !mb-0" ellipsis={false}>
                    🔒 Your information is safe and will never be shared
                  </Paragraph>
                </div>
              </Form>
            </Card>
          </Col>
          
        </Row>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-16 border-t border-white/10">
          <Title level={4} className="!text-white !text-xl !mb-4" ellipsis={false}>
            Prefer a direct approach?
          </Title>
          <Space size="large" wrap>
            <Button 
              type="link"
              href="tel:0343181781"
              className="text-blue-300 hover:text-blue-400 font-semibold text-lg"
              icon={<PhoneOutlined />}
            >
              Call Me
            </Button>
            <Button 
              type="link"
              href="mailto:dovannam.dev@gmail.com"
              className="text-purple-300 hover:text-purple-400 font-semibold text-lg"
              icon={<MailOutlined />}
            >
              Email Me
            </Button>
          </Space>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;