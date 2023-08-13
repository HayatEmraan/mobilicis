"use client";
import React, { useState } from "react";

const FileInputExample = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
        {selectedFile ? "Change Photo" : "Upload Photo"}
      </label>
    </div>
  );
};

export default FileInputExample;
