import { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Popup.scss';
import gmail from '@assets/images/icons/gmail.png';

function Popup() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const nodeRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
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
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={4} required />
              <button type="submit" className="send-btn">Send</button>
            </form>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default Popup;
