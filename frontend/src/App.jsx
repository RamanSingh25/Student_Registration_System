import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('register'); // 'register', 'list', 'login'
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');
    
    if (authToken && userRole === 'staff') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (success) => {
    setIsAuthenticated(success);
    if (success) {
      setCurrentPage('list');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setCurrentPage('register');
  };

  const handleNavigation = (page) => {
    if (page === 'list' && !isAuthenticated) {
      setCurrentPage('login');
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="app-navigation">
        <div className="nav-container">
          <div className="nav-brand">
            <svg viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span className="nav-title">Student Management</span>
          </div>
          <div className="nav-tabs">
            <button 
              className={`nav-tab ${currentPage === 'register' ? 'active' : ''}`}
              onClick={() => handleNavigation('register')}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              </svg>
              Register Student
            </button>
            <button 
              className={`nav-tab ${currentPage === 'list' ? 'active' : ''}`}
              onClick={() => handleNavigation('list')}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              View Students
            </button>
            {isAuthenticated && (
              <button 
                className="nav-tab logout-btn"
                onClick={handleLogout}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
                </svg>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="app-content">
        {currentPage === 'register' && <StudentForm />}
        {currentPage === 'list' && isAuthenticated && <StudentList />}
        {currentPage === 'login' && !isAuthenticated && <LoginForm onLogin={handleLogin} />}
        {currentPage === 'list' && !isAuthenticated && <LoginForm onLogin={handleLogin} />}
      </main>
    </div>
  );
}

export default App;

