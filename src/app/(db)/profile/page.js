"use client"
import BannerComponent from "@/components/banner/banner";
import { LayerContext } from "@/context/AuthContext";
import { useContext } from "react";

const ProfilePage = () => {
  const { user } = useContext(LayerContext);
  console.log("profile", user);
  return (
    <>
      <BannerComponent user={user}/>
    </>
  );
};

export default ProfilePage;
