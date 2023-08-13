"use client";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  const handleLogIn = (e) => {
    e.preventDefault();
    const middle = e.target;
    const email = middle.email.value;
    const password = middle.password.value;
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-8">
        <div className="text-center">
          <h1 className="text-blue-500 text-4xl font-semibold mb-2">
            Mobilicis
          </h1>
          <p className="text-xl">
            Connect with developer and create portfolio on Mobilicis.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleLogIn}>
          <input
            type="email"
            placeholder="Email or phone number"
            required
            name="email"
            className="h-14 w-full border border-gray-300 rounded px-4"
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            className="h-14 w-full border border-gray-300 rounded px-4"
          />
          <div className="space-y-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded font-semibold transition hover:bg-blue-600"
            >
              Login
            </button>
            <a
              href="#"
              className="text-blue-500 text-sm font-semibold hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-center">
            <Link
              href="/signup"
              className="text-white bg-green-500 rounded py-3 px-4 font-semibold text-xl hover:bg-green-600"
            >
              Create new account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
