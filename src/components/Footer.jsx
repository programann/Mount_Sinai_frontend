import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <div>
      <footer className='school-footer'>
    <div className='footer-container'>
        <div className='footer-section'>
            <h3 className='footer-title'>Mount Sinai Education Centre</h3>
            <p className='footer-description'>
                Empowering children to reach their full potential through Christ-centered education and activities.
            </p>
        </div>
        <div className='footer-section'>
            <h3 className='footer-title'>Contact Us</h3>
            <ul className='contact-list'>
                <li>Email: info@mountsinai.edu</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Education St., Learning City, Country</li>
            </ul>
        </div>
        <div className='footer-section'>
            <h3 className='footer-title'>Quick Links</h3>
            <ul className='quick-links'>
                <li><a href='#'>Admissions</a></li>
                <li><a href='#'>Programs</a></li>
                <li><a href='#'>Events</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
    </div>
    <div className='footer-bottom'>
        <p>© 2024 Mount Sinai Education Centre. All rights reserved.</p>
    </div>
</footer>

    </div>
  )
}

export default Footer
