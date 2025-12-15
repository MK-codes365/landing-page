import React from 'react'

const featuresList = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for speed with zero bloat. We ensure your site loads instantly on any device.'
  },
  {
    icon: '💎',
    title: 'Premium Design',
    description: 'Hand-crafted components that look beautiful out of the box. Impress your users immediately.'
  },
  {
    icon: '🛡️',
    title: 'Secure by Default',
    description: 'Enterprise-grade security built into every layer. Your data is safe with us.'
  }
]

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose <span className="gradient-text">Aura</span></h2>
        <div className="grid">
          {featuresList.map((feature, index) => (
            <div className="card" key={index}>
              <div className="card-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
