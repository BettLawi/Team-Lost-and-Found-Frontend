// SignUp.js

import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import './Login.css'
import Swal from 'sweetalert2';

import Logo from './Homeimage/Logo.jpeg'
import withReactContent from 'sweetalert2-react-content'


function LogIn(
  {
    jwToken,
    setJWToken,
    btnText ,
    setUsername,
    setRole ,
    setIsLoggedIn,
    role ,
    setBtnText,
    isLoggedIn,
  }
) {
    const history = useNavigate();
    
  const [formData, setFormData] = useState({
    username: "",
    password: "", // State for the Remember Me checkbox
  });
  const MySwal = withReactContent(Swal);
  const handleSubmit = (event) => {
    event.preventDefault();
   
    // TODO: Submit form data to backend
   
    fetch("https://lostandfoundbackend-o0al.onrender.com/lost&found/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);

        localStorage.setItem("jwtToken", data.access_token);
        setIsLoggedIn(true);

        // const username_uppper = toTitleCase(data.username);
        setBtnText(`Logout, ${data.username}`);
        console.log(data.username)
        history("/HomePage")
        let timerInterval;
Swal.fire({
  title: "Login successfull",
  icon: "success",
  timer: 2000,
  didOpen: () => {
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
        
        setFormData({
          username: "",
          password: "",
        });
        setJWToken(data.access_token);
        setRole(data.role)
        setUsername(data.username);
      })
      .catch((response) => {
        console.error("Error:", response.message);
      });


    console.log("Form Data:", formData);
  };

    return (
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
  
              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: '100%' }}>
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px'  , fontSize: '4rem' , fontWeight : 'bolder'}}>Log in</h3>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example18" className="form-control form-control-lg" 
                    onChange={(event) => {
                               setFormData({ ...formData, username: event.target.value });
                          }}
                    />
                    <label className="form-label" htmlFor="form2Example18"  
                   
                    >Username</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example28" className="form-control form-control-lg" 
                    
                    onChange={(event) => {
                      setFormData({ ...formData, password: event.target.value });
                 }}
                    />
                    <label className="form-label" htmlFor="form2Example28">Password</label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" onClick={handleSubmit}>Login</button>
                  </div>
                  <p>Don't have an account?  <Link to="/" >Register Here</Link> </p>
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
    );
  };
  

  

export default LogIn













    // <div className="sign-up-container">
      
    //   <form onSubmit={handleSubmit}>
    //   <h1>Log In</h1>
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="Name"
    //       value={formData.name}
    //       onChange={(event) => {
    //         setFormData({ ...formData, username: event.target.value });
    //       }}
    //     />
      
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       value={formData.password}
    //       onChange={(event) => {
    //         setFormData({ ...formData, password: event.target.value });
    //       }}
    //     />

    //     {/* Remember Me Checkbox
    //     <div className="remember-me">
    //       <input
    //         type="checkbox"
    //         id="rememberMe"
    //         name="rememberMe"
    //         checked={formData.rememberMe}
    //         onChange={handleCheckboxChange}
    //       />
    //       <label htmlFor="rememberMe">Remember Me</label>
    //     </div> */}

    //     <button type="submit">Log in</button>

    //   </form>
    // </div>
 
