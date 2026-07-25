require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:4200',
        'https://task-manager-541z9uyac-sirishas-projects-45e28e4f.vercel.app'

  ],
  credentials: true
}));
app.use(express.json());

// Test route - lets us check the server works before adding real features
app.get('/', (req, res) => {
  res.send('Task Manager API is running');
});


app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});