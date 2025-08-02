import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'student' && password === 'student123') {
      navigate('/student-dashboard');
    } else {
      alert('Invalid Student Credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2 className='head'>Student Login</h2>
      <input type="text" className='in-1' placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" className='in-2' placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit" className='btn'>Login</button>
    </form>
  );
}

export default StudentLogin;
