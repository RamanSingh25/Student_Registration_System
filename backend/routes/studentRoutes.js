const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// POST - Register Student
router.post('/register', async (req, res) => {
    try {
        const { 
            name, 
            email, 
            phone, 
            rollNumber, 
            course, 
            fathersName, 
            mothersName, 
            dateOfBirth, 
            address, 
            city, 
            state, 
            pincode, 
            gender, 
            bloodGroup 
        } = req.body;

        // Enhanced Validation
        const requiredFields = [
            'name', 'email', 'phone', 'rollNumber', 'course', 
            'fathersName', 'mothersName', 'dateOfBirth', 
            'address', 'city', 'state', 'pincode', 'gender'
        ];

        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            return res.status(400).json({ 
                message: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Please enter a valid email address' });
        }

        // Phone validation (basic)
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            return res.status(400).json({ message: 'Please enter a valid phone number' });
        }

        // Pincode validation
        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(pincode)) {
            return res.status(400).json({ message: 'Please enter a valid 6-digit pincode' });
        }

        // Check if student already exists
        const existingStudent = await Student.findOne({
            $or: [
                { email: email },
                { rollNumber: rollNumber }
            ]
        });

        if (existingStudent) {
            return res.status(400).json({ 
                message: existingStudent.email === email 
                    ? 'Email already registered' 
                    : 'Roll number already exists' 
            });
        }

        const newStudent = new Student({
            name,
            email,
            phone,
            rollNumber,
            course,
            fathersName,
            mothersName,
            dateOfBirth,
            address,
            city,
            state,
            pincode,
            gender,
            bloodGroup
        });

        await newStudent.save();

        res.status(201).json({ 
            message: 'Student Registered Successfully',
            studentId: newStudent._id
        });
    } catch (error) {
        console.error('Registration error:', error);
        
        // Handle MongoDB duplicate key errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyValue)[0];
            return res.status(400).json({ 
                message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists` 
            });
        }
        
        res.status(500).json({ message: 'Server Error. Please try again later.' });
    }
});

// GET - Get all students
router.get('/students', async (req, res) => {
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        res.json(students);
    } catch (error) {
        console.error('Fetch students error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// GET - Get student by ID
router.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        console.error('Fetch student error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

