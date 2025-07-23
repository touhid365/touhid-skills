import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase/config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { 
  FiCheck, 
  FiAlertTriangle, 
  FiInfo, 
  FiX, 
  FiTrash2, 
  FiEdit2,
  FiPlus,
  FiLogOut
} from 'react-icons/fi';
import '../styles/Admin.css';

export default function Admin() {
  // Auth state
  const [user, setUser] = useState(null);
  const [authForm, setAuthForm] = useState({ email: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Project state
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageUrl: '',
    codeUrl: '',
    demoUrl: '',
    techStack: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  // UI state
  const [statusMessage, setStatusMessage] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const buttonsRef = useRef([]);

  const projectsCol = collection(db, 'projects');

  // Helper functions
  const showStatus = (type, message, duration = 5000) => {
    setStatusMessage({ type, message });
    setTimeout(() => setStatusMessage(null), duration);
  };

  const createRipple = (event, index) => {
    const button = buttonsRef.current[index];
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  // Auth handlers
  const handleAuthChange = (e) => {
    setAuthForm({ ...authForm, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, authForm.email, authForm.password);
      showStatus('success', 'Logged in successfully');
    } catch (err) {
      setAuthError('Invalid email or password.');
      showStatus('error', 'Login failed');
    }
    setAuthLoading(false);
  };

  const handleLogoutConfirm = async () => {
    try {
      await signOut(auth);
      showStatus('success', 'Logged out successfully');
    } catch (err) {
      showStatus('error', 'Logout failed');
    } finally {
      setShowLogoutConfirm(false);
    }
  };

  // Project CRUD handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      showStatus('warning', 'Project title is required');
      return;
    }

    try {
      const newProject = {
        title: form.title,
        description: form.description,
        imageUrl: form.imageUrl,
        codeUrl: form.codeUrl,
        demoUrl: form.demoUrl,
        category: form.category,
        techStack: form.techStack.split(',').map((t) => t.trim()).filter(Boolean),
        createdAt: new Date().toISOString(),
      };
      
      const docRef = await addDoc(projectsCol, newProject);
      setProjects([...projects, { ...newProject, id: docRef.id }]);
      setForm({ title: '', description: '', imageUrl: '', codeUrl: '', demoUrl: '', category: '', techStack: '' });
      showStatus('success', 'Project added successfully');
    } catch (err) {
      showStatus('error', 'Failed to add project');
    }
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setForm({
      title: project.title || '',
      description: project.description || '',
      imageUrl: project.imageUrl || '',
      codeUrl: project.codeUrl || '',
      demoUrl: project.demoUrl || '',
      category: project.category || '',
      techStack: (project.techStack || []).join(', '),
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const projectRef = doc(db, 'projects', editingId);
      const updatedProject = {
        title: form.title,
        description: form.description,
        imageUrl: form.imageUrl,
        codeUrl: form.codeUrl,
        demoUrl: form.demoUrl,
        category: form.category,
        techStack: form.techStack.split(',').map((t) => t.trim()).filter(Boolean),
      };
      
      await updateDoc(projectRef, updatedProject);
      setProjects(
        projects.map((p) =>
          p.id === editingId ? { ...p, ...updatedProject } : p
        )
      );
      setEditingId(null);
      setForm({ title: '', description: '', imageUrl: '', codeUrl: '', demoUrl: '', category: '', techStack: '' });
      showStatus('success', 'Project updated successfully');
    } catch (err) {
      showStatus('error', 'Failed to update project');
    }
  };

  const handleDeleteClick = (id) => {
    setProjectToDelete(id);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteDoc(doc(db, 'projects', projectToDelete));
      setProjects(projects.filter((p) => p.id !== projectToDelete));
      showStatus('success', 'Project deleted successfully');
      
      if (editingId === projectToDelete) {
        setEditingId(null);
        setForm({ title: '', description: '', imageUrl: '', codeUrl: '', demoUrl: '', category: '', techStack: '' });
      }
    } catch (error) {
      showStatus('error', 'Failed to delete project');
    } finally {
      setShowDeleteConfirm(false);
      setProjectToDelete(null);
    }
  };

  // Effects
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const snapshot = await getDocs(projectsCol);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProjects(data);
      } catch (err) {
        showStatus('error', 'Failed to load projects');
      }
      setLoading(false);
    };
    fetchProjects();
  }, [user, projectsCol]);

  // Render login form if not authenticated
  if (!user) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card">
          <h2 className="admin-title">Admin Login</h2>
          <form className="admin-form" onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={authForm.email}
                onChange={handleAuthChange}
                required
                className="admin-input"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={authForm.password}
                onChange={handleAuthChange}
                required
                className="admin-input"
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={authLoading}
            >
              {authLoading ? (
                <>
                  <span className="spinner"></span>
                  Logging in...
                </>
              ) : 'Login'}
            </button>
            {authError && <div className="admin-error">{authError}</div>}
          </form>
        </div>
      </div>
    );
  }

  // Render admin panel if authenticated
  return (
    <div className="admin-dashboard">
      {/* Status Message */}
      {statusMessage && (
        <div className={`status-message ${statusMessage.type}`}>
          {statusMessage.type === 'success' && <FiCheck size={20} />}
          {statusMessage.type === 'error' && <FiAlertTriangle size={20} />}
          {statusMessage.type === 'warning' && <FiAlertTriangle size={20} />}
          {statusMessage.type === 'info' && <FiInfo size={20} />}
          <span>{statusMessage.message}</span>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Confirm Deletion</h3>
              <button 
                className="modal-close" 
                onClick={() => setShowDeleteConfirm(false)}
              >
                <FiX />
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this project? This action cannot be undone.
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-outline ripple" 
                onClick={(e) => {
                  setShowDeleteConfirm(false);
                  createRipple(e, 'cancel-delete');
                }}
                ref={el => buttonsRef.current['cancel-delete'] = el}
              >
                Cancel
              </button>
              <button 
                className="btn btn-error ripple"
                onClick={(e) => {
                  confirmDelete();
                  createRipple(e, 'confirm-delete');
                }}
                ref={el => buttonsRef.current['confirm-delete'] = el}
              >
                <FiTrash2 /> Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Confirm Logout</h3>
              <button 
                className="modal-close" 
                onClick={() => setShowLogoutConfirm(false)}
              >
                <FiX />
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to logout? Any unsaved changes will be lost.
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-outline ripple"
                onClick={(e) => {
                  setShowLogoutConfirm(false);
                  createRipple(e, 'cancel-logout');
                }}
                ref={el => buttonsRef.current['cancel-logout'] = el}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary ripple"
                onClick={(e) => {
                  handleLogoutConfirm();
                  createRipple(e, 'confirm-logout');
                }}
                ref={el => buttonsRef.current['confirm-logout'] = el}
              >
                <FiLogOut /> Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="admin-header">
        <h1 className="admin-title">Project Management Dashboard</h1>
        <button 
          onClick={() => setShowLogoutConfirm(true)} 
          className="btn btn-outline ripple"
          ref={el => buttonsRef.current['logout-btn'] = el}
        >
          <FiLogOut /> Logout
        </button>
      </header>

      <section className="admin-form-section">
        <h2 className="section-subtitle">
          {editingId ? 'Edit Project' : 'Add New Project'}
        </h2>
        <form onSubmit={editingId ? handleUpdate : handleAdd} className="admin-form">
          <div className="form-grid">
            <div className="input-group">
              <input
                name="title"
                placeholder="Project Title"
                value={form.title}
                onChange={handleChange}
                required
                className="admin-input"
              />
            </div>
            
            <div className="input-group">
              <textarea
                name="description"
                placeholder="Project Description"
                value={form.description}
                onChange={handleChange}
                className="admin-textarea"
              />
            </div>

            <div className="input-group">
              <input
                name="imageUrl"
                placeholder="Image URL"
                value={form.imageUrl}
                onChange={handleChange}
                className="admin-input"
              />
            </div>

            <div className="input-group">
              <input
                name="codeUrl"
                placeholder="Code URL (GitHub, etc.)"
                value={form.codeUrl}
                onChange={handleChange}
                className="admin-input"
              />
            </div>

            <div className="input-group">
              <input
                name="demoUrl"
                placeholder="Live Demo URL"
                value={form.demoUrl}
                onChange={handleChange}
                className="admin-input"
              />
            </div>
            <div className="input-group">
              <input
                name="category"
                placeholder="Project Category"
                value={form.category}
                onChange={handleChange}
                required
                className="admin-input"
              />
            </div>

            <div className="input-group">
              <input
                name="techStack"
                placeholder="Tech Stack (comma separated)"
                value={form.techStack}
                onChange={handleChange}
                className="admin-input"
              />
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary btn-hover-grow ripple"
              ref={el => buttonsRef.current['submit-btn'] = el}
              onClick={(e) => createRipple(e, 'submit-btn')}
            >
              <FiPlus /> {editingId ? 'Update Project' : 'Add Project'}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-outline btn-hover-grow ripple"
                onClick={(e) => {
                  setEditingId(null);
                  setForm({ 
                    title: '', 
                    description: '', 
                    imageUrl: '', 
                    codeUrl: '', 
                    category: '',
                    demoUrl: '', 
                    techStack: '' 
                  });
                  createRipple(e, 'cancel-edit');
                }}
                ref={el => buttonsRef.current['cancel-edit'] = el}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="projects-section">
        <h2 className="section-subtitle">Your Projects ({projects.length})</h2>
        
        {loading ? (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="empty-state">
            <p>No projects found. Add your first project above!</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card">
                {project.imageUrl && (
                  <div className="project-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <h4>{project.title}</h4>
                  {/* <p className="project-description">{project.description}</p> */}
                  
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="project-tech">
                      <strong>Tech Stack:</strong>
                      <div className="tech-tags">
                        {project.techStack.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* <div className="project-links">
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm ripple"
                        ref={el => buttonsRef.current[`code-${index}`] = el}
                        onClick={(e) => createRipple(e, `code-${index}`)}
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm ripple"
                        ref={el => buttonsRef.current[`demo-${index}`] = el}
                        onClick={(e) => createRipple(e, `demo-${index}`)}
                      >
                        <FiExternalLink /> Demo
                      </a>
                    )}
                  </div> */}

                  <div className="project-actions">
                    <button 
                      onClick={(e) => {
                        handleEdit(project);
                        createRipple(e, `edit-${index}`);
                      }}
                      className="btn btn-outline btn-sm ripple"
                      ref={el => buttonsRef.current[`edit-${index}`] = el}
                    >
                      <FiEdit2 /> Edit
                    </button>
                    <button 
                      onClick={(e) => {
                        handleDeleteClick(project.id);
                        createRipple(e, `delete-${index}`);
                      }}
                      className="btn btn-error btn-sm ripple"
                      ref={el => buttonsRef.current[`delete-${index}`] = el}
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}