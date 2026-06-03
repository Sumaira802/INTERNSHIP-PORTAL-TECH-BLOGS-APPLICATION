import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      alert('Account Created!');
      navigate('/login');
    } catch (err: any) { alert(err.response?.data?.message || 'Error'); }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, firstName: e.target.value})} required />
      <input type="text" placeholder="Last Name" onChange={(e) => setFormData({...formData, lastName: e.target.value})} required />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </form>
  );
}
export default Signup;