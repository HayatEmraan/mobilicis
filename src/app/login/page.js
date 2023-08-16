import LoginComponent from "@/components/login/logincomponent";

const LoginPage = () => {
  return (
    <>
      <LoginComponent />
    </>
  );
};

export default LoginPage;


export async function generateMetadata({ params }) {
  return {
    title: "Mobilicis | LogIn",
  };
}