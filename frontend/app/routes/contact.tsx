import type { Route } from "../+types/root";
import ContactComponent from "../components/contact/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Contact() {
  return <ContactComponent />;
}
