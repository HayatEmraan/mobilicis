"use client";
import React, { useState } from "react";
import SelectComponent from "./select";

const CountriesComponent = () => {
  const [countryCode, setCountryCode] = useState("+1");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };
  return (
    <div className="rounded-lg mt-1">
      <div
        className="flex justify-between items-center gap-2 "
        id="mobile-input"
      >
        <select
          className="border rounded w-full p-2"
          value={countryCode}
          onChange={handleCountryCodeChange}
          name="country_code"
        >
          <SelectComponent />
        </select>
        <input
          type="password"
          placeholder="Phone Number"
          id="all1"
          name="number"
          required=""
        />
      </div>
    </div>
  );
};

export default CountriesComponent;
