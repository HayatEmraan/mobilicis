"use client";
import { Outfit } from "next/font/google";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const outfit = Outfit({
  subsets: ["latin"],
  weight: "500",
});

const nav = [
  {
    path: "/profile",
    name: "My Profile",
  },
  {
    path: "/connections",
    name: "My Connections",
  },
];
const AsideComponent = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex flex-col gap-4">
        <h1
          className={`${outfit.className} dashboard flex items-center gap-2 text-2xl`}
        >
          Dashboard
        </h1>
        {nav.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex items-center gap-4 text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M6.11108 10.7778L9.66664 7.22223L6.11108 3.66667"
                stroke="#9197B3"
                stroke-width="1.77778"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h1
              className={
                pathname === item.path
                  ? "border border-black rounded-lg p-1.5 w-fit px-4"
                  : "p-1.5 w-fit px-4"
              }
            >
              {item.name}
            </h1>
          </Link>
        ))}
        <button
          className={`${outfit.className} absolute bottom-8 left-0 right-0`}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AsideComponent;
