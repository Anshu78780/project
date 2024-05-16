import React, { useState } from 'react';
import './LoginForm.css'; // Import your CSS file

const LoginForm = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your authentication logic, such as sending a request to your backend server
    console.log('Logging in with:', emailOrMobile, password);
    // Reset the form after submission
    setEmailOrMobile('');
    setPassword('');
  };

  return (
    <div className="login-container"> {/* Apply the CSS class to add styling */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-container"> {/* Apply the CSS class to add styling */}
          <label>Email or Mobile:</label>
          <input
            type="text"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            required
          />
        </div>
        <div className="input-container"> {/* Apply the CSS class to add styling */}
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
