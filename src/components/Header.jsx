import React, { useState, useRef, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.classList.contains("hamburger") &&
        !event.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  // Scroll suave e destaque do link ativo
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    setActive("");
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
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
        <nav ref={navRef} className={`nav ${menuOpen ? "open" : ""}`}>
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
