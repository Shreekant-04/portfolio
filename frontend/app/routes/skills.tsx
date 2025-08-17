import type { Route } from '../+types/root';
import SkillsComponent from '../components/skills/Skills';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Skills | Shreekant - Portfolio' },
    {
      name: 'description',
      content:
        'Discover the technical and creative skills of Shreekant, a web developer and app developer. Explore expertise in frontend, backend, UI/UX, and more.',
    },
    {
      name: 'keywords',
      content:
        'Skills, Portfolio, Web Developer, App Developer, Designer, Frontend, Backend, UI/UX, Shreekant',
    },

    { name: 'og:title', content: 'Skills | Shreekant - Portfolio' },
    {
      name: 'og:description',
      content:
        'Explore the skills and expertise of Shreekant, web developer and app developer.',
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://shreekant.dev/skills' },
    { name: 'og:image', content: 'https://shreekant.dev/og-image-skills.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Skills | Shreekant - Portfolio' },
    {
      name: 'twitter:description',
      content:
        'Discover the technical and creative skills of Shreekant, web developer and designer.',
    },
    {
      name: 'twitter:image',
      content: 'https://shreekant.dev/og-image-skills.png',
    },
  ];
}
export const links: Route.LinksFunction = () => [
  { rel: 'canonical', href: 'https://shreekant.dev/skills' },
];

export const handle = {
  breadcrumb: 'Skills',
};

const Skills = () => {
  return <SkillsComponent />;
};

export default Skills;
