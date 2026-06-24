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
import './About.css'

function App() {

  return (
    <>
        <header>
            <div className="hero">
                <div className="hero-text">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about">
                <div className="text">
                    <p style={{color:'white'}}>Our mission is to empower students with practical skills that enable them to work while studying. We believe every student should have the opportunity to meet their financial needs for higher education, whether through home-based work or other part-time opportunities.</p>
                </div>
            </div>
            <div className="people">
                <div className="box1">
                    <h1>8+</h1>
                    <p>Years of Experience</p>
                </div>
                <div className="box2">
                    <h1>50+</h1>
                    <p>Happy Clients</p>
                </div>
                <div className="box3">
                    <h1>25+</h1>
                    <p>Team Members</p>
                </div>
                <div className="box4">
                    <h1>100%</h1>
                    <p>Satisfaction Rate</p>
                </div>
            </div>

            <div className="practical">
                <div className="text">
                    <h1>Empower Your Journey with Practical Skills</h1>
                    <p>As a leading institute in tech education, Ezitech goes
    beyond traditional training by building a lasting
    partnership with our students. We strive to equip each
    learner with the hands-on skills and industry knowledge
    needed to excel. At Ezitech, our commitment is to
    support you at every step, helping you turn your goals
    into tangible achievements in the tech world.</p><br/>
                <Link to='/InternForm'><a href="#">Start your Internships</a></Link>
                </div>
                <div className="image">
                    <div className="card">
                        <div className="bx12">
                            <div className="bx1">
                                <h4>Practical Skills Development</h4>
                                <p>Gain hands-on experience and build the skills needed to succeed in today’s tech-driven world.</p>
                            </div>
                            <div className="bx2">
                                <h4>Career-Focused Training</h4>
                                <p>Learn industry-relevant skills and prepare for real-world challenges with our comprehensive training programs.</p>
                            </div>
                        </div>
                        <div className="bx34">
                            <div className="bx3">
                                <h4>Innovative Learning Environment</h4>
                                <p>Immerse yourself in a supportive, innovation-driven environment that fosters growth and creativity.</p>
                            </div>
                            <div className="bx4">
                                <h4>Empowering Future Professionals</h4>
                                <p>Equip yourself with the tools and knowledge to excel in your chosen field and make a meaningful impact.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="started">
                <h1>Ready to Get Started?</h1>
                <p>Join us today and take the first step towards a successful career in technology.</p><br/>
                <Link to='/Internship'><button>Get Started Now</button></Link>
            </div>
            <div className="midFooter">
                <div className="location">
                    <h1>Company</h1><br/>
                    <p>123 Main Street</p><br/>
                    <p>City, State, ZIP</p><br/>
                    <p>Email: info@company.com</p><br/>
                </div>
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
    </header>
      <footer>
        <p>&copy; 2024 Company. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </footer>
    </>
  )
}

export default App
