import React, { useState } from "react";

const initialState = { nome: "", email: "", mensagem: "" };
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvkbnkd"; // coloque aqui o seu endpoint: Ex: "https://formspree.io/f/xxxxxxxx"

function Contato() {
  const [form, setForm] = useState(initialState);
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState("");
  const [erro, setErro] = useState("");

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErro("");
    setSucesso("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Validação simples
    if (!form.nome || !form.email || !form.mensagem) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (!validarEmail(form.email)) {
      setErro("Digite um e-mail válido.");
      return;
    }
    setEnviando(true);
    setErro("");
    setSucesso("");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          mensagem: form.mensagem,
        }),
      });
      if (response.ok) {
        setSucesso("Mensagem enviada com sucesso! Retornaremos em breve.");
        setForm(initialState);
      } else {
        setErro("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch {
      setErro("Ocorreu um erro ao enviar. Tente novamente.");
    }
    setEnviando(false);
  }

  return (
    <section id="contato" style={{ padding: "60px 0", background: "#f7f7f7" }}>
      <div
        style={{
          maxWidth: 500,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 2px 16px #0001",
          padding: 32,
        }}
      >
        <h2>Contato</h2>
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <div style={{ marginBottom: 18 }}>
            <label
              htmlFor="nome"
              style={{ display: "block", marginBottom: 6, fontWeight: 500 }}
            >
              Nome*
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border:
                  erro && !form.nome ? "1.5px solid #e74c3c" : "1px solid #ccc",
                outline: "none",
                fontSize: 15,
                boxSizing: "border-box",
                transition: "border 0.2s",
              }}
              disabled={enviando}
              required
              autoComplete="name"
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: 6, fontWeight: 500 }}
            >
              E-mail*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border:
                  erro && (!form.email || !validarEmail(form.email))
                    ? "1.5px solid #e74c3c"
                    : "1px solid #ccc",
                outline: "none",
                fontSize: 15,
                boxSizing: "border-box",
                transition: "border 0.2s",
              }}
              disabled={enviando}
              required
              autoComplete="email"
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label
              htmlFor="mensagem"
              style={{ display: "block", marginBottom: 6, fontWeight: 500 }}
            >
              Mensagem*
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 8,
                border:
                  erro && !form.mensagem
                    ? "1.5px solid #e74c3c"
                    : "1px solid #ccc",
                minHeight: 90,
                outline: "none",
                fontSize: 15,
                boxSizing: "border-box",
                transition: "border 0.2s",
                resize: "vertical",
              }}
              disabled={enviando}
              required
              autoComplete="off"
            />
          </div>
          {erro && (
            <div
              role="status"
              aria-live="polite"
              style={{
                color: "#e74c3c",
                marginBottom: 12,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 18 }}>❌</span>
              {erro}
            </div>
          )}
          {sucesso && (
            <div
              role="status"
              aria-live="polite"
              style={{
                color: "#25d366",
                marginBottom: 12,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ fontSize: 18 }}>✅</span>
              {sucesso}
            </div>
          )}
          <button
            type="submit"
            disabled={enviando}
            style={{
              background: "linear-gradient(90deg, #25d366 0%, #128c7e 100%)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "12px 32px",
              fontSize: 16,
              fontWeight: 600,
              cursor: enviando ? "not-allowed" : "pointer",
              opacity: enviando ? 0.7 : 1,
              transition: "opacity 0.2s, box-shadow 0.2s",
              boxShadow: "0 2px 8px #25d36633",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {enviando ? (
              <>
                <span
                  style={{
                    width: 18,
                    height: 18,
                    border: "2.5px solid #fff",
                    borderTop: "2.5px solid #128c7e",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 1s linear infinite",
                  }}
                ></span>
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </form>
      </div>
      {/* Loader animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </section>
  );
}

export default Contato;
