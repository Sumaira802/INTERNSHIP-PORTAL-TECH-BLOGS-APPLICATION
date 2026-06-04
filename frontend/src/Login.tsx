import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

function Login({ setIsAuthenticated }: { setIsAuthenticated: (val: boolean) => void }) {
  const [data, setData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        // Yahan POST hona lazmi hai
        const res = await axios.post('http://localhost:5000/api/login', data);
        if (res.status === 200) {
            localStorage.setItem('userName', res.data.fullName);
            setIsAuthenticated(true);
            navigate('/');
        }
    } catch (err) {
        alert("Invalid Email or Password!");
    }
};

  return (
    <div className="login-wrapper">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>
        <p>Login to your account</p>
        
        <input 
          type="email" 
          placeholder="Email Address" 
          onChange={(e) => setData({...data, email: e.target.value})} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setData({...data, password: e.target.value})} 
          required 
        />
        
        <button type="submit" className="login-btn">Sign In</button>
        
        <div className="login-footer">
          Don't have an account? <Link to="/signup">Create one</Link>
        </div>
      </form>
    </div>
  );
}
export default Login;