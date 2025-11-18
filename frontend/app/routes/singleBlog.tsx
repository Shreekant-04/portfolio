import BlogDetails from '~/components/blog/BlogDetails';
import type { Route } from './+types/singleBlog';
import { Link } from 'react-router';
import blogData from '../components/blog/blogs.json';

export function meta({ params }: Route.MetaArgs) {
  // In a real app, you would fetch the blog post data here to get the actual title
  const slug = params.slug;
  const blogPost = blogData.find((post) => post.slug === slug);

  const title = blogPost ? blogPost.title : 'Blog Post Not Found';
  const description = blogPost
    ? blogPost.excerpt
    : 'The requested blog post could not be found.';
  const image = blogPost ? blogPost.image : undefined;
  const url = blogPost
    ? `https://shreekant.dev/blog/${blogPost.slug}`
    : undefined;

  return [
    { title },
    {
      name: 'description',
      content: description,
    },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    image
      ? {
          property: 'og:image',
          content: image,
        }
      : undefined,
    url
      ? {
          property: 'og:url',
          content: url,
        }
      : undefined,
  ];
}

export default function SingleBlog({ params }: Route.ComponentProps) {
  const slug = params.slug;

  return <BlogDetails slug={slug} />;
}
