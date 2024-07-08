const express = require('express');

const app = express()
const port = 3000

app.use(express.json())

// root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// register a user
app.post('/register', (req, res) => {});

// login a user
app.post('/login', (req, res) => {});

// dashboard for a user
app.get('/dashboard', (req, res) => {});

// weather information




// listen to port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});
