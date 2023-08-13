import React from "react";

const CertificateComponent = ({ label, data }) => {
  return (
    <dialog id="my_modal_5" className="modal">
      <form method="dialog" className="modal-box">
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div>
          <label htmlFor="course_name">Course Name</label>
          <input
            type="text"
            placeholder="Course Name"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            required=""
            id="course_name"
            defaultValue={data}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="institute_name">Institute Name</label>
          <input
            type="text"
            placeholder="Institute Name"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            required=""
            id="institute_name"
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

export default CertificateComponent;
