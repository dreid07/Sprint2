import React, { useState } from "react";
import Header from "../../components/header/header"
import "./login.css";
import useLocalStorage from "../../components/useLocalStorage";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "johndoe",
      password: "johnny",
    },
    {
      username: "janedoe",
      password: "janey",
    },
  ];

  let [value, setValue] = useLocalStorage('name','');

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  return (
    <div className="Login">
      <Header title="KeepSocial"/>
      {isSubmitted ? <meta http-equiv="Refresh" content="0; url='/Feed'" /> :
    
    <div className="loginContainer">
      <form classname="loginForm" onSubmit={handleSubmit}>
        <label className="loginLabel" htmlFor="email">username</label>
        <input 
          className="loginInput"
          type="text"
          id="uname"
          name="uname"
          placeholder="username"
          required
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        {renderErrorMessage("uname")}
        <br />
        <label className="loginLabel" htmlFor="password">password</label>
        <input className="loginInput" type="password" name="pass" placeholder="***********" required />
        {renderErrorMessage("pass")}
        <br />
        <button className="loginButton" type="submit">
          <strong>Log In</strong>
        </button>
        <a href="/SignUp" className="signUp">Don't have an account? Sign Up!</a>
      </form>
    </div>
  }</div>
  )
}

export default Login;