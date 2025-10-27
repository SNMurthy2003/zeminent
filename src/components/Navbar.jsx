import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/#services',
      hasDropdown: true,
      submenu: [
        { name: 'Staff Augmentation', path: '/staff-augmentation' },
        { name: 'Software Development', path: '/software-development' },
        { name: 'Cloud Solutions', path: '/cloud-solutions' },
        { name: 'DevOps Services', path: '/devops-services' },
        { name: 'Technical Consulting', path: '/technical-consulting' }
      ]
    },
    { name: 'Careers', path: '/#careers' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen)
  }

  // Handle same-page link clicks - scroll to top
  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }

  // Handle mobile navigation with smooth closing animation
  const handleMobileNavigation = () => {
    // Close dropdown and menu immediately for smooth transition
    setIsServicesDropdownOpen(false)
    setIsMobileMenuOpen(false)
  }

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle click-outside on desktop screens (lg breakpoint = 1024px)
      if (window.innerWidth < 1024) return

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false)
      }
    }

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesDropdownOpen])

  return (
    <>
      <nav
        className="fixed w-[calc(100%-32px)] max-w-[1104px] h-[66px] top-[20px] left-1/2 transform -translate-x-1/2 rounded-[50px] border border-transparent backdrop-blur-[10px] flex items-center justify-between px-[24px] sm:px-[32px] z-50"
        style={{
          background: 'rgba(255, 255, 255, 0.06)',
          borderImage: 'linear-gradient(89.81deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50.96%, rgba(255, 255, 255, 0) 100%)',
          borderImageSlice: 1,
          boxShadow: 'inset 0px 1px 1.5px rgba(255, 255, 255, 0.16), inset 0px -2px 2.6px rgba(255, 255, 255, 0.16)'
        }}
      >
        {/* Left Section - Logo/Brand */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className="flex items-center transition-transform duration-300 ease-out hover:scale-[1.08]"
          >
            <img
              src="/images/Logo.svg"
              alt="Zeminent Logo"
              className="h-[28px] sm:h-[32px] lg:h-[36px] w-auto object-contain"
              style={{
                imageRendering: '-webkit-optimize-contrast',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            />
          </Link>
        </div>

        {/* Desktop Nav Links - Hidden on mobile/tablet */}
        <ul className="hidden lg:flex items-center gap-[24px] xl:gap-[40px]">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.hasDropdown ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleServicesDropdown}
                    className="font-inter font-[500] text-[14px] xl:text-[16px] leading-[24px] text-white cursor-pointer transition-all duration-[300ms] ease-out hover:text-[#B065FF] hover:scale-[1.05] flex items-center gap-[6px]"
                  >
                    {item.name}
                    {isServicesDropdownOpen ? (
                      <ChevronUp size={16} className="transition-transform duration-300" />
                    ) : (
                      <ChevronDown size={16} className="transition-transform duration-300" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {isServicesDropdownOpen && (
                    <div
                      className="absolute top-[28px] left-0 min-w-[230px] rounded-[14px] py-[10px] px-[6px] z-50"
                      style={{
                        background: 'linear-gradient(135deg, rgba(16, 0, 43, 0.96) 0%, rgba(25, 0, 70, 0.94) 100%)',
                        backdropFilter: 'blur(28px)',
                        border: '1px solid rgba(176, 101, 255, 0.3)',
                        boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.5), 0px 4px 12px rgba(176, 101, 255, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.08)',
                        animation: 'dropdownFadeSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1) both'
                      }}
                    >
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            handleLinkClick(subItem.path)
                            setIsServicesDropdownOpen(false)
                          }}
                          className="block font-inter font-[500] text-[14px] xl:text-[15px] leading-[24px] text-white/92 py-[11px] px-[18px] mx-[4px] my-[2px] rounded-[10px] hover:bg-[#B065FF]/30 hover:text-white transition-all duration-300 hover:shadow-sm"
                          style={{
                            animation: `dropdownItemFade 0.3s ease-out ${index * 0.04}s both`
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className="font-inter font-[500] text-[14px] xl:text-[16px] leading-[24px] text-white cursor-pointer transition-all duration-[300ms] ease-out hover:text-[#B065FF] hover:scale-[1.05]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Visible on mobile/tablet */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white hover:text-[#B065FF] transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <div
            className="fixed top-[106px] left-1/2 transform -translate-x-1/2 w-[calc(100%-32px)] max-w-[500px] rounded-[24px] p-[24px] flex flex-col gap-[16px]"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleServicesDropdown}
                      className="w-full font-inter font-[500] text-[18px] leading-[28px] text-white py-[12px] px-[16px] rounded-[12px] hover:bg-[#B065FF]/20 hover:text-[#B065FF] transition-all duration-300 text-center flex items-center justify-center gap-[8px]"
                      style={{
                        animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
                      }}
                    >
                      {item.name}
                      {isServicesDropdownOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="mt-[8px] ml-[16px] space-y-[8px]">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => {
                              handleLinkClick(subItem.path)
                              handleMobileNavigation()
                            }}
                            className="block font-inter font-[500] text-[16px] leading-[24px] text-white/80 py-[10px] px-[16px] rounded-[8px] hover:bg-[#B065FF]/20 hover:text-[#B065FF] transition-all duration-300 text-center"
                            style={{
                              animation: `slideIn 0.3s ease-out ${(index + subIndex) * 0.05}s both`
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => {
                      handleLinkClick(item.path)
                      handleMobileNavigation()
                    }}
                    className="block font-inter font-[500] text-[18px] leading-[28px] text-white py-[12px] px-[16px] rounded-[12px] hover:bg-[#B065FF]/20 hover:text-[#B065FF] transition-all duration-300 text-center"
                    style={{
                      animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdownFadeSlide {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes dropdownItemFade {
          from {
            opacity: 0;
            transform: translateX(-6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
