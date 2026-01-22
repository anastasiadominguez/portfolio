import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import { createHashRouter, RouterProvider } from "react-router-dom";

// Crea il router con le rotte nidificate
const router = createHashRouter([
  {
    element: <MainLayout />, // Layout principale con header e footer
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
