'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield, Target, Zap } from 'lucide-react'

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Award className="w-16 h-16" />,
      title: "Proven Experience",
      description: "5+ years of delivering successful projects across various industries and technologies.",
      stats: "500+ Projects"
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Certified Professionals",
      description: "Our team consists of certified experts with deep knowledge in cutting-edge technologies.",
      stats: "50+ Experts"
    },
    {
      icon: <Clock className="w-16 h-16" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly and efficiently.",
      stats: "99.9% Uptime"
    }
  ]

  const additionalFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Enterprise-grade security protocols"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Oriented",
      description: "Results-driven approach to every project"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Agile methodologies for rapid deployment"
    }
  ]

  return (
    <section className="section-padding bg-dark-200/30">
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
            Why Choose <span className="text-gradient">Zeminent</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 h-full transition-all duration-300 hover:border-violet-400/40 hover:shadow-violet-glow card-hover">
                {/* Icon */}
                <div className="text-violet-400 mb-6 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {reason.description}
                </p>

                {/* Stats */}
                <div className="text-3xl font-bold text-gradient">
                  {reason.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-300/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Additional Benefits
            </h3>
            <p className="text-gray-300">
              Beyond our core strengths, we offer additional advantages that set us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 group"
              >
                <div className="text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
