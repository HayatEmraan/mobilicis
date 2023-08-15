"use client";
import { Outfit } from "next/font/google";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import FileInputExample from "../upload/upload";
import PopUpComponent from "../popup/popup";
import AboutPopUp from "../popup/about";
import CertificateComponent from "../popup/certification";
import ExperienceComponent from "../popup/experience";
import EducationComponent from "../popup/education";
import PhoneComponent from "../popup/phone";
import EmailComponent from "../popup/email";
import Cookies from "js-cookie";
import { LayerContext } from "@/context/AuthContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "500",
});
const BannerComponent = () => {
  const [label, setLabel] = useState("");
  const [data, setData] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [isUpdate, setUpdate] = useState(false);
  const { user } = useContext(LayerContext);
  console.log("banner", user);
  useEffect(() => {
    fetch("https://oruphones-lilac.vercel.app/api/v2/user/info", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isUpdate]);
  return (
    <div className={`${outfit.className} relative`}>
      {/* banner background */}
      <div className="bg-[#1E2875] lg:w-[calc(100%-2rem)] w-[calc(100%-0.5rem)] transition-width duration-300 ease-in-out mx-auto h-[219px] flex-shrink-0 rounded-lg mt-6">
        <h2 className={`text-white text-md font-bold p-4`}>MY PROFILE</h2>
      </div>
      {/* about */}
      <div className="lg:w-[calc(100%-9rem)] xl:w-[calc(100%-12rem)] transition-width duration-300 ease-in-out 2xl:w-[calc(100%-14rem)] md:w-[calc(100%-5rem)] w-[calc(100%-3.5rem)] mx-auto bg-white shadow-md rounded-lg p-6 absolute left-0 right-0 z-10 top-24">
        <div className="2xl:grid grid-cols-12 gap-20">
          {/* personal information */}
          <div className="col-span-6 space-y-4">
            <div className="flex justify-between items-center mt-4 p-8">
              <Image
                alt="avatar"
                style={{ borderRadius: "50%", background: "#FFA78D" }}
                src={`${user?.photoURL ? user?.photoURL : "/logo.png"}`}
                width={140}
                height={100}
              />
              <FileInputExample user={user} />
            </div>
            <div className="border p-8 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-[#1f1f1fb3]">Your Name</h1>
                  <h1 className="text-[#222222e6]">
                    {user?.displayName ? user?.displayName : "Unknown"}
                  </h1>
                </div>
                <div className="bg-[#F0EFFA] rounded-xl px-4">
                  <button
                    onClick={() => {
                      setLabel("Your Name");
                      setData(`${user?.displayName}`);
                      window.my_modal_2.showModal();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-[#1f1f1fb3]">Email</h1>
                  <h1 className="text-[#222222e6]">
                    {user?.email ? user?.email : "Unknown"}
                  </h1>
                </div>
                <div className="bg-[#F0EFFA] rounded-xl px-4">
                  <button
                    onClick={() => {
                      setLabel("Email");
                      setData(`${user?.email}`);
                      window.my_modal_10.showModal();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-[#1f1f1fb3]">Phone Number</h1>
                  <h1 className="text-[#222222e6]">
                    {userInfo?.code} {userInfo?.number}
                  </h1>
                </div>
                <div className="bg-[#F0EFFA] rounded-xl px-4">
                  <button
                    onClick={() => {
                      setLabel("Phone Number");
                      window.my_modal_1.showModal();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="border p-8 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-[#222222e6] text-[18px] font-medium">
                  About {user?.displayName?.split(" ")[0]}
                </h1>
                <button
                  onClick={() => {
                    setLabel("About");
                    window.my_modal_3.showModal();
                  }}
                  className="bg-[#F0EFFA] rounded-xl px-4 "
                >
                  {userInfo?.about ? "Edit" : "Add"}
                </button>
              </div>
              <p>{userInfo?.about}</p>
            </div>
            <div className="border p-8 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-[#222222e6] text-[18px] font-medium">
                  Skills
                </h1>
                <h1 className="bg-[#F0EFFA] rounded-xl px-4">Edit</h1>
              </div>
              <div className="grid grid-cols-3">
                <p>Next JS</p>
                <p>Typescript</p>
                <p>Mongodb</p>
              </div>
            </div>
          </div>
          {/* career information */}
          <div className="col-span-6 mt-4 lg:mt-0">
            {/* professional details */}
            <div className="flex items-center justify-between border p-4 rounded-2xl space-y-4">
              <div>
                <h1 className="text-[#222222e6] text-[18px] font-medium">
                  Professional Details
                </h1>
                <p>
                  This are the professional details shown to users in the app.
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 49 49"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M21.7743 12.4921C23.8791 9.97369 24.9315 8.71447 26.1413 8.90842C27.3511 9.10238 27.9171 10.6211 29.049 13.6584L29.3419 14.4442C29.6635 15.3073 29.8244 15.7389 30.1373 16.0568C30.4502 16.3747 30.8798 16.543 31.739 16.8795L32.5212 17.1859C35.5448 18.3701 37.0566 18.9622 37.229 20.1724C37.4014 21.3826 36.1203 22.4095 33.558 24.4632L32.8951 24.9946C32.167 25.5782 31.803 25.87 31.5922 26.2694C31.3815 26.6688 31.3479 27.1306 31.2808 28.0543L31.2197 28.8952C30.9836 32.1455 30.8655 33.7707 29.7623 34.3247C28.659 34.8787 27.3013 33.9946 24.5858 32.2266L23.8833 31.7691C23.1116 31.2667 22.7258 31.0155 22.2826 30.9444C21.8394 30.8734 21.3891 30.9905 20.4884 31.2249L19.6684 31.4382C16.4989 32.2628 14.9142 32.6751 14.0599 31.8073C13.2057 30.9394 13.6477 29.3662 14.5316 26.2197L14.7603 25.4057C15.0115 24.5116 15.1371 24.0645 15.074 23.6212C15.0108 23.1779 14.7661 22.7884 14.2765 22.0096L13.8308 21.3006C12.1081 18.5599 11.2468 17.1895 11.822 16.0992C12.3973 15.0088 14.0282 14.9205 17.2901 14.744L18.1339 14.6983C19.0609 14.6482 19.5243 14.6231 19.9284 14.4201C20.3326 14.2172 20.6316 13.8594 21.2298 13.1437L21.7743 12.4921Z"
                  fill="#2684FC"
                />
                <path
                  d="M29.6469 22.7913C28.0683 20.9025 27.279 19.9581 26.3717 20.1035C25.4643 20.249 25.0398 21.388 24.1909 23.666L23.9712 24.2554C23.73 24.9027 23.6094 25.2264 23.3747 25.4648C23.14 25.7032 22.8178 25.8294 22.1734 26.0818L21.5867 26.3116C19.319 27.1997 18.1852 27.6438 18.0559 28.5515C17.9266 29.4592 18.8874 30.2293 20.8091 31.7696L21.3063 32.1681C21.8524 32.6058 22.1254 32.8247 22.2835 33.1242C22.4415 33.4238 22.4667 33.7702 22.517 34.4629L22.5628 35.0936C22.74 37.5313 22.8285 38.7502 23.6559 39.1657C24.4834 39.5812 25.5017 38.9182 27.5383 37.5921L28.0652 37.2491C28.6439 36.8722 28.9333 36.6838 29.2657 36.6305C29.5981 36.5772 29.9358 36.6651 30.6113 36.8409L31.2263 37.0009C33.6035 37.6193 34.792 37.9285 35.4327 37.2777C36.0734 36.6268 35.7419 35.4469 35.0789 33.087L34.9074 32.4765C34.719 31.8059 34.6248 31.4706 34.6722 31.1381C34.7195 30.8056 34.9031 30.5135 35.2703 29.9294L35.6045 29.3976C36.8965 27.3421 37.5426 26.3144 37.1111 25.4966C36.6796 24.6788 35.4565 24.6126 33.0101 24.4802L32.3772 24.4459C31.682 24.4083 31.3344 24.3895 31.0313 24.2373C30.7282 24.0851 30.5039 23.8167 30.0553 23.28L29.6469 22.7913Z"
                  fill="#413B89"
                />
              </svg>
            </div>
            {/* certifications */}
            <div>
              <div className="flex justify-between items-center my-4">
                <h1 className="text-[#222222e6] text-[18px] font-medium">
                  Certifications
                </h1>
                <h1
                  onClick={() => {
                    setLabel("Certifications");
                    window.my_modal_5.showModal();
                  }}
                  className="bg-[#F0EFFA] rounded-xl px-4 cursor-pointer"
                >
                  {userInfo?.certification ? "Edit" : "Add"}
                </h1>
              </div>
              {userInfo?.certification && (
                <div className="border px-6 rounded-3xl py-2 flex items-center justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="39"
                    viewBox="0 0 23 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.619 0.543534C12.2981 -0.181177 10.7019 -0.181178 9.38097 0.543533L2.30732 4.42453C0.885008 5.20489 0 6.70473 0 8.33479V15.6652C0 17.2953 0.885006 18.7951 2.30732 19.5755L9.38097 23.4565C10.7019 24.1812 12.2981 24.1812 13.619 23.4565L20.6927 19.5755C22.115 18.7951 23 17.2953 23 15.6652V8.33479C23 6.70473 22.115 5.20489 20.6927 4.42453L13.619 0.543534ZM11.5003 7.54622C11.0812 7.54622 10.8009 8.05223 10.2402 9.06425L10.0951 9.32607C9.93582 9.61365 9.85616 9.75744 9.73195 9.85231C9.60774 9.94719 9.45305 9.98241 9.14366 10.0528L8.86199 10.117C7.77325 10.3648 7.22888 10.4888 7.09937 10.9078C6.96985 11.3269 7.34097 11.7636 8.0832 12.6369L8.27523 12.8628C8.48615 13.111 8.5916 13.2351 8.63905 13.3886C8.68649 13.5421 8.67055 13.7077 8.63866 14.0388L8.60963 14.3402C8.49741 15.5054 8.4413 16.088 8.78038 16.347C9.11945 16.606 9.62914 16.3699 10.6485 15.8976L10.9123 15.7754C11.2019 15.6412 11.3468 15.5741 11.5003 15.5741C11.6538 15.5741 11.7987 15.6412 12.0883 15.7754L12.3521 15.8976C13.3715 16.3699 13.8812 16.606 14.2202 16.347C14.5593 16.088 14.5032 15.5054 14.391 14.3402L14.3619 14.0388C14.3301 13.7077 14.3141 13.5421 14.3616 13.3886C14.409 13.2351 14.5145 13.111 14.7254 12.8628L14.9174 12.6369C15.6596 11.7636 16.0308 11.3269 15.9012 10.9078C15.7717 10.4888 15.2274 10.3648 14.1386 10.117L13.8569 10.0528C13.5476 9.98241 13.3929 9.94719 13.2687 9.85231C13.1444 9.75744 13.0648 9.61365 12.9055 9.32606L12.7604 9.06425C12.1997 8.05223 11.9194 7.54622 11.5003 7.54622Z"
                      fill="#FFCE10"
                    />
                  </svg>
                  <div className="flex flex-col -space-y-1">
                    <h1>{userInfo?.certification?.course}</h1>
                    <h1>{userInfo?.certification?.institute}</h1>
                  </div>
                </div>
              )}
            </div>
            {/* experience */}
            <div>
              <div className="flex justify-between items-center my-4">
                <h1 className="text-[#222222e6] text-[18px] font-medium">
                  {" "}
                  Experience
                </h1>
                <h1
                  onClick={() => {
                    setLabel("Experience");
                    window.my_modal_6.showModal();
                  }}
                  className="bg-[#F0EFFA] rounded-xl px-4 cursor-pointer"
                >
                  {userInfo?.experience ? "Edit" : "Add"}
                </h1>
              </div>
              {userInfo?.experience && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center border p-2 rounded-xl space-y-4">
                    <div>
                      <div className="flex gap-4">
                        <h1>
                          {userInfo?.experience?.start -
                            userInfo?.experience?.end}{" "}
                          Years ({userInfo?.experience?.start}-
                          {userInfo?.experience?.end})
                        </h1>
                        <h1>{userInfo?.experience?.type}</h1>
                      </div>
                      <div className="flex gap-4">
                        <h1>{userInfo?.experience?.company}</h1>
                        <h1> -- {userInfo?.experience?.position}</h1>
                      </div>
                    </div>
                    <Image
                      src={
                        userInfo?.experience?.logo
                          ? userInfo?.experience?.logo
                          : "/company.png"
                      }
                      alt="google"
                      width={70}
                      height={50}
                    />
                  </div>
                </div>
              )}
            </div>
            {/* education */}
            <div>
              <div className="flex justify-between items-center my-4">
                <h1 className="text-[#222222e6] font-medium text-[18px]">
                  Education
                </h1>
                <h1
                  onClick={() => {
                    setLabel("Education");
                    window.my_modal_7.showModal();
                  }}
                  className="bg-[#F0EFFA] rounded-xl px-4 cursor-pointer"
                >
                  {userInfo?.education ? "Edit" : "Add"}
                </h1>
              </div>
              {userInfo?.education && (
                <div className="border p-4 rounded-xl space-y-4">
                  <h1>{userInfo?.education?.institute}</h1>
                  <div className="flex justify-between items-center">
                    <h1>
                      ({userInfo?.education?.start}-{userInfo?.education?.end})
                    </h1>
                    <h1>{userInfo?.education?.degree}</h1>
                  </div>
                  <p>{userInfo?.education?.about}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {
        <PopUpComponent
          label={label}
          data={data}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      }
      {
        <PhoneComponent
          label={label}
          data={data}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      }
      {
        <AboutPopUp
          label={label}
          data={data}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      }
      {
        <CertificateComponent
          label={label}
          data={data}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      }
      {
        <ExperienceComponent
          label={label}
          data={data}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      }
      {
        <EducationComponent
          label={label}
          data={data}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      }
      {
        <EmailComponent
          label={label}
          data={data}
          isUpdate={isUpdate}
          setUpdate={setUpdate}
        />
      }
    </div>
  );
};

export default BannerComponent;
