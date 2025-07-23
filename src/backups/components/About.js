
// import { motion } from 'framer-motion';
// import { FaUserGraduate, FaBriefcase, FaAward, FaCode, FaServer, FaMobile, FaPalette } from 'react-icons/fa';
// import { SiJavascript, SiReact, SiMongodb, SiTypescript, SiDocker,  SiPython, SiFlutter, SiMysql, SiPhp, SiFirebase, SiAndroidstudio, SiGit, SiVisualstudiocode, SiTableau } from 'react-icons/si';
// import '../styles/About.css';

// let profileImage;
// try {
//   profileImage = require('../assets/about-profile.jpg');
// } catch (e) {
//   profileImage = 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
// }

// const About = () => {
//   const stats = [
//     { icon: <FaBriefcase />, number: '1+', text: 'Years Experience', color: '#4361ee' },
//     { icon: <FaUserGraduate />, number: '10+', text: 'Clients', color: '#3a0ca3' },
//     { icon: <FaAward />, number: '5+', text: 'Projects Completed', color: '#4895ef' }
//   ];

//   const skills = [
//     { name: 'Web Development', percentage: 90, icon: <FaCode />, color: '#4361ee' },
//     { name: 'UI/UX Design', percentage: 80, icon: <FaPalette />, color: '#7209b7' },
//     { name: 'Mobile Development', percentage: 75, icon: <FaMobile />, color: '#f72585' },
//     { name: 'MySql Database', percentage: 70, icon: <FaServer />, color: '#4cc9f0' }
//   ];

//   // const techStack = [
//   //   { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
//   //   { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
//   //   { name: 'React', icon: <SiReact />, color: '#61dafb' },
//   //   { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
//   //   { name: 'Docker', icon: <SiDocker />, color: '#2496ed' }
//   // ];
//   const techStack = [
//   { name: 'JavaScript', icon: <SiJavascript style={{ fill: '#f7df1e', color: '#f7df1e' }} /> },
//   { name: 'TypeScript', icon: <SiTypescript style={{fill: '#3178c6', color: '#3178c6'}} /> },
//   { name: 'React', icon: <SiReact style={{fill: '#61dafb', color: '#61dafb'}} /> },
//   { name: 'MongoDB', icon: <SiMongodb style={{fill: '#47a248', color: '#47a248'}} /> },
//   { name: 'Docker', icon: <SiDocker style={{fill:'#2496ed', color: '#2496ed'}} /> },
//   { name: 'Python', icon: <SiPython style={{ fill: '#306998', color: '#306998' }} /> }, // Python Blue
//   { name: 'Flutter', icon: <SiFlutter style={{ fill: '#02569B', color: '#02569B' }} /> },
//   { name: 'MySQL', icon: <SiMysql style={{ fill: '#00758F', color: '#00758F' }} /> },
//   { name: 'PHP', icon: <SiPhp style={{ fill: '#777bb4', color: '#777bb4' }} /> },
//   { name: 'Firebase', icon: <SiFirebase style={{ fill: '#FFCA28', color: '#FFCA28' }} /> },
//   { name: 'Android Studio', icon: <SiAndroidstudio style={{ fill: '#3DDC84', color: '#3DDC84' }} /> },
//   { name: 'Git', icon: <SiGit style={{ fill: '#F05032', color: '#F05032' }} /> },
//   { name: 'VS Code', icon: <SiVisualstudiocode style={{ fill: '#007ACC', color: '#007ACC' }}  /> },
//   { name: 'Tableau', icon: <SiTableau style={{ fill: '#E97627', color: '#E97627' }} /> }
// ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.16, 1, 0.3, 1]
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8, rotate: -5 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       rotate: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         delay: 0.5
//       }
//     },
//     hover: {
//       scale: 1.03,
//       rotate: 1,
//       transition: { duration: 0.3 }
//     }
//   };

//   return (
//     <section id="about" className="about">
//       <div className="container">
//         <motion.div
//           className="section-header"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <motion.h2 variants={itemVariants} className="section-title">
//             About <span className="highlight">Me</span>
//           </motion.h2>
//           <motion.p variants={itemVariants} className="section-subtitle">
//             Get to know me better
//           </motion.p>
//         </motion.div>

//         <div className="about-content">
//           <motion.div
//             className="about-image"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, type: 'spring' }}
//           >
//             <div className="image-wrapper">
//               <div className="glow-effect"></div>
//               <img 
//                 src={profileImage} 
//                 alt="Profile" 
//                 className="profile-image"
//               />
//               <div className="tech-badge python">Python</div>
//               <div className="tech-badge mysql">MySql</div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="about-text"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             <motion.h3 variants={itemVariants}>Who am I?</motion.h3>
//             <motion.p variants={itemVariants} className="about-description">
//               I'm <span className="highlight">Touhid Hossain</span>, a passionate Full Stack Developer with expertise in 
//               modern web technologies. I specialize in creating <span className="highlight">responsive, 
//               user-friendly applications</span> with clean and efficient code that delivers exceptional 
//               digital experiences.
//             </motion.p>
            
