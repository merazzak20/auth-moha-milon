import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import PrivateRouter from "./routes/PrivateRouter.jsx";
import Profile from "./Components/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "orders",
        element: (
          <PrivateRouter>
            <Orders></Orders>
          </PrivateRouter>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
