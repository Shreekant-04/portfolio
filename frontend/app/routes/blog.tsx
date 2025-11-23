import BlogComponent from '~/components/blog/Blogs';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Blog | Shreekant - Portfolio' },
    {
      name: 'description',
      content:
        "Explore Shreekant's Blog for insights on web development, design, and tech trends. Stay updated with tutorials, tips, and industry news.",
    },
    { name: 'google-adsense-account', content: 'ca-pub-7258185739917298' },
    {
      name: 'keywords',
      content:
        'Blog, Portfolio, Web Developer, Designer, Freelance, Tutorials, Tips, Tech Trends, Shreekant',
    },
    { name: 'og:title', content: 'Blog | Shreekant - Portfolio' },
    {
      name: 'og:description',
      content:
        "Explore Shreekant's Blog for insights on web development, design, and tech trends. Stay updated with tutorials, tips, and industry news.",
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://shreekant.dev/blog' },
    { name: 'og:image', content: 'https://shreekant.dev/og-image-blog.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog | Shreekant - Portfolio' },
    {
      name: 'twitter:description',
      content:
        "Explore Shreekant's Blog for insights on web development, design, and tech trends. Stay updated with tutorials, tips, and industry news.",
    },
    {
      name: 'twitter:image',
      content: 'https://shreekant.dev/og-image-blog.png',
    },
  ];
}

export default function Blog() {
  return <BlogComponent />;
}
