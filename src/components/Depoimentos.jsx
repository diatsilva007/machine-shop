import React from "react";

const Depoimentos = () => (
  <section id="depoimentos" style={{ padding: "60px 0", background: "#fff" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <h2>O que dizem nossos clientes</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <blockquote
          style={{
            maxWidth: 300,
            fontStyle: "italic",
            background: "#f7f7f7",
            borderRadius: 8,
            padding: "1.5rem",
          }}
        >
          "Serviço excelente, entrega rápida e atendimento diferenciado!"
          <br />
          <strong>- João S.</strong>
        </blockquote>
        <blockquote
          style={{
            maxWidth: 300,
            fontStyle: "italic",
            background: "#f7f7f7",
            borderRadius: 8,
            padding: "1.5rem",
          }}
        >
          "Recomendo! Qualidade e precisão nas peças."
          <br />
          <strong>- Maria F.</strong>
        </blockquote>
      </div>
    </div>
  </section>
);

export default Depoimentos;
