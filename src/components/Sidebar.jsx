import { useState } from "react";
import profile from "../assets/uifaces-cartoon-image.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [toggle, settoggle] = useState(false);
  const toggleSidebar = () => {
    settoggle((toggle) => !toggle);
  };
  return (
    <aside className={`sidebar ${toggle ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile} alt="Shreekant" width="80" />
        </figure>

        <h1 className="info-content">
          <p className="name" title="Shreekant">
            Shreekant
          </p>

          <p className="title">Web developer</p>
        </h1>
        <div>
          <Link
            to="https://app.enhancv.com/share/a1f71824/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            className="resume-btn"
          >
            Resume
          </Link>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <Link
                to="mailto:shreekant4062@gmail.com"
                className="contact-link"
              >
                shreekant4062@gmail.com
              </Link>
            </div>
          </li>

          {/* <li className="contact-item">
  
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
  
              <div className="contact-info">
                <p className="contact-title">Phone</p>
  
                <a href="tel:+12133522795" className="contact-link">+91 9773528651</a>
              </div>
  
            </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 04, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>New Delhi, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <Link
              to="https://www.linkedin.com/in/shreekantkumar/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://github.com/Shreekant-04"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://www.instagram.com/shree_4.6/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
