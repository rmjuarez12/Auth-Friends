// Import modules
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Import Utils
import axiosWithAuth from "../utils/axiosWithAuth";

function Login(props) {
  //* Initial state of the data
  const initalFormState = {
    username: "",
    password: "",
  };

  //* State that will hold the form data
  const [loginInfo, setLoginInfo] = useState(initalFormState);

  //* State for when form is submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  //* Handle the form fields change
  const handleChange = (e) => {
    const changedData = { ...loginInfo, [e.target.name]: e.target.value };

    setLoginInfo(changedData);
  };

  //* Handle form submission
  const handleSubmission = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      axiosWithAuth()
        .post("/login", loginInfo)
        .then((res) => {
          localStorage.setItem("token", res.data.payload);
          setIsSubmitting(false);
          props.userLoggedIn(false);
          props.history.push("/friends");
        })
        .catch((err) => {
          console.log(err);
          setIsSubmitting(false);
        });
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          name='username'
          value={loginInfo.username}
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          value={loginInfo.password}
          onChange={handleChange}
        />

        <button disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  );
}

export default withRouter(Login);
