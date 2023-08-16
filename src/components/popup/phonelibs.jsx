"use client";
import React, { useEffect, useState } from "react";
import CodeSelect from "./codeselect";

const PhoneLibs = ({ phone }) => {
  const [countryCode, setCountryCode] = useState(phone?.code);

  return (
    <div className="rounded-lg mt-4">
      <div className="flex justify-between items-center gap-2" id="">
        <select
          className="border rounded w-full p-2"
          value={countryCode}
          disabled
          name="country_code"
        >
          <CodeSelect countryCode={countryCode} />
        </select>
        <input
          type="tel"
          className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
          placeholder="123-456-7890"
          pattern="[0-9]*"
          min={8}
          max={12}
          id="all1"
          defaultValue={phone?.number}
          name="number"
          required=""
        />
      </div>
    </div>
  );
};

export default PhoneLibs;
