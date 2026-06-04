import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import App from './assets/App.png'
import uiux from './assets/uiux.png'
import flutter from './assets/flutter.png'
import native from './assets/native.png'
import game from './assets/game.png'
import android from './assets/android.png'
import { Link } from 'react-router-dom'
import './App.css'
import './AppDev.css'

function AppDev() {

  return (
    <>
        <header> <br /> <br/>
            <div className="hero">
                <div className="hero-text"> 
                    <h1>App Development</h1>
                    <p>In our App Development internship, we provide hands-on-experience in the following technologies</p>
                    <p>✅ Job Ready</p>
                    <p>✅ Industrial Portfolio</p>
                    <p>✅ Collaborative Learning Environment</p>
                    <button>Learn More</button>
                </div>
                <div className="bx">
                    <img src={App} alt="App Development" />
                    <p>⏱️26 Nov, 2024 | 🗂️6 Months | 👨‍💼588 Students</p>
                    <h3>All in one Tech</h3>
                    <p>In this internship, we ensure that students work on industry-ready projects to prepare...</p> <br/>
                    <a href='#'>Apply Now</a>
                </div>
            </div>
            <div className="design">
                <div className="b123">
                    <div className="bx">
                        <img src={uiux} alt="UI/UX" />
                        <h3>UI & UX Internship</h3> <br />
                        <p>we offer a UI & UX Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼454+ Students</p><hr /> <br />
                        <button>Learn More</button>
                    </div>
                    <div className="bx">
                        <img src={flutter} alt="Flutter" />
                        <h3>Flutter Development Internship</h3> <br />
                        <p>we offer a Flutter Development Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼543+ Students</p><hr /> <br />
                        <button>Learn More</button>
                    </div>
                    <div className="bx">
                        <img src={native} alt="Native App" />
                        <h3>Native App Internship</h3> <br />
                        <p>we offer a Native App Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼243+ Students</p><hr /> <br />
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="b123">
                    <div className="bx">
                        <img src={game} alt="Game Dev" />
                        <h3>Game Development Internship</h3> <br />
                        <p>we offer a Game Development Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼655+ Students</p><hr /> <br />
                        <button>Learn More</button>
                    </div>
                    <div className="bx">
                        <img src={android} alt="Android Dev" />
                        <h3>Android Development Internship</h3> <br />
                        <p>we offer a Android Development Internship tailored for students and professionals eager to explore the...</p> <br /> <hr />
                        <p>⏱️3 Months | 🗂️Hybrid | 👨‍💼324+ Students</p><hr /> <br />
                        <button>Learn More</button>
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

export default AppDev