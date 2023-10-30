// SignUp.js

import React, { useState } from "react";
import "./SignUp.css";
import { Link,useNavigate } from 'react-router-dom'




function AdminLogIn() {
    const history = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false, // State for the Remember Me checkbox
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    history("/HomePage")
    // TODO: Submit form data to backend
    console.log("Form Data:", formData);
  };

  const handleCheckboxChange = () => {
    setFormData({ ...formData, rememberMe: !formData.rememberMe });
  };

  return (
    <div className="sign-up-container">
      
      <form onSubmit={handleSubmit}>
      <h1>Admin LogIn</h1>
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

        {/* Remember Me Checkbox */}
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default AdminLogIn;
