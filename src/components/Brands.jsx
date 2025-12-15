import React from 'react'

const logos = [
  "Use", "React", "Next.js", "Vite", "Tailwind", "Framer", "Three.js", "Node",
  "Use", "React", "Next.js", "Vite", "Tailwind", "Framer", "Three.js", "Node"
]

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <p className="brands-title">Trusted by innovative teams worldwide</p>
        <div className="brands-container-mask">
          <div className="brands-slider">
            {logos.map((logo, index) => (
              <div key={index} className="brand-item">{logo}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
