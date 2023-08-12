import FlowingComponent from "@/components/flowing/flowing";
import InterestComponent from "@/components/interest/interest";
import React from "react";

const ConnectionsPage = () => {
  return (
    <>
      <div className="bg-[#1E2875] py-6 mt-4 rounded-lg mx-1 lg:mx-0">
        <h1 className="text-white text-2xl font-bold mx-4 mb-2">
          My Connections
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-3 ml-4 transition-all duration-300 ease-in-out">
        <FlowingComponent />
        <FlowingComponent />
        <FlowingComponent />
        <FlowingComponent />
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold mx-4 mb-2">
          People you can also connect
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 my-3 ml-4 transition-all duration-300 ease-in-out">
          <InterestComponent />
        </div>
      </div>
    </>
  );
};

export default ConnectionsPage;
