import React from "react";

const Header = () => (
  <header
    style={{
      background: "#222",
      color: "#fff",
      padding: "1rem 2rem",
      textAlign: "center",
    }}
  >
    {" "}
    <h1>Oficina Mecânica Andrade</h1>{" "}
    <nav>
      {" "}
      <a href="#sobre" style={{ margin: "0 1rem", color: "#fff" }}>
        Sobre
      </a>{" "}
      <a href="#servicos" style={{ margin: "0 1rem", color: "#fff" }}>
        Serviços
      </a>{" "}
      <a href="#contato" style={{ margin: "0 1rem", color: "#fff" }}>
        Contato
      </a>{" "}
    </nav>{" "}
  </header>
);
export default Header;
// Compare this snippet from src/components/Sobre.jsx:
