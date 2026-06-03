const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ezitech_db')
    .then(() => console.log("DB Connected Successfully"))
    .catch(err => console.log(err));

// Multer Setup (File Upload)
const upload = multer({ dest: 'uploads/' });

// Schemas
const User = mongoose.model('User', new mongoose.Schema({ 
    email: { type: String, required: true }, 
    password: { type: String, required: true } 
}));

const Intern = mongoose.model('Intern', new mongoose.Schema({ 
    fullName: String, email: String, password: String, country: String, city: String,
    phone: String, gender: String, dob: String, joinDate: String, university: String,
    interviewType: String, duration: String, technology: String, internshipType: String,
    profileImage: String 
}));

// --- ROUTES ---

// 1. Signup Route
app.post('/api/signup', async (req, res) => {
    try {
        await new User(req.body).save();
        res.status(200).json({ message: "Signup Successful" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 2. Login Route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) res.status(200).json({ message: "Login Successful" });
    else res.status(401).json({ message: "Invalid Credentials" });
});

// 3. Internship Apply Route (with File Upload)
app.post('/api/apply', upload.single('profileImage'), async (req, res) => {
    try {
        const newIntern = new Intern({ 
            ...req.body, 
            profileImage: req.file ? req.file.path : '' 
        });
        await newIntern.save();
        res.status(200).json({ message: "Application Saved Successfully" });
    } catch (err) { res.status(500).json({ error: err.message }); }
});

// 4. GET Routes (Browser mein data dekhne ke liye)
// Ab browser mein localhost:5000/api/signup likhne par error nahi aayega
app.get('/api/signup', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.get('/api/apply', async (req, res) => {
    const data = await Intern.find();
    res.json(data);
});

app.listen(5000, () => console.log('Server running on port 5000'));