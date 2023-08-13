"use client";
import React, { useEffect, useState } from "react";

const ExperienceComponent = ({ label, data }) => {
  const [type, setType] = useState("Remote");
  const [start, setStart] = useState([]);
  const [startJob, setStartJob] = useState([2000]);
  const [endJob, setEndJob] = useState([2023]);
  useEffect(() => {
    for (let i = 2000; i < 2023; i++) {
      setStart((prev) => [...prev, i]);
    }
  }, []);
  return (
    <dialog id="my_modal_6" className="modal">
      <form method="dialog" className="modal-box">
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
              defaultValue={data}
            />
          </div>

          <div className="mt-3">
            <label htmlFor="company_name">Company Logo</label>
            <input
              className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              type="file"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="mt-3">
            <label htmlFor="company_name">Job Type</label>
            <select
              className="w-full border ml-0 mt-0 py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              value={type}
              onChange={(e) => setType(e.target.value)}
              name="type"
            >
              <option value={"Remote"}>Remote</option>
              <option value={"Onsite"}>Onsite</option>
              <option value={"Hybrid"}>Hybrid</option>
              <option value={"Full-time"}>Full time</option>
            </select>
          </div>
          <div className="mt-3">
            <label htmlFor="position_name">Position</label>
            <input
              type="text"
              placeholder="Position Name"
              className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              required=""
              id="position_name"
              defaultValue={data}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="mt-3">
            <label htmlFor="company_name">Start Date : </label>
            <select
              className="border ml-0 mt-0 py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
              value={startJob}
              onChange={(e) => setStartJob(e.target.value)}
              name="start"
            >
              {start.map((item, index) => {
                return (
                  <option key={index} value={item}>
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
              value={endJob}
              defaultValue={2023}
              id="end_date"
              onChange={(e) => setEndJob(e.target.value)}
              name="end"
            >
              {start.map((item, index) => {
                return (
                  <option key={index} value={item}>
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
