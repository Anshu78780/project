import React, { useState } from 'react';
import './RegistrationForm.css';
import LoginForm from './LoginForm'; // Import your LoginForm component

function RegistrationForm() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Data
    console.log(formData);
    // Set registered to true to render LoginForm
    setRegistered(true);
    // Reset the form data after submission
    setFormData(initialFormData);
  };

  // Render the registration form or login form based on registered state
  return (
    <>
      {registered ? (
        <LoginForm />
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </>
  );
}

export default RegistrationForm;
