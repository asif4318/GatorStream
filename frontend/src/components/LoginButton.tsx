import { Button } from "./Button"
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button text="Log In" callbackFunc={() => loginWithRedirect()}></Button>
};

export default LoginButton;
