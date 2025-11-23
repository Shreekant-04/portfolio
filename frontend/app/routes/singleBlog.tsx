import BlogDetails from '~/components/blog/BlogDetails';
import type { Route } from './+types/singleBlog';
import { Link } from 'react-router';
import blogData from '../components/blog/blogs.json';

export function meta({ params }: Route.MetaArgs) {
  // In a real app, you would fetch the blog post data here to get the actual title
  const slug = params.slug;
  const blogPost = blogData.find((post) => post.slug === slug);

  const title = blogPost
    ? `${blogPost.title} | Shreekant Blog`
    : 'Blog Post Not Found | Shreekant';
  const description = blogPost
    ? blogPost.excerpt
    : 'The requested blog post could not be found.';
  const image = blogPost ? blogPost.image : '/assets/images/blog-4.jpg';
  const siteUrl = 'https://shreekant.dev';
  const currentUrl = blogPost
    ? `${siteUrl}/blog/${blogPost.slug}`
    : `${siteUrl}/blog/${slug}`;
  const author = 'Shreekant';
  const siteName = 'Shreekant Portfolio';

  return [
    { title },
    { name: 'description', content: description },

    // Google AdSense
    { name: 'google-adsense-account', content: 'ca-pub-7258185739917298' },

    // SEO and Google Ads optimization
    { name: 'author', content: author },
    {
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'bingbot',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },

    // Article-specific meta for better ad targeting
    { name: 'article:author', content: author },
    { name: 'article:publisher', content: siteName },
    { name: 'article:section', content: 'Technology' },
    {
      name: 'article:tag',
      content: blogPost?.tags?.join(', ') || 'Web Development, Programming',
    },

    // Open Graph for social sharing and better ad performance
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:image', content: `${siteUrl}${image}` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: title },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: 'en_US' },

    // Twitter Card for social media
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@shreekant04' },
    { name: 'twitter:creator', content: '@shreekant04' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `${siteUrl}${image}` },
    { name: 'twitter:image:alt', content: title },

    // Additional SEO meta tags for better content classification
    {
      name: 'keywords',
      content:
        blogPost?.tags?.join(', ') ||
        'web development, programming, javascript, nodejs, react, tutorial',
    },
    { name: 'category', content: blogPost?.category || 'Technology' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'General' },
    { name: 'revisit-after', content: '7 days' },

    // Canonical URL
    { rel: 'canonical', href: currentUrl },

    // JSON-LD structured data for Google
    blogPost
      ? {
          'script:ld+json': {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blogPost.title,
            description: blogPost.excerpt,
            author: {
              '@type': 'Person',
              name: author,
              url: siteUrl,
            },
            publisher: {
              '@type': 'Organization',
              name: siteName,
              url: siteUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/assets/images/logo.svg`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': currentUrl,
            },
            image: {
              '@type': 'ImageObject',
              url: `${siteUrl}${image}`,
              width: 1200,
              height: 630,
            },
            datePublished: blogPost.dateTime || '2024-03-15T10:00:00Z',
            dateModified: blogPost.dateTime || '2024-03-15T10:00:00Z',
            articleSection: blogPost.category || 'Technology',
            keywords: blogPost.tags || ['Web Development', 'Programming'],
            wordCount: blogPost.readTime
              ? parseInt(blogPost.readTime) * 200
              : 800,
            inLanguage: 'en-US',
          },
        }
      : undefined,
  ].filter(Boolean);
}

export default function SingleBlog({ params }: Route.ComponentProps) {
  const slug = params.slug;

  return <BlogDetails slug={slug} />;
}
