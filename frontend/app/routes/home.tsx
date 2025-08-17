import type { Route } from './+types/home';
import HomeComponent from '../components/home/Home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Shreekant - Portfolio' },
    {
      name: 'description',
      content:
        'Welcome to the portfolio of Shreekant, a web developer and designer. Explore projects, skills, and contact information.',
    },
    {
      name: 'keywords',
      content:
        'Home, Portfolio, Web Developer, Designer, Projects, Skills, Shreekant',
    },
    { name: 'author', content: 'Shreekant' },

    { name: 'og:title', content: 'Shreekant - Portfolio' },
    {
      name: 'og:description',
      content:
        'Discover the work and skills of Shreekant, a passionate web and app developer.',
    },
    { name: 'og:url', content: 'https://shreekant.dev' },
    { name: 'og:image', content: 'https://shreekant.dev/og-image-home.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Shreekant - Portfolio' },
    {
      name: 'twitter:description',
      content: 'Welcome to the portfolio of Shreekant, web and app developer.',
    },
    {
      name: 'twitter:image',
      content: 'https://shreekant.dev/og-image-home.png',
    },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: 'canonical', href: 'https://shreekant.dev' },
];

export const handle = {
  breadcrumb: 'Home',
};

export default function Home() {
  return <HomeComponent />;
}
