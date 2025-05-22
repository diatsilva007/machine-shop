import React, { useState, useEffect, useRef } from "react";

import CarService from "../assets/car-service.jpeg";
import carroOficinaNeon from "../assets/carro-oficina-neon.jpeg";
import mecanicService from "../assets/mecanic-service.jpeg";
import Mecanic from "../assets/mecanic.jpeg";

const imagens = [CarService, carroOficinaNeon, mecanicService, Mecanic];

// Hook para detectar responsivamente se é mobile
function useIsMobile(breakpoint = 800) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

const Galeria = () => {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const timeoutRef = useRef(null);
  const pauseTimeoutRef = useRef(null);
  const isMobile = useIsMobile(800);

  // Função para pausar autoplay por 5 segundos
  const pauseAutoplay = () => {
    setPause(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setPause(false), 5000);
  };

  // Autoplay só roda se não estiver pausado
  useEffect(() => {
    if (pause) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [index, pause]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
    pauseAutoplay();
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
    pauseAutoplay();
  };

  // --- SWIPE: controle de toque ---
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) handlePrev();
    if (deltaX < -40) handleNext();
    touchStartX.current = null;
    pauseAutoplay();
  };

  // Estilos responsivos para o container da imagem
  const imageContainerStyle = {
    position: "relative",
    width: isMobile ? "90vw" : "600px",
    height: isMobile ? "55vw" : "380px",
    maxWidth: "600px",
    maxHeight: "380px",
    minWidth: "180px",
    minHeight: "120px",
    overflow: "hidden",
    borderRadius: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.13)",
    background: "#eee",
    flexShrink: 0,
    transition: "width 0.3s, height 0.3s",
    margin: "0 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  // Estilos para os botões das setas
  const arrowButtonStyle = {
    background: "rgba(0,0,0,0.4)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: isMobile ? 48 : 36,
    height: isMobile ? 48 : 36,
    cursor: "pointer",
    fontSize: isMobile ? 32 : 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    margin: isMobile ? "0 12px" : "0 4px",
    zIndex: 2,
    transition: "background 0.2s, transform 0.15s",
    userSelect: "none",
    touchAction: "manipulation",
  };

  return (
    <section
      id="galeria"
      style={{ padding: "60px 0", background: "#f7f7f7" }}
      aria-label="Galeria de imagens"
    >
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
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}
        >
          {/* Botão anterior */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              marginBottom: isMobile ? 8 : 0,
            }}
          >
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              style={arrowButtonStyle}
              tabIndex={0}
              onTouchStart={handlePrev}
              onKeyDown={(e) => (e.key === "ArrowLeft" ? handlePrev() : null)}
            >
              &#8592;
            </button>
          </div>

          {/* Container da imagem com eventos de swipe */}
          <div
            style={imageContainerStyle}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-live="polite"
            role="region"
            aria-label="Galeria de imagens"
          >
            {imagens.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Peça ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 16,
                  opacity: idx === index ? 1 : 0,
                  display: idx === index ? "block" : "none",
                  transition: "opacity 0.7s ease",
                  zIndex: 1,
                  background: "#eee",
                  pointerEvents: idx === index ? "auto" : "none",
                  userSelect: "none",
                }}
                draggable={false}
              />
            ))}
          </div>

          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 12 }}
          >
            {imagens.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIndex(idx);
                  pauseAutoplay();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setIndex(idx);
                    pauseAutoplay();
                  }
                }}
                tabIndex={0}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  margin: "0 4px",
                  border: "none",
                  background: idx === index ? "#25d366" : "#bbb",
                  opacity: idx === index ? 1 : 0.5,
                  cursor: "pointer",
                  transition: "background 0.2s, opacity 0.2s",
                }}
                aria-label={`Ir para imagem ${idx + 1}`}
              />
            ))}
          </div>
          {/* Botão próximo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              marginBottom: isMobile ? 8 : 0,
            }}
          >
            <button
              onClick={handleNext}
              aria-label="Próxima"
              style={arrowButtonStyle}
              tabIndex={0}
              onTouchStart={handleNext}
              onKeyDown={(e) => (e.key === "ArrowRight" ? handleNext() : null)}
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
