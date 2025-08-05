import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simple authentication - in a real app, this would be an API call
        if (credentials.username === 'admin' && credentials.password === 'staff123') {
            // Store auth token in localStorage
            localStorage.setItem('authToken', 'staff-auth-token');
            localStorage.setItem('userRole', 'staff');
            onLogin(true);
        } else {
            setError('Invalid credentials. Please try again.');
        }
        
        setIsLoading(false);
    };

    return (
        <div className="login-container">
            <div className="material-card">
                <div className="material-header">
                    <div className="material-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                        </svg>
                    </div>
                    <h2 className="material-title">Staff Login</h2>
                    <p className="material-subtitle">Enter your credentials to access student data</p>
                </div>
                
                <form onSubmit={handleSubmit} className="material-form">
                    <div className="material-input-group">
                        <div className="material-input-wrapper">
                            <input 
                                type="text" 
                                name="username" 
                                id="username"
                                value={credentials.username} 
                                onChange={handleChange} 
                                required 
                                className="material-input"
                                placeholder=" "
                            />
                            <label htmlFor="username" className="material-label">Username</label>
                            <div className="material-input-underline"></div>
                        </div>
                    </div>

                    <div className="material-input-group">
                        <div className="material-input-wrapper">
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                value={credentials.password} 
                                onChange={handleChange} 
                                required 
                                className="material-input"
                                placeholder=" "
                            />
                            <label htmlFor="password" className="material-label">Password</label>
                            <div className="material-input-underline"></div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className={`material-button ${isLoading ? 'loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="material-spinner">
                                <div className="spinner"></div>
                            </div>
                        ) : (
                            <>
                                <svg className="button-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z"/>
                                </svg>
                                Login
                            </>
                        )}
                    </button>
                </form>

                {error && (
                    <div className="material-message error">
                        <div className="message-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                        </div>
                        <span>{error}</span>
                    </div>
                )}

                <div className="login-info">
                    <p className="info-text">
                        <strong>Demo Credentials:</strong><br/>
                        Username: <code>admin</code><br/>
                        Password: <code>staff123</code>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm; 