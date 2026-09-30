require('dotenv').config();
const express = require('express');

const workoutRoutes = require('./routes/workouts');

// Create an instance of the Express application
const app = express();


//middleware to parse JSON request bodies
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Define a route for the root URL
app.use( '/api/workouts', workoutRoutes);



// listen for requests on port 4000
const PORT = process.env.PORT || 4000;




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
