require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to COMP3123 Assignment 1 API!');
});

// Connect to MongoDB (still pending)
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Server listening on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
