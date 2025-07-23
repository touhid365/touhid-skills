import { motion } from 'framer-motion';
import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-screen">
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-logo">
          Touhid<span>Dev</span>
        </div>
        <div className="loading-spinner">
          <motion.div
            className="spinner"
            animate={{
              rotate: 360,
              transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Loading;