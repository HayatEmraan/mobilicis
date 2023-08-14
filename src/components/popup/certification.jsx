import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

const CertificateComponent = ({ label, data, isUpdate, setUpdate }) => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const institute = e.target.institute_name.value;
    const course = e.target.course_name.value;
    fetch("http://localhost:5000/api/v2/user/certification", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
      body: JSON.stringify({
        institute,
        course,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!isUpdate);
        toast.success("Certificate updated successfully!");
        my_modal_5.close();
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"));
  };
  return (
    <dialog id="my_modal_5" className="modal">
      <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
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
