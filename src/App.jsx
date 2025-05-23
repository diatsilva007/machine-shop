import React, { useRef, useEffect } from "react";
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

function useSectionAnimation() {
  const ref = useRef();
  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        ref.current.classList.add("visible");
      }
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

function App() {
  const isMobile = useIsMobile();

  // Refs para cada seção
  const heroRef = useSectionAnimation();
  const sobreRef = useSectionAnimation();
  const servicosRef = useSectionAnimation();
  const diferenciaisRef = useSectionAnimation();
  const galeriaRef = useSectionAnimation();
  const depoimentosRef = useSectionAnimation();
  const contatoRef = useSectionAnimation();
  const localizacaoRef = useSectionAnimation();
  const footerRef = useSectionAnimation();

  return (
    <>
      <Header />
      <main>
        <div id="home" ref={heroRef} className="section-fade-up"><Hero /></div>
        <div id="sobre" ref={sobreRef} className="section-fade-left"><Sobre /></div>
        <div id="servicos" ref={servicosRef} className="section-fade-right"><Servicos /></div>
        <div id="diferenciais" ref={diferenciaisRef} className="section-zoom-in"><Diferenciais /></div>
        <div id="galeria" ref={galeriaRef} className="section-fade-up"><Galeria /></div>
        <div id="depoimentos" ref={depoimentosRef} className="section-fade-left"><Depoimentos /></div>
        <div id="contato" ref={contatoRef} className="section-fade-right"><Contato /></div>
        <div id="localizacao" ref={localizacaoRef} className="section-zoom-in"><Localizacao /></div>
      </main>
      <WhatsAppButton />
      <div ref={footerRef} className="footer-fade-up">
        <Footer isMobile={isMobile} />
      </div>
    </>
  );
}

export default App;
