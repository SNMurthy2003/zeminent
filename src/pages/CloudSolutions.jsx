import React from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  FileText,
  Settings,
  TrendingUp
} from 'lucide-react'

const CloudSolutions = () => {
  // Proven Results Metrics
  const metrics = [
    {
      value: "500+",
      label: "Cloud Migrations Completed",
      color: "text-[#B065FF]"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      color: "text-[#B065FF]"
    },
    {
      value: "40%",
      label: "Average Cost Reduction",
      color: "text-[#B065FF]"
    },
    {
      value: "24/7",
      label: "Support Coverage",
      color: "text-[#B065FF]"
    }
  ]

  // Cloud Migration Process Steps
  const migrationProcess = [
    {
      icon: <Search className="w-10 h-10" />,
      title: "Cloud Assessment",
      description: "Evaluate your current infrastructure and requirements"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Migration Strategy",
      description: "Design the optimal cloud migration approach"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Implementation",
      description: "Execute the migration with minimal downtime"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Optimization",
      description: "Continuous monitoring and cost optimization"
    }
  ]

  // Cloud Platforms
  const cloudPlatforms = [
    { name: "AWS", label: "Amazon Web Services" },
    { name: "Azure", label: "Microsoft Azure" },
    { name: "GCP", label: "Google Cloud Platform" },
    { name: "Docker", label: "Docker" },
    { name: "Heroku", label: "Heroku" },
    { name: "Vercel", label: "Vercel" }
  ]

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scalable <span className="text-gradient">Cloud Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Modernize your infrastructure with secure, scalable, and cost-effective cloud solutions tailored to your business needs.
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
                  View Case Studies
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Proven Results</span>
            </h2>
            <p className="text-xl text-gray-300">
              Numbers that speak for themselves
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`font-inter font-[600] text-[48px] md:text-[64px] leading-[76px] mb-4 ${metric.color}`}>
                  {metric.value}
                </div>
                <p className="text-gray-300 text-[14px] md:text-[16px] leading-relaxed font-inter">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Migration Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Cloud Migration Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              From assessment to optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-violet-400 mb-6 mx-auto w-fit">
                  {step.icon}
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

      {/* Cloud Platforms Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cloud Platforms <span className="text-gradient">We Support</span>
            </h2>
            <p className="text-xl text-gray-300">
              Multi-cloud expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6 text-center card-hover flex flex-col items-center justify-center min-h-[140px]"
              >
                <div className="text-3xl font-bold text-gradient mb-2">
                  {platform.name}
                </div>
                <p className="text-gray-400 text-xs mt-2">
                  {platform.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="section-spacing relative w-full bg-[#000000] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center gap-[24px] sm:gap-[28px] lg:gap-[32px]">
          <p className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-[#F5F7FA] font-[400] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] font-inter">
            Let's discuss your cloud strategy and create a migration plan that minimizes risk and maximizes value.
          </p>

          <button className="w-full max-w-[280px] sm:max-w-[260px] lg:w-[300px] h-[48px] sm:h-[50px] lg:h-[52px] bg-[#B065FF] rounded-[4px] flex items-center justify-center gap-[8px] hover:bg-[#9a4df5] transition-all cursor-pointer">
            <span className="text-white font-[500] text-[15px] lg:text-[16px] leading-[24px] text-center font-inter">
              Start Your Cloud Journey
            </span>
            <span className="text-white text-[16px]">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CloudSolutions