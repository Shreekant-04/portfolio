import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import imageUrl from "../../assets/images/project-1.jpg";
import imageUr2 from "../../assets/images/project-2.png";
import imageUr3 from "../../assets/images/project-3.jpg";
import imageUr4 from "../../assets/images/project-4.png";
import imageUr5 from "../../assets/images/project-5.png";
import imageUr6 from "../../assets/images/project-6.png";
import imageUr7 from "../../assets/images/project-7.png";
import imageUr8 from "../../assets/images/project-8.jpg";
import imageUr9 from "../../assets/images/project-9.png";
import Loader from "../Common/Loader";

const Project = () => {
  const location = useLocation();
  const isActive = location.pathname === "/projects";
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setisLoading(false);
      document.body.style.overflow = "auto"; // Enable scroll after loading
    }, 2000);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Finance",
      category: "Web development",
      imageUrl: imageUrl,
      alt: "finance project",
    },
    {
      id: 2,
      title: "Orizon",
      category: "Web development",
      imageUrl: imageUr2,
      alt: "orizon project",
    },
    {
      id: 3,
      title: "Fundo",
      category: "Web design",
      imageUrl: imageUr3,
      alt: "fundo project",
    },
    {
      id: 4,
      title: "Brawlhalla",
      category: "Applications",
      imageUrl: imageUr4,
      alt: "brawlhalla project",
    },
    {
      id: 5,
      title: "DSM",
      category: "Web design",
      imageUrl: imageUr5,
      alt: "dsm project",
    },
    {
      id: 6,
      title: "MetaSpark",
      category: "Web design",
      imageUrl: imageUr6,
      alt: "metaspark project",
    },
    {
      id: 7,
      title: "Summary",
      category: "Web development",
      imageUrl: imageUr7,
      alt: "summary project",
    },
    {
      id: 8,
      title: "Task Manager",
      category: "Applications",
      imageUrl: imageUr8,
      alt: "task manager project",
    },
    {
      id: 9,
      title: "Arrival",
      category: "Web development",
      imageUrl: imageUr9,
      alt: "arrival project",
    },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) => {
    return activeFilter === "All" || project.category === activeFilter;
  });

  return (
    <>
      {isLoading && <Loader />}

      <article
        className={`portfolio ${isActive ? "active" : ""}`}
        data-page="portfolio"
      >
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        {/* Filter Buttons */}
        <section className="projects">
          <ul className="filter-list">
            {["All", "Web design", "Applications", "Web development"].map(
              (filter) => (
                <li className="filter-item" key={filter}>
                  <button
                    className={activeFilter === filter ? "active" : ""}
                    onClick={() => handleFilterChange(filter)}
                  >
                    {filter}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* Filter Select Box */}
          <div className="filter-select-box">
            <select
              className="filter-select"
              value={activeFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Web design">Web design</option>
              <option value="Applications">Applications</option>
              <option value="Web development">Web development</option>
            </select>
          </div>

          {/* Projects List */}
          <ul className="project-list">
            {filteredProjects.map((project) => (
              <li
                className="project-item active"
                data-filter-item
                data-category={project.category.toLowerCase()}
                key={project.id}
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src={project.imageUrl}
                      alt={project.alt}
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default Project;
