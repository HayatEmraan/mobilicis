"use client";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
const { LayerContext } = require("@/context/AuthContext");
const { useContext } = require("react");

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(LayerContext);
  const router = useRouter();
  if (loading) {
    return <Loading loading={loading} />;
  }

  if (!user) {
    return router.push("/login");
  }

  return children;
};

export default PrivateRoute;