//             <motion.div variants={itemVariants} className="about-stats">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   className="stat-card"
//                   whileHover={{ 
//                     y: -5,
//                     boxShadow: `0 10px 20px ${stat.color}33`
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <div className="stat-icon" style={{ color: stat.color }}>
//                     {stat.icon}
//                   </div>
//                   <div className="stat-info">
//                     <h4>{stat.number}</h4>
//                     <p>{stat.text}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             <motion.div variants={itemVariants} className="about-skills">
//               <h4>My Skills</h4>
//               {skills.map((skill, index) => (
//                 <div key={index} className="skill-item">
//                   <div className="skill-info">
//                     <span className="skill-icon" style={{ color: skill.color }}>
//                       {skill.icon}
//                     </span>
//                     <span className="skill-name">{skill.name}</span>
//                     <span className="skill-percent">{skill.percentage}%</span>
//                   </div>
//                   <div className="skill-bar">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.percentage}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1, delay: index * 0.2, type: 'spring' }}
//                       className="skill-progress"
//                       style={{ backgroundColor: skill.color }}
//                     ></motion.div>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.div variants={itemVariants} className="tech-stack">
//               <h4>Tech Stack</h4>
//               <div className="tech-iconss">
//                 {techStack.map((tech, index) => (
//                   <motion.div
//                     key={index}
//                     className="tech-icon-t"
//                     whileHover={{ 
//                       y: -5,
//                       scale: 1.1,
//                       color: tech.color
//                     }}
//                     whileTap={{ scale: 0.9 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     title={tech.name}
//                   >
//                     {tech.icon}
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import { motion } from 'framer-motion';
import { FaUserGraduate, FaBriefcase, FaAward, FaCode, FaServer, FaMobile, FaPalette } from 'react-icons/fa';
import { SiJavascript, SiReact, SiMongodb, SiTypescript, SiDocker, SiPython, SiFlutter, SiMysql, SiPhp, SiFirebase, SiAndroidstudio, SiGit, SiVisualstudiocode, SiTableau } from 'react-icons/si';
import '../styles/About.css';

let profileImage;
try {
  profileImage = require('../assets/about-profile.jpg');
} catch (e) {
  profileImage = 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80';
}

const About = () => {
  const stats = [
    { icon: <FaBriefcase />, number: '1+', text: 'Years Experience', color: 'var(--primary-color)' },
    { icon: <FaUserGraduate />, number: '10+', text: 'Clients', color: 'var(--secondary-color)' },
    { icon: <FaAward />, number: '5+', text: 'Projects Completed', color: 'var(--accent-color)' }
  ];

  const skills = [
    { name: 'Web Development', percentage: 90, icon: <FaCode />, color: 'var(--primary-color)' },
    { name: 'UI/UX Design', percentage: 80, icon: <FaPalette />, color: 'var(--secondary-color)' },
    { name: 'Mobile Development', percentage: 75, icon: <FaMobile />, color: 'var(--accent-color)' },
    { name: 'MySql Database', percentage: 70, icon: <FaServer />, color: 'var(--info-color)' }
  ];

  const techStack = [
    { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
    { name: 'React', icon: <SiReact />, color: '#61dafb' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
    { name: 'Python', icon: <SiPython />, color: '#306998' },
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
    { name: 'MySQL', icon: <SiMysql />, color: '#00758F' },
    { name: 'PHP', icon: <SiPhp />, color: '#777bb4' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { name: 'Android Studio', icon: <SiAndroidstudio />, color: '#3DDC84' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: '#007ACC' },
    { name: 'Tableau', icon: <SiTableau />, color: '#E97627' }
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
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
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
    <section id="about" className="about section">
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

        <div className="about-content grid">
          <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
          >
            <div className="image-wrapper">
              <div className="glow-effect"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="profile-image hover-scale"
              />
              <div className="tech-badge python">Python</div>
              <div className="tech-badge mysql">MySQL</div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="section-subtitle text-left">
              Professional Summary
            </motion.h3>
            <motion.p variants={itemVariants} className="about-description">
              Passionate Frontend Developer with 1+ years of experience creating fast, responsive web apps—blending technical precision with user-centered design to build clean, scalable interfaces.
            </motion.p>
            <motion.p variants={itemVariants} className="about-description">
              I specialize in building rich user interfaces and interactive experiences that bridge the gap between design and functionality.
            </motion.p>
            <motion.p variants={itemVariants} className="about-description">
              My approach combines clean code principles, performance optimization, and user-centered design to deliver exceptional digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="development-philosophy">
              <h4 className="section-subtitle text-left">Development Philosophy</h4>
              
              <div className="experience-timeline">
                <div className="timeline-item">
                  <h5 className="highlight">Experience Timeline</h5>
                  <div className="timeline-content card">
                    <h5>Software Developer Engineer Intern</h5>
                    <p className="company">BlueStock Fintech</p>
                    <p className="duration">Dec 2024 - Present</p>
                    <ul className="responsibilities">
                      <li>Building responsive web interfaces using HTML, CSS, JavaScript, and React.</li>
                      <li>Experienced in integrating RESTful APIs and optimizing user experience through clean, efficient code.</li>
                    </ul>
                  </div>
                </div>
                
                <div className="skills-list">
                  <h5 className="highlight">Technical Skills</h5>
                  <div className="skills-grid">
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">RESTful APIs</span>
                    <span className="tech-tag">UI/UX</span>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content card">
                    <h5>Freelance Web Developer</h5>
                    <p className="company">Self-employed</p>
                    <p className="duration">2024 - Present</p>
                    <ul className="responsibilities">
                      <li>Designed and developed websites for small businesses and startups.</li>
                      <li>Managed client relationships and delivered projects on time and within budget.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-stats grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card card"
                  whileHover={{ 
                    y: -5,
                    boxShadow: 'var(--shadow-lg)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
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

            <motion.div variants={itemVariants} className="about-skills">
              <h4 className="section-subtitle text-left">My Skills</h4>
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
                      style={{ background: skill.color }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="tech-stack">
              <h4 className="section-subtitle text-left">Tech Stack</h4>
              <div className="tech-icons flex">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="tech-icon"
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    title={tech.name}
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;