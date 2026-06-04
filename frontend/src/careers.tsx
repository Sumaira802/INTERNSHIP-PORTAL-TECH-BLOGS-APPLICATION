import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import FacebookIcon from './assets/Facebook.png'
import TwitterIcon from './assets/Twitter.png'
import LinkedInIcon from './assets/Linkeldn.png'
import WhatsappIcon from './assets/Whatspp.png'
import heroImg from './assets/hero.png'
import { Link } from 'react-router-dom'
import './App.css'

function Careers() {

  return (
    <>
        <div className="hero">
            <div className="hero-text">
                <h1>Carrers</h1>
            </div>
        </div>

        <div className="midFooter">
            
            <div className="links">
                <h1>Quick Links</h1><br/>
                <Link to='/Home'><a href="#">Home</a><br/></Link>
                <Link to='/About'><a href="#">About</a><br/></Link>
                <Link to='/Internships'><a href="#">Internships</a><br/></Link>
                <Link to='/Careers'><a href="#">Careers</a><br/></Link>
            </div>
            <div className="internship">
                <h1>Internship</h1><br/>
                <a href='#'>E-Commerce</a><br/>
                <a href='#'>Web Development</a><br/>
                <a href='#'>Data Science</a><br/>
                <a href='#'>Cybersecurity</a><br/>
                <a href='#'>Cloud Computing</a><br/>
                <a href='#'>Artificial Intelligence</a><br/>
                <a href='#'>Machine Learning</a><br/>
            </div>
            <div className="updates">
                <h1>Updates</h1><br/>
                <p>Stay updated with the latest news and announcements.</p><br/>
                <input placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>
      <footer>
        <p>&copy; 2024 Company. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </footer>
    </>
  )
}

export default Careers
