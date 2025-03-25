const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { username, password, userType } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, userType });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Error registering user." });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log("Found user:", user); // Add this to debug
    
    if (user && (await bcrypt.compare(password, user.password))) {
      // Send back user type along with success message
      console.log("Login successful, sending userType:", user.userType); // Add this to debug
      
      res.status(200).json({ 
        message: "Login successful!", 
        userType: user.userType,
        userId: user._id
      });
    } else {
      res.status(401).json({ message: "Invalid username or password." });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login." });
  }
});

// Fetch user role by ID
router.get("/user-role/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId, "userType"); // Fetch only the userType field

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ userType: user.userType });
  } catch (error) {
    console.error("Error fetching user role:", error);
    res.status(500).json({ message: "Error fetching user role" });
  }
});

module.exports = router;
