import { useState, useEffect } from 'react';
import '../assets/Homepage.css';
import Switch from './LightMode';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle video loading
  useEffect(() => {
    const video = document.getElementById('laptop-video');
    if (video) {
      video.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h1>Nexura.Code</h1>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
           <li> <a href="#product" className='hover-text'>Home</a></li>
            <li><a href="#features">Projects</a></li>
            <li><a href="#open-source">Team</a></li>
            <li><a href="#pricing">Contact us</a></li>
            <Switch></Switch>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="laptop-container">
          <div className="laptop-frame">
            <div className="laptop-screen">
              <div className="laptop-content">
                {/* Video Background */}
                <div className="video-background">
                  <video 
                    id="laptop-video"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={import.meta.env.BASE_URL + 'laptop_bg.mov'} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay"></div>
                </div>
                
                <div className="laptop-header">
                  <div className="laptop-logo">
                    <span className="logo-dot"></span>
                     Nexura
                  </div>
                 
                </div>
                <div className="laptop-body">
                  <div className="hero-content">
                    <h1>
                      <span>&lt; Nexura &gt;</span>
                      Error 404:
                      <span>Limits Not Found </span>
                    </h1>
                    <p>Turning caffeine into code and ideas into impact</p>
                    <div className="cta-buttons">
                      <button className="primary-btn">Learn More</button>
                    </div>
                  </div>
                  <div className="laptop-metrics">
                    <div className="analyzing-text">ANALYZING YOUR WAY: <span className="percentage">80%</span></div>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="experience-boost">EXPERIENCE BOOST</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>WHY US?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Mentorship That Matters</h3>
            <p>Learn from experienced developers who guide you through every challenge.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Hands-On Experience</h3>
            <p>Build real-world projects, join hackathons, and go beyond just theory.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Community & Collaboration</h3>
            <p>Connect, code, and create with like-minded tech enthusiasts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Trust & Reliability</h3>
            <p>Whether for college projects or professional freelancing, we prioritize transparency, security, and quality in every project.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>For GEEKS <span className='small'>(Developers)</span></h2>
          <p>
          Whether you're a frontend fanatic, a backend wizard, or a full-stack explorer, Nexura is your playground to build, learn, and innovate. 
          </p>
          <p>
          Work on real-world projects, collaborate with fellow developers, and push your coding skills to the next level. Plus, with our dedicated UI/UX team, your creations won't just work seamlessly—they'll look stunning too. Join us and turn your ideas into interactive experiences!
          </p>
        </div>
        <div className="about-image">
          <div className="placeholder-image"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="open-source" className="services">
        <h2>Our Niche</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>MERN Stack Development</h3>
            <p>Build dynamic, full-stack web applications using MongoDB, Express, React, and Node.js.</p>
          </div>
          <div className="service-card">
            <h3>SQL & Database Management</h3>
            <p>Master relational databases to store, manage, and optimize data efficiently.</p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>Create visually stunning and user-friendly interfaces with our dedicated design team.</p>
          </div>
          <div className="service-card">
            <h3>Scalable & Modern Web Solutions</h3>
            <p>Develop high-performance applications that are fast, responsive, and future-ready.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="services">
        <h2> Our Brag-Worthy Projects</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Free Tier</h3>
            <p>Basic AI assistance for individual developers. Perfect for getting started.</p>
          </div>
          <div className="service-card">
            <h3>Pro</h3>
            <p>Advanced features for professional developers with higher usage limits.</p>
          </div>
          <div className="service-card">
            <h3>Team</h3>
            <p>Collaborative features for development teams with shared resources.</p>
          </div>
          <div className="service-card">
            <h3>Enterprise</h3>
            <p>Custom solutions for large organizations with dedicated support.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>info@nexura.com</p>
            </div>
            <div className="info-item">
              <h3>Support</h3>
              <p>support@nexura.com</p>
            </div>
            <div className="info-item">
              <h3>GitHub</h3>
              <p>github.com/nexura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Nexura</h2>
            <p>Your AI partner in code creation</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Projects</a></li>
                <li><a href="#open-source">About Us</a></li>
                <li><a href="#pricing">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick links</h3>
              <ul>
                <li><a href="#">Main Website</a></li>
                <li><a href="#">Join Us</a></li>
                <li><a href="#">UI/UX Team</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul className="social-links">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nexura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
