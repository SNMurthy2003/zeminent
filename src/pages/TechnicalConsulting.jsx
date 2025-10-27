import React from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  Award,
  ShieldCheck,
  Search,
  FileText,
  Settings,
  TrendingUp,
  Code,
  Cloud,
  Database,
  Lock,
  Zap,
  Users,
  GitBranch,
  Server,
  Smartphone,
  Layers,
  CheckCircle
} from 'lucide-react'

const TechnicalConsulting = () => {
  // Core Benefits
  const coreBenefits = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategic Guidance",
      description: "Expert advice aligned with your business goals"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Industry Best Practices",
      description: "Proven methodologies from years of experience"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Risk Mitigation",
      description: "Identify and address potential challenges early"
    }
  ]

  // Consulting Process
  const consultingProcess = [
    {
      number: "1",
      icon: <Search className="w-10 h-10" />,
      title: "Discovery Session",
      description: "Deep dive into your current challenges and goals"
    },
    {
      number: "2",
      icon: <FileText className="w-10 h-10" />,
      title: "Analysis & Assessment",
      description: "Comprehensive evaluation of your tech stack"
    },
    {
      number: "3",
      icon: <Settings className="w-10 h-10" />,
      title: "Strategy Development",
      description: "Create actionable roadmap and recommendations"
    },
    {
      number: "4",
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Implementation Support",
      description: "Ongoing guidance during execution"
    }
  ]

  // Consulting Services (12 services in 2 rows of 6)
  const consultingServices = [
    { icon: <Code className="w-8 h-8" />, name: "Architecture Review" },
    { icon: <Cloud className="w-8 h-8" />, name: "Cloud Strategy" },
    { icon: <Database className="w-8 h-8" />, name: "Data Management" },
    { icon: <Lock className="w-8 h-8" />, name: "Security Audit" },
    { icon: <Zap className="w-8 h-8" />, name: "Performance Optimization" },
    { icon: <Users className="w-8 h-8" />, name: "Team Training" },
    { icon: <GitBranch className="w-8 h-8" />, name: "DevOps Consulting" },
    { icon: <Server className="w-8 h-8" />, name: "Infrastructure Planning" },
    { icon: <Smartphone className="w-8 h-8" />, name: "Mobile Strategy" },
    { icon: <Layers className="w-8 h-8" />, name: "System Integration" },
    { icon: <CheckCircle className="w-8 h-8" />, name: "Quality Assurance" },
    { icon: <Target className="w-8 h-8" />, name: "Digital Transformation" }
  ]

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic <span className="text-gradient">Technology Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Make informed technology decisions with expert guidance. From architecture reviews to strategic planning, we help you navigate complex technical challenges.
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
                  View Success Stories
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section - 3 Transparent Hover Boxes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-violet-500/10 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/15 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <div className="text-violet-400 mb-6 mx-auto w-fit transition-transform duration-300 hover:scale-110">
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

      {/* Consulting Process Section - 4 Numbered Steps */}
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
              Our <span className="text-gradient">Consulting Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              From analysis to action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingProcess.map((step, index) => (
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

      {/* Consulting Services Section - 12 Services in 2 Rows of 6 */}
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
              Our <span className="text-gradient">Consulting Services</span>
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6 text-center card-hover flex flex-col items-center justify-center min-h-[140px]"
              >
                <div className="text-violet-400 mb-4 mx-auto w-fit transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <p className="text-white text-sm font-medium">
                  {service.name}
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
            Need Strategic Technical Guidance?
          </h2>

          <p className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-[#F5F7FA] font-[400] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] font-inter">
            Let's discuss your technical challenges and create a strategic roadmap for your technology investments.
          </p>

          <button className="w-full max-w-[280px] sm:max-w-[260px] lg:w-[300px] h-[48px] sm:h-[50px] lg:h-[52px] bg-[#B065FF] rounded-[4px] flex items-center justify-center gap-[8px] hover:bg-[#9a4df5] transition-all cursor-pointer">
            <span className="text-white font-[500] text-[15px] lg:text-[16px] leading-[24px] text-center font-inter">
              Schedule a Consultation
            </span>
            <span className="text-white text-[16px]">➡</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TechnicalConsulting