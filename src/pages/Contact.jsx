import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  Headphones,
  ChevronDown,
  Send,
  Sparkles
} from 'lucide-react'

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    details: ''
  })

  const contactOptions = [
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email Us",
      info: "info@zeminent.com",
      subInfo: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Visit Us",
      info: "123 Tech Boulevard",
      subInfo: "San Francisco, CA 94102"
    }
  ]

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Free initial consultation and project estimate"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "Expert Team with 15+ Years Experience"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Competitive pricing with transparent billing"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      text: "24/7 Support & Dedicated Account Manager"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you start a project?",
      answer: "Typically within 1-2 weeks depending on the project scope and requirements."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we work with businesses of all sizes, from startups to Fortune 500 companies."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price, time & materials, and dedicated team models."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance and support services for all our solutions."
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="w-full min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Sparkles className="w-16 h-16 text-violet-400 mx-auto" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Ready to Transform{' '}
              <span className="text-gradient">Your Business?</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Let's discuss your project requirements and explore how our expert team can help you achieve your technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-violet-400 mb-6 mx-auto w-fit">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {option.title}
                </h3>
                <p className="text-xl text-violet-400 font-semibold mb-2">
                  {option.info}
                </p>
                <p className="text-gray-400 text-sm">
                  {option.subInfo}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-200 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-200 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-200 border border-violet-500/30 rounded-lg text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 font-semibold">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-200 border border-violet-500/30 rounded-lg text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="<10k">Less than $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">
                    Project Details *
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-dark-200 border border-violet-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-violet-glow-lg flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">Us?</span>
              </h2>

              <div className="space-y-6 mb-12">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 bg-dark-200/50 border border-violet-500/20 rounded-xl p-6 card-hover"
                  >
                    <div className="text-violet-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-gray-300 text-lg">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                <p className="text-xl text-gray-300 mb-4">Successful Projects</p>
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-400 mt-2">4.9/5 Average Rating</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 border border-violet-500/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-violet-500/5 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-violet-400 flex-shrink-0"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Address */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <Clock className="w-10 h-10 text-violet-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Office Hours</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between py-2 border-b border-violet-500/20">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-violet-500/20">
                  <span>Saturday</span>
                  <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Sunday</span>
                  <span className="font-semibold text-violet-400">Closed</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-violet-500/20 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <MapPin className="w-10 h-10 text-violet-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Visit Our Office</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-2">Headquarters</p>
                  <p>123 Tech Boulevard</p>
                  <p>Suite 400</p>
                  <p>San Francisco, CA 94102</p>
                  <p>United States</p>
                </div>
                <div className="pt-4 border-t border-violet-500/20">
                  <p className="text-sm text-gray-400">
                    Free parking available. Please check in at reception upon arrival.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
