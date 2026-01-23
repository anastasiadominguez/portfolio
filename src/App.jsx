import { useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Project3D2D from "./pages/Project3D2D";
import ProjectThesis from "./pages/ProjectThesis";
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
        path: "/projects/thesis",
        element: <ProjectThesis />,
      },
      {
        path: "/projects/3d-2d",
        element: <Project3D2D />,
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
