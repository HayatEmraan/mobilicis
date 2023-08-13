"use client";
import React, { useContext } from "react";
import CountriesComponent from "./countries";
import { LayerContext } from "@/context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const { createUser, logOut } = useContext(LayerContext);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const middle = e.target;
    const first_name = middle.first_name.value;
    const sur_name = middle.sur_name.value;
    const email = middle.email.value;
    const password = middle.password.value;
    const number = middle.number.value;
    const code = middle.country_code.value;
    if (
      first_name &&
      sur_name &&
      email &&
      password &&
      number.length === 8 &&
      code
    ) {
      createUser(email, password)
        .then((res) => {
          updateProfile(res.user, { displayName: `${first_name} ${sur_name}` })
            .then(() => {
              toast.success("Account created successfully!.");
              logOut();
              return router.push("/login");
            })
            .catch(() => {
              toast.error("Something went wrong!");
            });
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message === "Firebase: Error (auth/email-already-in-use).") {
            toast.error("Email already in use! Try another one.");
          }
          if (
            err.message ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            toast.error("Password should be at least 6 characters.");
          }
        });
    } else {
      toast.error("Please fill all the fields.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="max-w-md w-full mx-auto shadow-lg rounded bg-white relative z-10 p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
        <p className="text-gray-600 mb-4">It's quick and easy.</p>
        <hr className="mb-4 opacity-20" />

        <div className="space-y-2">
          <div className="flex space-x-2">
            {" "}
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
              name="first_name"
              required
            />
            <input
              type="text"
              placeholder="Surname"
              className="input-field"
              name="sur_name"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="input-field"
            name="email"
            required
          />
          <CountriesComponent />
          <input
            type="password"
            placeholder="New password"
            className="input-field"
            name="password"
            required
          />
        </div>

        <p className="text-xs mt-4">
          By clicking Sign Up, you agree to our{" "}
          <a href="#" className="text-blue-500">
            Terms, Data Policy
          </a>{" "}
          and {""}
          <a href="#" className="text-blue-500">
            Cookie
          </a>{" "}
          Policy. You may receive SMS notifications from us and can opt out at
          any time.
        </p>
        <input
          type="submit"
          value="Signup"
          className="submit-btn mt-4 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SignUpPage;
