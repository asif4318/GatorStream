import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import GroupChatPage from "./pages/GroupChat.page.tsx";
import HomePage from "./pages/HomePage.page.tsx";
import AboutUs from "./pages/AboutUs.page.tsx"
import NavBar from "./components/NavBar.tsx";
import ClassPage from "./pages/Class.page.tsx";
import GroupsPage from "./pages/GroupsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/group/:roomID",
    element: <GroupChatPage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
  {
    path: "/groups",
    element: <GroupsPage />
  },
  {
    path: "/Class",
    element: <ClassPage />
  },
  {
    path: "/About",
    element: <AboutUs />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin + "/home",
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
