import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import img4 from '../../assets/images/blog-4.jpg';
import img5 from '../../assets/images/blog-5.jpg';
import img6 from '../../assets/images/blog-6.jpg';
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
    image: "",
    excerpt: '',
    content: '',
    tags: [],
    slug: '',
  });

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
            <p className="blog-category">{blogPost.category}</p>
            <span className="dot"></span>
            <time dateTime={blogPost.dateTime}>{blogPost.date}</time>
            <span className="dot"></span>
            <span className="read-time">{blogPost.readTime}</span>
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

      <section className="related-posts">
        <h3 className="h3">Related Posts</h3>
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <Link to="/blog/react-fundamentals">
              <figure className="blog-banner-box">
                <img src={img5} alt="React Fundamentals" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Frontend</p>
                  <span className="dot"></span>
                  <time dateTime="2024-03-10">Mar 10, 2024</time>
                </div>
                <h3 className="h3 blog-item-title">
                  What is React and Why Use It?
                </h3>
                <p className="blog-text">
                  Understanding the basics of React and why it's become the most
                  popular frontend library.
                </p>
              </div>
            </Link>
          </li>
          <li className="blog-post-item">
            <Link to="/blog/express-middleware">
              <figure className="blog-banner-box">
                <img src={img6} alt="Express Middleware" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">Backend</p>
                  <span className="dot"></span>
                  <time dateTime="2024-03-05">Mar 5, 2024</time>
                </div>
                <h3 className="h3 blog-item-title">
                  Understanding Middleware in Express.js
                </h3>
                <p className="blog-text">
                  A comprehensive guide to middleware functions and how they
                  work in Express.js applications.
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
