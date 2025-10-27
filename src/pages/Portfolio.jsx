import React from 'react'
import { motion } from 'framer-motion'
import {
  DollarSign,
  Truck,
  Heart,
  Factory,
  Building2,
  ShoppingCart,
  GraduationCap,
  Zap,
  HeartHandshake,
  Cloud,
  Smartphone,
  Home,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const Portfolio = () => {
  const industries = [
    { icon: <DollarSign className="w-10 h-10" />, title: "FinTech", description: "Secure financial solutions" },
    { icon: <Truck className="w-10 h-10" />, title: "Logistics", description: "Supply chain optimization" },
    { icon: <Heart className="w-10 h-10" />, title: "Healthcare", description: "Medical technology platforms" },
    { icon: <Factory className="w-10 h-10" />, title: "Manufacturing", description: "Industrial automation" },
    { icon: <Building2 className="w-10 h-10" />, title: "Government", description: "Public sector solutions" },
    { icon: <ShoppingCart className="w-10 h-10" />, title: "E-commerce", description: "Digital retail platforms" },
    { icon: <GraduationCap className="w-10 h-10" />, title: "Education", description: "Learning management systems" },
    { icon: <Zap className="w-10 h-10" />, title: "Energy", description: "Smart grid solutions" },
    { icon: <HeartHandshake className="w-10 h-10" />, title: "Non-Profit", description: "Community impact platforms" },
    { icon: <Cloud className="w-10 h-10" />, title: "SaaS", description: "Cloud-based applications" },
    { icon: <Smartphone className="w-10 h-10" />, title: "Mobile", description: "Native & hybrid apps" },
    { icon: <Home className="w-10 h-10" />, title: "Real Estate", description: "Property management systems" }
  ]

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <Sparkles className="w-16 h-16 text-violet-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Success Stories & <span className="text-gradient">Project Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Explore our diverse portfolio of successful projects across various industries and technologies. Each project represents our commitment to delivering exceptional results.
            </p>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries <span className="text-gradient">We Serve</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diverse expertise across multiple sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-dark-200/50 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-violet-400 mb-4 mx-auto w-fit group-hover:scale-110 transition-all duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
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

export default Portfolio
