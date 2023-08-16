import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import SkillsComponent from "./skills";

const SkillsPopUp = ({ label, isUpdate, setUpdate }) => {
  const router = useRouter();
  const [skillsData, setSkillsData] = React.useState([]);
  const handleUpdate = (e) => {
    e.preventDefault();
    if (skillsData.length === 0) return toast.error("Skills required!");
    fetch("https://oruphones-lilac.vercel.app/api/v2/user/skills", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("ast")}`,
      },
      body: JSON.stringify({
        skillsData,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdate(!isUpdate);
        toast.success("Skills updated successfully!");
        my_modal_11.close();
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"));
  };
  return (
    <dialog id="my_modal_11" className="modal">
      <form method="dialog" className="modal-box" onSubmit={handleUpdate}>
        <p className="font-semibold text-xl">[{label}]</p>
        <hr />
        <div className="my-4">
          <SkillsComponent setSkillsData={setSkillsData} />
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

export default SkillsPopUp;
