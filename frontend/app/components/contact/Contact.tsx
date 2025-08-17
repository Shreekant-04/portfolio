import emailjs from '@emailjs/browser';
import axios from 'axios';
import { Loader2, Send } from 'lucide-react';
import { useReducer, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  fullName: '',
  email: '',
  message: '',
};

const reducer = (
  state: typeof initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case 'SET_FULLNAME':
      return { ...state, fullName: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

const Contact = () => {
  const location = useLocation();
  const isActive = location.pathname === '/contact';
  const [state, setState] = useReducer(reducer, initialState);
  const { fullName, email, message } = state;
  const [loading, setLoading] = useState(false);
  let baseUrl = 'https://api.shreekant.dev/api/v1';

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending email with state:', state);
    setLoading(true);

    try {
      const response = await axios.post(`${baseUrl}/public/contact`, state, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.data.success) {
        throw new Error('Network response was not ok');
      }
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
      setState({ type: 'SET_FULLNAME', payload: '' });
      setState({ type: 'SET_EMAIL', payload: '' });
      setState({ type: 'SET_MESSAGE', payload: '' });
    }
  };

  return (
    <article
      className={`contact ${isActive ? 'active' : ''}`}
      data-page="contact"
    >
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Map Section */}
      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16652.64192146247!2d77.06529512668132!3d28.666103975016373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728722424594!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Google Map"
            style={{ border: 0 }}
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </figure>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) =>
                setState({ type: 'SET_FULLNAME', payload: e.target.value })
              }
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) =>
                setState({ type: 'SET_EMAIL', payload: e.target.value })
              }
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            value={message}
            onChange={(e) =>
              setState({ type: 'SET_MESSAGE', payload: e.target.value })
            }
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            data-form-btn
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  style={{ animation: 'spin 1s linear infinite' }}
                />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </section>
      <ToastContainer />
    </article>
  );
};

export default Contact;
