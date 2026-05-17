import  { useEffect, useState } from 'react';
import { Link } from 'react-router';
import blogsData from './blogs.json';

interface BlogDetailsProps {
  slug: string;
  post?: {
    title: string;
    slug: string;
    category: string;
    dateTime: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    excerpt: string;
    content: string;
    tags: string[];
  };
}

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const [blogPost, setBlogPost] = useState<BlogDetailsProps['post']>({
    title: '',
    category: '',
    dateTime: '',
    date: '',
    readTime: '',
    author: '',
    image: '',
    excerpt: '',
    content: '',
    tags: [],
    slug: '',
  });
  let relatedPosts = blogsData.filter((blog) => blog.slug !== slug);
  relatedPosts = relatedPosts.slice(0, 2); // Get only 2 related posts

  useEffect(() => {
    // Fetch blog post data based on slug
    const post = blogsData.find((blog) => blog.slug === slug);
    if (post) {
      setBlogPost(post);
    }
  }, [slug]);

  return (
    <article className="single-blog active" data-page="single-blog">
      <header>
        <nav className="blog-nav">
          <Link to="/blog" className="back-btn">
            <span className="back-arrow">←</span>
            Back to Blog
          </Link>
        </nav>
      </header>

      <section className="blog-detail">
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{blogPost?.category}</p>
            <span className="dot"></span>
            <time dateTime={blogPost?.dateTime}>{blogPost?.date}</time>
            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span className="dot"></span>
              <span className="blog-category">{blogPost?.readTime}</span>
            </div>
          </div>

          <h1 className="h1 blog-title">{blogPost?.title}</h1>

          <div className="blog-author">
            <span>By {blogPost?.author}</span>
          </div>

          <div className="blog-banner-box">
            <img src={blogPost?.image} alt={blogPost?.title} loading="lazy" />
          </div>
          <div className="blog-excerpt">
            <p>{blogPost?.excerpt}</p>
          </div>

          <div className="separator"></div>

          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: blogPost?.content ?? '' }}
          ></div>

          <div className="separator"></div>

          <div className="blog-tags">
            <h4 className="h4">Tags</h4>
            <ul className="tags-list">
              {blogPost?.tags.map((tag, index) => (
                <li key={index} className="tag-item">
                  <span className="tag">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {relatedPosts && relatedPosts.length > 0 && (
        <section className="related-posts">
          <h3 className="h3">Related Posts</h3>
          <ul className="blog-posts-list">
            {relatedPosts.map((blog, index) => (
              <Card key={index} blog={blog} />
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
type BlogCardProps = {
  blog: {
    slug: string;
    image: string;
    title: string;
    category: string;
    dateTime: string;
    date: string;
    excerpt: string;
  };
};

const Card = ({ blog }: BlogCardProps) => {
  return (
    <li className="blog-post-item">
      <Link to={`/blog/${blog.slug}`} className="blog-link-overlay">
        <figure className="blog-banner-box">
          <img src={blog.image} alt={blog.title} loading="lazy" />
        </figure>

        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{blog.category}</p>

            <span className="dot"></span>

            <time dateTime={blog.dateTime}>{blog.date}</time>
          </div>

          <h3 className="h3 blog-item-title">{blog.title}</h3>

          <p className="blog-text">{blog.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
