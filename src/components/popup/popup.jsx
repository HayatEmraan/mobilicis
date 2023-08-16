import { LayerContext } from "@/context/AuthContext";
import { updateProfile } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";

const PopUpComponent = ({ label, data, setLabel }) => {
  const { user } = useContext(LayerContext);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const first_name = e.target.name.value;
    fetch("https://oruphones-lilac.vercel.app/api/v2/user/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
      body: JSON.stringify({
        first_name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        updateProfile(user, { displayName: `${first_name}` })
          .then(() => {
            toast.success("Name updated successfully!");
            my_modal_2.close();
            router.refresh();
          })
          .catch(() => {
            toast.error("Something went wrong!");
          });
      })
      .catch(() => toast.error("Something went wrong!"));
  };
  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div className="mt-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            required=""
            name="name"
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
