import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import profileImg from './assets/profile.jpg'
import './App.css'

const Section = ({ children, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  )
}

const skills = [
  { name: 'HTML5', icon: 'fab fa-html5', percent: 90 },
  { name: 'CSS3', icon: 'fab fa-css3', percent: 85 },
  { name: 'JavaScript', icon: 'fab fa-js', percent: 75 },
  { name: 'GitHub', icon: 'fab fa-github', percent: 80 },
  { name: 'Python', icon: 'fab fa-python', percent: 70 },
  { name: 'React', icon: 'fab fa-react', percent: 65 },
]

const projects = [
  {
    title: 'School Website',
    description: 'Modern responsive website for educational institutions with full features.',
    icon: 'fas fa-school',
    tags: ['HTML', 'CSS', 'JS']
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform with cart functionality.',
    icon: 'fas fa-shopping-cart',
    tags: ['React', 'CSS', 'JS']
  },
  {
    title: 'Task Manager',
    description: 'Productivity application for managing daily tasks efficiently.',
    icon: 'fas fa-tasks',
    tags: ['JavaScript', 'Local Storage']
  },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="logo">
          <span className="logo-text">E</span>K
        </a>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}><i className="fas fa-home"></i> Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}><i className="fas fa-user"></i> About</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}><i className="fas fa-code"></i> Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}><i className="fas fa-envelope"></i> Contact</a></li>
        </ul>
        <div className="nav-right">
          <motion.button 
            className="toggle"
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ rotate: 360, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </motion.button>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="particles">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="particle" style={{ left: `${(i + 1) * 8}%`, animationDelay: `${i * 0.8}s` }}></div>
          ))}
        </div>
        <div className="hero-content">
          <motion.div 
            className="profile-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <img src={profileImg} alt="Profile" className="profile" />
            <motion.div 
              className="profile-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm <span className="highlight">Emmanuel Kasivu</span> 👋
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            IT Student | Web Developer | Software Engineer
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="btn btn-primary">View My Work</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="btn btn-secondary">Contact Me</a>
          </motion.div>
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
          </motion.div>
        </div>
        <motion.div 
          className="scroll-down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}><i className="fas fa-chevron-down"></i></a>
        </motion.div>
      </section>

      {/* About Section */}
      <Section className="section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-container">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I am a passionate IT student focused on building modern, responsive and real-world applications. 
              With a strong foundation in HTML, CSS, JavaScript, React, and GitHub, I strive to create 
              innovative solutions that make a difference. I'm always eager to learn new technologies 
              and take on challenging projects.
            </p>
          </motion.div>
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { number: 1, label: 'Year Experience' },
              { number: 10, label: 'Projects Completed' },
              { number: 5, label: 'Happy Clients' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <span className="stat-number">{stat.number}+</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="section skills-section" id="skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="skill-icon"><i className={skill.icon}></i></div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <span className="skill-percent">{skill.percent}%</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="section" id="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15 }}
            >
              <div className="project-image">
                <i className={project.icon}></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="section" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: 'fab fa-whatsapp', title: 'WhatsApp', text: '+254116089094' },
              { icon: 'fab fa-whatsapp', title: 'WhatsApp', text: '+254116089094' },
              { icon: 'fas fa-map-marker-alt', title: 'Location', text: 'Nairobi, Kenya' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="contact-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                <i className={item.icon}></i>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </motion.form>
        </div>
      </Section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">E</span>K
          </div>
          <p className="watermark">© 2026 All right reserved by <a href="https://catech.co.ke" target="_blank" rel="noopener noreferrer" className="catech-link">catech solutions and graphics</a></p>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        href="https://wa.me/254116089094" 
        className="whatsapp-float"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="fab fa-whatsapp"></i>
      </motion.a>
    </div>
  )
}

export default App