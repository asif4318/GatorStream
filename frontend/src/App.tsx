import "./App.css";
import LogoutButton from "./components/LogOutButton";
import LoginButton from "./components/LoginButton";

function App() {
  return (
    <div>
      <div className="w-full">
        <h1 className="text-4xl">GatorStream</h1>
      </div>
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
