import React, { type JSX } from 'react';
import { useLocation, useNavigate } from 'react-router';
import img5 from '../../assets/images/blog-5.jpg';
import img6 from '../../assets/images/blog-6.jpg';
import blogs from './blogs.json';

export default function Blogs() {
  const location = useLocation();
  const isActive = location.pathname === '/blog';
  return (
    <article className={`blog ${isActive ? 'active' : ''}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        {blogs && blogs.length > 0 ? (
          <ul className="blog-posts-list">
            {blogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </ul>
        ) : null}
      </section>
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

const BlogCard = ({ blog }: BlogCardProps): JSX.Element => {
  const navigate = useNavigate();
  const handleNavigate = (slug: string) => {
    console.log('Navigating to blog with slug:', slug);
    navigate(`/blog/${slug}`);
  };
  return (
    <li className="blog-post-item" onClick={() => handleNavigate(blog.slug)}>
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
    </li>
  );
};
