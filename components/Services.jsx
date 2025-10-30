'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  Code, 
  Users, 
  Settings,
  ArrowRight 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-12 h-12" />,
      title: "DevOps Services",
      description: "Streamline your development pipeline with our comprehensive DevOps solutions. From CI/CD to infrastructure automation.",
      features: ["CI/CD Pipeline Setup", "Infrastructure as Code", "Monitoring & Alerting", "Cloud Migration"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description: "Scale your business with our cloud expertise. We help you migrate, optimize, and manage your cloud infrastructure.",
      features: ["Cloud Migration", "Multi-Cloud Strategy", "Cost Optimization", "Security & Compliance"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Build innovative software solutions with our expert development team. From web apps to enterprise software.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Legacy Modernization"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Staff Augmentation",
      description: "Scale your team instantly with our skilled professionals. Get the expertise you need without the hiring hassle.",
      features: ["Senior Developers", "DevOps Engineers", "UI/UX Designers", "Project Managers"]
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-violet-400/40 hover:shadow-violet-glow card-hover">
                {/* Icon */}
                <div className="text-violet-400 mb-6 group-hover:text-violet-300 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="flex items-center text-violet-400 hover:text-white transition-colors duration-300 group/btn">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
