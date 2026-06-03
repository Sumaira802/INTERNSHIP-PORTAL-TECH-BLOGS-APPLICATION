import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login({ setIsAuthenticated }: { setIsAuthenticated: (val: boolean) => void }) {
  const [data, setData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', data);
      if (res.status === 200) {
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (err) {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e) => setData({...data, email: e.target.value})} required />
      <input type="password" placeholder="Password" onChange={(e) => setData({...data, password: e.target.value})} required />
      <button type="submit">Login</button>
      <Link to="/signup">Sign Up</Link>
    </form>
  );
}
export default Login;