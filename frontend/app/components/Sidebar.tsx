import { useState } from 'react';
import profile from '../assets/uifaces-cartoon-image.jpg';
import { Link } from 'react-router';
import {
  CalendarDays,
  ChevronDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPinCheck,
} from 'lucide-react';

const Sidebar = () => {
  const [toggle, settoggle] = useState<boolean>(false);
  const toggleSidebar = () => {
    settoggle((toggle) => !toggle);
  };
  return (
    <aside className={`sidebar ${toggle ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={profile}
            alt="Shreekant"
            width="80"
            height={'auto'}
            loading="eager"
            title="Shreekant"
          />
        </figure>

        <h1 className="info-content">
          <p className="name" title="Shreekant">
            Shreekant
          </p>

          <p className="title">Web developer</p>
        </h1>
        <div>
          <Link
            to="/resume.pdf"
            // to="https://app.enhancv.com/share/a1f71824/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            className="resume-btn"
            target="_blank"
          >
            Resume
          </Link>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span style={{ display: 'none' }}>Show Contacts</span>
          <ChevronDown size={18} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={18} />
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
              <CalendarDays size={18} />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 04, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPinCheck size={18} />
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
              <Linkedin size={18} />
              <span style={{ display: 'none' }}>LinkedIn</span>
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://github.com/Shreekant-04"
              target="_blank"
              className="social-link"
            >
              <Github size={18} />
              <span style={{ display: 'none' }}>GitHub</span>
            </Link>
          </li>

          <li className="social-item">
            <Link
              to="https://www.instagram.com/shree_4.6/"
              target="_blank"
              className="social-link"
            >
              <Instagram size={18} />
              <span style={{ display: 'none' }}>Instagram</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
