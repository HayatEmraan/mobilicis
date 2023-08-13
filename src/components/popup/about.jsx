import React from "react";

const AboutPopUp = ({ label, data }) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box">
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div>
          <textarea
            placeholder="about yourself"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            required=""
            defaultValue={data}
          />
        </div>
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

export default AboutPopUp;
