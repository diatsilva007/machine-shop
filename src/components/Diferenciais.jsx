import React from "react";

const Diferenciais = () => (
  <section id="diferenciais" style={{ padding: "60px 0", background: "#fff" }}>
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <h2>Nossos Diferenciais</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <div>
          <h4>Qualidade Garantida</h4>
          <p>Peças com precisão e acabamento impecável.</p>
        </div>
        <div>
          <h4>Atendimento Personalizado</h4>
          <p>Equipe pronta para entender e atender sua necessidade.</p>
        </div>
        <div>
          <h4>Prazos Cumpridos</h4>
          <p>Compromisso com a entrega no tempo combinado.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Diferenciais;
