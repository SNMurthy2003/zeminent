import React from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  RefreshCw,
  Shield
} from 'lucide-react'

const DevOpsServices = () => {
  // Transparent Hover Boxes
  const hoverBoxes = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Faster Deployments",
      description: "Reduce deployment time by up to 90%"
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Automated Pipelines",
      description: "Continuous integration and delivery"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Enhanced Security",
      description: "Security built into every stage"
    }
  ]

  // DevOps Transformation Process
  const transformationProcess = [
    {
      number: "1",
      title: "Current State Analysis",
      description: "Assess your existing development and deployment processes"
    },
    {
      number: "2",
      title: "Pipeline Design",
      description: "Design CI/CD pipelines tailored to your needs"
    },
    {
      number: "3",
      title: "Implementation",
      description: "Set up automation and monitoring tools"
    },
    {
      number: "4",
      title: "Optimization",
      description: "Continuous improvement and optimization"
    }
  ]

  // DevOps Tools
  const tools = [
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Jenkins", category: "CI/CD" },
    { name: "GitLab", category: "Version Control" },
    { name: "Terraform", category: "IaC" },
    { name: "Ansible", category: "Configuration" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Visualization" }
  ]

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Streamline Your <span className="text-gradient">Development Pipeline</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Accelerate your software delivery with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[20px] mt-8">
              <button className="h-[52px] bg-[#B065FF] rounded-[4px] px-[24px] py-[14px] flex items-center justify-center gap-[8px] hover:bg-[#9a4df5] transition-all cursor-pointer whitespace-nowrap">
                <span className="text-white font-[500] text-[16px] leading-[24px] font-inter">
                  Optimize Your Pipeline
                </span>
                <span className="text-white text-[16px]">➡</span>
              </button>
              <button className="w-[229px] h-[52px] bg-[#190046] rounded-[4px] px-[32px] py-[14px] flex items-center justify-center hover:bg-[#2a0066] transition-all cursor-pointer">
                <span className="text-white font-[500] text-[16px] leading-[24px] font-inter">
                  View Results
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Hover Boxes Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hoverBoxes.map((box, index) => (
              <motion.div
                key={box.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-violet-500/10 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/15 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/20"
              >
                <div className="text-violet-400 mb-6 mx-auto w-fit transition-transform duration-300 hover:scale-110">
                  {box.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {box.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {box.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Transformation Process Section */}
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
              Our <span className="text-gradient">DevOps Transformation Process</span>
            </h2>
            <p className="text-xl text-gray-300">
              From manual to automated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationProcess.map((step, index) => (
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

      {/* DevOps Tools Section */}
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
              DevOps <span className="text-gradient">Tools We Use</span>
            </h2>
            <p className="text-xl text-gray-300">
              Industry-leading technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-6 text-center card-hover flex flex-col items-center justify-center min-h-[120px]"
              >
                <div className="text-2xl font-bold text-gradient mb-2">
                  {tool.name}
                </div>
                <p className="text-gray-400 text-xs">
                  {tool.category}
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
            Ready to Accelerate Your Development?
          </h2>

          <p className="w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[887px] text-center text-[#F5F7FA] font-[400] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] font-inter">
            Let's implement DevOps practices that will transform your development workflow and accelerate your time to market.
          </p>

          <button className="w-full max-w-[280px] sm:max-w-[260px] lg:w-[300px] h-[48px] sm:h-[50px] lg:h-[52px] bg-[#B065FF] rounded-[4px] flex items-center justify-center gap-[8px] hover:bg-[#9a4df5] transition-all cursor-pointer">
            <span className="text-white font-[500] text-[15px] lg:text-[16px] leading-[24px] text-center font-inter">
              Start Your Staffing Journey
            </span>
            <span className="text-white text-[16px]">➡</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DevOpsServices