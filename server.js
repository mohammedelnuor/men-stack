require('dotenv').config();
const express = require('express');

// Create an instance of the Express application
const app = express();


//middleware to parse JSON request bodies
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Define a route for the root URL
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app' });
});

// listen for requests on port 4000
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
