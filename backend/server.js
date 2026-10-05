const cookieParser = require('cookie-parser');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const staffRoutes = require('./routes/staffRoutes');




const app=express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(cookieParser());
connectDB();

app.use('/api/auth', authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/staff", staffRoutes);

const PORT=process.env.PORT || 5000;
app.listen( PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});