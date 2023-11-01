import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user', // Default role is user
    rememberMe: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit form data to the backend
    console.log('Form Data:', formData);
    // Redirect to the appropriate page based on the role
   
      history('/HomePage');
    
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
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, name: event.target.value });
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
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
