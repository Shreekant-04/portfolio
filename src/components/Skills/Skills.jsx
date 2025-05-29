import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import usePageSeo from "../../hooks/usePageSeo";

const Skills = () => {
  const location = useLocation();
  const isActive = location.pathname === "/skills";
  const [certificates, setcertificates] = useState([]);
  let baseUrl = import.meta.env.VITE_API_URL;

  usePageSeo({
    title: "My Skills | Shreekant",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        document.body.style.overflow = "hidden";
        const response = await axios.get(baseUrl + "/certificate");
        const data = await response.data.data;
        setcertificates(data);
      } catch (err) {
        console.log(err);
      } finally {
        document.body.style.overflow = "auto";
      }
    };

    fetchData();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [baseUrl]);
  return (
    <article
      className={`resume ${isActive ? "active" : ""}`}
      data-page="resume"
    >
      <header>
        <h2 className="h2 article-title">Skills</h2>
      </header>
      {/* Skills Section */}
      <section className="skill" style={{ marginBottom: "20px" }}>
        <h3 className="h3 skills-title">Languages and Tools:</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a
                href="https://www.chartjs.org"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.chartjs.org/media/logo-title.svg"
                  alt="chartjs"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                <img
                  src="https://github.com/user-attachments/assets/f5207c10-b402-4450-ac92-0df2d9f351f2"
                  height="40"
                  width="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <a
                href="https://www.photoshop.com/en"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                  alt="photoshop"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Developer</h4>
            <span>Apr 2025 — Now</span>
            <p className="timeline-text">
             As a Web Developer at MHJ Pharmaconcept, I focus on backend development, contributing to the design and implementation of server-side logic, database management, and API integrations. I collaborate closely with the development team to ensure scalable, secure, and efficient systems that support business operations and enhance overall performance.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web Development intern</h4>
            <span>Aug 2024 — Jan 2025</span>
            <p className="timeline-text">
              As a Web Development Intern at Upskill, I worked on building
              responsive websites, improving user experience, and collaborating
              with senior developers to optimize performance, gaining hands-on
              experience in front-end and back-end development.
            </p>
          </li>
        </ol>
      </section>

      {/* Certification */}
      {certificates.length ? (
        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
            <h3 className="h3">Certifications</h3>
          </div>

          <ol className="timeline-list">
            {certificates.map((certificate) => (
              <li className="timeline-item" key={certificate._id}>
                <h4 className="h4 timeline-item-title"> {certificate.title}</h4>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "max-content",
                    gap: "4px",
                  }}
                >
                  <span style={{ color: "white" }}>Issued</span>
                  <span style={{ fontWeight: 700 }}>
                    {" "}
                    {certificate.issued}{" "}
                  </span>
                </span>
                <p className="timeline-text ">
                  <Link
                    to={certificate.Url}
                    target="_blank"
                    className="timeline-text-link"
                  >
                    Show Credential
                  </Link>
                </p>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        ""
      )}

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              St. Matthews Public School
            </h4>
            <span>2018 — 2020</span>
            <p className="timeline-text">10+2, commerce</p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Skills;
