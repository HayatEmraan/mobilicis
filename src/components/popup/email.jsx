import { LayerContext } from "@/context/AuthContext";
import { updateEmail } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";

const EmailComponent = ({ label, data, setLabel, isUpdate, setUpdate }) => {
  const router = useRouter();
  const { user } = useContext(LayerContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    fetch("https://oruphones-lilac.vercel.app/api/v2/user/profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        updateEmail(user, email)
          .then(() => {
            setUpdate(!isUpdate);
            toast.success("Email updated successfully!");
            my_modal_10.close();
            router.refresh();
          })
          .catch(() => {
            toast.error("Something went wrong!");
          });
      })
      .catch(() => toast.error("Something went wrong!"));
  };
  return (
    <dialog id="my_modal_10" className="modal">
      <form method="dialog" className="modal-box" onSubmit={handleSubmit}>
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div>
          <input
            type="text"
            placeholder="Email"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            required=""
            name="email"
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

export default EmailComponent;
