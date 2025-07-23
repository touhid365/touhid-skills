
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaBars, FaTimes, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check for saved theme preference or use system preference
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    // Apply theme class and save preference
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveLink(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'Home', path: '#home', id: 'home' },
    { name: 'About', path: '#about', id: 'about' },
    { name: 'Skills', path: '#skills', id: 'skills' },
    { name: 'Projects', path: '#projects', id: 'projects' },
    { name: 'Contact', path: '#contact', id: 'contact' }
    
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="logo-link">
            <span className="logo-icon">
              <FaCode />
            </span>
            <span className="logo-text">Touhid<span>Dev</span></span>
          </Link>
        </motion.div>

        <nav className="nav">
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <a 
                  href={link.path} 
                  className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveLink(link.id);
                  }}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <motion.button 
            className="theme-toggle" 
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="theme-icon" />
            ) : (
              <FaMoon className="theme-icon" />
            )}
          </motion.button>

          <motion.button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="menu-icon" />
            ) : (
              <FaBars className="menu-icon" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={mobileMenuVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={link.path} 
                    className={`mobile-nav-link ${activeLink === link.id ? 'active' : ''}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setActiveLink(link.id);
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;