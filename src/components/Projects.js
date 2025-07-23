
import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaFire,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaAndroid,
  FaApple,
  FaHtml5,
  FaCss3,
  FaJava,
  FaPhp
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiFlutter,
  SiDjango,
  SiMongodb,
  SiExpress,
  SiGraphql,
  SiMysql,
  SiBootstrap
} from 'react-icons/si';
import '../styles/Projects.css';

const itemVariants = {
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

const techIcons = {
  'node': <FaNodeJs className="tech-icon node" />,
  'react': <FaReact className="tech-icon react" />,
  'javascript': <FaJs className="tech-icon" />,
  'typescript': <SiTypescript className="tech-icon" />,
  'nextjs': <SiNextdotjs className="tech-icon" />,
  'firebase': <SiFirebase className="tech-icon" />,
  'tailwind': <SiTailwindcss className="tech-icon" />,
  'flutter': <SiFlutter className="tech-icon" />,
  'django': <SiDjango className="tech-icon" />,
  'mongodb': <SiMongodb className="tech-icon" />,
  'express': <SiExpress className="tech-icon" />,
  'graphql': <SiGraphql className="tech-icon" />,
  'android': <FaAndroid className="tech-icon" />,
  'ios': <FaApple className="tech-icon" />,
  'python': <FaPython className="tech-icon" />,
  'html': <FaHtml5 className="tech-icon"/>,
  'css': <FaCss3 className="tech-icon"/>,
  'java': <FaJava className="tech-icon"/>,
  'php': <FaPhp className="tech-icon"/>,
  'sql': <SiMysql className="tech-icon" />,
  'opencv': <FaPython className="tech-icon" />,
  'pandas': <FaPython className="tech-icon" />,
  'iot': <FaReact className="tech-icon" />,
  'bootstrap': <SiBootstrap className="tech-icon" />
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All Projects', 'Featured', 'Web', 'Mobile', 'AI/ML'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsList = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectsList);
        setFilteredProjects(projectsList);
      } catch (err) {
        console.error("Error fetching projects: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // useEffect(() => {
  //   let results = projects;
    
    // Apply category filter
    // if (activeFilter !== 'All Projects') {
    //   if (activeFilter === 'Featured') {
    //     results = results.filter(project => project.isFeatured);
    //   } else {
    //     results = results.filter(project => 
    //       project.category && project.category.includes(activeFilter)
    //     );
    //   }
    // }

    useEffect(() => {
  let results = projects;
  
  // Apply category filter
  if (activeFilter !== 'All Projects') {
    if (activeFilter === 'Featured') {
      results = results.filter(project => project.isFeatured);
    } else {
      results = results.filter(project => 
        project.category && 
        (typeof project.category === 'string' 
          ? project.category === activeFilter 
          : project.category.includes(activeFilter))
      );
    }
  }
    
    // Apply search filter
   
     // Apply search filter
  if (searchTerm) {
    results = results.filter(project =>
      (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.techStack && project.techStack.some(tech =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  }
  
  setFilteredProjects(results);
}, [searchTerm, projects, activeFilter]);
  //   if (searchTerm) {
  //     results = results.filter(project =>
  //       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       project.techStack?.some(tech =>
  //         tech.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   }
    
  //   setFilteredProjects(results);
  // }, [searchTerm, projects, activeFilter]);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          {/* <h2 className="section-title">My <span className="highlight">Projects</span></h2> */}
          <motion.h2 variants={itemVariants} className="section-title">
            My <span className="highlight">Projects</span>
          </motion.h2>
          <p className="section-subtitle">Explore my recent work and creations</p>
        </motion.div>

        {/* Filter and Search Section */}
        <motion.div 
          className="projects-controls"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="projects-filter">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'Featured' && <FaFire className="filter-icon" />}
                {filter}
              </button>
            ))}
          </div>

          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-s"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openProjectDetails(project)}
            >
              {project.isFeatured && (
                <div className="featured-badge">
                  <FaFire /> Featured
                </div>
              )}

              <div className="project-image-container">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description.substring(0, 100)}...</p>
                
                {project.techStack?.length > 0 && (
                  <div className="tech-stack">
                    <div className="tech-icons-container">
                      {project.techStack.slice(0, 4).map((tech) => {
                        const techKey = tech.toLowerCase().trim();
                        const IconComponent = techIcons[techKey];
                        return IconComponent ? (
                          <div
                            key={techKey}
                            className="tech-icon-item"
                            title={techKey.charAt(0).toUpperCase() + techKey.slice(1)}
                          >
                            {React.cloneElement(IconComponent, {
                              className: 'tech-stack-icon',
                              style: {
                                width: '24px',
                                height: '24px',
                                display: 'block'
                              }
                            })}
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}

                <div className="project-actions">
                  <motion.button
                    className="btn btn-outline"
                    whileHover={{ y: -2 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-results"
          >
            No projects found matching your criteria.
            <motion.button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('All Projects');
              }}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
            >
              Reset Filters
            </motion.button>
          </motion.div>
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-content">
              <button className="close-modal" onClick={closeProjectDetails}>
                &times;
              </button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                {selectedProject.isFeatured && (
                  <div className="featured-badge">
                    <FaFire /> Featured
                  </div>
                )}
              </div>
              
              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                </div>
                
                <div className="modal-details">
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  {selectedProject.techStack?.length > 0 && (
                    <div className="modal-tech-stack">
                      <h4>Technologies Used:</h4>
                      <div className="tech-icons-container">
                        {selectedProject.techStack.map((tech) => {
                          const techKey = tech.toLowerCase().trim();
                          const IconComponent = techIcons[techKey];
                          return IconComponent ? (
                            <div
                              key={techKey}
                              className="tech-icon-item"
                              title={techKey.charAt(0).toUpperCase() + techKey.slice(1)}
                            >
                              {React.cloneElement(IconComponent, {
                                className: 'tech-stack-icon',
                                style: {
                                  width: '28px',
                                  height: '28px',
                                  display: 'block'
                                }
                              })}
                              <span className="tech-name">{tech}</span>
                            </div>
                          ) : (
                            <span key={techKey} className="tech-name-fallback">
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="modal-actions">
                {selectedProject.demoUrl && (
                  <motion.a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    whileHover={{ y: -2 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                )}
                {selectedProject.codeUrl && (
                  <motion.a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    whileHover={{ y: -2 }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;