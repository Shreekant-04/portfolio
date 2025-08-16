import type { Route } from "./+types/home";
import HomeComponent from "../components/home/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomeComponent />;
}
