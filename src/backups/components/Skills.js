
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiFirebase, SiGraphql, SiNextdotjs, SiMongodb, SiTailwindcss, SiRedux, SiExpress, SiGit } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { icon: <FaReact />, name: 'React', level: 90, color: '#61DAFB' },
    { icon: <SiNextdotjs />, name: 'Next.js', level: 85, color: '#000000' },
    { icon: <SiJavascript />, name: 'JavaScript', level: 88, color: '#F7DF1E' },
    { icon: <SiTypescript />, name: 'TypeScript', level: 82, color: '#3178C6' },
    { icon: <FaNodeJs />, name: 'Node.js', level: 80, color: '#339933' },
    { icon: <SiMongodb />, name: 'MongoDB', level: 78, color: '#47A248' },
    { icon: <SiFirebase />, name: 'Firebase', level: 85, color: '#FFCA28' },
    { icon: <SiGraphql />, name: 'GraphQL', level: 75, color: '#E10098' },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: 83, color: '#06B6D4' },
    { icon: <SiRedux />, name: 'Redux', level: 80, color: '#764ABC' },
    { icon: <SiExpress />, name: 'Express', level: 78, color: '#000000' },
    { icon: <SiGit />, name: 'Git', level: 85, color: '#F05032' },
    { icon: <FaCode />, name: 'HTML/CSS', level: 95, color: '#E34F26' }
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

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
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



