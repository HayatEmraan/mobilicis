"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ExperienceComponent = ({
  label,
  isUpdate,
  setUpdate,
  experienceData,
}) => {
  const [startYear, setStart] = useState([]);
  const router = useRouter();
  useEffect(() => {
    for (let i = 2000; i < 2023; i++) {
      setStart((prev) => [...prev, i]);
    }
  }, []);

  const typeJob = [
    {
      name: "Full Time",
      value: "Full Time",
    },
    {
      name: "Internship",
      value: "Internship",
    },
    {
      name: "Remote",
      value: "Remote",
    },
    {
      name: "Onsite",
      value: "Onsite",
    },
    {
      name: "Hybrid",
      value: "Hybrid",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const middle = e.target;
    const company = middle.company_name.value;
    const type = middle.type.value;
    const start = middle.start.value;
    const end = middle.end.value;
    const position = middle.position_name.value;
    const company_logo = middle.company_logo.files[0];
    const form = new FormData();
    form.append("file", company_logo);
    form.append("upload_preset", "vflnndvq");
    fetch("https://api.cloudinary.com/v1_1/dkozp31ij/image/upload", {
      method: "post",
      body: form,
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("https://oruphones-lilac.vercel.app/api/v2/user/experience", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${Cookies.get("ast")}`,
          },
          body: JSON.stringify({
            company,
            type,
            start,
            end,
            position,
            logo: data.secure_url,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setUpdate(!isUpdate);
            toast.success("Experience updated successfully!");
            my_modal_6.close();
            router.refresh();
          })
          .catch(() => toast.error("Something went wrong!"));
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <dialog id="my_modal_6" className="modal">
      <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <div className="mt-3">
            <label htmlFor="company_name">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              required=""
              id="company_name"
              defaultValue={experienceData?.company}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="company_logo">Company Logo</label>
            <input
              className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              type="file"
              required=""
              name="company_logo"
              id="company_logo"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="mt-3">
            <label htmlFor="type">Job Type</label>
            <select
              className="w-full border ml-0 mt-0 py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              defaultValue={experienceData?.type}
              name="type"
              id="type"
            >
              {typeJob?.map((item, index) => {
                return (
                  <option
                    selected={experienceData?.type == item.value ? true : false}
                    key={index}
                    value={item.value}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="position_name">Position</label>
            <input
              type="text"
              placeholder="Position Name"
              className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              required=""
              name="position_name"
              id="position_name"
              defaultValue={experienceData?.position}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="mt-3">
            <label htmlFor="company_name">Start Date : </label>
            <select
              className="border ml-0 mt-0 py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              defaultValue={experienceData?.start}
              name="start"
            >
              {startYear?.map((item, index) => {
                return (
                  <option
                    key={index}
                    selected={experienceData?.start == item ? true : false}
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="end_date">End Date : </label>
            <select
              className="border ml-0 mt-0 py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              defaultValue={experienceData?.end}
              id="end_date"
              name="end"
            >
              {startYear?.map((item, index) => {
                return (
                  <option
                    key={index}
                    selected={experienceData?.end == item ? true : false}
                    value={item}
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn">Update</button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ExperienceComponent;
