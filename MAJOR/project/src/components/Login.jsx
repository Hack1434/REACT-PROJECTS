import React, { useState } from 'react';
import '../App.css';

const Login = ({ setIsAuthenticated }) => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here if required
    setIsAuthenticated(true);
  };

  return (
    <div className="LoginContainer">
      <h1>Login Page</h1>
      
      {/* Email Input */}
      <div className="inputGroup">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      {/* Password Input */}
      <div className="inputGroup">
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      {/* Login Button */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
