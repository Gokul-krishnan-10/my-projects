import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else {
      alert('Invalid Admin Credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2 className='head'>Admin Login</h2>
      <input type="text" placeholder="Username" className='in-1' onChange={(e) => setUsername(e.target.value)} required /> <br/>
      <input type="password" placeholder="Password" className='in-2' onChange={(e) => setPassword(e.target.value)} required /><br/>
      <input type="submit" value="Login" className='btn'/>
    </form>
  );
}

export default AdminLogin;
