import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 999,
        background: "linear-gradient(90deg, #25d366 0%, #128c7e 100%)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px #25d36655",
        cursor: "pointer",
        fontSize: 22,
        transition: "opacity 0.2s",
        opacity: 0.92,
      }}
    >
      <FaArrowUp />
    </button>
  );
}