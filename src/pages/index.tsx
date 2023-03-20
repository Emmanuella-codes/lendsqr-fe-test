import LoginForm from "../components/LoginForm";
import LoginLayout from "../layout/Auth";

const Login = () => {
  return (
    <>
      <LoginLayout
        heading={"Welcome!"}
        subheading={"Enter details to login."}
        content={<LoginForm />}
      />
    </>
  );
};

export default Login;
