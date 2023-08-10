import "./App.css";
import LogoutButton from "./components/LogOutButton";
import LoginButton from "./components/LoginButton";
import { Stack } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-4xl">GatorStream</h1>
      </div>
      <Stack>
        <LoginButton />
        <LogoutButton />
      </Stack>

    </div>
  );
}

export default App;
