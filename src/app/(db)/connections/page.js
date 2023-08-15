"use client";
import FlowingComponent from "@/components/flowing/flowing";
import InterestComponent from "@/components/interest/interest";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

const ConnectionsPage = () => {
  const [interest, setInterest] = React.useState([]);
  const [connected, setConnected] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  useEffect(() => {
    fetch("https://oruphones-lilac.vercel.app/api/v2/users/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setInterest(data.users);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  }, [update]);

  useEffect(() => {
    fetch("https://oruphones-lilac.vercel.app/api/v2/users/connected", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setConnected(data.users);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  }, [update]);

  const handleConnect = (id) => {
    fetch(`https://oruphones-lilac.vercel.app/api/v2/user/connect/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Connected successfully!");
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
      });
  };
  const handleDelete = (id) => {
    fetch(`https://oruphones-lilac.vercel.app/api/v2/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Disconnected successfully!");
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
      });
  };

  return (
    <>
      <div className="bg-[#1E2875] py-6 mt-4 rounded-lg mx-1 lg:mx-0">
        <h1 className="text-white text-2xl font-bold mx-4 mb-2">
          My Connections
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-3 ml-4 transition-all duration-300 ease-in-out">
        <FlowingComponent connected={connected} handleDelete={handleDelete} />
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold mx-4 mb-2">
          People you can also connect
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-3 ml-4 transition-all duration-300 ease-in-out">
          <InterestComponent
            interest={interest}
            handleConnect={handleConnect}
          />
        </div>
      </div>
    </>
  );
};

export default ConnectionsPage;
