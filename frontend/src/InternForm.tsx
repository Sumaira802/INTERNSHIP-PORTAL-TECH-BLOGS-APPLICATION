import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './InternForm.css'

function InternForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: 'us',
    city: '',
    phone: '',
    gender: 'male',
    dob: '',
    joinDate: '',
    university: 'university1',
    interviewType: 'in-person',
    duration: '',
    technology: 'javascript',
    internshipType: 'Onsite'
  });

  
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => data.append(key, value as string));
  if (profileImage) data.append('profileImage', profileImage);

  try {
    await axios.post('http://localhost:5000/api/apply', data);
    alert('Submitted Successfully!');
  } catch (error) { alert('Failed!'); }
};

  return (
    <div 
      className="container" 
      style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        width: '100%', 
        height: '100vh', 
        alignItems: 'stretch', 
        justifyContent : 'flex-start',
        textAlign: 'left'
      }}
    >
      <div 
        className="sidebar" 
        style={{ 
          width: '250px', 
          backgroundColor: '#111111', 
          color: 'white', 
          padding: '20px', 
          flexShrink: 0 
        }}
      >
        <h2>Company</h2><br/>
        <p className='Steps'>Step 1 to 3</p><br/> <br />
        <h4>Let's get Started</h4>
        <p>👋</p>
        <p>Create your profile and tell us a bit about yourself to begin your internship journey with Ezitech.</p> 
        <div className="infor">
            <h4>Your Information is safe with us</h4>
            <p>🔒</p>
            <p>We use industry-standard security to protect your data.</p>
        </div>
        <div className="help"> <br/>
            <h4>Need Help?</h4>
            <p>📞</p>
            <p>Contact our support team</p>
            <p>abc@gmail.com</p>
        </div>
        <p>Already have an account? <Link to="/login" style={{ color: 'purple', fontWeight: 'bold' }}>Log in here</Link>.</p>
      </div>
      
      <div 
        className="content" 
        style={{ 
          flexGrow: 1, 
          backgroundColor: '#222222', 
          color: 'white', 
          padding: '20px',
          overflowY: 'auto'
        }}
      >
        <h2>Internship Application</h2>
        <p>Please fill out the following information:</p>
        <form onSubmit={handleSubmit}>
            <h1>Personal Information</h1>
            <label>Full Name</label>
            <input type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange} required />
            
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} required />
            <label>Password</label>


            <label>Select Your Country</label>
            <select name="country" onChange={handleChange}>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="pakistan">Pakistan</option>
            </select>
            
            <label>City</label>
            <input type="text" name="city" placeholder="Enter your city" onChange={handleChange} required />
            
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your phone number" onChange={handleChange} required />
            
            <label>Gender</label>
            <select name="gender" onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select><br/>

            <h1>Additional information</h1>
            <label>Date of Birth</label>
            <input type="date" name="dob" onChange={handleChange} required />
            
            <label>Join Date</label>
            <input type="date" name="joinDate" onChange={handleChange} required /> 
            
            <label>Select University</label>
            <select name="university" onChange={handleChange}>
                <option value="university1">FUSST</option>
                <option value="university2">RWU</option>
                <option value="university3">FJWU</option>
            </select>
            
            <label>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleFileChange} required />
            
            <label>Interview Type</label>
            <select name="interviewType" onChange={handleChange}>
                <option value="in-person">In-Person</option>
                <option value="virtual">Virtual</option>
            </select>
            
            <label>Duration</label>
            <input type="text" name="duration" placeholder="Enter the duration of the internship" onChange={handleChange} required />
            
            <label>Select Technology</label>
            <select name="technology" onChange={handleChange}>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
            </select>
            
            <label>Select Internship</label>
            <select name="internshipType" onChange={handleChange}>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
            </select> <br/>
            
            <div className="btn">
                <button type="submit" style={{backgroundColor:'purple', color: 'white', width: '150px', height: '50px', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Submit Application</button>
                <button type="reset" style={{backgroundColor:'gray', color: 'white', width: '150px', height: '50px', padding: '10px', marginLeft: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Cancel</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default InternForm