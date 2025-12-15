import React, { useState, useEffect } from 'react'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <p>We use cookies to improve your experience. By using our site, you agree to our policies.</p>
      <button className="btn btn-sm" onClick={acceptCookies}>Accept</button>
    </div>
  )
}

export default CookieBanner
