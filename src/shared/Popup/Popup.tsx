import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Popup.scss';
import gmail from '@assets/images/icons/gmail.png';

function Popup() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const nodeRef = useRef(null);
  const form = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm('service_uzow5v8', 'template_ykzm8gs', form.current, {
        publicKey: 'WRMnnEIKXarepMcI1'
      })
      .then(
        () => {
          setIsModalOpen(false);
          alert('Message sent!');
        },
        () => {
          alert('Message failed to send.');
        }
      );
    setIsModalOpen(false);
  };

  return (
    <>
      {!isModalOpen &&
        <div className="hire-container d-flex justify-content-center align-items-center">
          <button className="hire-btn" onClick={() => setIsModalOpen(true)}>
            <span className='hide'>Send a Message</span>
            <img src={gmail} alt="Gmail Icon" />
          </button>
        </div>
      }

      <CSSTransition
        in={isModalOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="modal-title">Send me a message</h2>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows={4} required />
              <button type="submit" className="send-btn">Send</button>
            </form>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default Popup;
