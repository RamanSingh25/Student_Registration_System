import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css';

const StudentForm = () => {
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        rollNumber: '',
        course: '',
        fathersName: '',
        mothersName: '',
        dateOfBirth: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        gender: '',
        bloodGroup: ''
    });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/students/register', formData);
            setMessage({ text: res.data.message, type: 'success' });
            setFormData({ 
                name: '', 
                email: '', 
                phone: '', 
                rollNumber: '',
                course: '',
                fathersName: '',
                mothersName: '',
                dateOfBirth: '',
                address: '',
                city: '',
                state: '',
                pincode: '',
                gender: '',
                bloodGroup: ''
            });
        } catch (error) {
            setMessage({ text: error.response?.data?.message || 'Error Occurred', type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="material-form-container">
            <div className="material-card">
                <div className="material-header">
                    <div className="material-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <h2 className="material-title">Student Registration</h2>
                    <p className="material-subtitle">Enter your complete details to register</p>
                </div>
                
                <form onSubmit={handleSubmit} className="material-form">
                    {/* Personal Information Section */}
                    <div className="form-section">
                        <h3 className="section-title">Personal Information</h3>
                        <div className="form-grid">
                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name"
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="name" className="material-label">Full Name</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email"
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className="material-label">Email Address</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        id="phone"
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="phone" className="material-label">Phone Number</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="rollNumber" 
                                        id="rollNumber"
                                        value={formData.rollNumber} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="rollNumber" className="material-label">Roll Number</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="date" 
                                        name="dateOfBirth" 
                                        id="dateOfBirth"
                                        value={formData.dateOfBirth} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                    />
                                    <label htmlFor="dateOfBirth" className="material-label">Date of Birth</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <select 
                                        name="gender" 
                                        id="gender"
                                        value={formData.gender} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <label htmlFor="gender" className="material-label">Gender</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <select 
                                        name="bloodGroup" 
                                        id="bloodGroup"
                                        value={formData.bloodGroup} 
                                        onChange={handleChange} 
                                        className="material-input"
                                    >
                                        <option value="" disabled>Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                    <label htmlFor="bloodGroup" className="material-label">Blood Group</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Academic Information Section */}
                    <div className="form-section">
                        <h3 className="section-title">Academic Information</h3>
                        <div className="form-grid">
                            <div className="material-input-group full-width">
                                <div className="material-input-wrapper">
                                    <select 
                                        name="course" 
                                        id="course"
                                        value={formData.course} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                    >
                                        <option value="" disabled>Select Course</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Information Technology">Information Technology</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Mechanical">Mechanical</option>
                                        <option value="Civil">Civil</option>
                                        <option value="Chemical">Chemical</option>
                                        <option value="Biotechnology">Biotechnology</option>
                                        <option value="Business Administration">Business Administration</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Arts">Arts</option>
                                        <option value="Science">Science</option>
                                        <option value="Medicine">Medicine</option>
                                        <option value="Law">Law</option>
                                        <option value="Education">Education</option>
                                    </select>
                                    <label htmlFor="course" className="material-label">Course</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Family Information Section */}
                    <div className="form-section">
                        <h3 className="section-title">Family Information</h3>
                        <div className="form-grid">
                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="fathersName" 
                                        id="fathersName"
                                        value={formData.fathersName} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="fathersName" className="material-label">Father's Name</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="mothersName" 
                                        id="mothersName"
                                        value={formData.mothersName} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="mothersName" className="material-label">Mother's Name</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Address Information Section */}
                    <div className="form-section">
                        <h3 className="section-title">Address Information</h3>
                        <div className="form-grid">
                            <div className="material-input-group full-width">
                                <div className="material-input-wrapper">
                                    <textarea 
                                        name="address" 
                                        id="address"
                                        value={formData.address} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input material-textarea"
                                        placeholder=" "
                                        rows="3"
                                    ></textarea>
                                    <label htmlFor="address" className="material-label">Complete Address</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="city" 
                                        id="city"
                                        value={formData.city} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="city" className="material-label">City</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="state" 
                                        id="state"
                                        value={formData.state} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                    />
                                    <label htmlFor="state" className="material-label">State</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>

                            <div className="material-input-group">
                                <div className="material-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="pincode" 
                                        id="pincode"
                                        value={formData.pincode} 
                                        onChange={handleChange} 
                                        required 
                                        className="material-input"
                                        placeholder=" "
                                        maxLength="6"
                                    />
                                    <label htmlFor="pincode" className="material-label">Pincode</label>
                                    <div className="material-input-underline"></div>
                                </div>
                            </div>
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
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                                Register Student
                            </>
                        )}
                    </button>
                </form>

                {message && (
                    <div className={`material-message ${message.type}`}>
                        <div className="message-icon">
                            {message.type === 'success' ? (
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                </svg>
                            )}
                        </div>
                        <span>{message.text}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentForm;

