import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Footer({ isMobile }) {
  // Scroll suave para links internos do footer
  useEffect(() => {
    function handleSmoothScroll(e) {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href") &&
        e.target.getAttribute("href").startsWith("#")
      ) {
        const href = e.target.getAttribute("href");
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
    const footer = document.querySelector("footer");
    if (footer) {
      footer.addEventListener("click", handleSmoothScroll);
    }
    return () => {
      if (footer) {
        footer.removeEventListener("click", handleSmoothScroll);
      }
    };
  }, []);

  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
        color: "#fff",
        padding: isMobile ? "2rem 0.5rem 1rem 0.5rem" : "3rem 1rem 1.5rem 1rem",
        marginTop: "2rem",
        fontSize: 16,
        boxShadow: "0 -2px 16px rgba(0,0,0,0.18)",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 28 : 40,
          rowGap: isMobile ? 32 : 48,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* Coluna 1 */}
        <div style={{ minWidth: 240, flex: 1 }}>
          <strong
            style={{ fontSize: 22, letterSpacing: 1.5, color: "#25d366" }}
          >
            DAS Auto Solutions
          </strong>
          <p
            style={{
              margin: "18px 0 0 0",
              lineHeight: 1.7,
              color: "#ccc",
              fontSize: 15,
            }}
          >
            Rua Exemplo, 123
            <br />
            Bairro, Cidade - UF
            <br />
            CEP 00000-000
          </p>
          <p style={{ margin: "18px 0 0 0", color: "#ccc", fontSize: 15 }}>
            <span role="img" aria-label="Telefone">
              📞
            </span>{" "}
            (11) 99999-9999
          </p>
          <p style={{ margin: "18px 0 0 0", color: "#ccc", fontSize: 15 }}>
            <span role="img" aria-label="E-mail">
              ✉️
            </span>{" "}
            contato@dasautosolutions.com
          </p>
        </div>
        {/* Coluna 2 */}
        <div style={{ minWidth: 180, flex: 1 }}>
          <strong style={{ fontSize: 18, color: "#25d366" }}>
            Horário de Funcionamento
          </strong>
          <p style={{ margin: "18px 0 0 0", color: "#ccc", fontSize: 15 }}>
            Seg a Sex: 8h às 18h
            <br />
            Sábado: 8h às 13h
            <br />
            Domingo: Fechado
          </p>
        </div>
        {/* Coluna 3 */}
        <div style={{ minWidth: 180, flex: 1 }}>
          <strong style={{ fontSize: 18, color: "#25d366" }}>
            Redes Sociais
          </strong>
          <div
            style={{
              marginTop: 18,
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
              alignItems: "center",
            }}
          >
            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                background: "linear-gradient(135deg, #1877f3 60%, #fff 100%)",
                borderRadius: "50%",
                padding: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(24,119,243,0.18)",
                border: "none",
                transition:
                  "transform 0.18s, box-shadow 0.18s, background 0.18s",
                outline: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.22)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(24,119,243,0.28)";
                e.currentTarget.style.background = "#1877f3";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(24,119,243,0.18)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #1877f3 60%, #fff 100%)";
              }}
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 0 4px #25d36680, 0 4px 16px rgba(24,119,243,0.18)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(24,119,243,0.18)")
              }
              tabIndex={0}
            >
              <FaFacebook color="#fff" size={28} />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                background:
                  "radial-gradient(circle at 30% 110%, #fdc468 0%, #df4996 100%)",
                borderRadius: "50%",
                padding: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(223,73,150,0.18)",
                border: "none",
                transition:
                  "transform 0.18s, box-shadow 0.18s, background 0.18s",
                outline: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.22)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(223,73,150,0.28)";
                e.currentTarget.style.background = "#df4996";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(223,73,150,0.18)";
                e.currentTarget.style.background =
                  "radial-gradient(circle at 30% 110%, #fdc468 0%, #df4996 100%)";
              }}
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 0 4px #25d36680, 0 4px 16px rgba(223,73,150,0.18)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(223,73,150,0.18)")
              }
              tabIndex={0}
            >
              <FaInstagram color="#fff" size={28} />
            </a>
            {/* Telegram */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              style={{
                background: "linear-gradient(135deg, #229ED9 60%, #fff 100%)",
                borderRadius: "50%",
                padding: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(34,158,217,0.18)",
                border: "none",
                transition:
                  "transform 0.18s, box-shadow 0.18s, background 0.18s",
                outline: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.22)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(34,158,217,0.28)";
                e.currentTarget.style.background = "#229ED9";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(34,158,217,0.18)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #229ED9 60%, #fff 100%)";
              }}
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 0 4px #25d36680, 0 4px 16px rgba(34,158,217,0.18)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(34,158,217,0.18)")
              }
              tabIndex={0}
            >
              <FaTelegramPlane color="#fff" size={28} />
            </a>
            {/* X (Twitter) */}
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              style={{
                background: "linear-gradient(135deg, #000 60%, #fff 100%)",
                borderRadius: "50%",
                padding: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                border: "none",
                transition:
                  "transform 0.18s, box-shadow 0.18s, background 0.18s",
                outline: "none",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.22)";
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.28)";
                e.currentTarget.style.background = "#000";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #000 60%, #fff 100%)";
              }}
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 0 4px #25d36680, 0 4px 16px rgba(0,0,0,0.18)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(0,0,0,0.18)")
              }
              tabIndex={0}
            >
              <SiX color="#fff" size={28} />
            </a>
          </div>
          <p style={{ marginTop: 18, color: "#bbb", fontSize: 13 }}>
            Siga-nos nas redes sociais para novidades e promoções!
          </p>
        </div>
        {/* Links rápidos do rodapé */}
        <div
          style={{
            minWidth: 180,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // centraliza horizontalmente
            textAlign: "center", // centraliza o texto
          }}
        >
          <strong style={{ fontSize: 18, color: "#25d366" }}>
            Links Rápidos
          </strong>
          <nav aria-label="Links rápidos">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "18px 0 0 0",
                lineHeight: 2,
              }}
            >
              <li>
                <a
                  href="#sobre"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#25d366")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#25d366")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#25d366")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#25d366")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#25d366")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#localizacao"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#25d366")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                >
                  Localização
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 38,
          fontSize: 14,
          opacity: 0.8,
          borderTop: "1px solid #444",
          paddingTop: 18,
          letterSpacing: 0.5,
        }}
      >
        <p>
          © {new Date().getFullYear()} DAS Auto Solutions. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
