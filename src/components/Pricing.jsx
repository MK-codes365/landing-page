import React from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for side projects and learning.',
    features: ['1 Project', 'Basic Analytics', 'Community Support', '48h Response Time']
  },
  {
    name: 'Pro',
    price: '$29',
    popular: true,
    description: 'For serious developers and small teams.',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '24h Response Time', 'Custom Domain']
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'Scale your business with full control.',
    features: ['Unlimited Everything', 'Custom Infrastructure', 'Dedicated Manager', '1h Response Time', 'SLA Guarantee']
  }
]

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Simple, transparent <span className="gradient-text">Pricing</span></h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}<span>/mo</span></div>
              <p className="plan-desc">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <a href="#" className={`btn ${plan.popular ? '' : 'btn-outline'}`} style={{width: '100%', textAlign: 'center'}}>
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
