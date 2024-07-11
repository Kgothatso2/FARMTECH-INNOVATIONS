const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const fieldRoutes = require('./routes/fieldRoutes');
const dashboardRoutes = require('./routes/dashRoutes');
const colors = require('colors');

// dotenv to auto load environment variables
require('dotenv').config();

// Get port fromm environment variable
const port = process.env.PORT || 3000;

// Connecting to Database
connectDB();

// Create an instance of express application
const app = express();

// MIddlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1', weatherRoutes);
app.use('/api/v1', fieldRoutes);
app.use('/api/v1', dashboardRoutes);

app.get('/', (req, res) => {
  res.send('HomePage');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`['green']);
})