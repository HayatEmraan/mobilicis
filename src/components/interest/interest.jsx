import Image from "next/image";
import React from "react";

const InterestComponent = ({ interest, handleConnect }) => {
  return (
    <>
      {interest?.map((person) => (
        <div className="border p-4 rounded-lg" key={person._id}>
          <div className="flex justify-between items-center mt-2">
            <div>
              <h1>{person?.first_name}</h1>
              <h1>{person?.experience?.position}</h1>
              <h1>
                {person?.experience?.company &&
                  "@ " + person?.experience?.company}
              </h1>
            </div>
            <Image
              style={{ borderRadius: "50%", background: "#FFA78D" }}
              src={person?.image ? person?.image : "/logo.png"}
              width={140}
              height={100}
            />
          </div>
          <button
            className="bg-[#BAB6EB] rounded-md px-2"
            onClick={() => handleConnect(person._id)}
          >
            Connect
          </button>
        </div>
      ))}
    </>
  );
};

export default InterestComponent;
