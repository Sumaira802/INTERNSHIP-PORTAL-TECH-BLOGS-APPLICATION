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
import './Internship.css'

function Internship() {

  return (
    <>
      <header>
        
        <div className="hero">
          <div className="hero-text">
            <h1>Internships</h1>
          </div>
        </div><br/>

        <div className="tech">
            <h1>Our Technologies</h1>
            <p>With expertise in these technologies, our interns are prepared to tackle real-world challenges
and build a strong career foundation. Each tool we use is chosen to maximize learning and
practical application.</p>
        </div>

        <div className="card">
            <Link to="/ArtificialIntelligence" className="box-link">
            <div className="box1">
                <div className="icon">⭐</div>
                <div className="text">Artificial Intelligence</div>
            </div>
            </Link>

            <Link to="/WebDevelopment" className="box-link">
            <div className="box2">
                <div className="icon">💻</div>
                <div className="text">Web Development</div>
            </div>
            </Link>

            <Link to="/AppDev" className="box-link">
            <div className="box3">
                <div className="icon">📱</div>
                <div className="text">App Development</div>
            </div>
            </Link>

            <Link to="/2d3dArchitecture" className="box-link">
            <div className="box4">
                <div className="icon">⚙️</div>
                <div className="text">2D/3D Architecture</div>
            </div>
            </Link>

            <Link to="/DigitalMarketing" className="box-link">
            <div className="box5">
                <div className="icon">📊</div>
                <div className="text">Digital Marketing</div>
            </div>
            </Link>

            <Link to="/GraphicDesigning" className="box-link">
            <div className="box6">
                <div className="icon">🎨</div>
                <div className="text">Graphics Designing</div>
            </div>
            </Link>
        </div>
        <br/>

        <div className="benefits">
            <h1>Benefits of Our Internship Program</h1>
            <p>Our internship program offers a unique blend of practical experience, mentorship, and skill development. Interns gain hands-on experience working on real projects, receive guidance from industry professionals, and have the opportunity to build a strong portfolio. Additionally, our program fosters a collaborative learning environment where interns can network and grow their professional connections.</p>
        </div>
        <div className="card-container">
            <div className="card-box">
                <div className="card-icon">💻</div>
                <div className="card-content">
                    <h3>Organized Learning</h3>
                    <p>Get structured training and build essential skills in a professional environment.</p>
                </div>
            </div>
            <div className="card-box">
                <div className="card-icon">🧠</div>
                <div className="card-content">
                    <h3>Hands-On Experience</h3>
                    <p>Work on real-world projects to strengthen your practical knowledge.</p>
                </div>
            </div>
            <div className="card-box">
                <div className="card-icon">🤝</div>
                <div className="card-content">
                    <h3>Quick Feedback</h3>
                    <p>Receive timely feedback to improve, refine your skills, and grow.</p>
                </div>
            </div>
            <div className="card-box">
                <div className="card-icon">🎓</div>
                <div className="card-content">
                    <h3>Goal-Oriented Milestones</h3>
                    <p>Achieve clear milestones to measure your growth and track progress.</p>
                </div>
            </div>
            <div className="card-box">
                <div className="card-icon">🏆</div>
                <div className="card-content">
                    <h3>Industry Exposure</h3>
                    <p>Understand current trends and tools used in the professional world.</p>
                </div>
            </div>
            <div className="card-box">
                <div className="card-icon">👥</div>
                <div className="card-content">
                    <h3>Career Support</h3>
                    <p>Get guidance and support to kickstart your career and achieve goals.</p>
                </div>
            </div>
        </div>

        <div className="remark">
            <p>Remarkable Progress and Growth Highlights from 2023 to 2024 (WITH PROPER RECORD)</p>
            <div className="box">
                <div className="box1">
                    <h1>5.6x</h1>
                    <p>Growth in Internship Enrollments</p>
                </div>
                <div className="box2">
                    <h1>99.6%</h1>
                    <p>Intern Satisfaction Rate</p>
                </div>
                <div className="box3">
                    <h1>14878+</h1>
                    <p>Projects Completed by Interns</p>
                </div>
                <div className="box4">
                    <h1>27</h1>
                    <p>New Partner Organizations</p>
                </div>
            </div>
        </div>

        <div className="document">
            <p>Still have a question? Browse <a href="#">documentation</a> or <a href="#">submit a ticket</a>.</p>
            <br/>
            <div className="link">
              <div className="box1">
                <img src={LinkedInIcon} alt="LinkedIn" />
                <p>Follow us on LinkedIn</p>
                <p>Latest news and updates</p>
              </div>
              <div className="box2">
                <img src={TwitterIcon} alt="Twitter" />
                <p>Follow us on Twitter</p>
                <p>Latest news and updates</p>
              </div>
              <div className="box3">
                <img src={FacebookIcon} alt="Facebook" />
                <p>Follow us on Facebook</p>
                <p>Latest news and updates</p>
              </div>
              <div className="box4">
                <img src={WhatsappIcon} alt="Whatsapp" />
                <p>Follow us on Whatsapp</p>
                <p>Latest news and updates</p>
              </div>
            </div>
        </div>

        <br/>
        <div className="intern">
            <div className="text">
              <h1>Internships for</h1>
              <p>Customize your internship experience with a range of flexible options and gain real-world skills, seeing your progress in real-time as you learn and grow.</p>
              <br/>
            </div>
            <div className="logo">
              <img src={heroImg} alt="Hero Image" />
            </div>
        </div>

        <div className="midFooter">
            <div className="location">
                <h1>Company</h1><br/>
                <p>123 Main Street</p><br/>
                <p>City, State, ZIP</p><br/>
                <p>Email: info@ezitech.com</p><br/>
            </div>
            <div className="links">
                <h1>Explore More</h1><br/>
                <a href="#">Home</a><br/>
                <a href="#">About</a><br/>
                <a href="#">Internships</a><br/>
                <a href="#">Courses</a><br/>
                <a href="#">Careers</a><br/>
                <a href="#">Contact</a><br/>
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

export default Internship
