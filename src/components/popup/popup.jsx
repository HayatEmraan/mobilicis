import React from "react";

const PopUpComponent = ({ label, data, setLabel }) => {
  const handleSubmit = (e) => {};
  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box">
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div>
          <input
            type="text"
            placeholder="Name"
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

export default PopUpComponent;
