"use client";
import React, { useState } from "react";
import SelectComponent from "./select";

const CountriesComponent = () => {
  const [countryCode, setCountryCode] = useState("+1");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };
  return (
    <div className="rounded-lg">
      <div className="flex justify-between items-center gap-2">
        <select
          className="input-field"
          value={countryCode}
          onChange={handleCountryCodeChange}
          name="country_code"
          id="all"
        >
          <SelectComponent />
        </select>
        <input
          className="input-field"
          type="tel"
          placeholder="Phone Number"
          id="all"
          name="number"
          required=""
        />
      </div>
    </div>
  );
};

export default CountriesComponent;
