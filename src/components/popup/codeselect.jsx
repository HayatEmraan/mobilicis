import React, { useEffect, useState } from "react";

const CodeSelect = ({ countryCode: codeCountry }) => {
  const [countryCode, setCountryCode] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountryCode(data);
      });
  }, []);
  return (
    <>
      {countryCode.map((item, index) => {
        return (
          <option
            selected={codeCountry === item.dial_code ? true : false}
            value={item.dial_code}
            key={index}
          >
            {item.dial_code} ({item.name})
          </option>
        );
      })}
    </>
  );
};

export default CodeSelect;
