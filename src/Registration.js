import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios
      .post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister", {
        email,
        password,
        name,
        mobile,
      })
      .then((e) => {
        console.log(e);
        alert("Registration Successful!");
      })
      .catch((err) => {
        if (!err?.response) {
          alert("No server response");
        } else if (err.response?.status === 400) {
          alert("Some of the fields are missing or incorrect");
        } else if (err.response?.status === 402) {
          alert("User already exist with the given email id");
        }
      });
    setEmail("");
    setPassword("");
    setName("");
    setMobile("");
  };
  return (
    <div className="form-cont">
      <form
        style={{ paddingTop: "10px" }}
        className="form-g"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mobile</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            aria-describedby="emailHelp"
            placeholder="Mobile No.   "
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
        <span className="al-u">Already a User ?</span>
        <Link to="/login">login</Link>
      </form>
    </div>
  );
};

export default Registration;
