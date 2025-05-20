import React from "react";

const Hero = () => (
  <section
    style={{
      background: "linear-gradient(90deg, #128C7E 60%, #25D366 100%)",
      color: "#fff",
      padding: "80px 0 60px 0",
      textAlign: "center",
    }}
  >
    <h1 style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>
      Soluções em Usinagem de Precisão
    </h1>
    <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
      Qualidade, inovação e compromisso para o seu projeto.
    </p>
    <a
      href="#contato"
      style={{
        background: "#fff",
        color: "#128C7E",
        padding: "14px 36px",
        borderRadius: "30px",
        fontWeight: 700,
        fontSize: "1.1rem",
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = "#25D366";
        e.currentTarget.style.color = "#fff";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "#128C7E";
      }}
    >
      Solicite um orçamento
    </a>
  </section>
);

export default Hero;
