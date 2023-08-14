import Cookies from "js-cookie";
import { app } from "@/fb/fb.config";
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const LayerContext = createContext(null);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        if (user) {
          fetch("http://localhost:5000/api/v2/jwt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
            }),
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
              console.log(data);
            });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <LayerContext.Provider value={authInfo}>{children}</LayerContext.Provider>
  );
};

export default AuthContext;
