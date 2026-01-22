import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
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
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />, // Pagina 404
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
