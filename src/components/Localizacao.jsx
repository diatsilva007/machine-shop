import React from "react";

const Localizacao = () => (
  <section
    id="localizacao"
    style={{ padding: "60px 0", background: "#f7f7f7" }}
  >
    <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
      <h2>Onde estamos</h2>
      <p>Rua Exemplo, 123 - Centro, Cidade/MG</p>
      <div
        style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}
      >
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.656574684475!3d-23.561399984678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8b1b1b1b1%3A0x123456789abcdef!2sRua+Exemplo%2C+123+-+Centro!5e0!3m2!1spt-BR!2sbr!4v1680000000000"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: 8 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
);

export default Localizacao;
