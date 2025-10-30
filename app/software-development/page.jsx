'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Cloud,
  CheckCircle,
  Globe,
  Code,
  Smartphone,
  FileCode
} from 'lucide-react'

export default function SoftwareDevelopmentPage() {
  const process = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "Understanding your requirements and defining the scope"
    },
    {
      number: "2",
      title: "Development & Testing",
      description: "Agile development with continuous testing"
    },
    {
      number: "3",
      title: "Design & Architecture",
      description: "Creating robust and scalable system architecture"
    },
    {
      number: "4",
      title: "Deployment & Support",
      description: "Seamless deployment and ongoing maintenance"
    }
  ]

  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Java", "Go", ".NET"]
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      category: "Cloud",
      items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    }
  ]

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and technologies"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android"
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Cloud Solutions",
      description: "Scalable cloud architecture and migration services"
    },
    {
      icon: <FileCode className="w-10 h-10" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integrations"
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Software Built <span className="text-gradient">to Perfection</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Transform your ideas into powerful, scalable software solutions with our expert development team.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[20px] mt-8">
              <button className="h-[52px] bg-[#B065FF] rounded-[4px] px-[24px] py-[14px] flex items-center justify-center gap-[8px] hover:bg-[#9a4df5] transition-all cursor-pointer whitespace-nowrap">
                <span className="text-white font-[500] text-[16px] leading-[24px] font-inter">
                  Get Started
                </span>
                <span className="text-white text-[16px]">➡</span>
              </button>
              <button className="w-[229px] h-[52px] bg-[#190046] rounded-[4px] px-[32px] py-[14px] flex items-center justify-center hover:bg-[#2a0066] transition-all cursor-pointer">
                <span className="text-white font-[500] text-[16px] leading-[24px] font-inter">
                  View Our Work
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Development Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 text-center card-hover group"
              >
                <div className="w-[46px] h-[46px] rounded-full border-[1.5px] border-white flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-[#B065FF] group-hover:border-[#B065FF]">
                  <span className="text-white text-xl font-bold transition-colors duration-300 group-hover:text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Master Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies We <span className="text-gradient">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern stack for modern solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Code className="w-6 h-6 text-violet-400 mr-3" />
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-4 h-4 text-violet-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Development Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-violet-400 mb-6 mx-auto w-fit">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="section-spacing relative w-full bg-[#000000] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center gap-[24px] sm:gap-[28px] lg:gap-[32px]">
          <h2 className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-white font-[700] text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.3] font-inter">
            Ready to Build Your Custom Software?
          </h2>

          <p className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-[#F5F7FA] font-[400] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.5] font-inter">
            Let's discuss your project requirements and turn your vision into reality with our expert development team.
          </p>

          <button className="w-full max-w-[280px] sm:max-w-[240px] lg:w-[224px] h-[48px] sm:h-[50px] lg:h-[52px] bg-[#B065FF] rounded-[4px] flex items-center justify-center hover:bg-[#9a4df5] transition-all cursor-pointer">
            <span className="text-white font-[500] text-[15px] lg:text-[16px] leading-[24px] text-center font-inter">
              Start Your Project →
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

