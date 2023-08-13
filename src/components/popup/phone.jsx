import CountriesComponent from "@/app/signup/countries";
import React from "react";
import PhoneLibs from "./phonelibs";

const PhoneComponent = ({ label }) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box">
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <PhoneLibs />
        <div className="flex justify-end mt-4">
          <button className="btn">Update</button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default PhoneComponent;
