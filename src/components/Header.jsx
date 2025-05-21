import React, { useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll suave e destaque do link ativo
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setActive("");
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header-sticky">
      <div className="header-container">
        <div className="logo">
          <span
            role="img"
            aria-label="Engrenagem"
            className="gear-spin"
            style={{ marginRight: 8, fontSize: 28 }}
          >
            ⚙️
          </span>
          <span>DAS Auto Solutions</span>
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "active" : ""}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
