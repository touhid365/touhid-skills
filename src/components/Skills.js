
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaBootstrap, FaPython, FaPhp, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiFirebase, SiNextdotjs, SiMongodb, SiTailwindcss, SiGit, SiMysql, SiDart, SiGithub, SiVisualstudio, SiXampp, SiAndroidstudio, SiTableau, SiMicrosoftexcel, SiSpring } from 'react-icons/si';
import { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

   const skills = [
    { icon: <FaReact />, name: 'React', level: 90, color: '#61DAFB', category: 'Frontend' },
    { icon: <SiJavascript />, name: 'JavaScript', level: 88, color: '#F7DF1E', category: 'Frontend' },
    { icon: <FaNodeJs />, name: 'Node.js', level: 80, color: '#339933', category: 'Backend' },
    { icon: <SiMongodb />, name: 'MongoDB', level: 78, color: '#47A248', category: 'Backend' },
    { icon: <SiFirebase />, name: 'Firebase', level: 85, color: '#F57C00', category: 'Backend' },
    // { icon: <SiGraphql />, name: 'GraphQL', level: 75, color: '#E10098', category: 'Backend' },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: 83, color: '#06B6D4', category: 'Frontend' },
    //{ icon: <SiRedux />, name: 'Redux', level: 80, color: '#764ABC', category: 'Frontend' },
    // { icon: <SiExpress />, name: 'Express', level: 78, color: '#000000', category: 'Backend' },
    { icon: <SiGit />, name: 'Git', level: 85, color: '#F05032', category: 'Tools' },
    { icon: <FaJava />, name: 'Java', level: 90, color: '#5382A1', category: 'Backend' },
    { icon: <SiSpring/>, name: 'Spring Boot', level: 95, color: '#6DB33F', category: 'Frontend' },
    //{ icon: <SiWinamp />, name: 'Winamp', level: 90, color: '#000000', category: 'Tools' },
    { icon: <FaDatabase />, name: 'SQL', level: 85, color: '#4479A1', category: 'Backend' },
    { icon: <SiNextdotjs />, name: 'Next.js', level: 85, color: '#000000', category: 'Frontend' },
    { icon: <FaCode />, name: 'HTML/CSS', level: 95, color: '#E34F26', category: 'Frontend' },
    { icon: <FaBootstrap/>, name: 'Bootstrap', level: 98, color: '#7952B3', category: 'Frontend'},
    { icon: <FaPython/>, name: 'Python', level: 80, color: '#ffd343', category: 'Backend'},
    { icon: <FaPhp/>, name: 'PHP', level: 90, color: '#777BB4', category: 'Backend'},
    { icon: <SiMysql/>, name: 'MySql', level: 95, color: '#00758F', category: 'Backend'},
    { icon: <SiDart/>, name: 'Dart', level: 70, color: '#0175C2', category: 'Backend'},
    { icon: <SiGithub/>, name: 'Github', level: 80, color: '#000000', category: 'Tools'},
    { icon: <SiVisualstudio/>, name: 'VScode', level: 99, color: '#007ACC', category: 'Tools'},
    { icon: <SiXampp/>, name: 'XAMPP', level: 96, color: '#FB7A24', category: 'Tools'},
     { icon: <SiTypescript />, name: 'TypeScript', level: 82, color: '#3178C6', category: 'Frontend' },
    { icon: <SiAndroidstudio/>, name: 'Android Studio', level: 85, color: '#3DDC84', category: 'Tools'},
    { icon: <SiTableau/>, name: 'Tableau', level: 91, color: '#F26B38', category: 'Tools'},
    { icon: <SiMicrosoftexcel/>, name: 'Excel', level: 85, color: '#217346', category: 'Tools'},


  ];

  const filters = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-header"
        >
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="skills-filter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="skill-card"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon-wrapper">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-glow" style={{ backgroundColor: skill.color }} />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-level">
                <div className="level-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="level-progress"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="level-percent">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

