import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  // Declare states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  // When user clicks on Submit in SignUp,
  // 1. we will call Register method and send all user details
  // 2. When we recive the response, we will then
  //     a. Navigate to homepage
  //     b. Update the local storage
  let onSubmit = () => {
    console.log("Submit clicked");
    console.log(name, email, password);
    // Send a POST request
    axios({
      method: "post",
      url: "http://localhost:5000/register",
      data: {
        name: name,
        email: email,
        password: password,
      },
    }).then((data) => {
      navigate("/");
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.data));
    });
  };

  return (
    <div className="userdetails">
      <input
        className="inputbox"
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        className="inputbox"
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        className="inputbox"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="appbutton" onClick={onSubmit}>
        SignUp
      </button>
    </div>
  );
};

export default SignupPage;
