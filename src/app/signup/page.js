import SignUpComponent from "@/components/signup/signupcomponent";

const SignUpPage = () => {
  return (
    <>
      <SignUpComponent />
    </>
  );
};

export default SignUpPage;


export async function generateMetadata({ params }) {
  return {
    title: "Mobilicis | SignUp",
  };
}