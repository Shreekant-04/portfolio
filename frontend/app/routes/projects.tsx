import type { Route } from '../+types/root';
import ProjectComponent from '../components/projects/Projects';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Projects | Shreekant - Portfolio' },
    {
      name: 'description',
      content:
        'Explore the portfolio projects of Shreekant, a web and app developer. See case studies, featured work, and creative solutions for clients and personal growth.',
    },
    {
      name: 'keywords',
      content:
        'Projects, Portfolio, Web Developer, Designer, Case Studies, Work, Shreekant',
    },

    { name: 'og:title', content: 'Projects | Shreekant - Portfolio' },
    {
      name: 'og:description',
      content:
        'Browse the projects and case studies of Shreekant, web and app developer.',
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://shreekant.dev/projects' },
    {
      name: 'og:image',
      content: 'https://shreekant.dev/og-image-projects.png',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Projects | Shreekant - Portfolio' },
    {
      name: 'twitter:description',
      content:
        'Explore the portfolio projects of Shreekant, web developer and designer.',
    },
    {
      name: 'twitter:image',
      content: 'https://shreekant.dev/og-image-projects.png',
    },
  ];
}
export const links: Route.LinksFunction = () => [
  { rel: 'canonical', href: 'https://shreekant.dev/projects' },
];
export const handle = {
  breadcrumb: 'Projects',
};

const Projects = () => {
  return <ProjectComponent />;
};

export default Projects;
