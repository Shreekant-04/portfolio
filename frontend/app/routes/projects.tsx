import type { Route } from "../+types/root";
import ProjectComponent from "../components/projects/Projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
import React from "react";

const Projects = () => {
  return <ProjectComponent />;
};

export default Projects;
