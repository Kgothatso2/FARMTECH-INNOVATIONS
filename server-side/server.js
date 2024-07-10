const express = require('express');
const colors = require('colors');

// Get port fromm environment variable
const port = process.env.PORT || 3000;

// Create an instance of express application
const app = express();

// MIddlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`['red']);
})