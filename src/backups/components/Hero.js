
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaFileDownload } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import profileImage from '../assets/profile.png';
import resumePDF from '../assets/resume.pdf'; // Add your resume file
import '../styles/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: { duration: 0.3 }
    }
  };

  const socialLinks = [
    { 
      icon: <FaGithub style={{fill: '#333', color:'#333'}} />, 
      url: 'https://github.com/touhid365/', 
      name: 'GitHub',
      color: '#333'
    },
    { 
      icon: <FaLinkedin style={{fill: '#0077B5', color: '#0077B5'}} />, 
      url: 'https://www.linkedin.com/in/touhid-hossain-1155602bb/', 
      name: 'LinkedIn',
      color: '#0077B5'
    },
    { 
      icon: <FaTwitter style={{fill:'#1DA1F2', color: '#1DA1F2'}} />, 
      url: 'https://twitter.com/THossain25/', 
      name: 'Twitter',
      color: '#1DA1F2'
    },
    { 
      icon: <FaWhatsapp style={{fill: '#25D366', color: '#25D366'}} />, 
      url: 'https://wa.me/7584018098', 
      name: 'WhatsApp',
      color: '#25D366'
    },
    { 
      icon: <HiOutlineMail style={{  color: '#D44638'}} />, 
      url: 'mailto:touhidanowar4@email.com', 
      name: 'Email',
      color: '#D44638'
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="hero-text">
            <motion.div variants={textVariants} className="hero-intro">
              <span className="wave-emoji" role="img" aria-label="wave">👋</span>
              <span className="hero-subtitle">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 variants={textVariants} className="hero-title">
              <span className="name-gradient">Touhid Hossain</span>
            </motion.h1>
            
            <motion.h2 variants={textVariants} className="hero-role">
              <span className="typing-text">Full Stack Developer</span>
            </motion.h2>
            
            <motion.p variants={textVariants} className="hero-description">
              I build <span className="highlight">exceptional digital experiences</span> with modern technologies.
              Currently focused on creating <span className="highlight">accessible, human-centered</span> products
              that make a difference.
            </motion.p>
            
            <motion.div variants={textVariants} className="hero-buttons">
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn btn-primary"
              >
                Hire Me
              </motion.a>
              
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                href={resumePDF}
                download="Touhid_Hossain_Resume.pdf"
                className="btn btn-outline"
              >
                <FaFileDownload className="icon" /> Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={textVariants} className="hero-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    color: link.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="social-links"
                  style={{ '--hover-color': link.color }}
                >
                  {link.icon}
                  <span className="tooltip">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="hero-image"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="image-wrapper">
              <div className="glow-effect"></div>
              <img 
                src={profileImage} 
                alt="Touhid Hossain" 
                className="profile-img"
              />
              <div className="tech-bubble react">React</div>
              <div className="tech-bubble node">Node.js</div>
              <div className="tech-bubble js">JavaScript</div>
              <div className="tech-bubble flutter">Flutter</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;





