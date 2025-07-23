import { useState } from 'react';
import { motion } from 'framer-motion';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Feel free to contact me anytime</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h3>Contact Information</h3>
            <p>Fill up the form and I'll get back to you within 24 hours</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Kolkata, India</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+91 7584018098</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>touhidanowar88@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* <div className="social-links">
              {/* Add your social media links }
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form"
          >
            <form onSubmit={handleSubmit}>
              {error && <div className="error-message">{error}</div>}
              {submitted && (
                <div className="success-message">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;








