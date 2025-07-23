
import { motion } from 'framer-motion';
import { FaUserGraduate, FaBriefcase, FaAward, FaCode, FaServer, FaMobile, FaPalette, FaGraduationCap, FaBuilding, FaAws, FaDocker } from 'react-icons/fa';
import {  
  SiDocker, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiFlutter, 
  SiAndroid, 
  SiGit, 
  SiVisualstudiocode, 
  SiTableau,
  SiFirebase,
  SiPhp,
  SiAndroidstudio
} from 'react-icons/si';
import '../styles/About.css';

let profileImage;
try {
  profileImage = require('../assets/image20.jpg');
} catch (e) {
  profileImage = 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
}

const About = () => {
  const stats = [
    { icon: <FaBriefcase />, number: '6+', text: 'Month Experience', color: '#4361ee' },
    { icon: <FaUserGraduate />, number: '64+', text: 'Followers on Linkedin', color: '#3a0ca3' },
    { icon: <FaAward />, number: '5+', text: 'Projects Completed', color: '#4895ef' }
  ];

  const skills = [
    { name: 'Web Development', percentage: 90, icon: <FaCode />, color: '#4361ee' },
    { name: 'UI/UX Design', percentage: 80, icon: <FaPalette />, color: '#7209b7' },
    { name: 'Mobile Development', percentage: 75, icon: <FaMobile />, color: '#f72585' },
    { name: 'Database Management', percentage: 70, icon: <FaServer />, color: '#4cc9f0' }
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "BlueStock Fintech",
      type: "Part-time",
      duration: "Nov 2024 - Dec 2024 · 2 mos",
      location: "India · Remote",
      skills: ["SQL", "React.js", "Node.js", "Python", "MongoDB"]
    },
    {
      role: "Data Analyst",
      company: "Deloitte",
      type: "Part-time",
      duration: "July 2025 - July 2025 · 1 mo",
      location: "Australia · Remote",
      skills: ["Tableau", "Excel"]
    },
    {
      role: " Data Analytics",
      company: "Vodafone Idea · Internship ",
      type: "Full-time",
      duration: "Oct 2024 - Nov 2024 · 2 mos",
      location: "Remote, India",
      skills: ["Python", "Matplotlib", "Seaborn", "Pandas"]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      institution: "Allah University, Kolkata",
      duration: "Apr 2021 - Aug 2025",
      grade: "Grade: A (8.1 CGPA)",
      specialization: "ECE"
    }
  ];

  const techCategories = [
    {
      
      items: [
        { name: "AWS", icon: <FaAws style={{ fill: '#FF9900', color: '#FF9900' }} /> },
        { name: "Docker", icon: <FaDocker style={{ fill: '#2496ED', color: '#2496ED' }} /> },
        { name: "CI/CD", icon: <FaCode style={{ color: '#4361ee' }} /> },
        { name: "MySQL", icon: <SiMysql style={{ fill: '#00758F', color: '#00758F' }} /> },
        { name: "PostgreSQL", icon: <SiPostgresql style={{ fill: '#336791', color: '#336791' }} /> },
        { name: "MongoDB", icon: <SiMongodb style={{ fill: '#47A248', color: '#47A248' }} /> },
        { name: "React", icon: <SiReact style={{ fill: '#61DAFB', color: '#61DAFB' }} /> },
        { name: "JavaScript", icon: <SiJavascript style={{ fill: '#F7DF1E', color: '#F7DF1E' }} /> },
        { name: "TypeScript", icon: <SiTypescript style={{ fill: '#3178C6', color: '#3178C6' }} /> },
        { name: "Node.js", icon: <SiNodedotjs style={{ fill: '#339933', color: '#339933' }} /> },
        { name: "Express", icon: <SiExpress style={{ fill: '#000000', color: '#000000' }} /> },
        { name: "Python", icon: <SiPython style={{ fill: '#3776AB', color: '#3776AB' }} /> },
        { name: "Flutter", icon: <SiFlutter style={{ fill: '#02569B', color: '#02569B' }} /> },
        { name: "Android", icon: <SiAndroid style={{ fill: '#3DDC84', color: '#3DDC84' }} /> },
        { name: "Git", icon: <SiGit style={{ fill: '#F05032', color: '#F05032' }} /> },
        { name: "VS Code", icon: <SiVisualstudiocode style={{ fill: '#007ACC', color: '#007ACC' }} /> },
        { name: "Tableau", icon: <SiTableau style={{ fill: '#E97627', color: '#E97627' }} /> }
      ]
    }];

    const techStack = [
    { name: 'JavaScript', icon: <SiJavascript style={{ fill: '#f7df1e', color: '#f7df1e' }} /> },
    { name: 'TypeScript', icon: <SiTypescript style={{fill: '#3178c6', color: '#3178c6'}} /> },
    { name: 'React', icon: <SiReact style={{fill: '#61dafb', color: '#61dafb'}} /> },
    { name: 'MongoDB', icon: <SiMongodb style={{fill: '#47a248', color: '#47a248'}} /> },
    { name: 'Docker', icon: <SiDocker style={{fill:'#2496ed', color: '#2496ed'}} /> },
    { name: 'Python', icon: <SiPython style={{ fill: '#306998', color: '#306998' }} /> },
    { name: 'Flutter', icon: <SiFlutter style={{ fill: '#02569B', color: '#02569B' }} /> },
    { name: 'MySQL', icon: <SiMysql style={{ fill: '#00758F', color: '#00758F' }} /> },
    { name: 'PHP', icon: <SiPhp style={{ fill: '#777bb4', color: '#777bb4' }} /> },
    { name: 'Firebase', icon: <SiFirebase style={{ fill: '#FFCA28', color: '#FFCA28' }} /> },
    { name: 'Android Studio', icon: <SiAndroidstudio style={{ fill: '#3DDC84', color: '#3DDC84' }} /> },
    { name: 'Git', icon: <SiGit style={{ fill: '#F05032', color: '#F05032' }} /> },
    { name: 'VS Code', icon: <SiVisualstudiocode style={{ fill: '#007ACC', color: '#007ACC' }}  /> },
    { name: 'Tableau', icon: <SiTableau style={{ fill: '#E97627', color: '#E97627' }} /> }
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

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About <span className="highlight">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Get to know me better
          </motion.p>
        </motion.div>

        <div className="about-content">
          {/* Left Column */}
          <div className="about-left-column">
            {/* Profile Image */}
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className="image-wrapper">
                <div className="glow-effect"></div>
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="profile-image"
                />
                <div className="tech-badge python">Python</div>
                <div className="tech-badge mysql">MySQL</div>
                <div className="tech-badge java">Java</div>
                <div className="tech-badge spring">Spring Boot</div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="about-stats"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 20px ${stat.color}33`
                  }}
                >
                  <div className="stat-icon" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="stat-info">
                    <h4>{stat.number}</h4>
                    <p>{stat.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills 
            <motion.div
              className="about-skills"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4>My Skills</h4>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2, type: 'spring' }}
                      className="skill-progress"
                      style={{ backgroundColor: skill.color }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div> */}

            {/* Tech Stack */}
            <motion.div
              className="tech-stack-section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="section-heading">
                <FaCode className="section-icon" /> Tech Stack
              </h4>
              <div className="tech-stack-container">
                {techCategories.map((category, index) => (
                  <motion.div 
                    key={index}
                     className="tech-category"
                    variants={itemVariants}
                    // whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                   >
                    <div className="tech-items">
                      {category.items.map((item, idx) => (
                        <motion.span 
                          key={idx} 
                          className="tech-item-t"
                          whileHover={{ scale: 1.15 }}
                        >
                          {item.icon}
                          
                        </motion.span>
                      ))}
                    </div>
                   </motion.div> 
                ))}
              </div>
            </motion.div> 

              <motion.div variants={itemVariants} className="tech-stack">
              <h4>Tech Stack</h4>
             <div className="tech-iconss">
               {techStack.map((tech, index) => (
                  <motion.div
                   key={index}
                   className="tech-icon-t"
                   whileHover={{ 
                     y: -5,
                       scale: 1.1,
                     color: tech.color
                 }}
                 whileTap={{ scale: 1.0 }}
                  initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                  //  transition={{ delay: index * 0.1 }}
                    title={tech.name}
                 >
                 {tech.icon}
                  </motion.div>
               ))}
            </div>
           </motion.div>
          </div>

          {/* Right Column */}
          <div className="about-right-column">
            {/* About Description */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants}>Who am I?</motion.h3>
              <motion.p variants={itemVariants} className="about-description">
                I'm <span className="highlight">Touhid Hossain</span>, a passionate Full Stack Developer with expertise in 
                modern web technologies. I specialize in creating <span className="highlight">responsive, 
                user-friendly applications</span> with clean and efficient code that delivers exceptional 
                digital experiences.
              </motion.p>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              className="experience-section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="section-heading">
                <FaBuilding className="section-icon" /> Experience
              </h4>
              <div className="timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <motion.div className="timeline-content" 

                     whileHover={{ y: -5, boxShadow: `0 10px 13px rgba(103, 244, 192)` }}
                      variants={itemVariants}
                     >
                      <div className="timeline-header">
                        <h5 className="timeline-role">{exp.role}</h5>
                        <span className="timeline-company">{exp.company}</span>
                        <span className="timeline-type">{exp.type}</span>
                      </div>
                      <div className="timeline-duration">{exp.duration}</div>
                      <div className="timeline-location">{exp.location}</div>
                      {exp.skills && (
                        <div className="timeline-skills">
                          {exp.skills.slice(0, 3).map((skill, i) => (
                            <span key={i} className="skill-tag">{skill}</span>
                          ))}
                          {exp.skills.length > 3 && (
                            <span className="skill-tag">+{exp.skills.length - 3} more</span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="education-section"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="section-heading">
                <FaGraduationCap className="section-icon" /> Education
              </h4>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <motion.div className="timeline-content"  variants={itemVariants} whileHover={{ y: -5, boxShadow: `0 10px 20px #28fcaf` }}>
                      <div className="timeline-header">
                        <h5 className="timeline-degree">{edu.degree}</h5>
                        <span className="timeline-institution">{edu.institution}</span>
                      </div>
                      <div className="timeline-duration">{edu.duration}</div>
                      <div className="timeline-grade">{edu.grade}</div>
                      {edu.specialization && (
                        <div className="timeline-specialization">{edu.specialization}</div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;