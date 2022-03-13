import React, { useState, useContext } from "react";
import axios from "../src/api/axios";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "https://ttmg-backend.herokuapp.com/api/auth/staffLogin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        alert("Login Successful");
        window.location.href = "log-s.html";
      })
      .catch(function (err) {
        if (!err?.response) {
          alert("No Server Response");
        } else if (err.response?.status === 400) {
          alert("Email/password is missing");
        } else if (err.response?.status === 401) {
          alert("Email or password is incorrect");
        }
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="form-cont">
      <form className="form-g" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            backgroundColor: "#053d48",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          Submit
        </button>
        <br />
        <br />
        <span className="al-u">Don't have an account ?</span>
        <Link to="/">SignUp</Link>
      </form>
    </div>
  );
};

export default Login;
