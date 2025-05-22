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
import Footer from "./components/Footer";

function useIsMobile(breakpoint = 700) {
  const [isMobile, setIsMobile] = React.useState(
    window.innerWidth < breakpoint
  );
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

function App() {
  const isMobile = useIsMobile();

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
      </main>
      <WhatsAppButton />
      <Footer isMobile={isMobile} />
    </>
  );
}

export default App;
