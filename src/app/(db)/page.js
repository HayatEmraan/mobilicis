import BannerComponent from "@/components/banner/banner";
import PrivateRoute from "@/libs/private";

const ProfilePage = () => {
  return (
    <>
      <PrivateRoute>
        <BannerComponent />
      </PrivateRoute>
    </>
  );
};

export default ProfilePage;

export async function generateMetadata({ params }) {
  return {
    title: "Mobilicis | Profile",
  };
}
