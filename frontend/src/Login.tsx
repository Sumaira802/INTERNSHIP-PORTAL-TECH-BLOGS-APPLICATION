import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Login hone ke baad home page par bhejne ke liye

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: email,
        password: password // User apna registered phone number ya password dale ga
      });

      alert(response.data.message);
      
      // User ka data browser ki memory (localStorage) mein save kar dein taake pata chale kaun login hai
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Kamyab login ke baad direct dashboard ya home page par bhej dein
      navigate('/'); 
      
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Backend se connection nahi ho saka.");
      }
    }
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#222222', color: 'white', height: '100vh' }}>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        
        <label>Email Address</label>
        <input 
          type="email" 
          placeholder="Enter registered email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ padding: '10px' }}
        />

        <label>Password </label>
        <input 
          type="password" 
          placeholder="Enter password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '10px' }}
        />

        <button type="submit" style={{ backgroundColor: 'purple', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login