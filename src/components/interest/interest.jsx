import Image from "next/image";
import React from "react";

const InterestComponent = () => {
  return (
    <div className="border p-4 rounded-lg">
      <div className="flex justify-between items-center mt-2">
        <div>
          <h1>Vishnu Swaroop</h1>
          <h1>Full Stack Developer</h1>
          <h1>@ Oruphones</h1>
        </div>
        <Image
          style={{ borderRadius: "50%", background: "#FFA78D" }}
          src="/logo.png"
          width={140}
          height={100}
        />
      </div>
      <button className="bg-[#1f1f1fcc] rounded-md px-2">Connect</button>
    </div>
  );
};

export default InterestComponent;
