import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">Aura<span className="gradient-text">UI</span></div>
            <p>Building the future of digital interfaces with glowing aesthetics and high performance.</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" aria-label="Discord">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 21l-1.3-1.6a18.2 18.2 0 0 0 3-8.8c0-3.3-1.3-6.4-3.5-8.8l-1.6 1.3A16 16 0 0 1 20 10.6c0 2.4-1 4.7-2.6 6.4L15.8 15.4c1.6-1.7 2.6-4 2.6-6.4 0-2.4-1-4.7-2.6-6.4L14.2 4a13.7 13.7 0 0 0-6.4 0L6.2 2.6A16 16 0 0 1 3.6 9c0 2.4 1 4.7 2.6 6.4l1.6-1.3A13.7 13.7 0 0 0 9.8 17l-1.6 1.6C6.1 16.7 4.2 13.8 4.2 10.6c0-3.3 1.3-6.4 3.5-8.8l1.6 1.3a16 16 0 0 1 2.6-8.8L10.6 2.6C12.3 4.2 14.6 5.2 17 5.2s4.7-1 6.4-2.6L21.5 0.5 21.5 21zM9 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Showcase</a>
            <a href="#">Docs</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-col newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest updates and resources.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 AuraUI. All rights reserved.</p>
          <div className="footer-legal">
             <a href="#">Privacy</a>
             <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
