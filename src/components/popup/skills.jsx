"use client";
import React from "react";
import CreatableSelect from "react-select/creatable";
const SkillsComponent = ({ setSkillsData }) => {
  const skillsOptions = [
    { value: "Next JS", label: "Next JS", color: "#00B8D9", isFixed: true },
    { value: "Vue JS", label: "Vue JS", color: "#0052CC", isDisabled: true },
    { value: "React JS", label: "React JS", color: "#5243AA" },
    { value: "HTML", label: "HTML", color: "#FF5630", isFixed: true },
    { value: "CSS", label: "CSS", color: "#FF8B00" },
    { value: "JavaScript", label: "JavaScript", color: "#FFC400" },
    { value: "TypeScript", label: "TypeScript", color: "#36B37E" },
    ];

  return (
    <>
      <CreatableSelect
        isMulti
        isClearable
        name="colors"
        onChange={setSkillsData}
        options={skillsOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </>
  );
};

export default SkillsComponent;
