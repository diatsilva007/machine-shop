import React from "react";

const Servicos = () => (
  <section id="servicos" style={{ padding: "60px 0", background: "#f7f7f7" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <h2>Nossos Serviços</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "2rem 0 0 0",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <li>Usinagem CNC</li>
        <li>Fresamento</li>
        <li>Torneamento</li>
        <li>Soldagem</li>
        <li>Projetos sob medida</li>
      </ul>
    </div>
  </section>
);

export default Servicos;
