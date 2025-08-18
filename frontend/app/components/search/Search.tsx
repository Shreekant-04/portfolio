import axios from 'axios';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router';
import Loader from '../Common/Loader';

type ProjectType = {
  _id: string;
  title: string;
  category: string;
  imgUrl: string;
  alt: string;
  projectLink: string;
};

const Search = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = location.pathname === '/search';

  const query = searchParams.get('q') || '';
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const results = projects.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  let baseUrl = 'https://api.shreekant.dev/api/v1';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        document.body.style.overflow = 'hidden';
        const response = await axios.get(baseUrl + '/public/projects');
        const data = await response.data.data;
        setProjects(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
        document.body.style.overflow = 'auto';
      }
    };

    fetchData();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [baseUrl]);

  return (
    <>
      <article
        className={`portfolio ${isActive ? 'active' : ''}`}
        data-page="portfolio"
      >
        <header>
          <h2 className="h2 article-title text-center mb-8">Search</h2>
        </header>
        <section style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setSearchParams({ q: e.target.value })}
            className="form-input mb-6 border border-jet bg-eerie-black-2 text-white-2 rounded-lg focus:border-orange-yellow-crayola transition w-full"
            aria-label="Search projects"
          />
        </section>
        {isLoading ? (
          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '50vmin',
            }}
          >
            <Loader />
          </section>
        ) : results.length ? (
          <ul className="project-list">
            {results.map((project) => (
              <li
                className="project-item active"
                data-filter-item
                data-category={project.category.toLowerCase()}
                key={project._id}
              >
                <Link
                  to={project.projectLink}
                  target={project.projectLink !== '#' ? '_blank' : undefined}
                >
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <Eye size={18} />
                    </div>
                    <img
                      src={project.imgUrl}
                      alt={project.alt}
                      loading="lazy"
                      height={'auto'}
                      width={'auto'}
                      title={project.title}
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-light-gray text-center py-12 text-lg">
            No projects found.
          </div>
        )}
      </article>
    </>
  );
};

export default Search;
