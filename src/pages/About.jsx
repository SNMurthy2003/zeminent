import React from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Linkedin
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations."
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative partnerships."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative approaches."
    }
  ]

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech industry, driving strategic growth and innovation."
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      description: "Technical expert specializing in cloud architecture and scalable system design."
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      description: "Creative director focused on user experience and modern interface design."
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering Businesses Through{' '}
              <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Since 2018, we've been helping businesses transform their operations through innovative technology solutions and expert staffing services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-violet-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses of all sizes by providing access to world-class technology talent and innovative solutions that drive growth, efficiency, and competitive advantage in the digital economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 card-hover"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-violet-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the global leader in technology services, recognized for our excellence, innovation, and commitment to transforming how businesses leverage technology to achieve their goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-violet-400 mb-6 mx-auto w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Leadership <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The experts driving our success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 text-center card-hover group"
              >
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-violet-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {member.description}
                </p>
                <button className="flex items-center justify-center mx-auto text-violet-400 hover:text-white transition-colors duration-300">
                  <Linkedin size={20} className="mr-2" />
                  <span>Connect</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Your Business Section - Exact replica from Home page */}
      <div className="section-spacing relative w-full bg-[#09001A] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center gap-[24px] sm:gap-[28px] lg:gap-[32px]">
          {/* Heading */}
          <h2 className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-white font-[700] text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.3] font-inter">
            Ready to Transform Your Business?
          </h2>

          {/* Subtext */}
          <p className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-[#F5F7FA] font-[400] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.5] font-inter">
            Let's discuss how we can help you achieve your technology goals and drive your business forward.
          </p>

          {/* Button */}
          <button className="w-full max-w-[280px] sm:max-w-[240px] lg:w-[224px] h-[48px] sm:h-[50px] lg:h-[52px] bg-[#B065FF] rounded-[4px] flex items-center justify-center hover:bg-[#9a4df5] transition-all cursor-pointer">
            <span className="text-white font-[500] text-[15px] lg:text-[16px] leading-[24px] text-center font-inter">
              Start Your Project
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
