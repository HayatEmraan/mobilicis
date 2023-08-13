"use client"
import React from "react";
import CountriesComponent from "./countries";

const SignUpPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const middle = e.target;
    const first_name = middle.first_name.value;
    const sure_name = middle.sure_name.value;
    const email = middle.email.value;
    const password = middle.password.value;
    const number = middle.number.value;
    const code = middle.country_code.value;
    console.log(first_name, sure_name, email, password, number, code);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="form-signup">
        <h2 className="first_title">Sign Up</h2>
        <p className="first_sub_title" id="sub_title">
          It's quick and easy.
        </p>
        <hr />
        {/*Input section start*/}
        <div className="input">
          <input
            type="text"
            placeholder="First Name"
            className="first_name"
            id="all"
            name="first_name"
            required=""
          />
          <input
            type="text"
            placeholder="Sure Name"
            className="sure_name"
            id="all"
            required=""
            name="sure_name"
          />
          <br />
          <input
            type="email"
            placeholder="Email address"
            id="all1"
            required=""
            name="email"
          />
          <br />
          <input
            type="password"
            placeholder="New password"
            id="all1"
            required=""
            name="password"
          />
          <br />
        </div>
        <CountriesComponent />
        {/*Input section end*/}
        <br />
        <br />
        <p className="sub_title_4">
          By clicking Sign Up, you agree to our{" "}
          <a href="#"> Terms, Data Policy</a> and
          <a href="">Cookie</a>
          Policy. You may receive SMS notifications from us and can opt out at
          any time.
        </p>
        <input type="submit" defaultValue="Signup" className="submit" />
      </form>
    </div>
  );
};

export default SignUpPage;
