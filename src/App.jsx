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

/**
 * Hook customizado para animar seções quando elas entram na viewport.
 * Utiliza a IntersectionObserver API para melhor performance e configurabilidade.
 *
 * @param {object} options - Opções de configuração para o IntersectionObserver.
 * @param {number} [options.threshold=0.01] - Porcentagem da visibilidade do alvo (0.0 a 1.0)
 * para disparar o callback. 0.01 significa que assim que 1% do elemento estiver visível
 * (considerando o rootMargin), a animação é acionada.
 * @param {string} [options.rootMargin="0px 0px -80px 0px"] - Margem ao redor do root (viewport).
 * "0px 0px -80px 0px" faz com que a animação seja acionada quando o topo do elemento
 * está a 80px de alcançar a borda inferior da viewport, replicando o comportamento anterior.
 * @param {boolean} [options.triggerOnce=false] - Se true, a animação ocorre apenas uma vez.
 * @param {string} [options.visibleClassName="visible"] - Classe CSS a ser adicionada.
 * @returns {React.RefObject} - Ref a ser anexada ao elemento DOM.
 */
function useSectionAnimation(options = {}) {
  const ref = useRef(null);
  const {
    threshold = 0.01,
    rootMargin = "0px 0px -80px 0px", // Simula o "80px da parte inferior da tela"
    triggerOnce = false,
    visibleClassName = "visible",
  } = options;

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentElement.classList.add(visibleClassName);
            if (triggerOnce) {
              observer.unobserve(currentElement); // Para de observar se for para animar apenas uma vez
            }
          } else {
            // Só remove a classe se não for para animar apenas uma vez
            if (!triggerOnce) {
              currentElement.classList.remove(visibleClassName);
            }
          }
        });
      },
      {
        root: null, // Observa em relação à viewport
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      // observer.disconnect(); // Descomente se um único observer for usado para múltiplos elementos e o hook for desmontado
    };
  }, [ref, threshold, rootMargin, triggerOnce, visibleClassName]);

  return ref;
}

function App() {
  const isMobile = useIsMobile();

  // Refs para cada seção
  const heroRef = useSectionAnimation({
    triggerOnce: true,
    rootMargin: "0px 0px -150px 0px",
  }); // Exemplo: Hero anima uma vez e um pouco mais cedo
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
        <div id="home" ref={heroRef} className="section-fade-up">
          <Hero />
        </div>
        <div id="sobre" ref={sobreRef} className="section-fade-left">
          <Sobre />
        </div>
        <div id="servicos" ref={servicosRef} className="section-fade-right">
          <Servicos />
        </div>
        <div
          id="diferenciais"
          ref={diferenciaisRef}
          className="section-zoom-in"
        >
          <Diferenciais />
        </div>
        <div id="galeria" ref={galeriaRef} className="section-fade-up">
          <Galeria />
        </div>
        <div
          id="depoimentos"
          ref={depoimentosRef}
          className="section-fade-left"
        >
          <Depoimentos />
        </div>
        <div id="contato" ref={contatoRef} className="section-fade-right">
          <Contato />
        </div>
        <div id="localizacao" ref={localizacaoRef} className="section-zoom-in">
          <Localizacao />
        </div>
      </main>
      <WhatsAppButton />
      <div ref={footerRef} className="footer-fade-up">
        <Footer isMobile={isMobile} />
      </div>
    </>
  );
}

export default App;
