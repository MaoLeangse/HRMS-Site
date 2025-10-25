import React, { useState } from 'react';
import api from '../services/api';
import Swal from 'sweetalert2';
import { useAuth } from '../hooks/useAuth';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      // Replace with real API call
      // const res = await api.post('/login', { email, password });
      // login(res.data.token);
      login('demo-token');
      window.location.href = '/dashboard';
    } catch (err) {
      Swal.fire('Error', 'Login failed', 'error');
    }
  }

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
