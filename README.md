# Student Registration System

View Project Presentation here : docs/SRS1.pdf

A full-stack web application for managing student registrations with a modern React frontend and Node.js/Express backend API.

## 🎯 Overview

The Student Registration System is a comprehensive solution for educational institutions to manage student registrations. It features a user-friendly interface for student registration and a secure admin panel for viewing and managing student records.

## 🏗️ Architecture

- **Frontend**: React 19 + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication system

## ✨ Features

### 🎓 Student Registration
- Complete student information capture
- Real-time form validation
- Duplicate email and roll number prevention
- Responsive design for all devices

### 🔐 Authentication System
- Staff login for administrative access
- Secure session management
- Role-based access control

### 📊 Student Management
- View all registered students
- Search and filter capabilities
- Detailed student profiles
- Export functionality

### 🛡️ Security Features
- Input validation and sanitization
- CORS protection
- Error handling and logging
- Secure data transmission

## 📁 Project Structure

```
Student_Registration_System/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── StudentForm.jsx
│   │   │   ├── StudentList.jsx
│   │   │   └── LoginForm.jsx
│   │   ├── App.jsx          # Main application component
│   │   └── main.jsx         # Application entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Node.js backend API
│   ├── models/
│   │   └── Student.js       # MongoDB schema
│   ├── routes/
│   │   └── studentRoutes.js # API endpoints
│   ├── server.js            # Express server
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Student_Registration_System
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/student-registration
   CORS_ORIGIN=http://localhost:5173
   ```

4. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The API will be available at `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📋 API Endpoints

### Health Check
- `GET /api/health` - Server status and database connection

### Student Management
- `POST /api/students/register` - Register a new student
- `GET /api/students/students` - Get all students
- `GET /api/students/:id` - Get student by ID

## 📝 Student Data Model

The system captures comprehensive student information:

```json
{
  "name": "string (required)",
  "email": "string (required, unique)",
  "phone": "string (required, 10-15 digits)",
  "rollNumber": "string (required, unique)",
  "course": "string (required)",
  "fathersName": "string (required)",
  "mothersName": "string (required)",
  "dateOfBirth": "date (required)",
  "address": "string (required)",
  "city": "string (required)",
  "state": "string (required)",
  "pincode": "string (required, 6 digits)",
  "gender": "string (required: male/female/other)",
  "bloodGroup": "string (optional: A+, A-, B+, B-, AB+, AB-, O+, O-)"
}
```

## 🎨 User Interface

### Student Registration Form
- Clean, intuitive design
- Real-time validation feedback
- Responsive layout for mobile devices
- Progress indicators

### Student List View
- Tabular data display
- Search and filter functionality
- Pagination for large datasets
- Export capabilities

### Authentication
- Secure login interface
- Session management
- Role-based navigation

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend server port | 5000 |
| `NODE_ENV` | Environment mode | development |
| `MONGODB_URI` | MongoDB connection string | mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority |
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:5173 |

### Development Scripts

**Backend:**
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run setup` - Setup MongoDB (if using local instance)

**Frontend:**
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛡️ Security Features

- **Input Validation**: Comprehensive client and server-side validation
- **CORS Protection**: Configured for secure cross-origin requests
- **Error Handling**: Graceful error management without exposing sensitive data
- **Data Sanitization**: All inputs are validated and sanitized
- **Authentication**: JWT-based authentication for admin access

## 📊 Database Schema

The MongoDB schema includes:
- **Required Fields**: All essential student information
- **Unique Constraints**: Email and roll number uniqueness
- **Data Validation**: Format and range validation
- **Timestamps**: Automatic creation and update timestamps
- **Indexing**: Optimized for query performance

## 🚀 Deployment

### Backend Deployment
1. Set `NODE_ENV=production`
2. Configure production MongoDB URI
3. Set appropriate CORS origin
4. Use process manager (PM2, etc.)

### Frontend Deployment
1. Run `npm run build`
2. Deploy the `dist` folder to your web server
3. Configure reverse proxy for API calls

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network connectivity

2. **CORS Errors**
   - Verify `CORS_ORIGIN` in backend `.env`
   - Check frontend URL matches backend configuration

3. **Port Conflicts**
   - Change `PORT` in backend `.env`
   - Update frontend API calls accordingly

### Logs and Debugging

- Backend logs include request tracking and error details
- Frontend console shows API call status
- Health check endpoint: `http://localhost:5000/api/health`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For issues, questions, or contributions:
- Check the logs for error details
- Review the API documentation
- Create an issue in the repository

---

**Built with ❤️ using React, Node.js, and MongoDB**
