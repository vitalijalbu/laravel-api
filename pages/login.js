import React, { useState } from 'react';
import { login } from '../services/authService'; // Assuming you have an authService to handle login requests
import { useRouter } from 'next/router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);  // Assuming 'login' returns user data with a token
      alert('Login successful');
      localStorage.setItem('token', userData.token);  // Save token in localStorage
      router.push('/dashboard');  // Redirect to the dashboard
    } catch (error) {
      alert('Login failed');
      console.error(error.response?.data || error);  // Log the error to console
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
