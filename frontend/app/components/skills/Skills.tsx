import axios from 'axios';
import { BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
type certificateType = {
  _id: string;
  title: string;
  issued: string;
  Url: string;
};

const Skills = () => {
  const location = useLocation();
  const isActive = location.pathname === '/skills';
  const [certificates, setcertificates] = useState<certificateType[]>([]);
  let baseUrl = 'https://portfolio-backend-three-hazel.vercel.app';

  useEffect(() => {
    const fetchData = async () => {
      try {
        document.body.style.overflow = 'hidden';
        const response = await axios.get(baseUrl + '/certificate');
        const data = await response.data.data;
        setcertificates(data);
      } catch (err) {
        console.log(err);
      } finally {
        document.body.style.overflow = 'auto';
      }
    };

    fetchData();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [baseUrl]);
  return (
    <article
      className={`resume ${isActive ? 'active' : ''}`}
      data-page="resume"
      itemScope
      itemType="https://schema.org/Person"
    >
      <header>
        <h2 className="h2 article-title" itemProp="skills">
          Skills
        </h2>
      </header>
      {/* Skills Section */}
      <section className="skill" style={{ marginBottom: '20px' }}>
        <h3 className="h3 skills-title">Languages and Tools:</h3>
        <ul className="skills-list content-card">
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
                aria-label="HTML5"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="HTML5 logo"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="HTML5"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
                aria-label="CSS3"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="CSS3 logo"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="CSS3"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                aria-label="JavaScript"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="JavaScript"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://www.chartjs.org"
                target="_blank"
                rel="noreferrer"
                aria-label="Chart.js"
              >
                <img
                  src="https://www.chartjs.org/media/logo-title.svg"
                  alt="chartjs"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="Chart.js"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                aria-label="React"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="React"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://redux.js.org"
                target="_blank"
                rel="noreferrer"
                aria-label="Redux"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="Redux"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Tailwind CSS"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="Tailwind CSS"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noreferrer"
                aria-label="Node.js"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="Node.js"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://expressjs.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Express.js"
              >
                <img
                  src="https://github.com/user-attachments/assets/f5207c10-b402-4450-ac92-0df2d9f351f2"
                  height="40"
                  width="40"
                  loading="lazy"
                  alt="expressjs"
                  title="Express.js"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://postman.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Postman"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="Postman"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="MongoDB"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="MongoDB"
                />
              </a>
            </div>
          </li>
          <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Git"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                  loading="lazy"
                  title="Git"
                />
              </a>
            </div>
          </li>
          {/* <li className="skills-item" itemProp="knowsAbout">
            <div className="title-wrapper">
              <a
                href="https://www.photoshop.com/en"
                target="_blank"
                rel="noreferrer"
                aria-label="Adobe Photoshop"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                  alt="photoshop"
                  width="40"
                  height="40"
                  loading="lazy"
                  title='Adobe Photoshop'
                />
              </a>
            </div>
          </li> */}
        </ul>
      </section>

      {/* Experience Section */}
      <section
        className="timeline"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={18} />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li
            className="timeline-item"
            itemProp="hasOccupation"
            itemScope
            itemType="https://schema.org/Occupation"
          >
            <h4
              className="h4 timeline-item-title"
              itemProp="name"
              style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              Web Developer -{' '}
              <span itemProp="worksFor">MHJ Pharmaconcepts</span>
            </h4>
            <div
              itemProp="startDate"
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <span itemProp="startDate">Apr 2025 —</span>
              <span itemProp="endDate">Now</span>
            </div>
            <p className="timeline-text" itemProp="description">
              As a Web Developer at MHJ Pharmaconcepts, I focus on backend
              development, contributing to the design and implementation of
              server-side logic, database management, and API integrations. I
              collaborate closely with the development team to ensure scalable,
              secure, and efficient systems that support business operations and
              enhance overall performance.
            </p>
          </li>
          <li
            className="timeline-item"
            itemProp="hasOccupation"
            itemScope
            itemType="https://schema.org/Occupation"
          >
            <h4
              className="h4 timeline-item-title"
              itemProp="name"
              style={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              Web Development intern -{' '}
              <span itemProp="worksFor">Upskill Mafia </span>
            </h4>
            <div
              itemProp="startDate"
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              <span itemProp="startDate">Aug 2024 —</span>{' '}
              <span itemProp="endDate">Jan 2025</span>
            </div>
            <p className="timeline-text" itemProp="description">
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
        <section
          className="timeline"
          itemScope
          itemType="https://schema.org/CreativeWork"
        >
          <div className="title-wrapper">
            <div className="icon-box">
              <BookOpen size={18} />

            </div>
            <h3 className="h3">Certifications</h3>
          </div>

          <ol className="timeline-list">
            {certificates.map((certificate) => (
              <li
                className="timeline-item"
                key={certificate._id}
                itemProp="hasCredential"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <h4 className="h4 timeline-item-title" itemProp="name">
                  {' '}
                  {certificate.title}
                </h4>
                <span
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 'max-content',
                    gap: '4px',
                  }}
                >
                  <span style={{ color: 'white' }}>Issued</span>
                  <span style={{ fontWeight: 700 }} itemProp="datePublished">
                    {certificate.issued}
                  </span>
                </span>
                <p className="timeline-text ">
                  <Link
                    to={certificate.Url}
                    target="_blank"
                    className="timeline-text-link"
                    itemProp="url"
                  >
                    Show Credential
                  </Link>
                </p>
              </li>
            ))}
          </ol>
        </section>
      ) : (
        ''
      )}

      {/* Education Section */}
      <section
        className="timeline"
        itemScope
        itemType="https://schema.org/EducationalOrganization"
      >
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={18} />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li
            className="timeline-item"
            itemProp="alumniOf"
            itemScope
            itemType="https://schema.org/EducationalOrganization"
          >
            <h4 className="h4 timeline-item-title" itemProp="name">
              St. Matthews Public School
            </h4>

            <div style={{ display: 'flex', gap: '4px' }}>
              <span itemProp="startDate">2010 —</span>
              <span itemProp="endDate">2018</span>
            </div>

            <p className="timeline-text" itemProp="description">
              10+2, commerce
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Skills;
