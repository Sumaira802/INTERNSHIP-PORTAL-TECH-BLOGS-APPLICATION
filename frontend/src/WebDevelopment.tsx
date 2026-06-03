import React, { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import App from './assets/App.png'
import BackendDevelopment from './assets/BackendDevelopment.png'
import Wordpress from './assets/Wordpress.png'
import PhpLaravel from './assets/PhpLaravel.png'
import MernStack from './assets/MernStack.png'
import './App.css'
import './AppDev.css'

function AppDev() {
  const cardsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToCards = () => {
    cardsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
        <header> <br /> <br/>
            <div className="hero">
                <div className="hero-text"> 
                    <h1>Web Development</h1>
                    <p>In our Web Development internship, we provide hands-on-experience in the following technologies</p>
                    <p>✅ Job Ready</p>
                    <p>✅ Industrial Portfolio</p>
                    <p>✅ Collaborative Learning Environment</p>
                    <button onClick={scrollToCards}>Learn More</button>
                </div>
                <div className="bx">
                    <img src={App} alt="App Development" />
                    <p>⏱️26 Nov, 2024 | 🗂️6 Months | 👨‍💼588 Students</p>
                    <h3>All in one Tech</h3>
                    <p>In this internship, we ensure that students work on industry-ready projects to prepare...</p> <br/>
                    <a href='#'>Apply Now</a>
                </div>
            </div>
            
            <div className="design" ref={cardsSectionRef}>
                <div className="b123">
                    <div className="bx">
                        <img src={BackendDevelopment} alt="UI/UX" />
                        <h3>Backend Development Internship</h3> <br />
                        <p>we offer a Backend Development Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼454+ Students</p><hr /> <br />
                    </div>
                    <div className="bx">
                        <img src={Wordpress} alt="Flutter" />
                        <h3>CMS Wordpress Internship</h3> <br />
                        <p>we offer a WordPress Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼543+ Students</p><hr /> <br />
                    </div>
                    <div className="bx">
                        <img src={PhpLaravel} alt="Native App" />
                        <h3>PHP & Laravel Internship</h3> <br />
                        <p>we offer a PHP/Laravel Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼243+ Students</p><hr /> <br />
                    </div>
                </div>
                <div className="b123">
                    <div className="bx">
                        <img src={MernStack} alt="Game Dev" />
                        <h3>MERN Stack Internship</h3> <br />
                        <p>we offer a MERN Stack Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼655+ Students</p><hr /> <br />
                    </div>
                    <div className="bx">
                    </div>
                    <div className="bx">
                    </div>
                </div>
            </div>
            <div className="started">
                <h1>Ready to Get Started?</h1>
                <p>Join us today and take the first step towards a successful career in technology.</p><br/>
                <button>Get Started Now</button>
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

export default AppDev