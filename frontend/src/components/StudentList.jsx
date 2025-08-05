import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCourse, setFilterCourse] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/api/students/students');
            setStudents(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching students:', error);
            setError('Failed to load students. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCourse = !filterCourse || student.course === filterCourse;
        
        return matchesSearch && matchesCourse;
    });

    const uniqueCourses = [...new Set(students.map(student => student.course))].sort();

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="student-list-container">
                <div className="material-card">
                    <div className="loading-container">
                        <div className="material-spinner">
                            <div className="spinner"></div>
                        </div>
                        <p>Loading students...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="student-list-container">
            <div className="material-card">
                <div className="material-header">
                    <div className="material-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                        </svg>
                    </div>
                    <h2 className="material-title">Registered Students</h2>
                    <p className="material-subtitle">
                        Total Students: <span className="student-count">{students.length}</span>
                        {filteredStudents.length !== students.length && (
                            <span className="filtered-count"> (Showing {filteredStudents.length})</span>
                        )}
                    </p>
                </div>

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

                {/* Filters */}
                <div className="filters-section">
                    <div className="filter-group">
                        <div className="material-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by name, email, or roll number..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="material-input search-input"
                            />
                            <div className="material-input-underline"></div>
                        </div>
                    </div>

                    <div className="filter-group">
                        <div className="material-input-wrapper">
                            <select
                                value={filterCourse}
                                onChange={(e) => setFilterCourse(e.target.value)}
                                className="material-input"
                            >
                                <option value="">All Courses</option>
                                {uniqueCourses.map(course => (
                                    <option key={course} value={course}>{course}</option>
                                ))}
                            </select>
                            <div className="material-input-underline"></div>
                        </div>
                    </div>
                </div>

                {/* Students List */}
                {filteredStudents.length === 0 ? (
                    <div className="no-students">
                        <div className="no-students-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <h3>No students found</h3>
                        <p>{students.length === 0 ? 'No students have registered yet.' : 'No students match your search criteria.'}</p>
                    </div>
                ) : (
                    <div className="students-grid">
                        {filteredStudents.map((student) => (
                            <div key={student._id} className="student-card">
                                <div className="student-avatar">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                    </svg>
                                </div>
                                <div className="student-info">
                                    <h3 className="student-name">{student.name}</h3>
                                    <p className="student-email">{student.email}</p>
                                    <p className="student-roll">Roll: {student.rollNumber}</p>
                                    <p className="student-course">{student.course}</p>
                                    <p className="student-date">Registered: {formatDate(student.createdAt)}</p>
                                </div>
                                <div className="student-actions">
                                    <button className="view-details-btn" onClick={() => handleViewDetails(student)}>
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                        </svg>
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Refresh Button */}
                <div className="refresh-section">
                    <button 
                        className="material-button refresh-btn"
                        onClick={fetchStudents}
                        disabled={loading}
                    >
                        <svg className="button-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                        </svg>
                        Refresh List
                    </button>
                </div>
            </div>
        </div>
    );
};

const handleViewDetails = (student) => {
    // This function can be expanded to show a modal or navigate to a details page
    console.log('View details for:', student);
    alert(`Student Details:\n\nName: ${student.name}\nEmail: ${student.email}\nRoll Number: ${student.rollNumber}\nCourse: ${student.course}\nPhone: ${student.phone}\nDate of Birth: ${new Date(student.dateOfBirth).toLocaleDateString()}\nGender: ${student.gender}\nAddress: ${student.address}, ${student.city}, ${student.state} - ${student.pincode}`);
};

export default StudentList; 