import React from 'react'
import BracketButton from '../BracketButton'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="footer-cta-blurb">
          I'm currently looking for a front-end dev position, in English or Spanish.
        </div>
        <div className="footer-cta-button">
          <BracketButton text="More about me" />
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-info-credit">
          <div className="credit-description">site designed & coded by me</div>
          <div className="signature">
            Ma
            <span className="spacing-15">t</span>
            <span className="spacing-15">i</span>
            as Hua
            <span className="spacing-15">p</span>
            aya
          </div>
        </div>
        <div className="footer-info-links">
          <BracketButton text="Email" />
          <BracketButton text="LinkedIn" />
        </div>
      </div>      
    </footer>
  )
}
