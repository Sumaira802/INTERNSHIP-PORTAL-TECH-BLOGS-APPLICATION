const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads');

mongoose.connect('mongodb://localhost:27017/ezitech_internships')
  .then(() => console.log("✅ DB Connected"))
  .catch(err => console.error("❌ DB Error:", err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

const ApplicationSchema = new mongoose.Schema({
  firstName: String, lastName: String, email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: String, country: String, city: String, phone: String, gender: String,
  dob: String, joinDate: String, university: String, interviewType: String,
  duration: String, technology: String, internshipType: String, profileImagePath: String
});
const Application = mongoose.model('Application', ApplicationSchema);

// Signup Route
app.post('/api/signup', async (req, res) => {
  try {
    const newUser = new Application(req.body);
    await newUser.save();
    res.status(201).json({ message: "Signup Successful!" });
  } catch (err) { res.status(400).json({ message: "Email already exists!" }); }
});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Application.findOne({ email });
  if (user && (user.password === password || user.phone === password || user.dob === password)) {
    res.status(200).json({ message: "Login Successful!", user });
  } else {
    res.status(401).json({ message: "Invalid credentials!" });
  }
});

// Intern Form Route
app.post('/api/apply', upload.single('profileImage'), async (req, res) => {
  try {
    const updatedData = { ...req.body, profileImagePath: req.file ? req.file.path : null };
    await Application.findOneAndUpdate({ email: req.body.email }, updatedData, { upsert: true });
    res.status(200).json({ message: "Application Saved!" });
  } catch (err) { res.status(500).json({ message: "Error" }); }
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));