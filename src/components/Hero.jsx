import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  // Animation variants for service boxes
  const boxVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1], // ease-in-out
      },
    }),
  }
  return (
    <div className="relative w-full max-w-[1440px] min-h-[2025px] bg-[#000000] mx-auto overflow-hidden">
      {/* Hero Section - Fullscreen */}
      <div className="hero-section relative w-full px-4 sm:px-6 lg:px-0">
        <div className="relative w-full max-w-[1152px] mx-auto flex flex-col items-center justify-center">
          {/* Hero Image - Responsive positioning with mix-blend-exclusion */}
          <img
            src="/images/home section.svg"
            alt="Hero"
            className="absolute top-[-80px] sm:top-[-100px] lg:top-[-120px] left-1/2 transform -translate-x-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[623px] lg:h-[623px] opacity-100 mix-blend-exclusion"
          />

          {/* Content Container - positioned lower on the image */}
          <div className="relative w-full mt-[60px] sm:mt-[80px] lg:mt-[100px]">
            {/* Main Heading - Responsive */}
            <h1 className="relative z-10 w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[1152px] mx-auto text-center font-inter font-semibold text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] leading-[1.2] text-white">
              Empower Your Business with <br className="hidden sm:block" /> Expert Tech Solutions
            </h1>

            {/* Subtext - Responsive */}
            <p className="relative z-10 w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[1152px] mx-auto text-center font-inter font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-white opacity-90 mt-[24px] sm:mt-[28px] lg:mt-[32px]">
              Zeminent delivers world-class staffing solutions and technical resources <br className="hidden sm:block" /> to help your business thrive in the digital age.
            </p>

            {/* Button Container - Responsive */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-[12px] sm:gap-[17px] mt-[32px] sm:mt-[40px] lg:mt-[48px] justify-center">
              {/* Primary Button - Get Started */}
              <button className="w-full sm:w-[160px] lg:w-[173px] h-[48px] sm:h-[50px] lg:h-[52px] rounded-[4px] flex items-center justify-center bg-[#B065FF] text-white font-inter font-medium text-[15px] lg:text-[16px] hover:bg-[#9a4df5] transition-all">
                Get Started
              </button>

              {/* Secondary Button - View Services */}
              <button className="w-full sm:w-[160px] lg:w-[173px] h-[48px] sm:h-[50px] lg:h-[52px] rounded-[4px] flex items-center justify-center border border-[#B065FF] text-white font-inter font-medium text-[15px] lg:text-[16px] hover:bg-[#B065FF]/10 transition-all">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services Section - Responsive */}
      <div className="section-spacing relative w-full px-4 sm:px-6 lg:px-[144px] py-8 sm:py-10 flex flex-col items-center justify-center gap-4 sm:gap-5 lg:gap-6">
        {/* Inner Container */}
        <div className="w-full max-w-[1110px] flex flex-col items-center justify-center gap-[8px]">
          {/* Heading */}
          <h2 className="w-full font-inter font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] text-center text-white">
            Our Core Services
          </h2>

          {/* Subtext */}
          <p className="w-full font-inter font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-center text-white opacity-90">
            We provide comprehensive tech solutions tailored to your business needs
          </p>
        </div>
      </div>

      {/* Service Boxes Section - Responsive Grid */}
      <div className="section-spacing relative w-full px-4 sm:px-6 lg:px-[6px] py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 place-items-center">
        {/* Box 1 - Staff Augmentation */}
        <Link to="/staff-augmentation" className="w-full max-w-[280px] sm:max-w-[240px] lg:max-w-[208.76px]">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={boxVariants}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-[158px] bg-[#000000] rounded-lg border border-gray-800 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(176,101,255,0.3)] cursor-pointer group"
          >
            <h3 className="absolute w-[93px] h-[40px] top-[34px] left-[12.16px] font-inter text-[14px] leading-[20px] text-[#FFFFFF] font-semibold">
              Staff Augmentation
            </h3>
            <img
              src="/images/Group 2230.svg"
              alt="Staff Augmentation"
              className="absolute w-[69.92px] h-[65.72px] top-[21px] right-[14px] transition-transform duration-300 group-hover:scale-110"
            />
            <p className="absolute w-[124.65px] h-[32px] top-[94px] left-[12.16px] font-inter text-[12px] leading-[16px] text-[#FFFFFF]">
              Scale your team with top-tier talent
            </p>
          </motion.div>
        </Link>

        {/* Box 2 - Software Development */}
        <Link to="/software-development" className="w-full max-w-[280px] sm:max-w-[240px] lg:max-w-[208.76px]">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={boxVariants}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-[158px] bg-[#000000] rounded-lg border border-gray-800 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(176,101,255,0.3)] cursor-pointer group"
          >
            <h3 className="absolute w-[88px] h-[40px] top-[34px] left-[12.16px] font-inter text-[14px] leading-[20px] text-[#FFFFFF] font-semibold">
              Software Development
            </h3>
            <img
              src="/images/Group 2231.svg"
              alt="Software Development"
              className="absolute w-[84.11px] h-[57.99px] top-[25px] right-[8px] transition-transform duration-300 group-hover:scale-110"
            />
            <p className="absolute w-[131.74px] h-[32px] top-[94px] left-[12.16px] font-inter text-[12px] leading-[16px] text-[#FFFFFF]">
              Custom solutions built to perfection
            </p>
          </motion.div>
        </Link>

        {/* Box 3 - Cloud Solutions */}
        <Link to="/cloud-solutions" className="w-full max-w-[280px] sm:max-w-[240px] lg:max-w-[208.76px]">
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={boxVariants}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-[158px] bg-[#000000] rounded-lg border border-gray-800 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(176,101,255,0.3)] cursor-pointer group"
          >
            <h3 className="absolute w-[104px] h-[20px] top-[44px] left-[12.16px] font-inter text-[14px] leading-[20px] text-[#FFFFFF] font-semibold">
              Cloud Solutions
            </h3>
            <img
              src="/images/Group 2235.svg"
              alt="Cloud Solutions"
              className="absolute w-[63.85px] h-[63px] top-[23px] right-[11px] transition-transform duration-300 group-hover:scale-110"
            />
            <p className="absolute w-[155.05px] h-[32px] top-[94px] left-[12.16px] font-inter text-[12px] leading-[16px] text-[#FFFFFF]">
              Scalable and secure cloud infrastructure
            </p>
          </motion.div>
        </Link>

        {/* Box 4 - DevOps Services */}
        <Link to="/devops-services" className="w-full max-w-[280px] sm:max-w-[240px] lg:max-w-[208.76px]">
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={boxVariants}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-[158px] bg-[#000000] rounded-lg border border-gray-800 transition-shadow duration-300 ease-in-out hover:shadow-[0_8px_24px_rgba(176,101,255,0.3)] cursor-pointer group"
          >
            <h3 className="absolute w-[114px] h-[20px] top-[44px] left-[12.16px] font-inter text-[14px] leading-[20px] text-[#FFFFFF] font-semibold">
              DevOps Services
            </h3>
            <img
              src="/images/Vector.svg"
              alt="DevOps Services"
              className="absolute w-[30.40px] h-[55.99px] top-[26px] right-[14px] transition-transform duration-300 group-hover:scale-110"
            />
            <p className="absolute w-[172.28px] h-[32px] top-[94px] left-[12.16px] font-inter text-[12px] leading-[16px] text-[#FFFFFF]">
              Streamline your development pipeline
            </p>
          </motion.div>
        </Link>
      </div>

      {/* Why Choose Zeminent Section - Compact Responsive */}
      <div className="section-spacing relative w-full px-4 sm:px-6 lg:px-0">
        <div className="max-w-full lg:max-w-[845px] mx-auto lg:mx-auto lg:relative lg:left-0 lg:right-0">
          {/* Desktop Layout - Absolute positioned like original */}
          <div className="hidden lg:block relative w-[845px] h-[359px] mx-auto">
            {/* Heading Block */}
            <div className="absolute w-[500px] h-[203px] top-[-10px] left-[1px]">
              <h2 className="font-inter font-semibold text-[64px] leading-[76px] text-[#FFFFFF]">Why</h2>
              <h2 className="font-inter font-semibold text-[64px] leading-[76px] text-[#FFFFFF] mt-[-10px]">Choose</h2>
              <div className="flex items-center gap-[8px] mt-[8px]">
                <img src="/images/Group 2251.svg" alt="Icon" className="w-[41px] h-[41px] bg-[#B065FF] border-[3px] border-white rounded-full" />
                <h2 className="font-inter font-black text-[64px] leading-[76px] tracking-[0.02em]" style={{background: 'linear-gradient(135deg, #1E40FF 0%, #4169FF 50%, #1E40FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: '0 2px 8px rgba(30, 64, 255, 0.3)', filter: 'drop-shadow(0 0 10px rgba(30, 64, 255, 0.4))'}}>Zeminent?</h2>
              </div>
            </div>

            {/* Top Right Gradient Boxes */}
            <div className="absolute w-[214px] h-[168px] top-[32px] left-[450px] rounded-[25px] bg-gradient-to-br from-[#B065FF] to-[#6541E5] p-6">
              <p className="font-inter font-semibold text-[36px] leading-[44px] text-white">10+</p>
              <p className="font-inter font-semibold text-[20px] leading-[28px] text-[#F5F7FA] mt-2">Years with experience Expert team</p>
            </div>
            <div className="absolute w-[215px] h-[168px] top-[32px] left-[679px] rounded-[25px] bg-gradient-to-br from-[#6541E5] to-[#B065FF] p-6">
              <p className="font-inter font-semibold text-[36px] leading-[44px] text-white">24/7</p>
              <p className="font-inter font-semibold text-[20px] leading-[28px] text-white mt-2">Support and maintenance</p>
            </div>

            {/* Lower White Boxes */}
            <div className="absolute w-[355.5px] h-[91.63px] top-[213px] left-[1px] bg-white rounded-[15px] flex items-center justify-center">
              <p className="font-inter font-normal text-[14px] leading-[20px] text-[#111111] text-center px-4">Proven track record of successful projects</p>
            </div>
            <div className="absolute w-[236.54px] h-[91.63px] top-[213px] left-[370.86px] bg-white rounded-[15px] flex items-center justify-center">
              <p className="font-inter font-normal text-[14px] leading-[20px] text-[#111111] text-center px-4">Competitive pricing and fast delivery</p>
            </div>
            <div className="absolute w-[224.22px] h-[91.63px] top-[213px] left-[621.76px] bg-white rounded-[15px] flex items-center justify-center">
              <p className="font-inter font-normal text-[14px] leading-[20px] text-[#111111] text-center px-4">Agile and flexible approach</p>
            </div>

            {/* Bottom Button */}
            <button className="absolute w-[845px] h-[34.87px] top-[324px] left-0 rounded-[10px] bg-[#6541E5] flex items-center justify-center hover:bg-[#5635d0] transition-all">
              <span className="font-inter font-normal text-[14px] leading-[20px] text-white">Learn More About Us</span>
            </button>
          </div>

          {/* Mobile/Tablet Responsive Layout */}
          <div className="lg:hidden">
            <div className="flex flex-col gap-[12px] mb-[12px]">
              <div>
                <h2 className="font-inter font-semibold text-[36px] sm:text-[48px] leading-[1.1] text-[#FFFFFF]">Why</h2>
                <h2 className="font-inter font-semibold text-[36px] sm:text-[48px] leading-[1.1] text-[#FFFFFF] mt-[-6px]">Choose</h2>
                <div className="flex items-center gap-[6px] mt-[6px]">
                  <img src="/images/Group 2251.svg" alt="Icon" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-[#B065FF] border-[2px] border-white rounded-full" />
                  <h2 className="font-inter font-black text-[36px] sm:text-[48px] leading-[1.1] tracking-[0.02em]" style={{background: 'linear-gradient(135deg, #1E40FF 0%, #4169FF 50%, #1E40FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Zeminent?</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[8px]">
                <div className="h-[110px] sm:h-[130px] rounded-[16px] bg-gradient-to-br from-[#B065FF] to-[#6541E5] p-3 sm:p-4">
                  <p className="font-inter font-semibold text-[24px] sm:text-[28px] leading-[1.1] text-white">10+</p>
                  <p className="font-inter font-semibold text-[11px] sm:text-[13px] leading-[1.3] text-[#F5F7FA] mt-1">Years with experience Expert team</p>
                </div>
                <div className="h-[110px] sm:h-[130px] rounded-[16px] bg-gradient-to-br from-[#6541E5] to-[#B065FF] p-3 sm:p-4">
                  <p className="font-inter font-semibold text-[24px] sm:text-[28px] leading-[1.1] text-white">24/7</p>
                  <p className="font-inter font-semibold text-[11px] sm:text-[13px] leading-[1.3] text-white mt-1">Support and maintenance</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px] mb-[8px]">
              <div className="h-[60px] sm:h-[70px] bg-white rounded-[10px] flex items-center justify-center px-3">
                <p className="font-inter font-normal text-[10px] sm:text-[12px] leading-[1.3] text-[#111111] text-center">Proven track record of successful projects</p>
              </div>
              <div className="h-[60px] sm:h-[70px] bg-white rounded-[10px] flex items-center justify-center px-3">
                <p className="font-inter font-normal text-[10px] sm:text-[12px] leading-[1.3] text-[#111111] text-center">Competitive pricing and fast delivery</p>
              </div>
              <div className="h-[60px] sm:h-[70px] bg-white rounded-[10px] flex items-center justify-center px-3 sm:col-span-2">
                <p className="font-inter font-normal text-[10px] sm:text-[12px] leading-[1.3] text-[#111111] text-center">Agile and flexible approach</p>
              </div>
            </div>
            <button className="w-full h-[36px] sm:h-[40px] rounded-[8px] bg-[#6541E5] flex items-center justify-center hover:bg-[#5635d0] transition-all">
              <span className="font-inter font-normal text-[11px] sm:text-[13px] leading-[20px] text-white">Learn More About Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ready to Transform Your Business Section - Responsive */}
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

export default Hero
