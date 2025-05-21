import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import Galeria from "./components/Galeria";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import Localizacao from "./components/Localizacao";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Galeria />
        <Depoimentos />
        <Contato />
        <Localizacao />
        <darkMode />
        <setDarkMode />
      </main>
      <WhatsAppButton />
      <footer
        style={{ textAlign: "center", padding: "1rem", background: "#f2f2f2" }}
      >
        <p>© 2025 DAS Auto Solutions. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;
