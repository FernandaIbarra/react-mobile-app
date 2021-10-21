import React from 'react';
import axios from "axios";
import './Login.scss'
import {useState} from 'react';


function Login (props){

  const[username, setusername]=useState("");
  const[password, setpassword]=useState("");
  const[error, setError]=useState("");

  function handleSubmit(event){
    event.preventDefault();
    const baseURL = "https://three-points.herokuapp.com/api/login";
    axios.post(baseURL,{username, password})
    .then((response) => {
      if(response.status === 200){
        localStorage.setItem("userId", response.data.id)
        props.onLoginComplete();
        window.location.replace(`/`);
      }else{
        setError("invalid username or password")
      }
    })
    .catch((reason) => {
      setError("invalid username or password");
    })
  }

  function handleUsernameChange(event){
    setusername(event.target.value)
  }
  function handlePasswordChange(event){
    setpassword(event.target.value)
  }

    return (
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          {error &&
            <label className="error-message">{error}</label>
          }
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              className="form-control input-user" 
              id="username" 
              placeholder="Username" 
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className="form-control input-user" 
              id="password" 
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-outline-info login-btn">Login</button>
        </form>
      </div>
    );
  
}

export default Login; 