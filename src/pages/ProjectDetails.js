
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaRegClock, FaCode, FaLayerGroup, FaTags } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectRef = doc(db, 'projects', id);
        const projectSnapshot = await getDoc(projectRef);
        
        if (projectSnapshot.exists()) {
          setProject({ id: projectSnapshot.id, ...projectSnapshot.data() });
        } else {
          setError('Project not found');
        }
      } catch (err) {
        setError('Failed to load project details');
        console.error("Error fetching project: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading project details...</p>
    </div>
  );

  if (error) return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="error-container"
    >
      <div className="error-message">{error}</div>
      <motion.button 
        onClick={() => navigate('/projects')} 
        className="back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>
    </motion.div>
  );

  if (!project) return (
    <div className="not-found-container">
      <h2>Project not found</h2>
      <motion.button 
        onClick={() => navigate('/projects')} 
        className="back-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft /> Back to Projects
      </motion.button>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-details-container"
    >
      <div className="project-header">
        <motion.button 
          onClick={() => navigate('/projects')} 
          className="back-button"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft /> All Projects
        </motion.button>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="project-title-section"
        >
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.shortDescription || project.description}</p>
          
          <div className="project-meta">
            {project.date && (
              <div className="meta-item">
                <FaRegClock />
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
            )}
            {project.technologies && (
              <div className="meta-item">
                <FaLayerGroup />
                <span>{project.technologies.length} technologies</span>
              </div>
            )}
            {project.tags && (
              <div className="meta-item">
                <FaTags />
                <span>{project.tags.length} tags</span>
              </div>
            )}
          </div>
          
          <div className="project-links">
            {project.codeUrl && (
              <motion.a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> Source Code
              </motion.a>
            )}
            {project.demoUrl && (
              <motion.a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link demo"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
          </div>

          {project.tags && (
            <div className="project-tags-header">
              <div className="tags-container">
                {project.tags.slice(0, 4).map((tag, index) => (
                  <motion.span 
                    key={index}
                    className={`tag ${selectedTag === tag ? 'tag-active' : ''}`}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.span>
                ))}
                {project.tags.length > 4 && (
                  <span className="tag-more">+{project.tags.length - 4} more</span>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="project-image-container"
      >
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="project-main-image"
          loading="lazy"
        />
      </motion.div>
      
      <div className="project-content-container">
        <div className="project-tabs">
          <motion.button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Overview
          </motion.button>
          <motion.button 
            className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Features
          </motion.button>
          <motion.button 
            className={`tab-button ${activeTab === 'technologies' ? 'active' : ''}`}
            onClick={() => setActiveTab('technologies')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Technologies
          </motion.button>
          {project.tags && (
            <motion.button 
              className={`tab-button ${activeTab === 'tags' ? 'active' : ''}`}
              onClick={() => setActiveTab('tags')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTags /> Tags
            </motion.button>
          )}
          {project.challenges && (
            <motion.button 
              className={`tab-button ${activeTab === 'challenges' ? 'active' : ''}`}
              onClick={() => setActiveTab('challenges')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Challenges
            </motion.button>
          )}
        </div>
        
        <div className="tab-content">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Project Overview</h3>
              <p>{project.description}</p>
              {project.purpose && (
                <>
                  <h4>Project Purpose</h4>
                  <p>{project.purpose}</p>
                </>
              )}
            </motion.div>
          )}
          
          {activeTab === 'features' && project.features && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="feature-bullet"></span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
          
          {activeTab === 'technologies' && project.technologies && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Technologies Used</h3>
              <div className="technologies-grid">
                {project.technologies.map((tech, index) => (
                  <motion.div 
                    key={index} 
                    className="technology-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === 'tags' && project.tags && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Project Tags</h3>
              <div className="tags-container">
                {project.tags.map((tag, index) => (
                  <motion.span 
                    key={index}
                    className={`tag ${selectedTag === tag ? 'tag-active' : ''}`}
                    onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              {selectedTag && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="tag-description"
                >
                  <p>You've selected the <strong>{selectedTag}</strong> tag.</p>
                  {/* Add tag-specific content here if available */}
                </motion.div>
              )}
            </motion.div>
          )}
          
          {activeTab === 'challenges' && project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Challenges & Solutions</h3>
              <p>{project.challenges}</p>
              {project.learnings && (
                <>
                  <h4>Key Learnings</h4>
                  <p>{project.learnings}</p>
                </>
              )}
            </motion.div>
          )}
        </div>
      </div>
      
      {project.gallery && project.gallery.length > 0 && (
        <div className="project-gallery">
          <h3>Project Gallery</h3>
          <div className="gallery-grid">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="gallery-item"
              >
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectDetails;
