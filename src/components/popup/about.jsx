import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

const AboutPopUp = ({ label, data, isUpdate, setUpdate }) => {
  const router = useRouter();
  const handleUpdate = (e) => {
    e.preventDefault();
    const about = e.target.about.value;
    fetch("https://oruphones-lilac.vercel.app/api/v2/user/about", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
      body: JSON.stringify({
        about: about,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!isUpdate);
        toast.success("About updated successfully!");
        my_modal_3.close();
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"));
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box" onSubmit={handleUpdate}>
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div>
          <textarea
            placeholder="about yourself"
            className="w-full border py-2 rounded-md px-2 focus:border-none focus:outline focus:outline-orange-400"
            name="about"
            required=""
            defaultValue={data}
          />
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn" type="submit">
            Update
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AboutPopUp;
