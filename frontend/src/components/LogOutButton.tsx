import { Button, ButtonStyle } from "./Button"
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      callbackFunc={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      text="Log Out"
      style={ButtonStyle.Danger}
    ></Button>
  );
};

export default LogoutButton;
