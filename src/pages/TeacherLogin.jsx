import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeacherLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'teacher' && password === 'teacher123') {
      navigate('/teacher-dashboard');
    } else {
      alert('Invalid Teacher Credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2 className='head'>Teacher Login</h2>
      <input type="text" className='in-1' placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" className='in-2' onChange={(e) => setPassword(e.target.value)} required />
      <button className='btn' type="submit">Login</button>
    </form>
  );
}

export default TeacherLogin;
