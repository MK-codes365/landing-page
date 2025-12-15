import React from 'react'

const CallToAction = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to build something <span className="gradient-text">amazing?</span></h2>
          <p>Join 10,000+ developers building the future today. Free to get started.</p>
          <div className="cta-buttons">
             <a href="#" className="btn">Get Started Now</a>
             <a href="#" className="btn btn-outline">Read Documentation</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
