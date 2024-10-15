import { useState } from "react";
import profile from "../assets/uifaces-cartoon-image.jpg";

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

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Shreekant
          </h1>

          <p className="title">Web developer</p>
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

              <a
                href="mailto:shreekant4062@gmail.com
"
                className="contact-link"
              >
                shreekant4062@gmail.com
              </a>
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
            <a
              href="https://www.linkedin.com/in/shreekantkumar/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/Shreekant-04"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.instagram.com/shree_4.6/"
              target="_blank"
              className="social-link"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
