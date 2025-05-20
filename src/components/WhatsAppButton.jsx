import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../App.css";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5535999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float-btn"
    aria-label="Fale conosco no WhatsApp"
  >
    <FaWhatsapp size={28} />
    <span className="tooltip">Fale conosco no WhatsApp</span>
  </a>
);

export default WhatsAppButton;
