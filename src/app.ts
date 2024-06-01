import express from 'express';
import mongoose from 'mongoose';
import jobApplicationsRouter from './routes/jobApplicationRouter';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobApplicationsDB';

// Middleware
app.use(express.json());

// Routes
app.use('/api/job-applications', jobApplicationsRouter);

// Database connection
mongoose.connect(dbURI, {
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
