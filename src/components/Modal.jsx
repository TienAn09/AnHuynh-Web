// src/components/Modal.js
import './Modal.css';
import Card from '../components/Card';
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="card-container">
          <div className="horizontal-cards">
            <Card orientation="horizontal" title="Card 4" content="Nội dung card 4" />
            <Card orientation="horizontal" title="Card 5" content="Nội dung card 5" />
            <Card orientation="horizontal" title="Card 6" content="Nội dung card 6" />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;