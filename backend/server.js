const express = require('express');
const dotenv = require('dotenv').config()

const workoutRoutes = require('./routes/workoutRoute');
const connectDB = require('./config/db');


port = process.env.PORT || 5000


const app = express();

// connect db
connectDB();

// workout routing
app.use('/api/workouts', workoutRoutes);


app.listen(port, () => console.log(`server started on port ${port}`));