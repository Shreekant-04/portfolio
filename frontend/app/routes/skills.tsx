import type { Route } from "../+types/root";
import SkillsComponent from "../components/skills/Skills";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Skills = () => {
  return <SkillsComponent />;
};

export default Skills;
