import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import './SignUp.css';


function SignUp({ setRole, role }) {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username : '',
    email: '',
    password: '',
    role: 'User', // Default role is user
  });

  const [error, setError] = useState(null);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRole(formData.role);

    try {
      // Show loading confirmation
      Swal.showLoading();

      const response = await fetch('https://lost-backend.onrender.com/lost&found/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Hide loading confirmation
      Swal.hideLoading();

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        Swal.fire({
          icon: "success",
          text: "You have successfully signed up.",
        });
        history('/HomePage');
      } else {
        if (response.status === 400) {
          const data = await response.json();
          setError(data.message);
        } else {
          setError('Failed to sign up. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to connect to the server. Please try again later.');
      // Hide loading confirmation in case of an error
      Swal.hideLoading();
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
          value={formData.username}
          onChange={(event) => {
            setFormData({ ...formData, username: event.target.value });
          }}
          autoComplete="username" // Added autocomplete attribute
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(event) => {
            setFormData({ ...formData, email: event.target.value });
          }}
          autoComplete="email" // Added autocomplete attribute
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event) => {
            setFormData({ ...formData, password: event.target.value });
          }}
          autoComplete="current-password" // Added autocomplete attribute
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
