import "./App.css";
import logo from "./assets/logo.png";
import LogoutButton from "./components/LogOutButton";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <div>
      <h1>GatorStream</h1>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
