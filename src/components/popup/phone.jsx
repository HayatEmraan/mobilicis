import CountriesComponent from "@/app/signup/countries";
import React from "react";
import PhoneLibs from "./phonelibs";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const PhoneComponent = ({ label, isUpdate, setUpdate }) => {
  const router = useRouter();
  const handleUpdate = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    fetch("https://oruphones-lilac.vercel.app/api/v2/user/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
      body: JSON.stringify({
        number,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!isUpdate);
        toast.success("Number updated successfully!");
        my_modal_1.close();
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"));
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <form method="dialog" className="modal-box" onSubmit={handleUpdate}>
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
