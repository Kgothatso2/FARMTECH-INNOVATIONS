const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const colors = require('colors');

// Get port fromm environment variable
const port = process.env.PORT || 3000;

// Connecting to Database
connectDB();

// Create an instance of express application
const app = express();

// MIddlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('HomePage');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`['red']);
})