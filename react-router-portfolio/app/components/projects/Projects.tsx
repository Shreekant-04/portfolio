import { useEffect, useState, type SetStateAction } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router";
import Loader from "../Common/Loader";

type ProjectType = {
  _id: string;
  title: string;
  category: string;
  imgUrl: string;
  alt: string;
  projectLink: string;
};

const Projects = () => {
  const location = useLocation();
  const isActive = location.pathname === "/projects";
  const [activeFilter, setActiveFilter] = useState("Frontend");
  const [isLoading, setisLoading] = useState(false);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  let baseUrl = "https://portfolio-backend-three-hazel.vercel.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setisLoading(true);
        document.body.style.overflow = "hidden";
        const response = await axios.get(baseUrl + "/show");
        const data = await response.data.data;
        setProjects(data);
      } catch (err) {
        console.log(err);
      } finally {
        setisLoading(false);
        document.body.style.overflow = "auto";
      }
    };

    fetchData();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [baseUrl]);

  const handleFilterChange = (filter: SetStateAction<string>) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) => {
    return activeFilter === "All" || project.category === activeFilter;
  });
  const filters = ["All", "Full-Stack", "Frontend", "Backend", "Mini-Projects"];

  return (
    <>
      <article
        className={`portfolio ${isActive ? "active" : ""}`}
        data-page="portfolio"
      >
        <header>
          <h2 className="h2 article-title">Projects</h2>
        </header>

        {isLoading && <Loader />}

        {/* Filter Buttons */}
        {!isLoading && (
          <section
            className="projects"
            style={{
              position: "relative",
              overflow: `${isLoading ? "hidden" : ""}`,
            }}
          >
            <ul className="filter-list">
              {filters.map((filter) => (
                <li className="filter-item" key={filter}>
                  <button
                    className={activeFilter === filter ? "active" : ""}
                    onClick={() => handleFilterChange(filter)}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>

            {/* Filter Select Box */}
            <div className="filter-select-box">
              <select
                className="filter-select"
                value={activeFilter}
                onChange={(e) => handleFilterChange(e.target.value)}
              >
                {filters.map((filter, index) => (
                  <option value={filter} key={index}>
                    {filter}
                  </option>
                ))}
              </select>
            </div>

            {/* Projects List */}
            <ul className="project-list">
              {filteredProjects.map((project) => (
                <li
                  className="project-item active"
                  data-filter-item
                  data-category={project.category.toLowerCase()}
                  key={project._id}
                >
                  <Link
                    to={project.projectLink}
                    target={project.projectLink !== "#" ? "_blank" : undefined}
                  >
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                      <img
                        src={project.imgUrl}
                        alt={project.alt}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.category}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </>
  );
};

export default Projects;
