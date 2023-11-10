import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import Swal from 'sweetalert2';
import Logo from './Homeimage/Logo.jpeg'
import withReactContent from 'sweetalert2-react-content';

function SignUp() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username : '',
    email: '',
    password: '',
    role: 'user', // Default role is user
  });

  const [error, setError] = useState(null);
  const MySwal = withReactContent(Swal);
  
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
        MySwal.fire({
          icon: 'success',
          title: 'Account created succefully',
          showConfirmButton: false,
          timer: 1500 // Automatically close after 1.5 seconds
        });
    
        history('/login');
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

  return(
    <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
  
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: '100%' }}>
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px'  , fontSize: '3.5rem' , fontWeight : 'bolder'}}>Create an account</h3>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example18" className="form-control form-control-lg" 
                    onChange={(event) => {
                               setFormData({ ...formData, username: event.target.value });
                          }}
                    />
                    <label className="form-label" htmlFor="form2Example18"  
                     onChange={(event) => {
                      setFormData({ ...formData, email: event.target.value });
                 }}
                    >Username</label>
                  </div>
                  <div className="form-outline mb-4">
      <input
        type="email"
        id="form2Example18"
        className="form-control form-control-lg"
        onChange={(event) => {
          setFormData({ ...formData, email: event.target.value });
     }}
      />
      <label className="form-label" htmlFor="form2Example18">
        Email address
      </label>
    </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example28" className="form-control form-control-lg" 
                    
                    onChange={(event) => {
                      setFormData({ ...formData, password: event.target.value });
                 }}
                    />
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                  </div>
                  <div className="role-select">
                    <label>Role *</label>
                        <select value={formData.role} onChange={handleRoleChange}>
                          <option value="User">User</option>
                          <option value="Admin">Admin</option>
                        </select>
                      </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" onClick={handleSubmit}>Signup</button>
                  </div>
                  <p>Already have an account?  <Link to="/login" >login</Link> </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src={Logo}
                alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
            </div>
          </div>
        </div>
      </section>

  )


  // return (
  //   <div className="sign-up-container">
  //     <div className="BtnLinks">
  //       <Link to="/LogIn">
  //         <button id="buttons">Log In</button>
  //       </Link>
  
  //     </div>

  //     <form onSubmit={handleSubmit}>
  //       <h1>CREATE ACCOUNT</h1>
  //       <input
  //         type="text"
  //         name="username"
  //         placeholder="Username"
  //         value={formData.username} // Changed from formData.name to formData.username
  //         onChange={(event) => {
  //           setFormData({ ...formData, username: event.target.value }); // Changed 'name' to 'username'
  //         }}
  //         />
  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="Email"
  //         value={formData.email}
  //         onChange={(event) => {
  //           setFormData({ ...formData, email: event.target.value });
  //         }}
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         placeholder="Password"
  //         value={formData.password}
  //         onChange={(event) => {
  //           setFormData({ ...formData, password: event.target.value });
  //         }}
  //       />

  //       {/* Role selection */}
  //       <div className="role-select">
  //         <label>Role *</label>
  //         <select value={formData.role} onChange={handleRoleChange}>
  //           <option value="User">User</option>
  //           <option value="Admin">Admin</option>
  //         </select>
  //       </div>

  //       <button type="submit">Sign Up</button>
  //     </form>
  //   </div>
  // );
}

export default SignUp;
