require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

// DB
connectDB();

//Routes
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Server Started..."));