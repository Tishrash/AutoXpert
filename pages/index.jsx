import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  const team = [
    { name: "Tishan Rashmika", role: "Slinglish Feedback Analysis", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/500333606_1835484387027720_5328061437580468486_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEEXuUEP36wE00ZkVI9fjQHwBk0nOwiuEfAGTSc7CK4R3MdD_W_YMdPw9DavluqPhl073dXBQa0dNBJso1rjNxL&_nc_ohc=bLwP5LAutxsQ7kNvwGQ-Vj6&_nc_oc=AdlCVDyYuAIL-EicXDgX1hwcWYjhAEF-h9X_l_Vhvio1lRpaCf3_D-8ongEY-XugOI0&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=WzphoDz6AM0B7wczLkhcrw&oh=00_AfKYNoqGwCaWtWkWYrg2l7ZlMhBhiiWyZej4SqHAvmod4g&oe=6838C193" },
    { name: "Akila Imalsha", role: "Vehicle Damage Detection", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/476364192_1175129297503902_6190403309096400181_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE4BJmeodD1c96hXXWB916jkV-3b09-RMuRX7dvT35Ey4f2HatY8tVzaOdlVDVV3wRsZDJDEWaberw8OX0IZDhT&_nc_ohc=ZVYsfmncG28Q7kNvwGWH7GF&_nc_oc=Adn2MhNAG7_mFwCpltG5jrxdB3WiJLaHr1NBk2qgzkdGlHQ8RNQ7rHQf_43vbOPw1co&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=7VoCFPb747OButLikwUIuQ&oh=00_AfLQ3ssFaArCiMvL5--yXTewf25cwKnDjcniCxUWN5heeQ&oe=6838ECC1" },
    { name: "Tanishka Gimhana", role: "Tire Condition Analysis", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/480772967_2074842556297191_8329044061164251901_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGAaxVIt9Iai6voj2aPh8JbXQLa60hB7LNdAtrrSEHss8S9XuVoBBwo56PBGne_kgCfZbhf4QL3Ijowt2xSSlvw&_nc_ohc=Ke9EaYs1JLsQ7kNvwEOslEW&_nc_oc=AdniK68H2HKXPl9-DEtL-MuqGYzRubJwrX3Kqw7Bx05cWC-bVlUkuy4gH04MWJSC6jw&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=BDkU34dtsJ3GSgXz5XGYDg&oh=00_AfKXkYSktMOa6zxwdTayHrCxN9ftOGUftSPTjBs3SCRAqA&oe=68389D56" },
    { name: "Yasith Abeykoon", role: "Market Analysis", image: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/485696039_122116251914767418_9171689191715626083_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGpDDDdFdElVZdRYo447mzLpDHLTxWP7uukMctPFY_u62mwFstJKCX7rZNsZXFZ9DbXAMzPDcMDi-eA60pzjFMD&_nc_ohc=Z1d1c9UTV7cQ7kNvwEHNgmH&_nc_oc=AdkCk8JJ_ONFGf4biG4ykc3mgwIvNWIoJ0VuKIQLFVGgjrQXXFxv9G1XVaOj3Ns8UVk&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=JTqo77YCYp1i2KxKpQU_Xw&oh=00_AfKGVM_QriBIDbUVGdCLrMF8U1qCBGId1eKjDXXEOiYoqQ&oe=6838A68B" }
  ];

  const features = [
    { icon: "https://cdn-icons-png.flaticon.com/512/4849/4849676.png", title: "Tire Condition", desc: "ResNet50 (85% accuracy)", tech: "Computer Vision" },
    { icon: "https://miro.medium.com/v2/da:true/resize:fit:758/1*jWwb8e0eNhE-RH__sWmRcg.gif", title: "Damage Detection", desc: "YOLOv8 (71% accuracy)", tech: "Object Detection" },
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
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Revolutionize <span className="highlight">Vehicle Care</span> with AutoXpert
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Predictive maintenance • Real-time damage analysis • Smart parts matching
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://drive.google.com/file/d/1qiI0fag8ZXyHmMUdGcjlod5f6_42vGpY/view?usp=drive_link"
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Product Report 
            </a>          </motion.div>
        </div>
        <motion.img
          src="https://img.freepik.com/free-vector/abstract-colorful-shapes-background_361591-2848.jpg?ga=GA1.1.179320919.1748168055&semt=ais_hybrid&w=740"
          alt="App Interface"
          className="hero-image"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </motion.section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Powered by <span className="highlight">Advanced AI</span></h2>
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