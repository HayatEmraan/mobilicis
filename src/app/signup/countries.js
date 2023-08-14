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
          placeholder="123-456-7890"
          pattern="[0-9]*"
          min={8}
          max={12}
          id="all"
          name="number"
          required=""
        />
      </div>
    </div>
  );
};

export default CountriesComponent;
