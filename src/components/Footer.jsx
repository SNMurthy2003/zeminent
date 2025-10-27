import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Service', path: '/#services' },
    { name: 'Career', path: '/#careers' },
    { name: 'Portfolio', path: '/portfolio' },
  ]

  const servicesList = [
    'Staff Augmentation',
    'Software Development',
    'Cloud Solutions',
    'DevOps Services',
    'Technical Consulting',
  ]

  const contactInfo = [
    'info@zeminent.com',
    '+91-XXXXXXXXXX',
    'Hyderabad, India',
  ]

  const socialLinks = [
    { icon: <Linkedin size={32} />, href: '#', label: 'LinkedIn' },
    { icon: <MessageCircle size={32} />, href: '#', label: 'WhatsApp' },
    { icon: <Instagram size={32} />, href: '#', label: 'Instagram' },
  ]

  return (
    <footer
      className="w-full px-4 sm:px-8 md:px-12 lg:px-[165px] py-6 sm:py-[50px] lg:py-[40px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-[40px] lg:gap-0"
      style={{
        background: 'radial-gradient(85.95% 85.95% at 48.51% 0%, #B065FF 0%, #000000 62.5%)'
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-3 sm:gap-[24px] w-full lg:max-w-[400px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/Logo.svg"
            alt="Zeminent Logo"
            className="h-7 sm:h-[36px] lg:h-[40px] w-auto object-contain"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          />
        </div>

        {/* Subtext */}
        <p className="font-inter font-normal text-[12px] sm:text-[14px] leading-[1.4] text-[#F5F7FA]">
          Empowering businesses with cutting-edge technology solutions and expert staffing services.
        </p>

        {/* Social Icons - Moved before copyright on mobile */}
        <div className="flex items-center gap-6 sm:gap-[40px] lg:gap-[44px]">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="text-white hover:text-[#B065FF] transition-colors duration-300 hover:scale-110 transform"
            >
              {React.cloneElement(social.icon, {
                size: typeof window !== 'undefined' && window.innerWidth < 640 ? 24 : 32
              })}
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <p className="font-inter font-normal text-[11px] sm:text-[14px] leading-[1.5] text-[#F5F7FA]/80">
          © {currentYear} Zeminent. All rights reserved.
        </p>
      </div>

      {/* Right Section - Three Columns */}
      <div className="grid grid-cols-3 gap-4 sm:gap-[40px] lg:gap-[78px] w-full lg:w-auto">
        {/* Company Column */}
        <div className="flex flex-col gap-2 sm:gap-[16px]">
          <h3 className="font-inter font-semibold text-[14px] sm:text-[19px] lg:text-[20px] leading-[1.3] text-white mb-0 sm:mb-[8px]">
            Company
          </h3>
          <ul className="flex flex-col gap-1.5 sm:gap-[12px]">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="font-inter font-normal text-[11px] sm:text-[14px] leading-[1.4] text-[#F5F7FA] hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-2 sm:gap-[16px]">
          <h3 className="font-inter font-semibold text-[14px] sm:text-[19px] lg:text-[20px] leading-[1.3] text-white mb-0 sm:mb-[8px]">
            Services
          </h3>
          <ul className="flex flex-col gap-1.5 sm:gap-[12px]">
            {servicesList.map((service, index) => (
              <li key={index} className="font-inter font-normal text-[11px] sm:text-[14px] leading-[1.4] text-[#F5F7FA]">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-2 sm:gap-[16px]">
          <h3 className="font-inter font-semibold text-[14px] sm:text-[19px] lg:text-[20px] leading-[1.3] text-white mb-0 sm:mb-[8px]">
            Contact
          </h3>
          <ul className="flex flex-col gap-1.5 sm:gap-[12px]">
            {contactInfo.map((info, index) => (
              <li key={index} className="font-inter font-normal text-[11px] sm:text-[14px] leading-[1.4] text-[#F5F7FA] break-words">
                {info}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
