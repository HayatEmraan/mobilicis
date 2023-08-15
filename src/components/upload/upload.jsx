"use client";
import { updateProfile } from "firebase/auth";
import React from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const FileInputExample = ({ user }) => {
  const router = useRouter();
  const handleFileChange = (event) => {
    console.log(event.target.files[0]);
    const form = new FormData();
    form.append("file", event.target.files[0]);
    form.append("upload_preset", "vflnndvq");
    fetch("https://api.cloudinary.com/v1_1/dkozp31ij/image/upload", {
      method: "post",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        updateProfile(user, {
          photoURL: data.secure_url,
        })
          .then(() => {
            fetch("https://oruphones-lilac.vercel.app/api/v2/user/image", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${Cookies.get("ast")}`,
              },
              body: JSON.stringify({
                image: data.secure_url,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                toast.success("Photo uploaded successfully!");
                router.refresh();
              })
              .catch(() => {
                toast.error("Something went wrong!");
              });
          })
          .catch(() => {
            toast.error("Something went wrong!");
          });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <input
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
        id="photoInput"
      />
      <label
        htmlFor="photoInput"
        className="bg-[#F0EFFA] rounded-xl px-4 py-2 cursor-pointer hover:bg-gray-200 transition"
      >
        {user?.image ? "Change Photo" : "Upload Photo"}
      </label>
    </div>
  );
};

export default FileInputExample;
