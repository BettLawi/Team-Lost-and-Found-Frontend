import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username : '',
    email: '',
    password: '',
    role: 'user', // Default role is user
  });

  const [error, setError] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5555/lost&found/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        history('/HomePage');
      } else {
        if (response.status === 400) {
          const data = await response.json();
          setError(data.message); // If the server responds with a specific error message
        } else {
          setError('Failed to sign up. Please try again later.'); // For generic errors
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to connect to the server. Please try again later.'); // Network errors
    }
  };

  const handleRoleChange = (event) => {
    setFormData({ ...formData, role: event.target.value });
  };

  return (
    <div className="sign-up-container">
      <div className="BtnLinks">
        <Link to="/LogIn">
          <button id="buttons">Log In</button>
        </Link>
        <Link to="/AdminLogIn">
          <button>Admin LogIn</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username} // Changed from formData.name to formData.username
          onChange={(event) => {
            setFormData({ ...formData, username: event.target.value }); // Changed 'name' to 'username'
          }}
          />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event) => {
            setFormData({ ...formData, password: event.target.value });
          }}
        />

        {/* Role selection */}
        <div className="role-select">
          <label>Role *</label>
          <select value={formData.role} onChange={handleRoleChange}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
