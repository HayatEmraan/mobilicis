"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const NavbarComponent = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="border-b-[#CECECE] border-b flex justify-end">
      <div
        className={`${poppins.className} flex items-center gap-4 my-4 mx-8 relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1223 20.8458C11.6525 21.4364 12.3332 21.7608 13.0395 21.7608H13.0405C13.7498 21.7608 14.4336 21.4364 14.9648 20.8447C15.2494 20.5305 15.7345 20.5049 16.0488 20.7884C16.364 21.072 16.3896 21.5582 16.1061 21.8724C15.279 22.7905 14.191 23.2962 13.0405 23.2962H13.0384C11.891 23.2952 10.805 22.7895 9.98105 21.8714C9.69752 21.5571 9.72311 21.071 10.0384 20.7884C10.3536 20.5039 10.8388 20.5295 11.1223 20.8458ZM13.0904 1.28946C17.6402 1.28946 20.6966 4.83306 20.6966 8.14225C20.6966 9.84445 21.1296 10.5661 21.5891 11.3317C22.0436 12.0871 22.5585 12.9448 22.5585 14.5662C22.2012 18.7086 17.8767 19.0463 13.0904 19.0463C8.30424 19.0463 3.97863 18.7086 3.62549 14.6317C3.62243 12.9448 4.13729 12.0871 4.59175 11.3317L4.75219 11.0616C5.14722 10.3827 5.4843 9.64419 5.4843 8.14225C5.4843 4.83306 8.54068 1.28946 13.0904 1.28946ZM13.0904 2.82481C9.51307 2.82481 7.01966 5.62734 7.01966 8.14225C7.01966 10.2703 6.42906 11.2539 5.90704 12.1219C5.4884 12.8189 5.15778 13.3696 5.15778 14.5662C5.32872 16.4966 6.60306 17.511 13.0904 17.511C19.542 17.511 20.8563 16.4516 21.0262 14.4996C21.0231 13.3696 20.6925 12.8189 20.2739 12.1219C19.7518 11.2539 19.1612 10.2703 19.1612 8.14225C19.1612 5.62734 16.6678 2.82481 13.0904 2.82481Z"
            fill="#1E2875"
          />
        </svg>
        <div
          onClick={() => setOpen(!isOpen)}
          className="flex items-center gap-4 lg:dashboard cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Image
              alt="avatar"
              style={{ borderRadius: "50%", background: "#FFA78D" }}
              src="/logo.png"
              width={40}
              height={40}
            />
            <div className="-space-y-2 hidden lg:block">
              <small className="text-[10.5px]">Welcome back,</small>
              <h1 className="text-[16px]">Vishnu Swaroop</h1>
            </div>
          </div>
          <div className="hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
            >
              <path
                d="M5.37634 8.42388C5.64888 8.15134 6.07536 8.12656 6.37589 8.34955L6.462 8.42388L13.0841 15.0457L19.7063 8.42388C19.9788 8.15134 20.4053 8.12656 20.7059 8.34955L20.792 8.42388C21.0645 8.69643 21.0893 9.12291 20.8663 9.42344L20.792 9.50954L13.627 16.6745C13.3544 16.9471 12.928 16.9718 12.6274 16.7489L12.5413 16.6745L5.37634 9.50954C5.07654 9.20975 5.07654 8.72368 5.37634 8.42388Z"
                fill="#1E2875"
              />
            </svg>
          </div>
        </div>
        <div>
          {isOpen && (
            <div
              className={`absolute lg:-bottom-32 z-30 ${
                isOpen && "top-16 right-0"
              } lg:right-0 border p-1 shadow-md rounded-md px-2 opacity-100 bg-[#FFFFFF]`}
            >
              <div>
                <div className="mt-2 hover:bg-[#FFE699]">
                  <Link
                    href="/settings"
                    className="border border-[#ffc000] uppercase font-semibold px-8 py-2 rounded-md flex items-center gap-3"
                  >
                    Settings
                  </Link>
                </div>
                <div className="uppercase flex mt-4 items-center gap-2">
                  <CiLogout size={20}></CiLogout>
                  Log Out
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
