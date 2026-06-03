import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import FacebookIcon from './assets/Facebook.png'
import TwitterIcon from './assets/Twitter.png'
import LinkedInIcon from './assets/Linkeldn.png'
import WhatsappIcon from './assets/Whatspp.png'
import heroImg from './assets/hero.png'
import people from './assets/people.png'
import people2 from './assets/people2.png'
import meeting from './assets/meeting.png'
import './Home.css'
import './App.css'

function Home() {

  return (
    <>
        <header>
            <div className="hero">
            <div className="hero-text">
                <h1>Welcome to Our Company</h1>
                <p>We provide the best services to our customers.</p>
                <form>
                    <input type="text" placeholder="Search Jobs or Internship"/>
                    <button>Search</button>
                </form>
                <button>Learn More</button>
            </div>
            </div>

            <div className="future">
            <h2>Our Future Plans</h2>
            <p>Shaping Empowering Future IT Talent Through a Seamless Process</p>
            <div className="card">
                <div className="DiscoverTech">
                    <h1 className="step">Step 1</h1>
                    <h3>Discover Tech</h3>
                    <p>Explore the world of technology and its endless possibilities.</p>
                </div>
                <div className="Connect">
                    <h1 className="step">Step 2</h1>
                    <h3>Connect</h3>
                    <p>Build meaningful connections with industry professionals and peers.</p>
                </div>
                <div className="Grow">
                    <h1 className="step">Step 3</h1>
                    <h3>Grow</h3>
                    <p>Enhance your skills and grow your career in the tech industry.</p>
                </div>
            </div>
            <div className="docu">
                <p>Still have a question? Browse <a href='#'>documentation</a> or <a href='#'>submit a ticket</a>.</p>
            </div>
            <div className="about">
                <div className="text">
                <p style={{backgroundColor: 'purple', width: '130px', borderRadius: '20px', padding: '10px'}}>what we do...?</p>
                <h1>Empowering Connections in the Digital World</h1>
                <p style={{color: 'gray'}}>We equip future professionals with the essential tools to thrive in both traditional and digital IT landscapes.<br/> <br/>
    With years of experience and countless successful placements, Ezitech Institute has perfected a unique learning process that goes beyond theory. We delve deep into practical skills and real-world applications, helping students understand, connect, and excel in the ever-evolving tech market.</p>
                <br/>
                <button>More About Us</button>
                </div>
                <div className="image-stack-wrapper">
                    <img src={people} alt="Left" className="single-stack-img stack-left" />
                    <img src={people2} alt="Center" className="single-stack-img stack-center" />
                    <img src={meeting} alt="Right" className="single-stack-img stack-right" />
                </div>
            </div>

            <div className="about">
                <div style={{backgroundColor: 'black'}} className="box">
                    <div className="box12">
                        <div className="box1">
                            <h1>37+</h1>
                            <p>Industry MoUs</p>
                        </div>
                        <div className="box2">
                            <h1>327</h1>
                            <p>Active Students</p>
                        </div>
                    </div>
                    <div className="box34">
                        <div className="box3">
                            <h1>98%</h1>
                            <p>Positive Feedback</p>
                        </div>
                        <div className="box4">
                            <h1>6,663</h1>
                            <p>Successful Graduates</p>
                        </div>
                    </div>
                </div>
                
                <div className="text">
                    <h1>Hundreds of Successful Internships & Countings</h1>
                    <p style={{color:'gray'}}>With a commitment to quality training and career advancement, we've empowered students from diverse backgrounds. Through structured Internship, hands-on projects, and expert mentorship, Ezitech Institute ensures that every student builds a solid foundation in IT.</p>
                </div>
            </div>

            <div className="courses-section">
                <div className="courses-grid">
        
                    <div className="course-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">🎨</span>
                        </div>
                        <h3>Graphics Design</h3>
                        <p>Your journey to becoming a skilled graphic designer. Wherever your creativity is headed, we provide the inspiration, tools, and support to help you bring your vision to life.</p>
                        <a href="#" className="explore-link">EXPLORE LANDING →</a>
                    </div>

                    <div className="course-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">🎮</span>
                        </div>
                        <h3>2d/3d Architecture</h3>
                        <p>We're mentors, guides, and partners in your journey to becoming a game developer. Wherever your passion leads, we provide the skills, tools, and support to help you bring your game ideas to life.</p>
                        <a href="#" className="explore-link">EXPLORE LANDING →</a>
                    </div>

                    <div className="course-card">
                        <div className="card-tag">NEW</div>
                        <div className="card-icon-wrapper">
                            <span className="card-icon">📢</span>
                        </div>
                        <h3>Digital Marketing</h3>
                        <p>We're mentors, guides, and partners in your journey to mastering digital marketing. Wherever your career goals lead, we provide the knowledge, tools, and support to help you drive impactful marketing strategies.</p>
                        <a href="#" className="explore-link">EXPLORE LANDING →</a>
                    </div>

                    <div className="course-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">💻</span>
                        </div>
                        <h3>Web Development</h3>
                        <p>Master HTML, CSS, JavaScript, and modern frameworks. Build responsive, high-performance websites and dynamic web applications from scratch with expert guidance.</p>
                        <a href="#" className="explore-link">EXPLORE LANDING →</a>
                    </div>

                    <div className="course-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">📱</span>
                        </div>
                        <h3>App Development</h3>
                        <p>Dive into iOS and Android app creation. Learn to design user-friendly mobile interfaces and develop powerful, native applications using industry-standard tools.</p>
                        <a href="#" className="explore-link">EXPLORE LANDING →</a>
                    </div>

                    <div className="course-card">
                        <div className="card-icon-wrapper">
                            <span className="card-icon">🤖</span>
                        </div>
                        <h3>Artificial Intelligence</h3>
                        <p>Gain practical experience in Artificial Intelligence by building and deploying machine learning models. Learn key concepts, data processing, and model training to prepare for real-world AI challenges.</p>
                        <a href="#" className="explore-link">EXPLORE LANDING →</a>
                    </div>
                </div>
            </div>


            <div className="alumni">
                <h1>Our Alumni</h1>
                <p>Our alumni are the true testament to our success. They have gone on to achieve great things in the tech industry, and we are proud of their accomplishments.</p>
                <div className="alumni-card">
                <div className="alumni1">
                    <img src={heroImg} alt="Alumni 1" />
                    <h3>John Doe</h3>
                    <p>Software Engineer at Tech Company</p>
                </div>
                <div className="alumni2">
                    <img src={heroImg} alt="Alumni 2" />
                    <h3>Jane Smith</h3>
                    <p>Data Scientist at Data Company</p>
                </div>
                <div className="alumni3">
                    <img src={heroImg} alt="Alumni 3" />
                    <h3>Michael Johnson</h3>
                    <p>Product Manager at Product Company</p>
                </div>
                </div>
            </div>

            <br/>
            <div className="document">
                <p>Still have a question? Browse <a href="#">documentation</a> or <a href="#">submit a ticket</a>.</p>
                <br/>
                <div className="link">
                <a href='https://www.linkedin.com/feed/'>
                    <div className="box1">
                        <img src={LinkedInIcon} alt="LinkedIn" />
                        <p>Follow us on LinkedIn</p>
                        <p>Latest news and updates</p>
                    </div>
                </a>
                <a href="https://x.com/">
                    <div className="box2">
                        <img src={TwitterIcon} alt="Twitter" />
                        <p>Follow us on Twitter</p>
                        <p>Latest news and updates</p>
                    </div>
                </a>
                <a href='https://www.facebook.com/'>
                    <div className="box3">
                        <img src={FacebookIcon} alt="Facebook" />
                        <p>Follow us on Facebook</p>
                        <p>Latest news and updates</p>
                    </div>
                </a>
                <a href='https://web.whatsapp.com/'>
                    <div className="box4">
                        <img src={WhatsappIcon} alt="Whatsapp" />
                        <p>Follow us on Whatsapp</p>
                        <p>Latest news and updates</p>
                    </div>
                </a>
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
                <h1>Latest Updates</h1><br/>
                <p>Stay updated with the latest news and announcements.</p><br/>
                <input placeholder="Enter your email" />
                <button>Subscribe</button>
                </div>
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

export default Home