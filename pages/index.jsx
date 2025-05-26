import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  const team = [

    { name: "Tishan Rashmika", role: "Slinglish Feedback Analysis", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/500333606_1835484387027720_5328061437580468486_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEEXuUEP36wE00ZkVI9fjQHwBk0nOwiuEfAGTSc7CK4R3MdD_W_YMdPw9DavluqPhl073dXBQa0dNBJso1rjNxL&_nc_ohc=bLwP5LAutxsQ7kNvwGQ-Vj6&_nc_oc=AdlCVDyYuAIL-EicXDgX1hwcWYjhAEF-h9X_l_Vhvio1lRpaCf3_D-8ongEY-XugOI0&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=WzphoDz6AM0B7wczLkhcrw&oh=00_AfKYNoqGwCaWtWkWYrg2l7ZlMhBhiiWyZej4SqHAvmod4g&oe=6838C193" },
    { name: "Akila Imalsha", role: "Vehicle Damage Detection", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/476364192_1175129297503902_6190403309096400181_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE4BJmeodD1c96hXXWB916jkV-3b09-RMuRX7dvT35Ey4f2HatY8tVzaOdlVDVV3wRsZDJDEWaberw8OX0IZDhT&_nc_ohc=ZVYsfmncG28Q7kNvwGWH7GF&_nc_oc=Adn2MhNAG7_mFwCpltG5jrxdB3WiJLaHr1NBk2qgzkdGlHQ8RNQ7rHQf_43vbOPw1co&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=7VoCFPb747OButLikwUIuQ&oh=00_AfLQ3ssFaArCiMvL5--yXTewf25cwKnDjcniCxUWN5heeQ&oe=6838ECC1" },
    { name: "Tanishka Gimhana", role: "Tire Condition Analysis", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/480772967_2074842556297191_8329044061164251901_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGAaxVIt9Iai6voj2aPh8JbXQLa60hB7LNdAtrrSEHss8S9XuVoBBwo56PBGne_kgCfZbhf4QL3Ijowt2xSSlvw&_nc_ohc=Ke9EaYs1JLsQ7kNvwEOslEW&_nc_oc=AdniK68H2HKXPl9-DEtL-MuqGYzRubJwrX3Kqw7Bx05cWC-bVlUkuy4gH04MWJSC6jw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=BDkU34dtsJ3GSgXz5XGYDg&oh=00_AfKXkYSktMOa6zxwdTayHrCxN9ftOGUftSPTjBs3SCRAqA&oe=68389D56" },
    { name: "Yasith Abeykoon", role: "Market Analysis", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/485696039_122116251914767418_9171689191715626083_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGpDDDdFdElVZdRYo447mzLpDHLTxWP7uukMctPFY_u62mwFstJKCX7rZNsZXFZ9DbXAMzPDcMDi-eA60pzjFMD&_nc_ohc=Z1d1c9UTV7cQ7kNvwEHNgmH&_nc_oc=AdkCk8JJ_ONFGf4biG4ykc3mgwIvNWIoJ0VuKIQLFVGgjrQXXFxv9G1XVaOj3Ns8UVk&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=JTqo77YCYp1i2KxKpQU_Xw&oh=00_AfKGVM_QriBIDbUVGdCLrMF8U1qCBGId1eKjDXXEOiYoqQ&oe=6838A68B" }
  ];
  const supervisor = [

    { name: "Ms. Thamali Dassanayake", role: "Supervisor (Lecturer - Faculty of Computing)", image: "https://www.sliit.lk/profile/uploads/scan_image_1510200789-Ms__Thamali.jpg" },
    { name: "Ms. Sanjeevi Chandrasiri", role: "Co-Supervisor(Senior Lecturer - Faculty of Computing)", image: "https://www.sliit.lk/profile/uploads/scan_image_1505805059-Ms__Sanjeevi.jpg" }
  ];

  const features = [
    { icon: "https://cdn-icons-png.flaticon.com/512/4849/4849676.png", title: "Tire Condition", desc: "ResNet50 (85% accuracy)", tech: "Computer Vision" },
    { icon: "https://static.vecteezy.com/system/resources/previews/002/392/577/non_2x/cartoon-illustration-of-car-accident-crashing-into-the-wall-free-vector.jpg", title: "Damage Detection", desc: "YOLOv8 (71% accuracy)", tech: "Object Detection" },
    { icon: "https://blog.advantageclub.co/wp-content/uploads/2024/12/20-Positive-Feedback-Examples-for-Motivation-and-Recognition.webp", title: "Singlish Analysis", desc: "NLTK + Logistic Regression", tech: "Natural Language Processing" },
    { icon: "https://img.favpng.com/14/7/15/market-research-digital-marketing-market-analysis-png-favpng-kMWrkYACkZKkMJcc0uzEp0sS9.jpg", title: "Market Analysis", desc: "NLTK + Logistic Regression", tech: "Natural Language Processing" },
  ];
  return (
    <div className="container">
      <Head>
        <title>Vehicle Maintenance | Smart Car Care</title>
        <meta name="description" content="AutoXpert vehicle maintenance system with tire prediction, damage detection, and market analysis" />
      </Head>

      {/* Hero Section */}
    <header className="header">
  <nav className="navbar">
    <div className="logo">
      <span className="logo-icon">AX</span>
      <span className="logo-text">AutoXpert</span>
    </div>
    <ul className="nav-links">
      <li><a href="#features">Features</a></li>
      <li><a href="#technology">Technology</a></li>
      <li><a href="#solutions">Solutions</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button className="demo-btn">Request Demo</button>
  </nav>
</header>

<motion.section 
  className="hero"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="hero-container">
    <div className="hero-content">
      <motion.div
        className="badge"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        AI-Powered Vehicle Diagnostics
      </motion.div>
      
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Next-Gen <span className="highlight">Automotive</span> Intelligence Platform
      </motion.h1>
      
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Leveraging computer vision and machine learning to transform vehicle maintenance, 
        reducing downtime by 40% and repair costs by 30%.
      </motion.p>
      
      <motion.div
        className="cta-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a href="#" className="primary-btn">
          Schedule Demo
        </a>
        <a 
          href="https://drive.google.com/file/d/1qiI0fag8ZXyHmMUdGcjlod5f6_42vGpY/view?usp=drive_link" 
          className="secondary-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Technical Report
        </a>
      </motion.div>
      
      <motion.div 
        className="stats-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="stat-item">
          <div className="stat-value">95%</div>
          <div className="stat-label">Accuracy</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">40%</div>
          <div className="stat-label">Cost Reduction</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">24/7</div>
          <div className="stat-label">Monitoring</div>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      className="hero-visual"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="app-mockup">
        <img 
          src="https://github.com/Tishrash/AutoXpert/blob/main/WhatsApp%20Image%202025-05-25%20at%2022.02.18.jpeg?raw=true" 
          alt="AutoXpert AI Interface"
          className="main-screen"
        />
      
      </div>
    </motion.div>
  </div>
</motion.section>
{/* Vision & Goals Section */}
<section className="vision-section">
  <div className="section-header">
    <h2>Our <span className="highlight">Vision</span> & Goals</h2>
    <p className="section-subtitle">Driving innovation in automotive intelligence</p>
  </div>

  <div className="vision-container">
    <motion.div 
      className="vision-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="vision-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" alt="AI Innovation" />
      </div>
      <h3>Technological Leadership</h3>
      <p>
        Pioneer AI-driven vehicle diagnostics with 95%+ accuracy across all detection systems 
        by 2026 through continuous model refinement.
      </p>
    </motion.div>

    <motion.div 
      className="vision-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="vision-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/1570/1570887.png" alt="Global Impact" />
      </div>
      <h3>Market Transformation</h3>
      <p>
        Reduce vehicle maintenance costs by 40% industry-wide and cut diagnostic time 
        from hours to minutes by 2027.
      </p>
    </motion.div>

    <motion.div 
      className="vision-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="vision-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/1570/1570930.png" alt="Sustainability" />
      </div>
      <h3>Sustainable Mobility</h3>
      <p>
        Extend vehicle lifespan by 30% through predictive maintenance, preventing 
        5 million tons of automotive waste annually by 2030.
      </p>
    </motion.div>
  </div>

  {/* Research Overview Section */}
<section className="research-section">
  <div className="section-header">
    <h2>Research <span className="highlight">Overview</span></h2>
    <p className="section-subtitle">Academic foundation of AutoXpert system</p>
  </div>

  <div className="research-container">
    <motion.div 
      className="research-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3>Problem Statement</h3>
      <ul className="research-list">
        <li>40% of vehicle maintenance costs stem from late diagnostics</li>
        <li>70% of drivers ignore early warning signs of tire wear</li>
        <li>Current damage assessment processes take 2-3 days on average</li>
        <li>Language barriers in multicultural service environments</li>
      </ul>
    </motion.div>

    <motion.div 
      className="research-card"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3>Methodology</h3>
      <div className="methodology-grid">
        <div className="method-item">
          <div className="method-icon">1</div>
          <p>Data Collection (10,000+ tire/damage images)</p>
        </div>
        <div className="method-item">
          <div className="method-icon">2</div>
          <p>Model Training (ResNet50/YOLOv8)</p>
        </div>
        <div className="method-item">
          <div className="method-icon">3</div>
          <p>Singlish Corpus Development (5,000+ phrases)</p>
        </div>
        <div className="method-item">
          <div className="method-icon">4</div>
          <p>Field Testing (50+ vehicles)</p>
        </div>
      </div>
    </motion.div>
  </div>

  {/* Final Report Section */}
  <div className="report-section">
    <motion.div 
      className="report-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="report-content">
        <h3>Final Research Report</h3>
        <p>
          Comprehensive documentation of our 12-month research project including:
        </p>
        <ul className="report-features">
          <li>Technical specifications</li>
          <li>Algorithm performance metrics</li>
          <li>User testing results</li>
          <li>Market analysis</li>
          <li>Implementation roadmap</li>
        </ul>
        <a 
          href="https://drive.google.com/file/d/1qiI0fag8ZXyHmMUdGcjlod5f6_42vGpY/view?usp=drive_link" 
          className="report-download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Full Report (PDF)
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L7 11L8.41 9.59L12 13.17L15.59 9.59L17 11L12 16ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
      <div className="report-visual">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" 
          alt="Research Document" 
          className="report-image"
        />
      </div>
    </motion.div>
  </div>

  {/* Key Findings Section */}
  <div className="findings-section">
    <h3>Key Findings</h3>
    <div className="findings-grid">
      <motion.div 
        className="finding-card"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="finding-header">
          <div className="finding-icon" style={{ background: '#EFF6FF' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" alt="Accuracy" />
          </div>
          <span className="finding-value">85%</span>
        </div>
        <p>Tire wear prediction accuracy</p>
      </motion.div>

      <motion.div 
        className="finding-card"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="finding-header">
          <div className="finding-icon" style={{ background: '#ECFDF5' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Time Saved" />
          </div>
          <span className="finding-value">78%</span>
        </div>
        <p>Faster damage assessment</p>
      </motion.div>

      <motion.div 
        className="finding-card"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="finding-header">
          <div className="finding-icon" style={{ background: '#FEF2F2' }}>
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524636.png" alt="Cost Reduction" />
          </div>
          <span className="finding-value">$220</span>
        </div>
        <p>Average savings per repair</p>
      </motion.div>
    </div>
  </div>
</section>
</section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Powered by <span className="highlight">AutoXpert</span></h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <span className="tech-badge">{feature.tech}</span>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* App UI Section Tire Condition */}
      <section className="app-ui-section">
        <h2>User<span className="highlight">Interface</span></h2>
        <motion.div
          className="app-ui-slider"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="app-ui-scroll-container">
           
              <div className="app-ui-card">
              <img src="https://github.com/Tishrash/AutoXpert/blob/main/WhatsApp%20Image%202025-05-25%20at%2022.02.17.jpeg?raw=true" alt="Feedback Page" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.21%20(1).jpeg?raw=true" alt="Dashboard" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.21%20(2).jpeg?raw=true" alt="Store Profile" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.21.jpeg?raw=true" alt="Feedback Page" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.22%20(1).jpeg?raw=true" alt="Feedback Page" />
            </div>
             <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.20.jpeg?raw=true" alt="Login Screen" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.22.jpeg?raw=true" alt="Feedback Page" />
            </div>
            
            




            

          </div>
        </motion.div>
      </section>
      {/* App UI Section - Damage Detection */}
      <section className="app-ui-section">
        <motion.div
          className="app-ui-slider"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          
          <div className="app-ui-scroll-container">
            

          
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.23.jpeg?raw=true" alt="Dashboard" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.57.07.jpeg?raw=true" alt="Store Profile" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/AutoXpert/blob/main/WhatsApp%20Image%202025-05-25%20at%2022.02.16.jpeg?raw=true" alt="Feedback Page" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/AutoXpert/blob/main/WhatsApp%20Image%202025-05-25%20at%2022.02.19.jpeg?raw=true" alt="Feedback Page" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/AutoXpert/blob/main/WhatsApp%20Image%202025-05-25%20at%2022.02.19%20(1).jpeg?raw=true" alt="Feedback Page" />
            </div>
            <div className="app-ui-card">
              <img src="https://github.com/Tishrash/image/blob/main/WhatsApp%20Image%202025-05-25%20at%2016.55.23%20(1).jpeg?raw=true" alt="Login Screen" />
            </div>
          

          </div>
        </motion.div>
      </section>
    
     
         <section className="supervisor-section">
        <h2>Guidance<span className="highlight">Panel</span></h2>
        <div className="supervisor-grid">
          {supervisor.map((member, index) => (
            <motion.div
              key={index}
              className="supervisor-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="supervisor-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Team<span className="highlight">Members</span></h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              whileHover={{ scale: 1.05 }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In <span className="highlight">Touch</span></h2>
            <p>Have questions about our AI solutions? Reach out to our team.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="icon-email"></i>
                <span>contact@aivehicle.com</span>
              </div>
              <div className="contact-item">
                <i className="icon-phone"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <i className="icon-location"></i>
                <span>123 Tech Park, Silicon Valley</span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="primary-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <h3>AI Vehicle</h3>
            <p>Intelligent Maintenance Solutions</p>
          </div>
          <div className="footer-links">
            <a href="https://cdn-icons-png.flaticon.com/128/5968/5968764.png">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">MIT License</a>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968804.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} AI Vehicle Maintenance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}