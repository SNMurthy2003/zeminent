'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Zap,
  CheckCircle,
  TrendingUp,
  Shield
} from 'lucide-react'

export default function StaffAugmentationPage() {
  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Quick Onboarding",
      description: "Get developers started in just 1-2 weeks"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Global Talent Pool",
      description: "Access to skilled developers worldwide"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Risk Mitigation",
      description: "Reduce hiring risks with proven professionals"
    }
  ]

  const services = [
    {
      title: "Requirements Analysis",
      description: "We understand your technical needs and team culture",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Talent Matching",
      description: "We select the best candidates from our talent pool",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Integration",
      description: "Seamless integration with your existing team",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Ongoing Support",
      description: "Continuous monitoring and support for success",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  const features = [
    "Reduce hiring time by 70%",
    "Access to global talent pool",
    "Flexible contract terms",
    "No long-term commitments",
    "Seamless team integration",
    "24/7 technical support"
  ]

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scale Your Team With <span className="text-gradient">Expert Talent</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Access top-tier developers and technical professionals to augment your team and accelerate your projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[20px] mt-8">
              <button className="h-[52px] bg-[#B065FF] rounded-[4px] px-[32px] py-[14px] flex items-center justify-center gap-[8px] hover:bg-[#9a4df5] transition-all cursor-pointer whitespace-nowrap">
                <span className="text-white font-[500] text-[16px] leading-[24px] font-inter">
                  Get Started
                </span>
                <span className="text-white text-[16px]">➡</span>
              </button>
              <button className="w-[229px] h-[52px] bg-[#190046] rounded-[4px] px-[32px] py-[14px] flex items-center justify-center hover:bg-[#2a0066] transition-all cursor-pointer">
                <span className="text-white font-[500] text-[16px] leading-[24px] font-inter">
                  View Success Stories
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-violet-400 mb-6 mx-auto w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we help you build your dream team
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
                className="bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 text-center card-hover"
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

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Key <span className="text-gradient">Advantages</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our staff augmentation model provides unmatched flexibility and expertise to accelerate your projects.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-violet-400 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-2">500+</div>
                  <p className="text-xl text-gray-300">IT Professionals</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">95%</div>
                    <p className="text-gray-300">Retention Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">1-2</div>
                    <p className="text-gray-300">Weeks Onboarding</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Exact replica from Home page */}
      <div className="section-spacing relative w-full bg-[#000000] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center gap-[24px] sm:gap-[28px] lg:gap-[32px]">
          <h2 className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-white font-[700] text-[24px] sm:text-[26px] lg:text-[28px] leading-[1.3] font-inter">
            Ready to Scale Your Team?
          </h2>

          <p className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-[#F5F7FA] font-[400] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.5] font-inter">
            Let's discuss your staffing needs and find the perfect developers for your project.
          </p>

          <button className="w-full max-w-[280px] sm:max-w-[260px] lg:w-auto h-[48px] sm:h-[50px] lg:h-[52px] bg-[#B065FF] rounded-[4px] px-[24px] py-[14px] flex items-center justify-center gap-[8px] hover:bg-[#9a4df5] transition-all cursor-pointer whitespace-nowrap">
            <span className="text-white font-[500] text-[15px] lg:text-[16px] leading-[24px] font-inter">
              Start Your Staffing Journey
            </span>
            <span className="text-white text-[16px]">➡</span>
          </button>
        </div>
      </div>
    </div>
  )
}


