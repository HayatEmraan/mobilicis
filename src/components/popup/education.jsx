"use client";
import React, { useEffect, useState } from "react";

const EducationComponent = ({ label, data }) => {
  const [type, setType] = useState("Remote");
  const [start, setStart] = useState([]);
  const [startJob, setStartJob] = useState([2000]);
  const [endJob, setEndJob] = useState([2023]);
  useEffect(() => {
    for (let i = 2000; i < 2023; i++) {
      setStart((prev) => [...prev, i]);
    }
  }, []);

  const [degree, setDegree] = useState("");
  const Degree = () => [
    {
      name: "Master",
      value: "Master",
    },
    {
      name: "Bachelor",
      value: "Bachelor",
    },
    {
      name: "PhD",
      value: "PhD",
    },
    {
      name: "Diploma",
      value: "Diploma",
    },
    {
      name: "B.Tech",
      value: "B.Tech",
    },
  ];
  return (
    <dialog id="my_modal_7" className="modal">
      <form method="dialog" className="modal-box">
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div className="mt-3">
          <label htmlFor="institute_name">Institute Name</label>
          <input
            type="text"
            placeholder="Institute Name"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            required=""
            id="institute_name"
            defaultValue={data}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="company_name">Degree / Certification</label>
          <select
            className="w-full border ml-0 mt-0 py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            name="type"
          >
            {Degree().map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              );
            })}
            {/* <option value={"Remote"}>Remote</option> */}
          </select>
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
        <div className="mt-3">
          <label htmlFor="course_name">About Education</label>
          <textarea
            placeholder="about education"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            required=""
            defaultValue={data}
          />
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

export default EducationComponent;
