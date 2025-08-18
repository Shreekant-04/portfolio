import type { Route } from '../+types/root';
import SearchComponent from '../components/search/Search';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Search | Shreekant - Portfolio' },
    {
      name: 'description',
      content:
        'Search the portfolio of Shreekant, web and app developer. Find projects, case studies, skills, and more. Use the search feature to quickly discover relevant work and expertise.',
    },
    {
      name: 'keywords',
      content:
        'Search, Portfolio, Web Developer, App Developer, Projects, Skills, Case Studies, Shreekant',
    },
    { name: 'author', content: 'Shreekant' },
    { name: 'robots', content: 'index, follow' },
    { name: 'og:title', content: 'Search | Shreekant - Portfolio' },
    {
      name: 'og:description',
      content:
        'Search the portfolio of Shreekant, web and app developer. Find projects, case studies, skills, and more.',
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://shreekant.dev/search' },
    {
      name: 'og:image',
      content: 'https://shreekant.dev/og-image-projects.png',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Search | Shreekant - Portfolio' },
    {
      name: 'twitter:description',
      content:
        'Search the portfolio of Shreekant, web and app developer. Find projects, case studies, skills, and more.',
    },
    {
      name: 'twitter:image',
      content: 'https://shreekant.dev/og-image-projects.png',
    },
  ];
}
export const links: Route.LinksFunction = () => [
  { rel: 'canonical', href: 'https://shreekant.dev/search' },
];

export const handle = {
  breadcrumb: 'Search',
};

const Search = () => {
  return <SearchComponent />;
};

export default Search;
