// src/App.js
import { useState } from 'react';
import { FaHome, FaTools, FaEnvelope, FaUser, FaCog } from 'react-icons/fa';
import Modal from './components/Modal';
import Cards from './components/Card';
import './App.css';
import React from 'react';

// Component cho Navigation
function Navigation({ openModal }) {
  return (
    <nav className="navigation">
      <h2 className="nav-header">ChemBox</h2>
      <ul className="nav-list">
        <li>
          <a href="#Trang chủ" className="nav-link" onClick={openModal}>
            <FaHome className="nav-icon" /> Trang chủ
          </a>
        </li>
        <li>
          <a href="#Công cụ" className="nav-link">
            <FaTools className="nav-icon" /> Công cụ
          </a>
        </li>
        <li>
          <a href="#Liên Hệ" className="nav-link">
            <FaEnvelope className="nav-icon" /> Liên Hệ
          </a>
        </li>
        <li className="nav-bottom">
          <div className="divider"></div>
          <a href="#Setting" className="nav-link">
            <FaCog className="nav-icon" /> Setting
          </a>
        </li>
        <li>
          <div className="divider"></div>
          <a href="#Tài Khoản" className="nav-link account-link">
            <span className="account-circle">
              <FaUser className="account-icon" />
            </span>
            Tài Khoản
          </a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Navigation openModal={openModal} />
      <div className="main-content">
        <Modal isOpen={isModalOpen} onClose={closeModal} children={undefined}>
       
        </Modal>
      </div>
    </div>
  );
}

export default App;