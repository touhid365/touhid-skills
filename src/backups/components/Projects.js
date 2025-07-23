
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
  SiMysql
} from 'react-icons/si';
import '../styles/Projects.css';

const techIcons = {
  'node': <FaNodeJs className="tech-icon node " />,
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
};




const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsList = projectsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("Fetched projects:", projectsList); // Add this line
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

  // Add this right after fetching projects
  useEffect(() => {
    if (projects.length > 0) {
      console.log("First project tech stack:", projects[0].techStack);
      console.log("Tech icons available:", Object.keys(techIcons));
    }
  }, [projects]);

  useEffect(() => {
    const results = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.techStack?.some(tech =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredProjects(results);
  }, [searchTerm, projects]);

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Explore my recent work and creations</p>

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
        </div>

       

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
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
                {project.techStack?.length > 0 && (
                  <div className="tech-stack">
                    <p className="tech-stack-label"></p>
                    <div className="tech-icons-container">
                      {project.techStack.map((tech) => {
                        const techKey = tech.toLowerCase().trim();
                        const IconComponent = techIcons[techKey];

                        // Debug output for each tech item
                        console.log(`Rendering ${techKey}:`, IconComponent ? 'Found' : 'Not found');

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
                        ) : (
                          <span key={techKey} className="tech-name-fallback">
                            {techKey}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="project-actions">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                      whileHover={{ y: -2 }}
                    >
                      <FaExternalLinkAlt /> Demo
                    </motion.a>
                  )}
                  {project.codeUrl && (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      whileHover={{ y: -2 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
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
            No projects found matching your search.
            <motion.button
              onClick={() => setSearchTerm('')}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
            >
              Clear Search
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;