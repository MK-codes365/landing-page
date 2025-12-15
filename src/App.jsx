import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import RevealOnScroll from './components/RevealOnScroll'
import BackToTop from './components/BackToTop'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RevealOnScroll>
        <Brands />
      </RevealOnScroll>
      <RevealOnScroll>
        <Features />
      </RevealOnScroll>
      <RevealOnScroll>
        <Testimonials />
      </RevealOnScroll>
      <RevealOnScroll>
        <Pricing />
      </RevealOnScroll>
      <RevealOnScroll>
        <FAQ />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      <Footer />
      <BackToTop />
      <CookieBanner />
    </>
  )
}

export default App
