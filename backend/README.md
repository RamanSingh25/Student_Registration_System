# Student Registration System

A Node.js/Express backend API for the Student Registration System with MongoDB database.

## 🚀 Features

- **Student Registration** - Complete student data management
- **Data Validation** - Comprehensive input validation
- **MongoDB Integration** - Persistent data storage
- **CORS Support** - Cross-origin resource sharing
- **Error Handling** - Robust error management
- **Health Check** - API health monitoring
- **Request Logging** - Detailed request tracking

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   CORS_ORIGIN=http://localhost:5173
   ```

3. **Start MongoDB:**
   Make sure MongoDB is running on your system or use a cloud instance.

## 🏃‍♂️ Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📊 API Endpoints

### Health Check
- **GET** `/api/health` - Check server status

### Student Management
- **POST** `/api/students/register` - Register a new student
- **GET** `/api/students/students` - Get all students
- **GET** `/api/students/:id` - Get student by ID

## 📝 Student Registration Data Structure

```json
{
  "name": "string (required)",
  "email": "string (required, unique)",
  "phone": "string (required)",
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

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment mode | development |
| `MONGODB_URI` | MongoDB | mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:5173 |

### Database Schema

The student data is stored with the following schema:
- All required fields are validated
- Email and roll number must be unique
- Timestamps are automatically added
- Data validation includes format checks

## 🐛 Error Handling

The API includes comprehensive error handling:
- **400 Bad Request** - Invalid input data
- **404 Not Found** - Route or resource not found
- **500 Internal Server Error** - Server-side errors
- **Duplicate Key Errors** - Handled gracefully

## 📈 Monitoring

- **Request Logging** - All requests are logged with timestamps
- **Health Check** - Monitor server and database status
- **Error Tracking** - Detailed error logging

## 🔒 Security Features

- **CORS Protection** - Configured for frontend access
- **Input Validation** - Comprehensive data validation
- **Error Sanitization** - Sensitive data not exposed in errors

## 🚀 Deployment

1. Set `NODE_ENV=production`
2. Configure production MongoDB URI
3. Set appropriate CORS origin
4. Use process manager (PM2, etc.)

## 📞 Support

For issues or questions, check the logs or create an issue in the repository. 
