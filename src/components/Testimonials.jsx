import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Loved by <span className="gradient-text">Developers</span></h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"This library changed how I build websites. The components are top-tier and the speed is incredible."</p>
            <div className="user-info">
              <div className="avatar">A</div>
              <div>
                <h4>Alex Johnson</h4>
                <span>Frontend Dev @ TechCo</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"The dark mode implementation is the best I've seen. It feels truly premium and native."</p>
            <div className="user-info">
              <div className="avatar" style={{background: 'var(--secondary)'}}>S</div>
              <div>
                <h4>Sarah Williams</h4>
                <span>Product Designer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Simply amazing. I launched my startup landing page in minutes using Aura UI."</p>
            <div className="user-info">
              <div className="avatar" style={{background: '#10b981'}}>M</div>
              <div>
                <h4>Mike Chen</h4>
                <span>Founder @ Startup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
