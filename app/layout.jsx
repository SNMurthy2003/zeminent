import './globals.css'
import { Poppins, Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Zeminent Agency - Expert Tech Solutions',
  description: 'Empower your business with expert tech solutions. We provide innovative and scalable solutions for modern enterprises.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/Logo.svg" />
      </head>
      <body className="bg-gradient-hero min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
