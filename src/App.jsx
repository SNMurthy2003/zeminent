import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import StaffAugmentation from './pages/StaffAugmentation'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import CloudSolutions from './pages/CloudSolutions'
import DevOpsServices from './pages/DevOpsServices'
import TechnicalConsulting from './pages/TechnicalConsulting'

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-gradient-hero min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/devops-services" element={<DevOpsServices />} />
          <Route path="/technical-consulting" element={<TechnicalConsulting />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
