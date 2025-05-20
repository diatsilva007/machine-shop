import React from "react";

const Contato = () => (
  <section id="contato" style={{ padding: "60px 0", background: "#fff" }}>
    <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
      <h2>Contato</h2>
      <form
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Seu nome"
          required
          style={{ padding: "12px", borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          required
          style={{ padding: "12px", borderRadius: 6, border: "1px solid #ccc" }}
        />
        <textarea
          placeholder="Sua mensagem..."
          required
          rows={4}
          style={{ padding: "12px", borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{
            background: "#25D366",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "12px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  </section>
);

export default Contato;
