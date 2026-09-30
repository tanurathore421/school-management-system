const express = require("express");
const router = express.Router();
const { registerUser,loginUser,createAdmin,createStaff} = require("../controllers/authController");  
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin', createAdmin);
router.post('/staff', createStaff);

// Protected test route
router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "You are authorized",
    userId: req.user.userId,
    role: req.user.role,
  });
});

router.get('/admin', authMiddleware, roleMiddleware('admin'), (req, res) => {
  res.status(200).json({ message: 'Welcome, admin!' });
});

router.get('/staff', authMiddleware, roleMiddleware('staff'), (req, res) => {
  res.status(200).json({ message: 'Welcome, staff!' });
});

router.get('/student', authMiddleware, roleMiddleware('student'), (req, res) => {
  res.status(200).json({ message: 'Welcome, student!' });
});

module.exports = router;