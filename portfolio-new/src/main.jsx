import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import PageNotFOund from "./components/Common/PageNotFOund";
import About from "./components/About/About";
import Project from "./components/Projects/Project"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <PageNotFOund />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
