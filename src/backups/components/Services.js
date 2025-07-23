
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaPalette, FaSearch, FaTools, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import { SiWebcomponentsdotorg, SiAdobexd, SiGoogleoptimize } from 'react-icons/si';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with React, Next.js, and modern JavaScript frameworks.',
      color: '#4361ee'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with React Native that deliver native-like performance.',
      color: '#f72585'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Developing secure, high-performance APIs and server-side applications with Node.js and Express.',
      color: '#4cc9f0'
    },
    {
      icon: <SiAdobexd />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive interfaces with user-centered design principles and interactive prototypes.',
      color: '#7209b7'
    },
    {
      icon: <SiGoogleoptimize />,
      title: 'SEO Optimization',
      description: 'Implementing technical SEO strategies to maximize organic search visibility and rankings.',
      color: '#3a0ca3'
    },
    {
      icon: <FaTools />,
      title: 'Maintenance',
      description: 'Providing ongoing support, updates, and performance optimizations for existing applications.',
      color: '#4895ef'
    },
    {
      icon: <SiWebcomponentsdotorg />,
      title: 'Web Components',
      description: 'Building reusable component libraries for consistent, maintainable frontend architectures.',
      color: '#3f37c9'
    },
    {
      icon: <FaChartLine />,
      title: 'Performance Audit',
      description: 'Analyzing and optimizing application performance for faster load times and better UX.',
      color: '#560bad'
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span className="highlight">Services</span></h2>
          <p className="section-subtitle">Comprehensive solutions tailored to your digital needs</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover="hover"
              style={{ '--service-color': service.color }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="service-glow" style={{ backgroundColor: service.color }} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-underline" style={{ backgroundColor: service.color }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


