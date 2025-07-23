// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
// import '../styles/Footer.css';

// const Footer = () => {
//   const socialLinks = [
//     { icon: <FaGithub />, url: 'https://github.com/touhidskills' },
//     { icon: <FaLinkedin />, url: 'https://linkedin.com/in/touhidskills' },
//     { icon: <FaTwitter />, url: 'https://twitter.com/touhidskills' },
//     { icon: <FaInstagram />, url: 'https://instagram.com/touhidskills' }
//   ];

//   return (
//     <footer className="footer">
//       <div className="container">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="footer-content"
//         >
//           <div className="footer-logo">
//             <a href="#home">Touhid<span>Skills</span></a>
//             <p>Building digital experiences that matter</p>
//           </div>

//           <div className="footer-links">
//             <h4>Quick Links</h4>
//             <ul>
//               <li><a href="#home">Home</a></li>
//               <li><a href="#about">About</a></li>
//               <li><a href="#skills">Skills</a></li>
//               <li><a href="#projects">Projects</a></li>
//               <li><a href="#contact">Contact</a></li>
//             </ul>
//           </div>

//           <div className="footer-social">
//             <h4>Follow Me</h4>
//             <div className="social-icons">
//               {socialLinks.map((link, index) => (
//                 <motion.a
//                   key={index}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ y: -5 }}
//                   className="social-icon"
//                 >
//                   {link.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <div className="footer-bottom">
//           <p>&copy; {new Date().getFullYear()} TouhidSkills. All rights reserved.</p>
//           <p>Made with ❤️ by Touhid Hossain</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaRegEnvelope, FaCode } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub style={{fill: '#333', color: '#333'}} />,
      url: 'https://github.com/touhid365',
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
      icon: <FaTwitter style={{fill: '#1DA1F2', color: '#1DA1F2'}} />,
      url: 'https://x.com/THossain25',
      name: 'Twitter',
      color: '#1DA1F2'
    },
    {
      icon: <FaInstagram style={{fill: '#E4405F', color: '#E4405F'}} />,
      url: 'https://instagram.com/touhidskills',
      name: 'Instagram',
      color: '#E4405F'
    },
    {
      icon: <SiGmail style={{fill: '#D44638', color: '#D44638'}} />,
      url: 'mailto:touhid@example.com',
      name: 'Email',
      color: '#D44638'
    }
  ];

  const footerLinks = [
    { title: 'Home', url: '#home' },
    { title: 'About', url: '#about' },
    { title: 'Skills', url: '#skills' },
    { title: 'Projects', url: '#projects' },
    { title: 'Contact', url: '#contact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          { <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="footer-logo"
          >
            <a href="/" className="logo-link">
              <span className="logo-icon">
                <FaCode />
              </span>
              <span className="logo-text">Touhid<span>Dev</span></span>
            </a>
            <p className="tagline">Building digital experiences that matter</p>
          </motion.div> }

         

          <motion.div className="footer-links" variants={itemVariants}>
            <h4 className="links-title">Quick Links</h4>
            <ul className="links-list">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href={link.url}>{link.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer-social" variants={itemVariants}>
            <h4 className="social-title">Connect With Me</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ '--icon-color': link.color }}
                  whileHover={{
                    y: -8,
                    color: link.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} TouhidDev. All rights reserved.</p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> by Touhid Hossain
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;