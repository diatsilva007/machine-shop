import React, { useState, useEffect, useRef } from "react";

import CarService from "../assets/car-service.jpeg";
import carroOficinaNeon from "../assets/carro-oficina-neon.jpeg";
import mecanicService from "../assets/mecanic-service.jpeg";
import Mecanic from "../assets/mecanic.jpeg";

const imagens = [CarService, carroOficinaNeon, mecanicService, Mecanic];

const Galeria = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 2500);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
  };

  // Estilos responsivos para o container da imagem
  const imageContainerStyle = {
    position: "relative",
    width: "min(90vw, 600px)",
    height: "min(55vw, 380px)",
    maxWidth: "600px",
    maxHeight: "380px",
    minWidth: "220px",
    minHeight: "160px",
    overflow: "hidden",
    borderRadius: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.13)",
    background: "#eee",
    flexShrink: 0,
    transition: "width 0.3s, height 0.3s",
    margin: "0 12px",
  };

  return (
    <section id="galeria" style={{ padding: "60px 0", background: "#f7f7f7" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2>Galeria</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
            marginTop: "2rem",
            width: "100%",
          }}
        >
          {/* Botão anterior */}
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              style={{
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                cursor: "pointer",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                margin: "0 4px 0 0",
              }}
            >
              &#8592;
            </button>
          </div>
          {/* Container da imagem */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "600px",
              height: "min(56vw, 380px)",
              minWidth: "180px",
              minHeight: "120px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.13)",
              background: "#eee",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
              boxSizing: "border-box",
            }}
          >
            {imagens.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Peça ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // será sobrescrito pelo CSS no mobile
                  borderRadius: 16,
                  opacity: idx === index ? 1 : 0,
                  display: idx === index ? "block" : "none",
                  transition: "opacity 0.7s ease",
                  zIndex: 1,
                  background: "#eee",
                  pointerEvents: idx === index ? "auto" : "none",
                }}
              />
            ))}
          </div>
          {/* Botão próximo */}
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <button
              onClick={handleNext}
              aria-label="Próxima"
              style={{
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: 36,
                height: 36,
                cursor: "pointer",
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                margin: "0 0 0 4px",
              }}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
