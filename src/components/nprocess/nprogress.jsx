"use client";
import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgressComponent = () => {
  return (
    <ProgressBar
      height="4px"
      color="#401c2c"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default NProgressComponent;
