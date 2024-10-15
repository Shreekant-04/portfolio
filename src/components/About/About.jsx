import { useLocation } from "react-router-dom";
import devIcon from "../../assets/images/icon-dev.svg";

const About = () => {
  const location = useLocation();
  const isActive = location.pathname === "/";
  return (
    <>
      <article
        className={`about ${isActive ? "active" : ""}`}
        data-page="about"
      >
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p>
            I’m a Web Developer based in Delhi, India, specializing in both
            front-end and back-end development. I excel at transforming complex
            challenges into user-friendly, engaging websites. My focus is on
            creating seamless experiences with visually appealing interfaces and
            robust back-end systems that ensure performance and security.
          </p>

          <p>
            Whether it’s crafting responsive designs, optimizing performance, or
            managing databases, I am dedicated to delivering web solutions that
            are functional, aesthetically pleasing, and work flawlessly across
            all devices. My goal is to ensure an exceptional experience for
            users and clients alike.
          </p>
        </section>

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img src={devIcon} alt="Web development icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>

                <p className="service-item-text">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
};

export default About;
