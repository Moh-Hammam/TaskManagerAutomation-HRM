import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Sign-In</h2>
      <input placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password: e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
