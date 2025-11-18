import BlogDetails from '~/components/blog/BlogDetails';
import type { Route } from './+types/singleBlog';
import { Link } from 'react-router';

export function meta({ params }: Route.MetaArgs) {
  // In a real app, you would fetch the blog post data here to get the actual title
  const slug = params.slug;
  const title = slug
    ? `${slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())} | Shreekant Blog`
    : 'Blog Post | Shreekant';

  return [
    { title },
    {
      name: 'description',
      content:
        'Read the latest insights and tutorials on web development, programming, and technology.',
    },
  ];
}

export default function SingleBlog({ params }: Route.ComponentProps) {
  const slug = params.slug;

  return <BlogDetails slug={slug} />;
}
