"use client";
import { LayerContext } from "@/context/AuthContext";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const LoginPage = () => {
  const { signIn } = useContext(LayerContext);
  const router = useRouter();
  const handleLogIn = (e) => {
    e.preventDefault();
    const middle = e.target;
    const email = middle.email.value;
    const password = middle.password.value;
    if (email && password) {
      signIn(email, password)
        .then((res) => {
          if (res) {
            fetch("https://oruphones-lilac.vercel.app/api/v2/jwt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${email}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                const expiration = new Date();
                expiration.setTime(expiration.getTime() + 6 * 60 * 60 * 1000); // 6 hours from now
                Cookies.set("ast", data.token, {
                  expires: expiration,
                  secure: true,
                  sameSite: "strict",
                });
              });
          }
          toast.success("Logged in successfully!");
          return router.push("/");
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message === "Firebase: Error (auth/user-not-found).") {
            toast.error("Wrong password / email combination!");
          }
        });
    }
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
